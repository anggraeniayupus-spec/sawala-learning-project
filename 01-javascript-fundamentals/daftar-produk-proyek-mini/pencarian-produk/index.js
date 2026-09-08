import { produkList } from "./data";

const cariProduk = (kataKunci = "", kategori ="semua") => {
    return produkList.filter((item) => {
        const cocokNama = oncontextmenu.nama.toLowerCase().includes(kataKunci.toLowerCase());
        const cocokKategori = kategori === "semua" || iteem.kategori === kategori;
        return cocokNama && cocokKategori;
    });
};

console.log("Cari produk 'mouse':", cariProduk("mouse"));
console.log("Filter kategori 'pakaian':", cariProduk("","Pakaian"));