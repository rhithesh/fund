import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { SessionStrategy } from "next-auth";
import prisma from "./prismaDb";
import type { Session } from "next-auth";

// Define the JWT token interface
interface JWTToken {
  accessToken?: string;
  sub?: string;
}

// Define the session interface
interface CustomSession extends Session {
  user: {
    id?: string;
    name?: string | null;
    email?: string | null;
  };
  accessToken?: string;
}

export const authOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Sign in with credentials",

      credentials: {
        email: { label: "Name", type: "text", placeholder: "name" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials);

        try {
          const user = await prisma.client.findUnique({
            where: {
              email: credentials.email as string,
              password: credentials.password as string,
            },
          });
          if (user) {
            return user;
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: 7 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token }: { token: JWTToken }) {
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: CustomSession;
      token: JWTToken;
    }) {
      // Fetch the user from the database
      const user = await prisma.user.findUnique({
        where: {
          id: token.sub ?? "", // Provide a default value if sub is undefined
        },
      });

      // Add the user and token information to the session
      session.user.id = token.sub ?? "";
      session.accessToken = token.accessToken;

      return { ...session, user };
    },
  },
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/signup",
  },
};
