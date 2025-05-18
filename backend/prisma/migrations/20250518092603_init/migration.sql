-- CreateEnum
CREATE TYPE "QCStatus" AS ENUM ('PENDING', 'PASS', 'FAIL');

-- CreateEnum
CREATE TYPE "SampleType" AS ENUM ('SYNTHETIC', 'PATIENT', 'QC_CTRL');

-- CreateEnum
CREATE TYPE "SterilityMethod" AS ENUM ('DIRECT_INOCULATION', 'MEMBRANE_FILTRATION');

-- CreateEnum
CREATE TYPE "SterilityMedia" AS ENUM ('FTM', 'SCDM');

-- CreateEnum
CREATE TYPE "SterilityOutcome" AS ENUM ('PASS', 'CONTAMINATED');

-- CreateTable
CREATE TABLE "Batch" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "status" "QCStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "summaryMarkdown" TEXT,
    "summarisedAt" TIMESTAMP(3),

    CONSTRAINT "Batch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DDPCRRun" (
    "id" TEXT NOT NULL,
    "batchId" TEXT NOT NULL,
    "sampleLabel" TEXT NOT NULL,
    "target" TEXT NOT NULL,
    "kit" TEXT NOT NULL,
    "sampleType" "SampleType" NOT NULL,
    "templateUsed" BOOLEAN NOT NULL,
    "enzymeAdded" BOOLEAN NOT NULL,
    "spikeIn" TEXT,
    "positives" INTEGER NOT NULL,
    "negatives" INTEGER NOT NULL,
    "totalDroplets" INTEGER NOT NULL,
    "copiesPerUl" DOUBLE PRECISION NOT NULL,
    "pass" BOOLEAN NOT NULL,
    "runAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DDPCRRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SterilityResult" (
    "id" TEXT NOT NULL,
    "batchId" TEXT NOT NULL,
    "method" "SterilityMethod" NOT NULL,
    "media" "SterilityMedia" NOT NULL,
    "incubationHours" INTEGER NOT NULL,
    "outcome" "SterilityOutcome" NOT NULL,
    "observedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SterilityResult_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DDPCRRun_batchId_key" ON "DDPCRRun"("batchId");

-- CreateIndex
CREATE UNIQUE INDEX "SterilityResult_batchId_key" ON "SterilityResult"("batchId");

-- AddForeignKey
ALTER TABLE "DDPCRRun" ADD CONSTRAINT "DDPCRRun_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "Batch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SterilityResult" ADD CONSTRAINT "SterilityResult_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "Batch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
