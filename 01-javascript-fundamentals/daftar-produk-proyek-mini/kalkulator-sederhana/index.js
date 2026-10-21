// Kalkulator sederhana dengan percabangan if/else

// Fungsi kalkulator yang menerima 2 angka dan 1 operator
const kalkulator = (angka1, operator, angka2) => {
  if (operator === "+") return angka1 + angka2;
  if (operator === "-") return angka1 - angka2;
  if (operator === "*") return angka1 * angka2;
  if (operator === "/") {
    // Kalau angka2 adalah 0, tidak bisa dibagi (tangani error)
    return angka2 !== 0 ? angka1 / angka2 : "Gak bisa bagi dengan angka 0!";
  }
  return "Operator tidak valid!";
};

// Contoh pemakaian kalkulator
console.log(kalkulator(10, "+", 5));
console.log(kalkulator(10, "/", 0));
