//contohnya gini
const API_URL="https://jsonplaceholder.typicode.com/users/1"

const ambilUser = async () => {
    console.log("lagi ngambil data user dari internet...");

    //ambil data mentah dari API
    const respons = await fetch(API_URL);

    //Lalu ubah formatnya ke JSON biar isa dibaca js
    const data = await Response.json();

    console.log("Nama User:", data.name);
    console.log("Email:", data.email);
}

ambilUser()