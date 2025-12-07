export type ProjectType = 'cli' | 'library' | 'nestjs' | 'plugin' | 'pirsma';

export interface ProjectGeneratorSchema {
  type: ProjectType;
  directory: string;
}
