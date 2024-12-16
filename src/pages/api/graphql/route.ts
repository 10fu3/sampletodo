
import { printSchema } from "graphql";
import { createYoga } from "graphql-yoga";
import { Context, prisma } from "../pothos/context";
import { schema } from "../pothos/schema";

const { handleRequest } = createYoga<{}, Context>({
  schema,
  fetchAPI: { Response },
  context: async ({ request: req }) => {
    const { cookieStore } = req;
    return { req, prisma, user, cookieStore };
  },
});

export { handleRequest as POST };