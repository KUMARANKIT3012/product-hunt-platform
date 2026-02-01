import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { db } from "./lib/db"
 
export const { auth, handlers, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (!account || !user.email) return false;

            // Check if a user with this email already exists
            const existingUser = await db.user.findFirst({
                where: { email: user.email },
                include: { accounts: true },
            });

            if (existingUser) {
                // Check if this provider is already linked
                const existingAccount = existingUser.accounts.find(
                    (a) => a.provider === account.provider
                );

                // If not, link the new provider to the existing user
                if (!existingAccount) {
                    await db.account.create({
                        data: {
                            userId: existingUser.id,
                            type: account.type,
                            provider: account.provider,
                            providerAccountId: account.providerAccountId,
                            access_token: account.access_token,
                            refresh_token: account.refresh_token,
                            expires_at: account.expires_at,
                        },
                    });
                }
            }

            return true;
        },
        session: ({ session, token }) => ({
            ...session,
            user: {
                ...session.user,
                id: token.sub,
            },
        }),
    },
})