import { Command } from 'commander';

export type ByeOptions = {
  ignore: boolean;
  // Add your options here
};

export function bye(options: ByeOptions) {
  // Add your code here
  if (options.ignore == true) {
    return;
  }
}

export function byeCommand(program: Command) {
  program
    .name(bye.name)
    .command(bye.name)
    .description('Add description for bye command')
    .option('-i, --ignore <boolean>', 'Ignore the command')
    .action(bye);
}
