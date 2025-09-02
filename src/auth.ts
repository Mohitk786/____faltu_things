import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "../lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";


export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials){
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findFirst({
          where: { email: credentials.email },
        });

        if (!user) throw new Error("User not found");

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password as string
        );
        if (!isValid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name ?? undefined,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        id: token.userId as string,
        userId: token.userId as string,
        name: token.name as string,
        email: session.user?.email,
        emailVerified: null,
      };
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});
