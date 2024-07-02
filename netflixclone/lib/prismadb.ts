import { PrismaClient } from '@prisma/client';

const client = (global as any).prismadb || new PrismaClient();
if (process.env.NODE_ENV === 'production') (global as any).prismadb = client;

export default client;
