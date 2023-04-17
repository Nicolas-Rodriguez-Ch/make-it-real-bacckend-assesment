/*
  Warnings:

  - You are about to drop the column `name` on the `fav` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "fav_name_key";

-- DropIndex
DROP INDEX "favList_user_id_key";

-- AlterTable
ALTER TABLE "fav" DROP COLUMN "name";
