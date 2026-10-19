import { isAdult } from "./isAdult.js";

// Тестовий юзер для QA-практики
const testUser = {
  email: "test.user@example.com",
  age: 15,
  country: "UA",
  hasSubscription: true,
};

console.log(isAdult(17)); // false
console.log(isAdult(18)); // true
console.log(isAdult(25)); // true

if (!isAdult(testUser.age)) {
  console.log("Показати age gate");
} else {
  console.log("Пропустити");
}

export default testUser;
