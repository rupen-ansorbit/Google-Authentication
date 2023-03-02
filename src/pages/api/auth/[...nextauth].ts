import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      /*account.provider
       account.id_token
       profile.email_verified
       profile.email
       profile.picture
       profile.given_name
       */
      // if (account?.provider === 'google') {
      //   return profile?.email_verified && user?.email.endsWith('@ansorbit.com');
      // }
      return true;
    },
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
});
