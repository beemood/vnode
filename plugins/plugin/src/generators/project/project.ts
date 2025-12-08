import {
  formatFiles,
  generateFiles,
  names,
  readJson,
  Tree,
  updateJson,
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

function workspacePackgeJson(tree: Tree) {
  return readJson<RequiredPackageOptions>(tree, 'package.json');
}

function projectEmail(email: string, shortProjectName: string) {
  const [first, second] = email.split('@');
  return `${first}+${shortProjectName}@${second}`;
}

function addReferenceToTsConfig(tree: Tree, directory: string) {
  updateJson(tree, 'tsconfig.json', (value) => {
    const projectRef = `./${directory}`;

    if (value.references) {
      if (
        value.references.find((e: { path?: string }) => e.path == projectRef)
      ) {
        return value;
      }
    }

    value.references.push({ path: projectRef });

    return value;
  });
}

function reqval<T>(value?: T | undefined): T {
  if (value == undefined) {
    throw new Error(`Value is required!`);
  }

  return value;
}

export async function projectGenerator(
  tree: Tree,
  options: ProjectGeneratorSchema
) {
  const directory = options.directory.split(/[/\\]/).join('/');
  const commonSourceDirectory = join(__dirname, 'common');
  const sourceDirectory = join(__dirname, options.type);
  const targetDirectory = directory;
  const packageJson = workspacePackgeJson(tree);
  const organizationName = reqval(packageJson.name.match(/@(.*)\//)?.[1]);
  const shortProjectName = reqval(directory.split('/').pop());

  const projectName = `@${organizationName}/${shortProjectName}`;
  const email = projectEmail(packageJson.author.email, shortProjectName);

  const generatorOptions = {
    ...names(shortProjectName),
    directory,
    projectName,
    shortProjectName,
    email,
    packageJson,
  };

  generateFiles(tree, commonSourceDirectory, targetDirectory, generatorOptions);
  generateFiles(tree, sourceDirectory, targetDirectory, generatorOptions);
  addReferenceToTsConfig(tree, directory);
  await formatFiles(tree);
}

export default projectGenerator;
