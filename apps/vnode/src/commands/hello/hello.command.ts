import { Command } from 'commander';

export const HELLO_COMMAND_NAME = 'hello';

export function helloCommand(program: Command) {
  return program
    .name(HELLO_COMMAND_NAME)
    .description('Say hello')
    .command(HELLO_COMMAND_NAME)
    .requiredOption('-f, --firstName <string>', 'What is your first name')
    .requiredOption('-l, --lastName <string>', 'What is your last name')
    .option('-a, --age <number>', 'What is your age')
    .action(({ firstName, lastName, age }) => {
      console.log(`Hello, ${firstName} ${lastName} (${age}) `);
    });
}
