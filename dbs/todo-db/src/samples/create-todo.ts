import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../prisma/client.js';
export function createTodo() {
  const adapter = new PrismaPg({ connectionString: '' });
  new PrismaClient({ adapter }).todo.create({
    data: { title: '', categoryId: 1 },
  });
}
