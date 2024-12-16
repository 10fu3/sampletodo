import path from "path";
import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import PrismaUtils from "@pothos/plugin-prisma-utils";
import PothosPrismaGeneratorPlugin from "pothos-prisma-generator";
import PothosSchemaExporter from "pothos-schema-exporter";
import ZodPlugin from '@pothos/plugin-zod';
import { Context, prisma } from "./context";
import ErrorsPlugin from "@pothos/plugin-errors"

/**
 * Create a new schema builder instance
 */
export const builder = new SchemaBuilder<{
  Context: Context;
  // PrismaTypes: PrismaTypes; //Not used because it is generated automatically
}>({
  plugins: [
    PrismaPlugin,
    PrismaUtils,
    PothosPrismaGeneratorPlugin,
    PothosSchemaExporter,
    ZodPlugin,
    ErrorsPlugin,
  ],
  prisma: {
    client: prisma,
  },
  pothosPrismaGenerator: {
    // Set the following permissions
    /// @pothos-generator any {authority:["ROLE"]}
    authority: () =>  [],
  },
  zod: {
    validationError: (zodError, args, context, info) => {
      // the default behavior is to just throw the zod error directly
      return zodError;
    },
  }
});