import { Command } from 'commander';
import { helloCommand } from './commands/hello.js';
import { byeCommand } from './commands/bye.js';

export function main(...commandBinders: ((program: Command) => void)[]) {
  const program = new Command('template-cli').version('0.0.1');

  for (const commandBinder of commandBinders) {
    commandBinder(program);
  }

  program.parse();
}

main(helloCommand, byeCommand);
