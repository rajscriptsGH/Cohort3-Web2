import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Login with Email",
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
        })
    ]
})

export { handler as GET, handler as POST }


