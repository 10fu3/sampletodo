/*
  Warnings:

  - Added the required column `email` to the `user_auth_emails` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user_auth_emails" (
    "user_id" BIGINT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "hashed_password" TEXT NOT NULL,
    CONSTRAINT "user_auth_emails_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_user_auth_emails" ("hashed_password", "user_id") SELECT "hashed_password", "user_id" FROM "user_auth_emails";
DROP TABLE "user_auth_emails";
ALTER TABLE "new_user_auth_emails" RENAME TO "user_auth_emails";
CREATE UNIQUE INDEX "user_auth_emails_email_key" ON "user_auth_emails"("email");
CREATE UNIQUE INDEX "user_auth_emails_hashed_password_key" ON "user_auth_emails"("hashed_password");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
