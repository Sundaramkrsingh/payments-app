/*
  Warnings:

  - You are about to drop the column `receiverId` on the `P2PTransfer` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `P2PTransfer` table. All the data in the column will be lost.
  - Added the required column `receiverPhone` to the `P2PTransfer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderPhone` to the `P2PTransfer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "P2PTransfer" DROP CONSTRAINT "P2PTransfer_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "P2PTransfer" DROP CONSTRAINT "P2PTransfer_senderId_fkey";

-- AlterTable
ALTER TABLE "P2PTransfer" DROP COLUMN "receiverId",
DROP COLUMN "senderId",
ADD COLUMN     "receiverPhone" TEXT NOT NULL,
ADD COLUMN     "senderPhone" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "P2PTransfer" ADD CONSTRAINT "P2PTransfer_senderPhone_fkey" FOREIGN KEY ("senderPhone") REFERENCES "User"("number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "P2PTransfer" ADD CONSTRAINT "P2PTransfer_receiverPhone_fkey" FOREIGN KEY ("receiverPhone") REFERENCES "User"("number") ON DELETE RESTRICT ON UPDATE CASCADE;
