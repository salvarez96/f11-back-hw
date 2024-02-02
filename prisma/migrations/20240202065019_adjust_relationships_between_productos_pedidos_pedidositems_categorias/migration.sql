/*
  Warnings:

  - Added the required column `pedidosId` to the `PedidosItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoriaId` to the `Productos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PedidosItems" ADD COLUMN     "pedidosId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Productos" ADD COLUMN     "categoriaId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidosItems" ADD CONSTRAINT "PedidosItems_pedidosId_fkey" FOREIGN KEY ("pedidosId") REFERENCES "Pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
