import { compare, hash } from './hash.js';
describe('hash', () => {
  it('should hash data', async () => {
    const hashed = await hash('some');
    expect(hashed).not.include('some');
    expect(await compare('some', hashed)).toEqual(true);
  });
});
