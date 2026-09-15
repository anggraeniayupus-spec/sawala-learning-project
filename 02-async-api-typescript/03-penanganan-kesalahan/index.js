const ambilDataAman = async () => {
    try{
        //URL nya sengaja disalahan untuk ngetes error
        const response = await fetch("https://jsonplaceholder.typicode.com/salah-url");

        //Fetc tidak otomatis melempar error untuk status 400-500,
        //jadi kita lempar (throw) error sendiri kalau responnya gagal (!response.ok)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data berhasil diambil:", data);
    }
    catch (error) {
        //semua error (entah si jaringannya putus atau karena throw error di atas) masuk ke sini
        console.log("terjadi kesalahan saat mengambil data",error.message);
    }
    finally {
        //opsional: kode dibawah sini bakalan selalu jalan, entah berhasil atau gagal.
        console.log("Proses request selesai.");
    }
};

ambilDataAman()