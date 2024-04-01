/*
  Warnings:

  - Added the required column `postContent` to the `blogs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postHTMLContent` to the `blogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blogs" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "postContent" JSONB NOT NULL,
ADD COLUMN     "postHTMLContent" TEXT NOT NULL;
