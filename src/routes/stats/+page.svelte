<script lang="ts">
  import { onDestroy } from 'svelte';

  let chartElement: HTMLElement;
  let chart: any;

  // Données passées en props
  let { data } = $props();

  $effect(async () => {
    if (typeof window !== 'undefined') {
      // Importation dynamique d'ApexCharts côté client uniquement
      const ApexCharts = (await import('apexcharts')).default;

      const stockData = data.stockData.map(item => {
        const totalStock = isNaN(item.totalStock) ? 0 : item.totalStock;
        console.log(`Agence: ${item.agence}, TotalStock: ${totalStock}`);
        return {
          agence: item.agence,
          totalStock,
        };
      });

      console.log('Stock Data:', stockData);

      const options = {
        chart: {
          type: 'bar',
        },
        series: [
          {
            name: 'Products',
            data: stockData.map(item => item.totalStock),
          },
        ],
        xaxis: {
          categories: stockData.map(item => item.agence),
        },
        title: {
          text: 'Total Stock by Agency',
          align: 'center',
        },
      };

      chart = new ApexCharts(chartElement, options);
      chart.render();
    }
  });

  onDestroy(() => {
    // Nettoyage lors de la destruction du composant
    if (chart) {
      chart.destroy();
      chart = undefined;  // Annuler la référence pour éviter les erreurs post-destruction
    }
  });
</script>

<div bind:this={chartElement}></div>
