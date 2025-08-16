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
                const user = {
                    id: "1",
                    name: "RK Razz",
                    email: "razz@example.com"
                }

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        }),
        GoogleProvider({
            clientId: "abc",
            clientSecret: "abc"
        }),
        GitHubProvider({
            clientId: "abc",
            clientSecret: "abc"
        })
    ]
})

export { handler as GET, handler as POST }


