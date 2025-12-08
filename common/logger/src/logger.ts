import { bold, cyan, green, magenta, red, yellow } from './colors.js';
import { Debug } from './debug.decorator.js';
import { getStackTrace } from './get-stack-trace.js';

export class Logger {
  constructor(
    protected readonly context: string,
    protected readonly contextWidth = 20
  ) {}

  protected ctx(subContext?: string) {
    const _subContext = subContext ? ` (${subContext})` : '';
    const _context = this.context || _subContext;
    const timestamp = new Date();
    const _finalContext = bold(
      `[ ${_context} ] ${timestamp.toLocaleTimeString()}`
    );
    return `${_finalContext}${_subContext}`.padEnd(this.contextWidth);
  }

  log(msg: string) {
    console.log(green(this.ctx()), msg, getStackTrace());
  }

  info(msg: string) {
    console.info(cyan(this.ctx()), msg, getStackTrace());
  }

  error(msg: string) {
    console.error(red(this.ctx()), msg, getStackTrace());
  }

  warn(msg: string) {
    console.warn(yellow(this.ctx()), msg, getStackTrace());
  }

  @Debug()
  debug(msg: string) {
    console.debug(magenta(this.ctx()), msg, getStackTrace(4));
  }
}
