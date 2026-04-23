const data = {
  labels: ["Candidato A", "Candidato B", "Candidato C"],
  datasets: [{
    label: "Porcentaje",
    data: [35, 40, 25],
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data: data
};

new Chart(document.getElementById('chart'), config);
