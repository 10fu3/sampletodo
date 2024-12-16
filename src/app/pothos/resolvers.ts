import { builder } from "./builder";
import { Context } from "./context";
import {z} from "zod";
// Example of how to add a custom auth query

builder.objectType(Error, {
  name: 'Error',
  fields: (t) => ({
    message: t.exposeString('message'),
  }),
});

builder.mutationType({
  fields: (t)=>{
    return {
      signUp: t.boolean({
        args: {
          email: t.arg.string(),
          password: t.arg.string(),
        },
        validate: {
          schema: z.object({
            email: z.string().email({message: "有効なメールアドレスを入力してください"}),
            password: z.string().min(8,"8文字以上入力してください")
          })
        },
        resolve: async (root, {email,password},ctx,_info) => {
          const user = await ctx.prisma.userAuthEmail.findUnique({
            where: {
              email: email ?? ""
            }
          })
          if (user){
            throw new Error("登録に失敗しました")
          }

          const createdUser = await ctx.prisma.user.create({
            select: {
              tokens: {
                take: 1
              }
            },
            data: {
              userAuthEmail: {
                create: {
                  email: email ?? "",
                  hashedPassword: password ?? ""
                }
              },
              tokens: {
                create: {
                  token: "",
                }
              }
            }
          })

          return true



        },
      })
    }
  }
},);