import z from 'zod';

describe('zod', () => {
  it('should work', () => {
    const result = z
      .object({
        name: z.string().slugify(),
      })
      .parse({ name: 'SOme name' });

    console.log(result);
  });
});
