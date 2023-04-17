-- CreateTable
CREATE TABLE "users" (
    "user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "fav" (
    "fav_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "favList_id" TEXT NOT NULL,

    CONSTRAINT "fav_pkey" PRIMARY KEY ("fav_id")
);

-- CreateTable
CREATE TABLE "favList" (
    "favList_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "favList_pkey" PRIMARY KEY ("favList_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "fav_name_key" ON "fav"("name");

-- CreateIndex
CREATE UNIQUE INDEX "fav_url_key" ON "fav"("url");

-- CreateIndex
CREATE UNIQUE INDEX "favList_name_key" ON "favList"("name");

-- CreateIndex
CREATE UNIQUE INDEX "favList_user_id_key" ON "favList"("user_id");

-- AddForeignKey
ALTER TABLE "fav" ADD CONSTRAINT "fav_favList_id_fkey" FOREIGN KEY ("favList_id") REFERENCES "favList"("favList_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favList" ADD CONSTRAINT "favList_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
