import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient } from '../prisma/client.js';

export function createTodo() {
  const adapter = new PrismaPg({ connectionString: '' });
  new PrismaClient({ adapter }).category.findMany({
    where: {
      // Own where
      parent: {},

      todos: { some: {}, every: {}, none: {} },
    },
  });
}
