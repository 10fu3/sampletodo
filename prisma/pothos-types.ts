/* eslint-disable */
import type { Prisma, User, Tag, Todo, TodoTag, UserAuthEmail, UserAuthToken } from "@prisma/client";
import type { PothosPrismaDatamodel } from "@pothos/plugin-prisma";
export default interface PrismaTypes {
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: "tokens" | "userAuthEmail" | "tag" | "todo";
        ListRelations: "tokens" | "tag" | "todo";
        Relations: {
            tokens: {
                Shape: UserAuthToken[];
                Name: "UserAuthToken";
                Nullable: false;
            };
            userAuthEmail: {
                Shape: UserAuthEmail | null;
                Name: "UserAuthEmail";
                Nullable: true;
            };
            tag: {
                Shape: Tag[];
                Name: "Tag";
                Nullable: false;
            };
            todo: {
                Shape: Todo[];
                Name: "Todo";
                Nullable: false;
            };
        };
    };
    Tag: {
        Name: "Tag";
        Shape: Tag;
        Include: Prisma.TagInclude;
        Select: Prisma.TagSelect;
        OrderBy: Prisma.TagOrderByWithRelationInput;
        WhereUnique: Prisma.TagWhereUniqueInput;
        Where: Prisma.TagWhereInput;
        Create: {};
        Update: {};
        RelationName: "user" | "todoTag";
        ListRelations: "todoTag";
        Relations: {
            user: {
                Shape: User | null;
                Name: "User";
                Nullable: true;
            };
            todoTag: {
                Shape: TodoTag[];
                Name: "TodoTag";
                Nullable: false;
            };
        };
    };
    Todo: {
        Name: "Todo";
        Shape: Todo;
        Include: Prisma.TodoInclude;
        Select: Prisma.TodoSelect;
        OrderBy: Prisma.TodoOrderByWithRelationInput;
        WhereUnique: Prisma.TodoWhereUniqueInput;
        Where: Prisma.TodoWhereInput;
        Create: {};
        Update: {};
        RelationName: "user" | "todoTag";
        ListRelations: "todoTag";
        Relations: {
            user: {
                Shape: User | null;
                Name: "User";
                Nullable: true;
            };
            todoTag: {
                Shape: TodoTag[];
                Name: "TodoTag";
                Nullable: false;
            };
        };
    };
    TodoTag: {
        Name: "TodoTag";
        Shape: TodoTag;
        Include: Prisma.TodoTagInclude;
        Select: Prisma.TodoTagSelect;
        OrderBy: Prisma.TodoTagOrderByWithRelationInput;
        WhereUnique: Prisma.TodoTagWhereUniqueInput;
        Where: Prisma.TodoTagWhereInput;
        Create: {};
        Update: {};
        RelationName: "todo" | "tag";
        ListRelations: never;
        Relations: {
            todo: {
                Shape: Todo;
                Name: "Todo";
                Nullable: false;
            };
            tag: {
                Shape: Tag;
                Name: "Tag";
                Nullable: false;
            };
        };
    };
    UserAuthEmail: {
        Name: "UserAuthEmail";
        Shape: UserAuthEmail;
        Include: Prisma.UserAuthEmailInclude;
        Select: Prisma.UserAuthEmailSelect;
        OrderBy: Prisma.UserAuthEmailOrderByWithRelationInput;
        WhereUnique: Prisma.UserAuthEmailWhereUniqueInput;
        Where: Prisma.UserAuthEmailWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
        };
    };
    UserAuthToken: {
        Name: "UserAuthToken";
        Shape: UserAuthToken;
        Include: Prisma.UserAuthTokenInclude;
        Select: Prisma.UserAuthTokenSelect;
        OrderBy: Prisma.UserAuthTokenOrderByWithRelationInput;
        WhereUnique: Prisma.UserAuthTokenWhereUniqueInput;
        Where: Prisma.UserAuthTokenWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
                Nullable: false;
            };
        };
    };
}
export function getDatamodel(): PothosPrismaDatamodel { return JSON.parse("{\"datamodel\":{\"models\":{\"User\":{\"fields\":[{\"type\":\"BigInt\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":true,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"UserAuthToken\",\"kind\":\"object\",\"name\":\"tokens\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"UserToUserAuthToken\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"UserAuthEmail\",\"kind\":\"object\",\"name\":\"userAuthEmail\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"UserToUserAuthEmail\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Tag\",\"kind\":\"object\",\"name\":\"tag\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"TagToUser\",\"relationFromFields\":[],\"isUpdatedAt\":false},{\"type\":\"Todo\",\"kind\":\"object\",\"name\":\"todo\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"TodoToUser\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"Tag\":{\"fields\":[{\"type\":\"BigInt\",\"kind\":\"scalar\",\"name\":\"tagId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":true,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"BigInt\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"TagToUser\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"name\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":true,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"DateTime\",\"kind\":\"scalar\",\"name\":\"createdAt\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"TodoTag\",\"kind\":\"object\",\"name\":\"todoTag\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"TagToTodoTag\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"Todo\":{\"fields\":[{\"type\":\"BigInt\",\"kind\":\"scalar\",\"name\":\"todoId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":true,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"BigInt\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":false,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"TodoToUser\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"content\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"TodoTag\",\"kind\":\"object\",\"name\":\"todoTag\",\"isRequired\":true,\"isList\":true,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"TodoToTodoTag\",\"relationFromFields\":[],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"TodoTag\":{\"fields\":[{\"type\":\"BigInt\",\"kind\":\"scalar\",\"name\":\"todoId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"BigInt\",\"kind\":\"scalar\",\"name\":\"tagId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"Todo\",\"kind\":\"object\",\"name\":\"todo\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"TodoToTodoTag\",\"relationFromFields\":[\"todoId\"],\"isUpdatedAt\":false},{\"type\":\"Tag\",\"kind\":\"object\",\"name\":\"tag\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"TagToTodoTag\",\"relationFromFields\":[\"tagId\"],\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"tagId\",\"todoId\"]},\"uniqueIndexes\":[]},\"UserAuthEmail\":{\"fields\":[{\"type\":\"BigInt\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"UserToUserAuthEmail\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"email\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":true,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"hashedPassword\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":true,\"isId\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]},\"UserAuthToken\":{\"fields\":[{\"type\":\"BigInt\",\"kind\":\"scalar\",\"name\":\"id\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":false,\"isId\":true,\"isUpdatedAt\":false},{\"type\":\"String\",\"kind\":\"scalar\",\"name\":\"token\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":true,\"isUnique\":true,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"BigInt\",\"kind\":\"scalar\",\"name\":\"userId\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"isUpdatedAt\":false},{\"type\":\"User\",\"kind\":\"object\",\"name\":\"user\",\"isRequired\":true,\"isList\":false,\"hasDefaultValue\":false,\"isUnique\":false,\"isId\":false,\"relationName\":\"UserToUserAuthToken\",\"relationFromFields\":[\"userId\"],\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueIndexes\":[]}}}}"); }