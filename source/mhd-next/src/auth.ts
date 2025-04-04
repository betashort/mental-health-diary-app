
import NextAuth from 'next-auth';
//import { prisma } from './libs/prisma';
//import { PrismaAdapter } from '@auth/prisma-adapter';
import authConfig from '../auth.config';

export const { auth, handlers, signIn, signOut } = NextAuth( {
    //adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt"},
    ...authConfig,
    }
);