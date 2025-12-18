import type { Message } from './string-template.js';

export type Version = `${number}.${number}.${number}`;

export const CommitTypes = {
  feat: 'feat',
  fix: 'fix',
  docs: 'docs',
  style: 'style',
  refactor: 'refactor',
  perf: 'perf',
  test: 'test',
  dev: 'dev',
  pub: 'pub',
};
export type CommitType = keyof typeof CommitTypes;

export type CommingClosing = `${'fix' | 'close'} #${number}`;

export type IssueIndex = `#${number}`;

export type CommitTypeWithIssueIndex = `${CommitType} ${IssueIndex}`;

export type CommitMessage = `${
  | CommitType
  | CommitTypeWithIssueIndex}: ${Message}`;
