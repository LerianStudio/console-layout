import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [
    // Mock provider for testing
    {
      id: "test",
      name: "Test Provider",
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
      },
      async authorize(credentials) {
        // Always return a test user for demo purposes
        return {
          id: "1",
          name: credentials?.username || "John Doe",
          email: "john@example.com",
        };
      },
    },
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        (session.user as any).id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    signOut: "/signout",
  },
});

export { handler as GET, handler as POST };
