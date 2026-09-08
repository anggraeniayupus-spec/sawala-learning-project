const kalkulator = (angka1, operator, angka2) => {
  if (operator === "+") return angka1 + angka2;
  if (operator === "-") return angka1 - angka2;
  if (operator === "*") return angka1 * angka2;
  if (operator === "/") {
    return angka2 !== 0 ? angka1 / angka2 : "Gak bisa bagi dengan angka 0!";
  }
  return "Operator tidak valid!";
};

console.log(kalkulator(10, "+", 5));
console.log(kalkulator(10, "/", 0));