import 'next-auth'
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      userId?: string;
      name?: string;
      isVerified?: boolean;
      email?: string;
    } & DefaultSession['user'];
  }

  interface User {
    _id?: string;
    name?: string;
    isVerified?: boolean;
    email?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    userId?: string;
    name?: string;
    isVerified?: boolean;
    email?: string;
  }
}
  