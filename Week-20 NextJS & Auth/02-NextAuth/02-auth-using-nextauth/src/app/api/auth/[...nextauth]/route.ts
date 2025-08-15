import { useSession, signIn, signOut } from "next-auth/react";
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ]
})

export { handler as GET, handler as POST }

session: { strategy: "jwt" }

callbacks: {
    async jwt({ token, account }) {
        if (account) {
            token.accessToken = account.access_token
        }
        return token
    }
}
