// Тестові дані: очікувана ціна тижневого плану по країнах
// Ціни умовні, для практики. Перед реальною перевіркою заміни їх на ціни з ТЗ.
const countries = [
  { name: "Ukraine", currency: "UAH", weeklyPrice: 199 },
  { name: "United States", currency: "USD", weeklyPrice: 6.99 },
  { name: "Germany", currency: "EUR", weeklyPrice: 5.99 },
  { name: "United Kingdom", currency: "GBP", weeklyPrice: 4.99 },
];

for (const country of countries) {
  console.log(`${country.name}: ${country.weeklyPrice} ${country.currency}`);
}

const eurCountries = countries.filter((country) => country.currency === "EUR");
console.log("Країни з EUR:", eurCountries);

const countryNames = countries.map((country) => country.name);
console.log("Назви країн:", countryNames);

export default countries;
