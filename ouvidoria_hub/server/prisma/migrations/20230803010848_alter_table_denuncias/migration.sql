/*
  Warnings:

  - Added the required column `empresa` to the `Denuncias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `Denuncias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `denuncias` ADD COLUMN `empresa` VARCHAR(191) NOT NULL,
    ADD COLUMN `endereco` VARCHAR(191) NOT NULL;
