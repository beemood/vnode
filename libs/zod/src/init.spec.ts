import { InvalidNameError } from '@vnode/errors';
import z from 'zod';
import './init.js';

z.json()
z.iso.date()
z.iso.datetime()
describe('init', () => {
  it('should initialize the VnodeError', () => {
    expect(new InvalidNameError().packageName).toEqual('@vnode/zod');
  });
});
