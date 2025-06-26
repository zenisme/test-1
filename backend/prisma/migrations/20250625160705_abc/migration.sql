/*
  Warnings:

  - You are about to drop the column `decisionDate` on the `LeaveApplication` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LeaveApplication" DROP COLUMN "decisionDate",
ALTER COLUMN "appliedDate" DROP NOT NULL;
