const api = axios.create({
  baseURL: "https://coinbase.com/api/v2/assets/prices",
});

const coins = ["bitcoin", "ethereum", "doge"];

function createChart(Chart, coinId, labels, data, symbol) {
  const chartSection = document.getElementById("chartSection");
  const canvas = document.createElement("canvas");
  canvas.id = coinId;
  chartSection.appendChild(canvas);

  new Chart (canvas, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: `${symbol}, price`,
          data: data,
          bordercolor: "blue",
          backgroundcolor: "rgba(54, 162, 235, 0.2)",
          borderwidth: 2,
          fill: true,
        },
      ],
    },
    options: { responsive: true },
  });

}

async function makeCharts() {
  const chartSection = document.getElementById("chartSection");
  chartSection.innerHTML = `<div class="loader"></div>`;


  const responses = await Promise.all(
    coins.map(async (coin) => {
      const response = await api.get(`/${coin}`);
      const prices = response.data.data.prices.hour.prices.slice(0, 24);

      const labels = prices.map(([_, timestamp]) =>
        new Date(timestamp * 1000).toLocaleTimeString()
    );

    const data = prices.map(([price]) => Number(price));
    return {coinId: coin, labels, data, symbol: response.data.data.base};

    })
  );

  chartSection.innerHTML = "";

  responses.forEach((res) => 
    createChart(Chart, res.coinId, res.labels, res.data, res.symbol)
  );
}

makeCharts();

setInterval(makeCharts, 10000);