//Intercafe itu kyk sebuah cetakan/template berbentuk data, contohnya:
interface User {
  id: number;
  nama: string;
  isAktif: boolean;
  hobi?: string; // tanda '?' artinya opsional (boleh ada atau tidak)
}

const userFakih: User = {
  id  : 1,
  nama: "Fakih",
  isAktif: true,
}

console.log("Uaer:",userFakih.nama);