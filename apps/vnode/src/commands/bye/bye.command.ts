import { Command } from 'commander';

export const BYE_COMMAND_NAME = 'bye';

export function byeCommand(program: Command) {
  return program
    .name(BYE_COMMAND_NAME)
    .description('Say bye')
    .command(BYE_COMMAND_NAME)
    .requiredOption('-f, --firstName <string>', 'What is your first name')
    .requiredOption('-l, --lastName <string>', 'What is your last name')
    .option('-a, --age <number>', 'What is your age')
    .action(({ firstName, lastName, age }) => {
      console.log(`Bye, ${firstName} ${lastName} (${age})`);
    });
}
