//contohnya gini
const API_URL="https://jsonplaceholder.typicode.com/users/1"

async function ambilUser() {
    console.log("lagi ngambil data user dari internet...");

    //ambil data mentah dari API
    const respons = await fetch(API_URL);

    //Lalu ubah formatnya ke JSON biar bisa dibaca sama js
    const data = await respons.json();

    console.log("Nama User:", data.name);
    console.log("Email:", data.email);
}

ambilUser()