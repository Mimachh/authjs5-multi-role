import NextAuth from "next-auth"
import authConfig from "@/next-auth-config/auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  update,
} = NextAuth({
  ...authConfig,
});
