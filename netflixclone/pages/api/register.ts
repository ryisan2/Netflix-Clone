import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prismadb';   // Import the Prisma client

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
   return res.status(405).end()
    } 
try {
const email = req.body.email;
const password = req.body.password;

const existingUser = await prisma.user.findUnique({
    where: {
        email
    },
});
    if (existingUser) {
        return res.status(422).json({ error: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            email,
            name,
            hashedPassword,
            image:"",
            emailVerified: new Date()
        }
    });
}catch (error) {
  console.error(error)
  return res.status(400).end();
}
}