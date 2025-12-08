import { Prisma } from '@prisma/client/extension';
import { Logger } from '@vnode/logger';

export function withLogger() {
  const logger = new Logger('Prisma');
  return Prisma.defineExtension((client) => {
    return client.$extends({
      name: 'Hash',
      query: {
        create({ args, query }) {
          logger.log(JSON.stringify(args));
          return query(args);
        },
      },
    });
  });
}
