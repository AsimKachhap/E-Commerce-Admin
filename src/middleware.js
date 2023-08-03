// Without a defined matcher, this one line apllies next-auth to the entire application.

export { default } from "next-auth/middleware";

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-applications/routing/middleware#matcher

export const config = { matcher: ["/cart"] };
