/*
  Warnings:

  - You are about to drop the `Bestsellers` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE "Bestsellers";

-- CreateTable
CREATE TABLE "Bestseller" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Bestseller_pkey" PRIMARY KEY ("id")
);
