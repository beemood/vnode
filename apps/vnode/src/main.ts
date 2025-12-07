import { Command } from 'commander';
import { helloCommand } from './commands/hello/hello.command';
import { byeCommand } from './commands/bye/bye.command';

const program = new Command();

helloCommand(program);
byeCommand(program);

program.name('vnode').parse();
