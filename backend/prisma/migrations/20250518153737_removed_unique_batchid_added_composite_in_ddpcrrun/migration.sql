/*
  Warnings:

  - A unique constraint covering the columns `[label]` on the table `Batch` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[batchId,sampleLabel,target]` on the table `DDPCRRun` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "DDPCRRun_batchId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Batch_label_key" ON "Batch"("label");

-- CreateIndex
CREATE UNIQUE INDEX "DDPCRRun_batchId_sampleLabel_target_key" ON "DDPCRRun"("batchId", "sampleLabel", "target");
