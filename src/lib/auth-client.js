import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://category-a8-mango-coral.vercel.app/"
})
export const { signIn, signUp, useSession } = createAuthClient()