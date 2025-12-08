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
    const _finalContext = `[ ${_context} ] ${timestamp.toLocaleTimeString()}`;
    return `${_finalContext}${_subContext}`.padEnd(this.contextWidth);
  }

  log(msg: string) {
    console.log(this.ctx(), msg, getStackTrace());
  }

  info(msg: string) {
    console.info(this.ctx(), msg, getStackTrace());
  }

  error(msg: string) {
    console.error(this.ctx(), msg, getStackTrace());
  }

  warn(msg: string) {
    console.warn(this.ctx(), msg, getStackTrace());
  }

  debug(msg: string) {
    console.debug(this.ctx(), msg, getStackTrace());
  }
}
