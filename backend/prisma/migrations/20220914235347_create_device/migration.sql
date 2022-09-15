-- CreateTable
CREATE TABLE "Device" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cpuName" TEXT NOT NULL,
    "cpuUsage" INTEGER NOT NULL,
    "cpuTemperature" INTEGER NOT NULL,
    "gpuName" TEXT NOT NULL,
    "gpuTemperature" INTEGER NOT NULL,
    "gpuUsage" INTEGER NOT NULL,
    "ram" INTEGER NOT NULL,
    "ramUsed" INTEGER NOT NULL,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
