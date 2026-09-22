function buatDkriuk (paket, jumlah) {
    return new Promise ((resolve, reject) => {
        console.log(`Pesanan paket ${paket} dengan ${jumlah} sedang di siapkan`);

        setTimeout(() => {
            const stokPaket = {
                'Dada Ayam': 0,
                'Paha Ayah': 1,
                'Dada Sapi': 2,
                'Paha Sapi': 3,
            }

            if (stokPaket[paket]) {
                resolve (`Pesanan ${paket} dengan ${jumlah} anda berhasil dibuat!!`);
            }else {
                reject (`Maaf ${paket} habis, silahkan pesan jenis  yang lain :>`);
            }
        },3000 );
    });
}

async function ambilPesanan() {
    try{
        const hasil = await buatDkriuk(" Dada Ayam", "2");
        console.log(hasil)
    }
    catch (error) {
        console.log(error)
    } 
    finally {
        console.log("Terimakasih Telah Memesan D'kriuk")
    }
    }

    ambilPesanan()