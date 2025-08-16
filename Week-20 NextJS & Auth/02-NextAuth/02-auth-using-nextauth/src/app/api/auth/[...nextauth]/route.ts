import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Razz" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const username = credentials?.username;
                const password = credentials?.password;

                console.log(username, password);

                const user = {
                    id: "1",
                    username: "rajscripts",
                    email: "razz@example.com"
                }

                if (user) {
                    return user
                } else {
                    return null
                }
            },
        }),


        GoogleProvider({
            clientId: "abc",
            clientSecret: "abc"
        }),
        GitHubProvider({
            clientId: "abc",
            clientSecret: "abc"
        })
    ],

    session: {
        strategy: "jwt",
    },

    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }


