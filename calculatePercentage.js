const data = [
  { name: "SP", value: 67836.43 },
  { name: "RJ", value: 36678.66 },
  { name: "MG", value: 29229.88 },
  { name: "RS", value: 27165.48 },
  { name: "Outros", value: 19849.53 },
];

const total = data.reduce((acc, { value }) => acc + value, 0);

const percetageData = data.map(({ name, value }) => {
  const perc = (value * 100) / total;

  return { name, value, perc };
});

for (const state of percetageData) {
  console.log(`${state.name} representa ${state.perc.toFixed(3)}% do total`);
}
