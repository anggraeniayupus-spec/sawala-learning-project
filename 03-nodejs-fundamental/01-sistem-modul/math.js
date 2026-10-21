// contoh fungsi matematika
function tambah(a, b) {
    return a + b;
}

function kurang(a, b) {
    return a - b;
}
// cara ekspornya di masukkan ke dalam objek
module.exports = {   // module.exports itu untuk membagikan fungsinya
    tambah: tambah,
    kurang: kurang
};