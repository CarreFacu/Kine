import NextAuth from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';
import { signOut } from 'next-auth/react';
let userData: any;
const handler = NextAuth({
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID as string,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
      tenantId: process.env.AZURE_AD_TENANT_ID as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
return true
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      if (userData) {
        token.name = `${userData.name} ${userData.lastName}`;
        token.accesses = userData.accesses;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          accesses: token.accesses,
        },
      };
    },
  },
  pages: {
    error: '/userNotFound',
  },
});

export { handler as GET, handler as POST };
