import { Command } from 'commander';

export type HelloOptions = {
  username: string;
};

export function hello(options: HelloOptions) {
  console.log(`Hello, ${options.username}`);
}

export function helloCommand(program: Command) {
  program
    .name(hello.name)
    .command(hello.name)
    .description('Say hello')
    .requiredOption('-u, --username <string>', 'Username')
    .action(hello);
}
