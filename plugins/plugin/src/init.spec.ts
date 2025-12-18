import { InvalidNameError } from '@vnode/errors';
import './init.js';

describe('init', () => {
  it('should initialize the VnodeError', () => {
    expect(new InvalidNameError().packageName).toEqual('@vnode/plugin');
  });
});
