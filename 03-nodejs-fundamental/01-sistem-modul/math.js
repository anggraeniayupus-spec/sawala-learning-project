//contoh fungsi matematika
function tambah(a, b) {
    return a + b;
}

function kurang(a, b) {
    return a - b;
}
//cara ekspornya di masukin ke dalam objek
module.exports = {   //module.exports itu untuk membagikkan fungsinya
    tambah: tambah,
    kurang: kurang
};