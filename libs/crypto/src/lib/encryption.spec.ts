import { Encryption } from './encryption.js';

describe('encryption', () => {
  const key = Encryption.generateKey();
  const version = '0.0.1';

  it('should work', async () => {
    const data = 'confidential-data';

    const encryptedData = await Encryption.encrypt(data, key, version);

    expect(encryptedData).not.contain(data);

    const decrypedData = await Encryption.decrypt(encryptedData, key);

    expect(decrypedData).toEqual(data);
  });
});
