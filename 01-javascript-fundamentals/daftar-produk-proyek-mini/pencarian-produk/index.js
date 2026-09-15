import { produkList } from "./data.js";

const cariProduk = (kataKunci = "", kategori ="semua") => {
    return produkList.filter((item) => {
        const cocokNama = item.nama.toLowerCase().includes(kataKunci.toLowerCase());
        const cocokKategori = kategori === "semua" || item.kategori === kategori;
        return cocokNama && cocokKategori;
    });
};

console.log("Cari produk 'mouse':", cariProduk("mouse"));
console.log("Filter kategori 'pakaian':", cariProduk("","Pakaian"));