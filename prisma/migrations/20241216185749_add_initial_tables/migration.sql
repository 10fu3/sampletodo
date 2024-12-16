-- CreateTable
CREATE TABLE "users" (
    "userId" BIGINT NOT NULL PRIMARY KEY,
    "id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "tags" (
    "tagId" BIGINT NOT NULL PRIMARY KEY,
    "id" TEXT NOT NULL,
    "userId" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "tags_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "todo" (
    "todoId" BIGINT NOT NULL PRIMARY KEY,
    "id" TEXT NOT NULL,
    "userId" BIGINT NOT NULL,
    "content" TEXT NOT NULL,
    CONSTRAINT "todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "todo_tags" (
    "todoId" BIGINT NOT NULL,
    "tagId" BIGINT NOT NULL,

    PRIMARY KEY ("tagId", "todoId"),
    CONSTRAINT "todo_tags_todoId_fkey" FOREIGN KEY ("todoId") REFERENCES "todo" ("todoId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "todo_tags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tags" ("tagId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user_auth_emails" (
    "user_id" BIGINT NOT NULL PRIMARY KEY,
    "hashed_password" TEXT NOT NULL,
    CONSTRAINT "user_auth_emails_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user_auth_tokens" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "token" TEXT NOT NULL,
    "userId" BIGINT NOT NULL,
    CONSTRAINT "user_auth_tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tags_id_key" ON "tags"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "todo_id_key" ON "todo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_auth_emails_hashed_password_key" ON "user_auth_emails"("hashed_password");

-- CreateIndex
CREATE UNIQUE INDEX "user_auth_tokens_token_key" ON "user_auth_tokens"("token");
