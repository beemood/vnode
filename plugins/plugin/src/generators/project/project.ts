import {
  formatFiles,
  generateFiles,
  names,
  readJsonFile,
  Tree,
} from '@nx/devkit';
import { join } from 'path';
import { ProjectGeneratorSchema } from './schema';

type RequiredPackageOptions = {
  name: string;
  author: {
    name: string;
    email: string;
    url: string;
  };
  version: string;
  license: string;
  homepage: string;
  funding: string[];
};

function getOrganizationNameFromPackageName(name: string) {
  const result = name.match(/@(.*)\//)?.[1];

  if (result == undefined) {
    throw new Error(
      `Could not extract the orgnanization name from the package name, ${name}`
    );
  }
  return result;
}

function getShortProjectNameFromDirectory(directory: string) {
  const shortProjectName = directory.split(/\\\//).pop();

  if (shortProjectName == undefined) {
    throw new Error(
      `Could not extract the short project name from ${directory}`
    );
  }

  return shortProjectName;
}

function workspacePackgeJson() {
  return readJsonFile<RequiredPackageOptions>('package.json');
}

function projectEmail(email: string, shortProjectName: string) {
  const [first, second] = email.split('@');
  return `${first}+${shortProjectName}@${second}`;
}

export async function projectGenerator(
  tree: Tree,
  options: ProjectGeneratorSchema
) {
  const commonSourceDirectory = join(__dirname, 'common');
  const sourceDirectory = join(__dirname, options.type);
  const targetDirectory = options.directory;
  const packageJson = workspacePackgeJson();
  const organizationName = getOrganizationNameFromPackageName(packageJson.name);
  const shortProjectName = getShortProjectNameFromDirectory(options.directory);
  const projectName = `@${organizationName}/${shortProjectName}`;

  const email = projectEmail(packageJson.author.email, shortProjectName);

  const generatorOptions = {
    ...names(shortProjectName),
    projectName,
    shortProjectName,
    email,
    packageJson,
  };

  generateFiles(tree, commonSourceDirectory, targetDirectory, generatorOptions);
  generateFiles(tree, sourceDirectory, targetDirectory, generatorOptions);
  await formatFiles(tree);
}

export default projectGenerator;
