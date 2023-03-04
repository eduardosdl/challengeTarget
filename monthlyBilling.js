const data = require("./dados.json");

let maxValue = { day: 0, value: 0 },
  minValue = { day: 0, value: 0 };

data.forEach(({ valor, dia }) => {
  if (valor >= maxValue.value) {
    maxValue.day = dia;
    maxValue.value = valor;
  }

  if (valor <= minValue.value) {
    minValue.day = dia;
    minValue.value = valor;
  }
});

const monthlyAvarage =
  data.reduce((acc, value) => acc + value.valor, 0) / data.length;
const daysAboveAvarage = data.filter(
  (element) => element.valor > monthlyAvarage
);

console.log(
  `O menor faturamento do mes foi no dia ${minValue.day} faturando ${minValue.value}`
);
console.log(
  `O maior faturmaneto do mes foi no dia ${maxValue.day} faturando ${maxValue.value}`
);
console.log(
  `Houveram ${daysAboveAvarage.length} dias com faturamento acima da media`
);
