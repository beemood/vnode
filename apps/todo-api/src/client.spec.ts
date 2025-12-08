import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@vnode/todo-db';

describe('Client', () => {
  const connectionString = '';
  const adapter = new PrismaPg({ connectionString });
  const client = new PrismaClient({ adapter });

  it('should work', () => {
    expect(client).toBeDefined();
  });
});
