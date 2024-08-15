import { prisma } from '$lib/server';

export const load = async () => {
  // Récupérer les données des agences avec le stock total
  const agenciesWithStock = await prisma.agence.findMany({
    select: {
      street: true,
      city: true,
      products: {
        select: {
          stock: true,
        },
      },
    },
  });

  // Calculer le stock total par agence
  const stockData = agenciesWithStock.map((agence) => {
    return {
      agence: `${agence.street}, ${agence.city}`,
      totalStock: agence.products.reduce((acc, product) => acc + product.stock, 0),
    };
  });

  console.log(stockData);
  
  return {
    stockData,
  };
};
