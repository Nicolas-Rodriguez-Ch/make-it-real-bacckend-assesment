-- DropForeignKey
ALTER TABLE "fav" DROP CONSTRAINT "fav_favList_id_fkey";

-- AddForeignKey
ALTER TABLE "fav" ADD CONSTRAINT "fav_favList_id_fkey" FOREIGN KEY ("favList_id") REFERENCES "favList"("favList_id") ON DELETE CASCADE ON UPDATE CASCADE;
