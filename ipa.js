//code soalnya panjang, jadi skip ke paling bawah untuk code lainnya

const questions = [
  {
    question: "Matahari akan sering terlihat pada musim ...",
    answers: [
      { text: "A. Hujan", correct: false },
      { text: "B. Dingin", correct: false },
      { text: "C. Kemarau", correct: true },
      { text: "D. Salju", correct: false },
    ],
  },
  {
    question:
      "Kulit yang terkena panas matahari secara terus menerus bisa berwarna semakin ...",
    answers: [
      { text: "A. Memutih", correct: false },
      { text: "B. Menghitam", correct: true },
      { text: "C. Membiru", correct: false },
      { text: "D. Mengkilau", correct: false },
    ],
  },
  {
    question: "Topi dapat melindung ... dari panas sinar matahari.",
    answers: [
      { text: "A. Kaki", correct: false },
      { text: "B. Kepala", correct: true },
      { text: "C. Hidung", correct: false },
      { text: "D. Tangan", correct: false },
    ],
  },
  {
    question:
      "Melihat sinar matahari secara langsung dapat membuat mata menjadi ...",
    answers: [
      { text: "A. Silau", correct: true },
      { text: "B. Bening", correct: false },
      { text: "C. Putih", correct: false },
      { text: "D. Hitam", correct: false },
    ],
  },
  {
    question:
      "Untuk melindungi mata kita dari sinar matahari yang terang, maka kita bisa memakai ...",
    answers: [
      { text: "A. Helm", correct: false },
      { text: "B. Kacamata Hitam", correct: true },
      { text: "C. Topi", correct: false },
      { text: "D. Sepatu", correct: false },
    ],
  },
  {
    question: "Televisi dapat mengeluarkan energi bunyi dan ...",
    answers: [
      { text: "A. Gerak", correct: false },
      { text: "B. Cahaya", correct: true },
      { text: "C. Listrik", correct: false },
      { text: "D. Getar", correct: false },
    ],
  },
  {
    question: "Alat musik yang dimainkan dengan cara digesek adalah ...",
    answers: [
      { text: "A. Gendang", correct: false },
      { text: "B. Biola", correct: true },
      { text: "C. Gitar", correct: false },
      { text: "D. Drum", correct: false },
    ],
  },
  {
    question: "Menggunakan energi listrik harus secara ...",
    answers: [
      { text: "A. Cepat", correct: false },
      { text: "B. Terus menerus", correct: false },
      { text: "C. Hemat", correct: true },
      { text: "D. Boros", correct: false },
    ],
  },
  {
    question: "Lampu adalah benda yang dimanfaatkan untuk ...",
    answers: [
      { text: "A. Penerangan", correct: true },
      { text: "B. Pendinginan", correct: false },
      { text: "C. Pemanas", correct: false },
      { text: "D. Penggelap", correct: false },
    ],
  },
  {
    question: "Alat rumah tangga yang memanfaatkan energi gerak adalah ...",
    answers: [
      { text: "A. Lampu", correct: false },
      { text: "B. Kompor", correct: false },
      { text: "C. Kipas angin", correct: true },
      { text: "D. AC", correct: false },
    ],
  },
  {
    question: "Manusia supaya dapat terus bergerak membutuhkan ...",
    answers: [
      { text: "A. Pakaian", correct: false },
      { text: "B. Energi", correct: true },
      { text: "C. Pujian", correct: false },
      { text: "D. Hadiah", correct: false },
    ],
  },
  {
    question: "Kegiatan manusia yang membutuhkan banyak energi ...",
    answers: [
      { text: "A. Tidur", correct: false },
      { text: "B. Olahraga", correct: true },
      { text: "C. Nonton TV", correct: false },
      { text: "D. Main Game", correct: false },
    ],
  },
  {
    question: "Sumber energi bagi tubuh manusia dapat berasal dari ...",
    answers: [
      { text: "A. Rumah", correct: false },
      { text: "B. Makanan", correct: true },
      { text: "C. Pakaian", correct: false },
      { text: "D. Tubuh", correct: false },
    ],
  },
  {
    question: "Matahari mengeluarkan energi ...",
    answers: [
      { text: "A. Panas", correct: true },
      { text: "B. Cahaya", correct: false },
      { text: "C. Bunyi", correct: false },
      { text: "D. Dingin", correct: false },
    ],
  },
  {
    question: "Senter merupakan benda yang dapat menghasilkan energi ...",
    answers: [
      { text: "A. Bunyi", correct: false },
      { text: "B. Gerak", correct: false },
      { text: "C. Cahaya", correct: true },
      { text: "D. Alam", correct: false },
    ],
  },
  {
    question:
      "Benda berikut ini yang bukan merupakan sumber energi panas adalah ...",
    answers: [
      { text: "A. Matahari", correct: false },
      { text: "B. Kipas angin", correct: true },
      { text: "C. Obor", correct: false },
      { text: "D. Kompor", correct: false },
    ],
  },
  {
    question:
      "Kompor mengeluarkan energi panas yang digunakan untuk keperluan ...",
    answers: [
      { text: "A. Mencuci", correct: false },
      { text: "B. Memasak", correct: true },
      { text: "C. Menyetrika", correct: false },
      { text: "D. Menyapu", correct: false },
    ],
  },
  {
    question: "Setrika digunakan manusia untuk ...",
    answers: [
      { text: "A. Merapikan tanaman", correct: false },
      { text: "B. Merapikan alat tulis", correct: false },
      { text: "C. Merapikan baju", correct: true },
      { text: "D. Merapikan rumah", correct: false },
    ],
  },
  {
    question: "Lampu dapat menyala karena mendapatkan energi ...",
    answers: [
      { text: "A. Gerak", correct: false },
      { text: "B. Alam", correct: false },
      { text: "C. Listrik", correct: true },
      { text: "D. Bunyi", correct: false },
    ],
  },
  {
    question:
      "Benda berikut ini yang dapat mengeluarkan bunyi dengan merdu adalah ...",
    answers: [
      { text: "A. Seruling", correct: true },
      { text: "B. Pensil", correct: false },
      { text: "C. Buku", correct: false },
      { text: "D. Pena", correct: false },
    ],
  },
  {
    question: "Para petani menjemur padi memanfaatkan energi panas dari ...",
    answers: [
      { text: "A. Api", correct: false },
      { text: "B. Matahari", correct: true },
      { text: "C. Kompor", correct: false },
      { text: "D. Bumi", correct: false },
    ],
  },
  {
    question:
      "Jika rumah terlihat gelap maka energi yang dibutuhkan adalah energi ...",
    answers: [
      { text: "A. Bunyi", correct: false },
      { text: "B. Cahaya", correct: true },
      { text: "C. Panas", correct: false },
      { text: "D. Suara", correct: false },
    ],
  },
  {
    question: "Cara menghemat energi di antaranya yaitu ...",
    answers: [
      { text: "A. Menyalakan lampu yang putih saja", correct: false },
      { text: "B. Mematikan lampu jika tidak dibutuhkan", correct: true },
      { text: "C. Mematikan lampu pada malam hari", correct: false },
      { text: "D. Menyalakan lampu disemua ruangan", correct: false },
    ],
  },
  {
    question:
      "Pada malam hari salah satu sumber cahaya yang menerangi langit adalah ...",
    answers: [
      { text: "A. Bulan", correct: true },
      { text: "B. Senter", correct: false },
      { text: "C. Obor", correct: false },
      { text: "D. Lampion", correct: false },
    ],
  },
  {
    question: "Radio digunakan manusia untuk ...",
    answers: [
      { text: "A. Melihat film", correct: false },
      { text: "B. Menonton bola", correct: false },
      { text: "C. Mendengarkan berita", correct: true },
      { text: "D. Mendengarkan lagu", correct: false },
    ],
  },
  {
    question: "Energi panas dimanfaatkan ibu untuk ...",
    answers: [
      { text: "A. Mencuci", correct: false },
      { text: "B. Memasak", correct: true },
      { text: "C. Menjahit", correct: false },
      { text: "D. Merakit", correct: false },
    ],
  },
  {
    question: "Gendang dapat menghasilkan bunyi dengan merdu jika ...",
    answers: [
      { text: "A. Ditiup", correct: false },
      { text: "B. Dipukul", correct: true },
      { text: "C. Ditiup", correct: false },
      { text: "D. Digesek", correct: false },
    ],
  },
  {
    question: "Radio adalah alat yang dapat mengelurkan energi ...",
    answers: [
      { text: "A. Gerak", correct: false },
      { text: "B. Panas", correct: false },
      { text: "C. Bunyi", correct: true },
      { text: "D. Alam", correct: false },
    ],
  },
  {
    question: "Gitar dapa berbunyi dengan baik jika ...",
    answers: [
      { text: "A. Dipukul", correct: false },
      { text: "B. Ditiup", correct: false },
      { text: "C. Dipetik", correct: true },
      { text: "D. Diinjak", correct: false },
    ],
  },
  {
    question: "Alat berikut ini yang menghasilkan energi bunyi ...",
    answers: [
      { text: "A. Terompet", correct: true },
      { text: "B. Setrika", correct: false },
      { text: "C. Mobil", correct: false },
      { text: "D. Lampu", correct: false },
    ],
  },
  {
    question: "Matahari dapat kita lihat jelas pada ...",
    answers: [
      { text: "A. Malam hari", correct: false },
      { text: "B. Siang hari", correct: true },
      { text: "C. Fajar", correct: false },
      { text: "D. Tengah malam", correct: false },
    ],
  },
  {
    question: "Matahari memancarkan ... untuk menerangi bumi.",
    answers: [
      { text: "A. Bunyi", correct: false },
      { text: "B. Cahaya", correct: true },
      { text: "C. Panas", correct: false },
      { text: "D. Suara", correct: false },
    ],
  },
  {
    question: "Sinar matahari terasa hangat pada saat ...",
    answers: [
      { text: "A. Siang hari", correct: false },
      { text: "B. Pagi hari", correct: true },
      { text: "C. Tengah malam", correct: false },
      { text: "D. Sore hari", correct: false },
    ],
  },
  {
    question: "Sinar matahari sulit dilihat saat ...",
    answers: [
      { text: "A. Mendung", correct: true },
      { text: "B. Pelangi", correct: false },
      { text: "C. Bulan", correct: false },
      { text: "D. Hujan", correct: false },
    ],
  },
  {
    question: "Pada saat sore hari matahari terlihat berwarna ...",
    answers: [
      { text: "A. Hijau", correct: false },
      { text: "B. Biru", correct: false },
      { text: "C. Merah", correct: true },
      { text: "D. Ungu", correct: false },
    ],
  },
  {
    question: "Pada siang hari matahari berada di ...",
    answers: [
      { text: "A. Sebelah barat", correct: false },
      { text: "B. Atas kepala", correct: true },
      { text: "C. Sebelah timur", correct: false },
      { text: "D. Bawah kaki", correct: false },
    ],
  },
  {
    question: "Matahari membuat gelap menjadi ...",
    answers: [
      { text: "A. Sepi", correct: false },
      { text: "B. Terang", correct: true },
      { text: "C. Gemerlap", correct: false },
      { text: "D. Cantik", correct: false },
    ],
  },
  {
    question: "Panas matahari terasa menyengat pada waktu ...",
    answers: [
      { text: "A. Pagi hari", correct: false },
      { text: "B. Sore hari", correct: false },
      { text: "C. Siang hari", correct: true },
      { text: "D. Malam hari", correct: false },
    ],
  },
  {
    question: "Ibu menjemur pakaian pada siang hari. Ibu memanfaatkan ...",
    answers: [
      { text: "A. Warna matahari", correct: false },
      { text: "B. Bentuk matahari", correct: false },
      { text: "C. Panas matahari", correct: true },
      { text: "D. Dingin matahari", correct: false },
    ],
  },
  {
    question: "Cahaya matahari pagi mengandung ...",
    answers: [
      { text: "A. Vitamin D", correct: true },
      { text: "B. Karbohidrat", correct: false },
      { text: "C. Oksigen", correct: false },
      { text: "D. Gas", correct: false },
    ],
  },
  {
    question:
      "Bagian bumi yang baru disinari matahari berarti tempat itu sedang pada waktu ...",
    answers: [
      { text: "A. Malam hari", correct: false },
      { text: "B. Pagi hari", correct: true },
      { text: "C. Fajar", correct: false },
      { text: "D. Tengah malam", correct: false },
    ],
  },
  {
    question: "Manfaat sinar matahari di antaranya adalah ...",
    answers: [
      { text: "A. Untuk menyirami tanaman", correct: false },
      { text: "B. Untuk menjemur ikan", correct: true },
      { text: "C. Untuk memasak", correct: false },
      { text: "D. Untuk mandi", correct: false },
    ],
  },
  {
    question:
      "Pada saat siang hari, bayangan tubuh kita yang terkena sinar matahari berada di ...",
    answers: [
      { text: "A. Sebelah timur", correct: false },
      { text: "B. Dibawah tubuh", correct: true },
      { text: "C. Sebelah barat", correct: false },
      { text: "D. Tidak terlihat", correct: false },
    ],
  },
  {
    question: "Sinar matahari dimanfaatkan petani untuk ...",
    answers: [
      { text: "A. Menjemur Padi", correct: true },
      { text: "B. Menjemur ikan", correct: false },
      { text: "C. Menghasilkan Listrik", correct: false },
      { text: "D. Berkembang biak", correct: false },
    ],
  },
  {
    question: "Adanya cahaya matahari membuat kita bisa ...",
    answers: [
      { text: "A. Mencium aroma bunga", correct: false },
      { text: "B. Memakan Buah", correct: false },
      { text: "C. Melihat warna bunga", correct: true },
      { text: "D. Mendengar Lagu", correct: false },
    ],
  },
  {
    question: "Tanaman memanfaatkan sinar matahari untuk ...",
    answers: [
      { text: "A. Kawin", correct: false },
      { text: "B. Membuat makanan", correct: true },
      { text: "C. Mengugur Dedaunan", correct: false },
      { text: "D. Tidur", correct: false },
    ],
  },
  {
    question:
      "Jika kita berada di lokasi yang panas dan terik maka semakin lama akan terasa ...",
    answers: [
      { text: "A. Sejuk", correct: false },
      { text: "B. Haus", correct: true },
      { text: "C. Lapar", correct: false },
      { text: "D. Panas", correct: false },
    ],
  },
  {
    question: "Sinar panas matahari juga dapat menyebabkan tanah menjadi ...",
    answers: [
      { text: "A. Basah", correct: false },
      { text: "B. Lembab", correct: false },
      { text: "C. Kering", correct: true },
      { text: "D. Lembab", correct: false },
    ],
  },
  {
    question:
      "Pada pagi hari matahari ada di sebelah timur. Bayangan kita berada di sebelah ...",
    answers: [
      { text: "A. Timur", correct: false },
      { text: "B. Selatan", correct: false },
      { text: "C. Barat", correct: true },
      { text: "D. Utara", correct: false },
    ],
  },
  {
    question:
      "Bayangan kita yang terkena sinar matahari berukuran paling pendek pada waktu ...",
    answers: [
      { text: "A. Siang hari", correct: true },
      { text: "B. Malam hari", correct: false },
      { text: "C. Pagi hari", correct: false },
      { text: "D. Sore hari", correct: false },
    ],
  },
  {
    question: "Gaya apa yang membuat benda bergerak?",
    answers: [
      { text: "A. Gaya gravitasi", correct: false },
      { text: "B. Gaya tarik menarik", correct: true },
      { text: "C. Gaya gesek", correct: false },
      { text: "D. Gaya magnet", correct: false },
    ],
  },
  {
    question: "Apa yang terjadi pada benda saat gaya yang bekerja seimbang?",
    answers: [
      { text: "A. Benda gerak", correct: false },
      { text: "B. Benda diam", correct: true },
      { text: "C. Benda terbang", correct: false },
      { text: "D. Benda mantul", correct: false },
    ],
  },
  {
    question: "Gaya apa yang membuat benda jatuh ke bawah?",
    answers: [
      { text: "A. Gaya tarik menrarik", correct: false },
      { text: "B. Gaya gravitasi", correct: true },
      { text: "C. Gaya gesek", correct: false },
      { text: "D. Gaya magnet", correct: false },
    ],
  },
  {
    question:
      "Apa yang terjadi jika dua ujung magnet yang sama kutubnya didekatkan?",
    answers: [
      { text: "A. Menolak satu sama lain", correct: true },
      { text: "B. Menarik satu sama lain", correct: false },
      { text: "C. Tetap stabil", correct: false },
      { text: "D. keduanya diam", correct: false },
    ],
  },
  {
    question:
      "Benda apa yang dapat kembali ke bentuk aslinya setelah ditarik atau dipijat?",
    answers: [
      { text: "A. Logam", correct: false },
      { text: "B. Plastik", correct: false },
      { text: "C. Karet", correct: true },
      { text: "D. Kayu", correct: false },
    ],
  },
  {
    question:
      "Apa yang terjadi pada pegas jika ditarik ke arah yang berlawanan?",
    answers: [
      { text: "A. Mengecil", correct: false },
      { text: "B. Memanjang", correct: true },
      { text: "C. Menjadi Kaku", correct: false },
      { text: "D. Tetap seperti semula", correct: false },
    ],
  },
  {
    question:
      "Apa yang terjadi pada gerak sebuah mobil ketika kita menginjak rem dengan kuat?",
    answers: [
      { text: "A. Gaya gravitasi menambah kecepatan mobil", correct: false },
      { text: "B. Gaya gesek memperlambat gerakan mobil", correct: true },
      { text: "C. Gaya apung membuat mobil terapung", correct: false },
      { text: "D. Gaya tarik menarik memutar mobil", correct: false },
    ],
  },
  {
    question:
      "Benda elastis apa yang sering digunakan sebagai penghapus pensil?",
    answers: [
      { text: "A. Logam", correct: false },
      { text: "B. Karet", correct: true },
      { text: "C. Plastik", correct: false },
      { text: "D. Kayu", correct: false },
    ],
  },
  {
    question: "Apa yang terjadi pada benda logam ketika didekatkan ke magnet?",
    answers: [
      { text: "A. Menarik magnet ", correct: true },
      { text: "B. Menolak magnet", correct: false },
      { text: "C. Tidak ada yang terjadi", correct: false },
      { text: "D. Benda logam menjadi panas", correct: false },
    ],
  },
  {
    question:
      "Apa yang menyebabkan seorang pemanjat gunung dapat turun perlahan dari puncak menggunakan tali?",
    answers: [
      { text: "A. Gaya gesek", correct: true },
      { text: "B. Gaya gravitasi", correct: false },
      { text: "C. Gaya tarik menarik", correct: false },
      { text: "D. Gaya Magnet", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan energi kinetik?",
    answers: [
      {
        text: "A. Energi yang disimpan dalam bentuk potensial",
        correct: false,
      },
      { text: "B. Energi gerakan", correct: true },
      { text: "C. Energi panas", correct: false },
      { text: "D. Energi listrik", correct: false },
    ],
  },
  {
    question: "Bagaimana energi potensial gravitasi dihitung?",
    answers: [
      { text: "A. mgh", correct: true },
      { text: "B. 1/2 mv^2", correct: false },
      { text: "C. Fd", correct: false },
      { text: "D. P = VI", correct: false },
    ],
  },
  {
    question:
      ". Manakah dari berikut ini bukan termasuk bentuk energi kinetik?",
    answers: [
      { text: "A. Energi getaran", correct: false },
      { text: "B. Energi panas", correct: true },
      { text: "C. Energi rotasi", correct: false },
      { text: "D. Energi translasi", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan hukum kekekalan energi?",
    answers: [
      {
        text: "A. Energi tidak dapat diciptakan atau dimusnahkan, hanya dapat diubah bentuknya",
        correct: true,
      },
      {
        text: "B. Energi selalu bergerak ke arah yang lebih tinggi",
        correct: false,
      },
      { text: "C. Energi hanya dapat diubah menjadi panas", correct: false },
      {
        text: "D. Energi selalu bergerak ke arah yang lebih rendah",
        correct: false,
      },
    ],
  },
  {
    question:
      "Bagaimana energi listrik dihasilkan dalam pembangkit listrik tenaga air?",
    answers: [
      {
        text: "A. Dengan mengubah energi panas menjadi energi listrik",
        correct: false,
      },
      {
        text: "B. Dengan mengubah energi kimia menjadi energi listrik",
        correct: false,
      },
      {
        text: "C. Dengan mengubah energi gerak air menjadi energi listrik",
        correct: true,
      },
      {
        text: "D. Dengan mengubah energi getaran menjadi energi listrik",
        correct: false,
      },
    ],
  },
  {
    question: "Apa yang dimaksud dengan energi nuklir?",
    answers: [
      { text: "A. Energi yang berasal dari matahari", correct: false },
      {
        text: "B. Energi yang dihasilkan dari perubahan bentuk energi panas",
        correct: false,
      },
      { text: "C. Energi yang terkandung dalam inti atom", correct: true },
      { text: "D. Energi yang dihasilkan oleh gerak benda", correct: false },
    ],
  },
  {
    question:
      ". Bagaimana energi panas dapat diubah menjadi energi listrik dalam pembangkit listrik tenaga panas bumi?",
    answers: [
      { text: "A. Dengan menggunakan panel surya", correct: false },
      {
        text: "B. Dengan menggunakan panas bumi yang muncul dari dalam bumi",
        correct: true,
      },
      { text: "C. Dengan menggunakan turbin angin", correct: false },
      {
        text: "D. Dengan mengubah energi gerak air menjadi energi listrik",
        correct: false,
      },
    ],
  },
  {
    question: "Apa yang dimaksud dengan energi terbarukan?",
    answers: [
      { text: "A. Energi yang berasal dari fosil", correct: false },
      {
        text: "B. Energi yang dihasilkan oleh benda yang bergerak",
        correct: false,
      },
      {
        text: "C. Energi yang dapat diperbaharui dan tidak habis digunakan",
        correct: true,
      },
      { text: "D. Energi yang berasal dari inti bumi", correct: false },
    ],
  },
  {
    question: "Apa yang terjadi pada energi ketika suatu benda jatuh bebas?",
    answers: [
      { text: "A. Energi potensial meningkat", correct: false },
      { text: "B. Energi potensial tetap", correct: false },
      {
        text: "C. Energi potensial berkurang, sedangkan energi kinetik meningkat",
        correct: true,
      },
      { text: "D. Energi kinetik tetap", correct: false },
    ],
  },
  {
    question:
      "Bagaimana energi panas dapat dihasilkan dalam pembangkit listrik tenaga surya?",
    answers: [
      { text: "A. Dengan menggunakan panel surya", correct: true },
      { text: "B. Dengan menggunakan kincir angin", correct: false },
      {
        text: "C. Dengan mengubah energi gerak air menjadi energi listrik",
        correct: false,
      },
      { text: "D. Dengan menggunakan panas dari matahari", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan transformasi energi?",
    answers: [
      { text: "A. Energi yang bergerak", correct: false },
      {
        text: "B. Proses mengubah bentuk energi dari satu bentuk ke bentuk lain",
        correct: true,
      },
      { text: "C. Energi yang dihasilkan oleh gerak", correct: false },
      { text: "D. Energi yang tersimpan dalam benda", correct: false },
    ],
  },
  {
    question:
      "Contoh transformasi energi yang terjadi saat lampu menyala adalah ...",
    answers: [
      { text: "A. Cahaya menjadi panas", correct: false },
      { text: "B. Listrik menjadi cahaya dan panas", correct: true },
      { text: "C. Panas menjadi listrik", correct: false },
      { text: "D. Listrik menjadi panas", correct: false },
    ],
  },
  {
    question:
      "Apa yang merupakan bentuk energi yang tersimpan pada bahan bakar seperti kayu atau batu bara?",
    answers: [
      { text: "A. Energi listrik", correct: false },
      { text: "B. Energi kimia", correct: true },
      { text: "C. Energi gerak", correct: false },
      { text: "D. Energi panas", correct: false },
    ],
  },
  {
    question:
      "Mengapa tumbuhan sangat penting dalam konsep energi di ekosistem?",
    answers: [
      { text: "A. Karena tumbuhan menghasilkan energi kimia", correct: true },
      { text: "B. Karena tumbuhan tidak membutuhkan energi", correct: false },
      { text: "C. Karena tumbuhan tidak dapat bergerak", correct: false },
      {
        text: "D. Karena tumbuhan tidak berkontribusi pada rantai makanan",
        correct: false,
      },
    ],
  },
  {
    question: "Apa yang dimaksud dengan energi kinetik?",
    answers: [
      { text: "A. Energi yang tersimpan", correct: false },
      { text: "B. Energi panas", correct: false },
      { text: "C. Energi yang bergerak", correct: true },
      { text: "D. Energi listrik", correct: false },
    ],
  },
  {
    question: "Contoh objek yang memiliki energi kinetik adalah ...",
    answers: [
      { text: "A. Bola diam di tanah", correct: false },
      { text: "B. Kincir angin yang bergerak", correct: true },
      { text: "C. Kertas yang terbakar", correct: false },
      { text: "D. Baterai yang sedang digunakan", correct: false },
    ],
  },
  {
    question:
      "Apa yang terjadi pada energi saat seorang anak naik sepeda dari dataran rendah ke dataran tinggi?",
    answers: [
      { text: "A. Energi potensial menjadi energi kinetik", correct: false },
      { text: "B. Energi kinetik menjadi energi potensial", correct: true },
      { text: "C. Energi panas menjadi energi cahaya", correct: false },
      { text: "D. Energi listrik menjadi energi panas", correct: false },
    ],
  },
  {
    question: "Bagaimana energi kinetik terkait dengan gerak sebuah mobil?",
    answers: [
      {
        text: "A. Semakin cepat mobil bergerak, semakin rendah energi kinetiknya",
        correct: false,
      },
      {
        text: "B. Semakin lambat mobil bergerak, semakin tinggi energi kinetiknya",
        correct: false,
      },
      {
        text: "C. Semakin cepat mobil bergerak, semakin tinggi energi kinetiknya",
        correct: true,
      },
      { text: "D. Mobil tidak memiliki energi kinetik", correct: false },
    ],
  },
  {
    question:
      " Apa yang terjadi pada energi baterai saat digunakan untuk menyala lampu?",
    answers: [
      { text: "A. Energi panas menjadi energi listrik", correct: false },
      { text: "B. Energi kinetik menjadi energi panas", correct: false },
      {
        text: "C. Energi kimia menjadi energi listrik dan cahaya",
        correct: true,
      },
      { text: "D. Energi listrik menjadi energi panas", correct: false },
    ],
  },
  {
    question: "Apa yang terjadi pada energi saat kita memutar kipas angin?",
    answers: [
      { text: "A. Energi listrik menjadi energi kinetik", correct: true },
      { text: "B. Energi potensial menjadi energi kinetik", correct: false },
      { text: "C. Energi listrik menjadi energi cahaya", correct: false },
      { text: "D. Energi kinetik menjadi energi potensial", correct: false },
    ],
  },
  {
    question: "Bergabungnya sel sperma dan sel telur disebut ...",
    answers: [
      { text: "A. Embrio", correct: false },
      { text: "B. Pembuahan", correct: true },
      { text: "C. Janin", correct: false },
      { text: "D. Zigot", correct: false },
    ],
  },
  {
    question:
      "Berikut ini yang merupakan ciri pubertas pada perempuan adalah ...",
    answers: [
      { text: "A. Tumbuhnya Jakun", correct: false },
      { text: "B. Mengalami Menstruasi", correct: true },
      { text: "C. Dada lebih membidang", correct: false },
      { text: "D. Tumbuh Kumis", correct: false },
    ],
  },
  {
    question: "Berikut ini tumbuhan yang memiliki batang berongga adalah ...",
    answers: [
      { text: "A. Anggrek", correct: false },
      { text: "B. Singkong", correct: false },
      { text: "C. Alamanda", correct: false },
      { text: "D. Teratai", correct: true },
    ],
  },
  {
    question:
      "Keragaman suku bangsa di Indonesia merupakan kenyataan yang tidak dapat dipungkiri. Kita harus menghargai setiap perbedaan yang ada. Perbedaan suku-suku bangsa itu dipengaruhi oleh ...",
    answers: [
      { text: "A. Perbedaan kondisi lingkungan yang ditempati", correct: true },
      { text: "B. Banyaknya gunung berapi", correct: false },
      { text: "C. Persamaan lingkungan pulau yang didiami", correct: false },
      {
        text: "D. Indonesia negara yang ditakuti oleh negara lain di dunia",
        correct: false,
      },
    ],
  },
  {
    question:
      ". Penduduk yang tinggal di daerah tepi pantai dapat memanfaatkan sumber daya alam berupa ...",
    answers: [
      { text: "A. Air", correct: false },
      { text: "B. Tanah", correct: false },
      { text: "C. Ikan", correct: true },
      { text: "D. Batu bara", correct: false },
    ],
  },
  {
    question:
      "Dalam pemanfaatan sumber daya alam, manusia haruslah bijak memanfaakan sumber daya alam yang ada, hal ini dilakukan agar kelestarian sumber daya alam tersebut dapat terjaga. Usaha yang dapat dilakukan manusia agar dapat menjaga kelestarian sumber daya alam adalah ...",
    answers: [
      { text: "A. Penghentian penggunaan sumber daya alam", correct: false },
      { text: "B. Mencari sumber daya alam alternatif", correct: true },
      {
        text: "C. Mengimpor sumber daya alam dari luar negeri",
        correct: false,
      },
      { text: "D. Menggunakan sumber daya alam sesukanya", correct: false },
    ],
  },
  {
    question: "Alat musik sasando berasal dari daerah ...",
    answers: [
      { text: "A. Papua", correct: false },
      { text: "B. NTT", correct: true },
      { text: "C. Bali", correct: false },
      { text: "D. NTB", correct: false },
    ],
  },
  {
    question:
      "Pakaian adat suku Batak Toba merupakan kain tenun yang sering dijadikan sebagai ciri khas suku Batak. Bahkan menjadi identitas dari pakaian adat Sumatera Utara secara nasional. Berdasarkan pernyataan tersebut, nama pakaian adatnya adalah ...",
    answers: [
      { text: "A. Beskap", correct: false },
      { text: "B. Kebaya", correct: false },
      { text: "C. Ulos", correct: true },
      { text: "D. Baju bodo", correct: false },
    ],
  },
  {
    question: "Keragaman budaya yang ada di Indonesia tercermin dari ...",
    answers: [
      {
        text: "A. Kesenian daerah, fanatisme daerah, senjata tradisional",
        correct: false,
      },
      {
        text: "B. Fanatisme daerah, kesenian daerah, bahasa daerah",
        correct: false,
      },
      {
        text: "C. Bahasa daerah, pakaian adat, fanatisme daerah",
        correct: true,
      },
      {
        text: "D. Pakaian adat, kesenian daerah, bahasa daerah",
        correct: false,
      },
    ],
  },
  {
    question:
      "Salah satu manfaat dari minyak bumi bagi kehidupan manusia adalah untuk ...",
    answers: [
      { text: "A. Bahan bakar kendaraan", correct: true },
      { text: "B. Sebagai aksesoris", correct: false },
      { text: "C. Bahan kosmetik", correct: false },
      { text: "D. Bahan bangunan", correct: false },
    ],
  },
  {
    question: "Makna dari koperasi konsumsi adalah ...",
    answers: [
      {
        text: "A. Koperasi yang menyediakan kebutuhan pokok para anggotanya",
        correct: false,
      },
      {
        text: "B. Koperasi yang meminjamkan modal kepada para anggotanya",
        correct: true,
      },
      {
        text: "C. Koperasi yang membantu usaha para anggotanya",
        correct: false,
      },
      { text: "D. Koperasi yang jumlah anggotanya 100 orang", correct: false },
    ],
  },
  {
    question: "Jenis tumbuhan yang banyak hidup di hutan Sumba adalah ...",
    answers: [
      { text: "A. Cemara", correct: false },
      { text: "B. Cendana", correct: true },
      { text: "C. Bakau", correct: false },
      { text: "D. Jati", correct: false },
    ],
  },
  {
    question: "Suaka Margasatwa Ujung Kulon melindungi hewan langka yaitu ...",
    answers: [
      { text: "A. Gajah", correct: false },
      { text: "B. Harimau", correct: false },
      { text: "C. Simpanse", correct: false },
      { text: "D. Badak bercula satu", correct: true },
    ],
  },
  {
    question: "Burung langka yang berbulu putih dan berjambul adalah ...",
    answers: [
      { text: "A. Jalak Bali", correct: true },
      { text: "B. Kakak Tua", correct: false },
      { text: "C. Cendrawasih", correct: false },
      { text: "D. Betet", correct: false },
    ],
  },
  {
    question:
      "Unta merupakan hewan gurun yang memiliki bulu mata yang panjang, berguna untuk ...",
    answers: [
      {
        text: "A. Melindungi muka dari pasir dan cahaya matahari",
        correct: false,
      },
      {
        text: "B. Melindungi hidung dari pasir dan cahaya matahari",
        correct: false,
      },
      {
        text: "C. Melindungi mata dari pasir dan cahaya matahari",
        correct: true,
      },
      {
        text: "D. Melindungi mulut dari pasir dan cahaya matahari",
        correct: false,
      },
    ],
  },
  {
    question:
      "Kemampuan cecak untuk memutuskan ekornya secara tiba-tiba untuk mengelabuhi musuh disebut ...",
    answers: [
      { text: "A. Mimikiri", correct: false },
      { text: "B. Autotomi", correct: true },
      { text: "C. Ekolokasi", correct: false },
      { text: "D. Anatomi", correct: false },
    ],
  },
  {
    question:
      "Gajah dapat memanggil kelompoknya yang berada pada tempat yang jauh dengan mengeluarkan suara  ...",
    answers: [
      { text: "A. Ultrasonik", correct: false },
      { text: "B. Infrasonik", correct: true },
      { text: "C. Audiosonik", correct: false },
      { text: "D. Supersonik", correct: false },
    ],
  },
  {
    question: "Hewan yang bertelur dan melahirkan disebut juga ...",
    answers: [
      { text: "A. Vivipar", correct: false },
      { text: "B. Ovipar", correct: false },
      { text: "C. Ovovivipar", correct: true },
      { text: "D. Ovarium", correct: false },
    ],
  },
  {
    question: "Sel telur yang telah dibuahi dinamakan ...",
    answers: [
      { text: "A. Embrio", correct: false },
      { text: "B. Janin", correct: false },
      { text: "C. Zigot", correct: true },
      { text: "D. Bayi", correct: false },
    ],
  },
  {
    question: "Hewan yang berkembang biak dengan membelah diri adalah ...",
    answers: [
      { text: "A. Protozoa", correct: true },
      { text: "B. Binatang Laut", correct: false },
      { text: "C. Cacing Planaria", correct: false },
      { text: "D. Hydra", correct: false },
    ],
  },
  {
    question:
      "Untuk menarik serangga, tumbuhan kantong semar mengeluarkan bau busuk dari ...",
    answers: [
      { text: "A. Daun", correct: false },
      { text: "B. Nektar", correct: true },
      { text: "C. Bunga", correct: false },
      { text: "D. Akar", correct: false },
    ],
  },
  {
    question: "Daun berengsel dan berbulu merupakan ciri-ciri tumbuhan ...",
    answers: [
      { text: "A. Venus", correct: true },
      { text: "B. Teratai", correct: false },
      { text: "C. Kaktus", correct: false },
      { text: "D. Kantong semar", correct: false },
    ],
  },
  {
    question:
      "Tujuan kantong semar menangkap serangga adalah memenuhi kebutuhan zat ...",
    answers: [
      { text: "A. Hidrogen", correct: false },
      { text: "B. Nitrogen", correct: true },
      { text: "C. Oksigen", correct: false },
      { text: "D. Karbohidrat", correct: false },
    ],
  },
  {
    question:
      "Untuk menyimpan cadangan air tumbuhan berikut memiliki ciri khusus, yaitu ...",
    answers: [
      { text: "A. Daun berbentuk duri", correct: true },
      { text: "B. Akar pendek ", correct: false },
      { text: "C. Akar panjang", correct: false },
      { text: "D. Batang mengembung", correct: false },
    ],
  },
  {
    question:
      "Kegiatan manusia yang dapat berdampak buruk bagi lingkungan adalah ...",
    answers: [
      { text: "A. Menanam kembali hutan yang sudah gundul", correct: false },
      { text: "B. Mencari sumber daya alam alternatif", correct: false },
      {
        text: "C. Menggunakan sumber daya alam secara berlebihan",
        correct: true,
      },
      {
        text: "D. Menggunakan pupuk kandang untuk menyuburkan tanah",
        correct: false,
      },
    ],
  },
  {
    question:
      "Cara menghargai jasa para pahlawan kemerdekaan yang dapat dilakukan oleh setiap warga negara adalah ...",
    answers: [
      { text: "A. Rela berkorban demi kepentingan pribadi", correct: false },
      { text: "B. Mengutamakan kepentingan golongan", correct: false },
      { text: "C. Mengutamakan persatuan dan kesatuan bangsa", correct: true },
      { text: "D. Terjadinya perkelahian antar warga", correct: false },
    ],
  },
  {
    question: "Pernyataan berikut yang tepat mengenai bencana alam yaitu ...",
    answers: [
      {
        text: "A. Tanah longsor banyak terjadi ketika musim kemarau",
        correct: false,
      },
      {
        text: "B. Bencana alam geologis yaitu bencana alam yang disebabkan oleh faktor yang bersumber dari bumi",
        correct: true,
      },
      {
        text: "C. Gempa tektonik disebabkan oleh adanya gelombang laut yang besar",
        correct: false,
      },
      {
        text: "D. Tsunami adalah gelombang laut yang ditimbulkan oleh letusan gunung berapi",
        correct: false,
      },
    ],
  },
  {
    question: "Gempa bumi tektonik disebabkan oleh ...",
    answers: [
      { text: "A. Aktivitas gunung berapi", correct: false },
      { text: "B. Gelombang tsunami", correct: false },
      { text: "C. Pergeseran kerak bumi", correct: true },
      { text: "D. Gaya gravitasi bumi", correct: false },
    ],
  },
  {
    question:
      "Pada musim penghujan, curah hujan yang tinggi sering mendatangkan bencana banjir. Daerah di Indonesia yang menjadi langganan banjir adalah ...",
    answers: [
      { text: "A. Bogor", correct: false },
      { text: "B. Bandung", correct: false },
      { text: "C. Jakarta", correct: true },
      { text: "D. Yogyakarta", correct: false },
    ],
  },
  {
    question:
      "Indonesia adalah negara yang rawan gempa. Hal ini disebabkan oleh ...",
    answers: [
      {
        text: "A. Letak Indonesia yang berada di daerah patahan lempeng Eurasia dengan lempeng Australia",
        correct: true,
      },
      {
        text: "B. Letak Indonesia yang berada di antara Benua Asia dan Australia",
        correct: false,
      },
      {
        text: "C. Letak Indonesia yang berada di antara Samudra Pasifik dan samudrea Hindia",
        correct: false,
      },
      {
        text: "D. Letak Indonesia yang berada di jalur pegunungan muda Sirkum Mediterania dan Sirkum Pasifik",
        correct: false,
      },
    ],
  },
  {
    question: "Sirip hewan yang dapat diolah menjadi makanan mahal adalah ...",
    answers: [
      { text: "A. Paus", correct: false },
      { text: "B. Hiu", correct: true },
      { text: "C. Lumba lumba", correct: false },
      { text: "D. Tuna", correct: false },
    ],
  },
  {
    question: "Suku bangsa yang berasal dari Pulau Jawa adalah ...",
    answers: [
      { text: "A. Betawi, Badui, Lampung, Bugis", correct: false },
      { text: "B. Sunda, Tengger, Betawi, Madura", correct: true },
      { text: "C. Melayu, Badui, Padang, Toba", correct: false },
      { text: "D. Jawa, Dayak, Karo, Banjar", correct: false },
    ],
  },
  {
    question:
      "Warna coklat pada peta merupakan simbol dari kenampakan alam berupa ...",
    answers: [
      { text: "A. Dataran tinggi", correct: false },
      { text: "B. Dataran rendah", correct: true },
      { text: "C. Pegunungan", correct: false },
      { text: "D. Perbukitan", correct: false },
    ],
  },
  {
    question: "Pohon pisang berkembang biak dengan cara ...",
    answers: [
      { text: "A. Tunas", correct: true },
      { text: "B. Rhizoma", correct: false },
      { text: "C. Geragih", correct: false },
      { text: "D. Spora", correct: false },
    ],
  },
  {
    question: "Tujuan makhluk hidup berkembang biak adalah ...",
    answers: [
      { text: "A. Memperoleh nutrisi", correct: false },
      { text: "B. Melestarikan lingkungannya", correct: false },
      { text: "C. Melestarikan jenisnya", correct: true },
      { text: "D. Memperoleh pasangan", correct: false },
    ],
  },
  {
    question: "Proses fotosintesis terjadi di bagian tumbuhan yang disebut ...",
    answers: [
      { text: "A. Batang", correct: false },
      { text: "B. Daun", correct: true },
      { text: "C. Akar", correct: false },
      { text: "D. Bunga", correct: false },
    ],
  },
  {
    question: "Gas yang diambil oleh tumbuhan selama fotosintesis adalah ...",
    answers: [
      { text: "A. Oksigen", correct: false },
      { text: "B. Karbondioksida", correct: true },
      { text: "C. Nitrogen", correct: false },
      { text: "D. Helium", correct: false },
    ],
  },
  {
    question: "Fungsi klorofil dalam fotosintesis adalah ...",
    answers: [
      { text: "A. Menambah Vitamin", correct: false },
      { text: "B. Membuat glukosa", correct: false },
      { text: "C. Menyerap energi matahari", correct: true },
      { text: "D. Menyerap air", correct: false },
    ],
  },
  {
    question: "Apa yang dihasilkan oleh fotosintesis sebagai produk akhir?",
    answers: [
      { text: "A. Air dan Angin", correct: false },
      { text: "B. Air dan glukosa", correct: false },
      { text: "C. Glukosa dan oksigen", correct: true },
      { text: "D. Karbon dioksida dan gliserol", correct: false },
    ],
  },
  {
    question:
      "Proses fotosintesis umumnya terjadi pada bagian sel yang disebut ...",
    answers: [
      { text: "A. Kloroplas", correct: true },
      { text: "B. Mitokondria", correct: false },
      { text: "C. Inti sel", correct: false },
      { text: "D. Sel darah", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan materi?",
    answers: [
      { text: "A. Suatu bentuk energi", correct: false },
      {
        text: "B. Segala sesuatu yang memiliki massa dan volume",
        correct: true,
      },
      { text: "C. Bentuk perubahan kimia", correct: false },
      { text: "D. Kecepatan gerak partikel", correct: false },
    ],
  },
  {
    question: "Apakah perubahan fase dari zat padat ke zat cair disebut?",
    answers: [
      { text: "A. Mencair", correct: false },
      { text: "B. Mengkristal", correct: true },
      { text: "C. Menyublim", correct: false },
      { text: "D. Membeku", correct: false },
    ],
  },
  {
    question:
      "Pada suhu berapa air akan mendidih di ketinggian tempat yang lebih rendah?",
    answers: [
      { text: "A. 100°C", correct: false },
      { text: "B. 0°C", correct: false },
      { text: "C. Tergantung jenis air", correct: false },
      { text: "D. Kurang dari 100°C", correct: true },
    ],
  },
  {
    question:
      "Zat yang memiliki bentuk wadah dan volume yang tetap pada suhu kamar disebut ...",
    answers: [
      { text: "A. Cair", correct: true },
      { text: "B. Gas", correct: false },
      { text: "C. Padat", correct: false },
      { text: "D. Plazma", correct: false },
    ],
  },
  {
    question:
      "Apa yang menyebabkan terjadinya perubahan wujud dari gas ke cair?",
    answers: [
      { text: "A. Penguapan", correct: false },
      { text: "B. TaMenyublimnah", correct: false },
      { text: "C. Kondensasi", correct: true },
      { text: "D. Sublimasi", correct: false },
    ],
  },
  {
    question:
      "Proses perubahan langsung dari zat padat menjadi zat gas disebut?",
    answers: [
      { text: "A. Kondensasi", correct: false },
      { text: "B. Sublimasi", correct: true },
      { text: "C. Penguapan", correct: false },
      { text: "D. Mencair", correct: false },
    ],
  },
  {
    question: "Bagaimana sifat-sifat partikel pada zat gas?",
    answers: [
      { text: "A. Partikel saling rapat", correct: false },
      { text: "B. Partikel saling bergerak bebas", correct: true },
      { text: "C. Partikel saling terikat erat", correct: false },
      { text: "D. Partikel tidak bergerak", correct: false },
    ],
  },
  {
    question:
      "Apa yang terjadi pada suhu dan tekanan saat zat mengalami kondensasi?",
    answers: [
      { text: "A. Suhu dan tekanan meningkat", correct: false },
      { text: "B. Suhu meningkat, tekanan turun", correct: false },
      { text: "C. Suhu dan tekanan tetap", correct: true },
      { text: "D. Suhu turun, tekanan meningkat", correct: false },
    ],
  },
  {
    question: "Bagaimana sifat-sifat partikel pada zat padat?",
    answers: [
      { text: "A. Partikel saling terpisah", correct: false },
      { text: "B. Partikel saling bergerak bebas", correct: false },
      { text: "C. Partikel saling rapat", correct: true },
      { text: "D. Partikel tidak memiliki massa", correct: false },
    ],
  },
  {
    question: "Zat apa yang dapat mengalir dan memiliki volume yang tetap?",
    answers: [
      { text: "A. Zat cair", correct: true },
      { text: "B. Zat padat", correct: false },
      { text: "C. Zat gas", correct: false },
      { text: "D. Zat plazma", correct: false },
    ],
  },
  {
    question:
      "Apakah perbedaan antara perubahan wujud zat dengan perubahan kimia?",
    answers: [
      {
        text: "A. Perubahan wujud zat hanya terjadi pada benda padat, sedangkan perubahan kimia terjadi pada gas.",
        correct: false,
      },
      {
        text: "B. Perubahan wujud zat adalah perubahan bentuk fisik tanpa perubahan zat, sedangkan perubahan kimia melibatkan pembentukan zat baru.",
        correct: true,
      },
      {
        text: "C. Perubahan wujud zat selalu menghasilkan gas, sedangkan perubahan kimia menghasilkan padatan.",
        correct: false,
      },
      {
        text: "D. Perubahan wujud zat tidak dapat diamati secara visual, sedangkan perubahan kimia selalu terlihat.",
        correct: false,
      },
    ],
  },
  {
    question: "Manakah yang termasuk materi?",
    answers: [
      { text: "A. Angin", correct: false },
      { text: "B. Air dalam gelas", correct: true },
      { text: "C. Penas mataahri", correct: false },
      { text: "D. Bayanagan didinding", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan wujud zat padat?",
    answers: [
      { text: "A. Berbentuk seperti gas", correct: false },
      { text: "B. Tidak memiliki bentuk dan volume tertentu", correct: false },
      {
        text: "C. Bentuknya bisa berubah, tapi tetap memiliki volume",
        correct: false,
      },
      { text: "D. Memiliki bentuk dan volume tertentu", correct: true },
    ],
  },
  {
    question: "Bagaimana ciri-ciri zat cair?",
    answers: [
      {
        text: "A. Bentuknya bisa berubah, tetapi memiliki volume tetap",
        correct: true,
      },
      { text: "B. Memiliki bentuk tetap", correct: false },
      { text: "C. Tidak memiliki volume tetap", correct: false },
      { text: "D. Tidak memiliki bentuk dan volume tetap", correct: false },
    ],
  },
  {
    question:
      "Apa yang terjadi pada air ketika dipanaskan hingga suhunya mencapai 100 derajat Celsius?",
    answers: [
      { text: "A. Berubah menjadi es", correct: false },
      { text: "B. Tidak mengalami perubahan", correct: false },
      { text: "C. Menguap menjadi uap air", correct: true },
      { text: "D. Mencair menjadi air", correct: false },
    ],
  },
  {
    question: "Proses perubahan wujud dari gas menjadi cair disebut ...",
    answers: [
      { text: "A. Mencair", correct: false },
      { text: "B. Mengembun", correct: true },
      { text: "C. Membeku", correct: false },
      { text: "D. Menyublim", correct: false },
    ],
  },
  {
    question: "Zat apa yang dapat mengalir dan mengisi ruang dengan mudah?",
    answers: [
      { text: "A. Padat", correct: false },
      { text: "B. Cair", correct: true },
      { text: "C. Gas", correct: false },
      { text: "D. Plasma", correct: false },
    ],
  },
  {
    question:
      "Apa yang terjadi ketika es diletakkan di ruangan dengan suhu di atas 0 derajat Celsius?",
    answers: [
      { text: "A. Membeku", correct: false },
      { text: "B. Menguap", correct: false },
      { text: "C. Mencair", correct: true },
      { text: "D. Mengembun", correct: false },
    ],
  },
  {
    question: "Gas memiliki ciri-ciri ...",
    answers: [
      { text: "A. Berbentuk seperti cair", correct: false },
      {
        text: "B. Memiliki bentuk tetap, tapi tidak memiliki volume tetap",
        correct: false,
      },
      {
        text: "C. Bentuknya bisa berubah, dan tidak memiliki volume tetap",
        correct: true,
      },
      { text: "D. Memiliki bentuk dan volume tertentu", correct: false },
    ],
  },
  {
    question: "Apa yang terjadi pada lilin ketika dipanaskan?",
    answers: [
      { text: "A. Meleleh", correct: true },
      { text: "B. Membeku", correct: false },
      { text: "C. Menguap", correct: false },
      { text: "D. Mencair", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan gaya dalam fisika?",
    answers: [
      { text: "A. Kecepatan suatu objek", correct: false },
      {
        text: "B. Pengaruh yang dapat menyebabkan perubahan kecepatan atau bentuk suatu objek",
        correct: true,
      },
      {
        text: "C. Ketahanan suatu objek terhadap perubahan geraknya",
        correct: false,
      },
      { text: "D. Massa suatu objek", correct: false },
    ],
  },
  {
    question:
      "Gaya gravitasi terjadi antara dua objek karena adanya massa dan berbanding lurus dengan...",
    answers: [
      { text: "A. Luas permukaan kedua objek", correct: false },
      { text: "B. Jarak di antara kedua objek", correct: true },
      { text: "C. Kecepatan kedua objek", correct: false },
      { text: "D. Suhu lingkungan", correct: false },
    ],
  },
  {
    question: "Apa yang menyebabkan terjadinya gaya gesek?",
    answers: [
      { text: "A. perbedaan massa", correct: false },
      { text: "B. Perbedaan suhu", correct: false },
      { text: "C. Perbedaan bentuk", correct: false },
      { text: "D. Kontak antara permukaan benda-benda", correct: true },
    ],
  },
  {
    question:
      "Manakah dari berikut ini yang bukan merupakan contoh gaya sentripetal?",
    answers: [
      { text: "A. Gaya gesek", correct: true },
      { text: "B. Gaya pegas", correct: false },
      { text: "C. gaya gravitasi", correct: false },
      { text: "D. Gaya normal", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan hukum Newton ketiga?",
    answers: [
      {
        text: "A. Objek akan tetap bergerak pada jalurnya selama tidak ada gaya yang bekerja padanya",
        correct: false,
      },
      {
        text: "B. Gaya aksi suatu objek sama besar tetapi berlawanan arah dengan gaya reaksi",
        correct: false,
      },
      {
        text: "C. Setiap tindakan memiliki reaksi yang sebanding dan berlawanan arah",
        correct: true,
      },
      {
        text: "D. Percepatan suatu objek sebanding dengan gaya yang bekerja padanya",
        correct: false,
      },
    ],
  },
  {
    question: "Apa yang dimaksud dengan gaya normal?",
    answers: [
      {
        text: "A. Gaya yang bekerja pada benda yang bergerak melingkar",
        correct: false,
      },
      { text: "B. Gaya yang menopang berat benda ke atas", correct: true },
      { text: "C. Gaya yang menyebabkan gerakan suatu objek", correct: false },
      {
        text: "D. Gaya yang bekerja pada benda yang diletakkan di atas permukaan",
        correct: false,
      },
    ],
  },
  {
    question:
      "Berapa besar gaya gravitasi yang dirasakan oleh suatu benda pada permukaan Bumi?",
    answers: [
      { text: "A. 9,8 N/kg", correct: true },
      { text: "B. 5,0 N/kg", correct: false },
      { text: "C. 2,5 N/kg", correct: false },
      { text: "D. 1,0 N/kg", correct: false },
    ],
  },
  {
    question: "Bagaimana gaya berhubungan dengan gerak suatu objek?",
    answers: [
      {
        text: "A. Gaya tidak memiliki pengaruh terhadap gerak objek",
        correct: false,
      },
      { text: "B. Gaya dapat menghentikan gerak objek", correct: false },
      {
        text: "C. Gaya dapat menyebabkan perubahan gerak objek",
        correct: true,
      },
      { text: "D. Gaya hanya dapat bekerja pada benda padat", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan hukum Newton pertama?",
    answers: [
      { text: "A. Hukum kekekalan energi", correct: false },
      { text: "B. Hukum gravitasi universal", correct: false },
      { text: "C. Hukum inersia", correct: true },
      { text: "D. Hukum aksi-reaksi", correct: false },
    ],
  },
  {
    question: "Manakah dari berikut ini yang merupakan pasangan aksi-reaksi?",
    answers: [
      { text: "A. Gaya tarik dan gaya dorong", correct: true },
      { text: "B. Gaya gravitasi dan gaya gesek", correct: false },
      { text: "C. Gaya normal dan gaya gesek", correct: false },
      { text: "D. Gaya aksi dan gaya reaksi", correct: false },
    ],
  },
  {
    question:
      "Apa yang menjadi peran utama tumbuhan sebagai sumber kehidupan di Bumi?",
    answers: [
      { text: "A. Menyediakan protein", correct: false },
      { text: "B. Menyediakan oksigen", correct: true },
      { text: "C. Menyediakan lemak", correct: false },
      { text: "D. Menyediakan karbon dioksida", correct: false },
    ],
  },
  {
    question: "Bagaimana proses fotosintesis pada tumbuhan berlangsung?",
    answers: [
      {
        text: "A. Tumbuhan menghirup oksigen dan mengeluarkan karbon dioksida",
        correct: false,
      },
      {
        text: "B. Tumbuhan mengambil karbon dioksida dan mengeluarkan oksigen",
        correct: true,
      },
      {
        text: "C. Tumbuhan menghasilkan oksigen melalui respirasi",
        correct: false,
      },
      {
        text: "D. Tumbuhan mengubah air menjadi karbon dioksida",
        correct: false,
      },
    ],
  },
  {
    question: "Apa fungsi akar pada tumbuhan?",
    answers: [
      { text: "A. Melakukan fotosintesis", correct: false },
      { text: "B. Menyerap air dan mineral dari tanah", correct: true },
      { text: "C. Menghasilkan bunga", correct: false },
      { text: "D. Menyimpan makanan", correct: false },
    ],
  },
  {
    question: "Bagaimana polinasi terjadi pada tumbuhan berbunga?",
    answers: [
      { text: "A. Melalui serangga", correct: true },
      { text: "B. Melalui angin", correct: false },
      { text: "C. Melalui air", correct: false },
      { text: "D. Melalui matahari", correct: false },
    ],
  },
  {
    question: "Apa peran utama tumbuhan sebagai sumber kehidupan di Bumi?",
    answers: [
      { text: "A. Menghasilkan karbon dioksida", correct: false },
      { text: "B. Menyediakan habitat untuk manusia", correct: false },
      { text: "C. Menyediakan makanan untuk hewan", correct: true },
      { text: "D. Menghasilkan panas untuk lingkungan", correct: false },
    ],
  },
  {
    question: "Fungsi apa yang diemban oleh daun pada tumbuhan?",
    answers: [
      { text: "A. Menyerap air dan mineral", correct: false },
      { text: "B. Melakukan fotosintesis", correct: true },
      { text: "C. Menyimpan makanan", correct: false },
      { text: "D. Melakukan respirasi", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan hibernasi pada tumbuhan?",
    answers: [
      { text: "A. Proses pertumbuhan yang cepat", correct: false },
      { text: "B. Masa istirahat tumbuhan saat suhu rendah", correct: true },
      { text: "C. Proses fotosintesis pada malam hari", correct: false },
      { text: "D. Periode berbunga pada tumbuhan", correct: false },
    ],
  },
  {
    question: "Bagaimana tumbuhan paku berkembang biak?",
    answers: [
      { text: "A. Melalui biji", correct: false },
      { text: "B. Melalui tunas", correct: false },
      { text: "C. Melalui spora", correct: true },
      { text: "D. Melalui biji", correct: false },
    ],
  },
  {
    question: "Apa yang menjadi peran stomata pada daun tumbuhan?",
    answers: [
      { text: "A. Menyerap air", correct: false },
      { text: "B. Mengeluarkan oksigen", correct: false },
      { text: "C. Mengontrol penguapan air", correct: true },
      { text: "D. Menyerap nutrisi", correct: false },
    ],
  },
  {
    question: "Tumbuhan jenis apa yang tidak memiliki pembuluh angkut?",
    answers: [
      { text: "A. Lumut", correct: true },
      { text: "B. Paku pakuan", correct: false },
      { text: "C. Ganggang", correct: false },
      { text: "D. Tumbuhan berbiji buka", correct: false },
    ],
  },
  {
    question:
      "Apa nama bagian tumbuhan yang berfungsi menyerap air dan mineral dari tanah?",
    answers: [
      { text: "A. Batang", correct: false },
      { text: "B. Akar", correct: true },
      { text: "C. Daun", correct: false },
      { text: "D. Buah", correct: false },
    ],
  },
  {
    question: "Manakah dari berikut yang merupakan fungsi daun pada tumbuhan?",
    answers: [
      { text: "A. Menyimpan makanan", correct: false },
      { text: "B. Menyerap air dan mineral", correct: false },
      { text: "C. Melakukan fotosintesis", correct: true },
      { text: "D. Menyokong tumbuhan", correct: false },
    ],
  },
  {
    question:
      "Apa yang menjadi hasil utama dari proses fotosintesis pada tumbuhan?",
    answers: [
      { text: "A. Oksigen", correct: false },
      { text: "B. Karbon", correct: false },
      { text: "C. Nitrogen", correct: false },
      { text: "D. Glukosa", correct: true },
    ],
  },
  {
    question: "Di mana proses fotosintesis pada tumbuhan berlangsung?",
    answers: [
      { text: "A. Akar", correct: true },
      { text: "B. Batang", correct: false },
      { text: "C. Bunga", correct: false },
      { text: "D. Daun", correct: false },
    ],
  },
  {
    question:
      "Perkembangbiakan yang dilakukan melalui proses penyerbukan dan pembuahan disebut ...",
    answers: [
      { text: "A. Germinasi", correct: false },
      { text: "B. Sporulasi", correct: false },
      { text: "C. Generatif", correct: true },
      { text: "D. Vegetatif", correct: false },
    ],
  },
  {
    question:
      "Proses perkembangbiakan tumbuhan tanpa melibatkan bunga dan biji disebut ...",
    answers: [
      { text: "A. Ototranspirasi", correct: false },
      { text: "B. Vegetatif", correct: true },
      { text: "C. Generatif", correct: false },
      { text: "D. Fotosintesis", correct: false },
    ],
  },
  {
    question: "Fungsi batang pada tumbuhan adalah ...",
    answers: [
      { text: "A. Menyimpan makanan", correct: false },
      { text: "B. Menyokong tumbuhan", correct: true },
      { text: "C. Mengangkut air dan mineral dari tanah", correct: false },
      { text: "D. Melakukan fotosintesis", correct: false },
    ],
  },
  {
    question: "Apa yang diperlukan oleh tumbuhan untuk melakukan fotosintesis?",
    answers: [
      { text: "A. Cahaya matahari, air, dan karbon dioksida", correct: true },
      { text: "B. Angin, tanah, dan nitrogen", correct: false },
      { text: "C. Uap air, pupuk, dan oksigen", correct: false },
      { text: "D. Bulu halus, sinar UV, dan air", correct: false },
    ],
  },
  {
    question:
      "Tumbuhan yang berkembang biak dengan cara menyebarkan spora disebut ...",
    answers: [
      { text: "A. Bryophyta", correct: false },
      { text: "B. Gymnospermae", correct: false },
      { text: "C. Pteridophyta", correct: true },
      { text: "D. Angiospermae", correct: false },
    ],
  },
  {
    question:
      "Apa yang dilakukan oleh bunga pada tumbuhan dalamproses perkembangbiakan?",
    answers: [
      { text: "A. Membentuk buah dan biji", correct: true },
      { text: "B. Menyimpan air", correct: false },
      { text: "C. Melakukan fotosintesis", correct: false },
      { text: "D. Menyerap nutrisi", correct: false },
    ],
  },
  {
    question: "Adanya gaya gravitasi membuat kita bisa ...",
    answers: [
      { text: "A. Menapak di tanah", correct: true },
      { text: "B. Menghirup udara", correct: false },
      { text: "C. Berenang di air", correct: false },
      { text: "D. Melayang di diudara", correct: false },
    ],
  },
  {
    question:
      "Kekuatan terbesar magnet untuk menarik benda magnetis ada pada bagian ...",
    answers: [
      { text: "A. Tengahnya", correct: false },
      { text: "B. Kutub-kutubnya", correct: true },
      { text: "C. Pinggirnya", correct: false },
      { text: "D. Sisi-sisinya", correct: false },
    ],
  },
  {
    question: "Bukti gaya gravitasi adalah ...",
    answers: [
      { text: "A. Mata hari terbit dari timur", correct: false },
      { text: "B. Orang memanjat pohon", correct: false },
      { text: "C. Mobil berhenti karena direm", correct: false },
      { text: "D. Buah jeruk jatuh dari pohon ke tanah", correct: true },
    ],
  },
  {
    question:
      "Pengaruh gaya gravitasi bumi semakin kuat terhadap suatu benda jika ...",
    answers: [
      { text: "A. Jarak benda semakin dekat dengan bumi", correct: true },
      { text: "B. Benda semakin ringan", correct: false },
      { text: "C. Suhu benda semakin panas", correct: false },
      { text: "D. Angin bertiup semakin kencang", correct: false },
    ],
  },
  {
    question:
      "Berikut ini yang tidak mempengaruhi jatuhnya kecepatan jatuhnya benda yaitu ...",
    answers: [
      { text: "A. Lebar permukaan benda", correct: false },
      { text: "B. Gesekan", correct: false },
      { text: "C. Harga benda", correct: true },
      { text: "D. Jarak benda", correct: false },
    ],
  },
  {
    question:
      "Pada saat dijatuhkan, uang logam akan terlebih dulu mencapai tanah dibandingkan kertas. Hal ini terjadi karena ...",
    answers: [
      { text: "A. Kertas tertahan oleh udara", correct: false },
      { text: "B. Uang logam lebih berat dibandingkan kertas", correct: true },
      {
        text: "C. Gaya gravitasi lebih kuat menarik uang logam",
        correct: false,
      },
      { text: "D. Uang logam lebih kecil dibandingkan kertas", correct: false },
    ],
  },
  {
    question:
      "Permukaan dua benda yang saling bersentuhan akan mengakibatkan terjadinya gaya ...",
    answers: [
      { text: "A. Dorong", correct: false },
      { text: "B. Gesek", correct: true },
      { text: "C. Pegas", correct: false },
      { text: "D. Gravitasi", correct: false },
    ],
  },
  {
    question: "Ujung paku dibuat runcing dan halus agar ...",
    answers: [
      { text: "A. Lebih lentur", correct: false },
      { text: "B. Kekuatannya bertambah", correct: false },
      { text: "C. Gaya gesek kecil", correct: true },
      { text: "D. Gaya dorong bertambah", correct: false },
    ],
  },
  {
    question:
      "Agar gaya gesek antar benda yang timbul semakin kecil, maka permukaan benda yang bersentuhan dibuat ...",
    answers: [
      { text: "A. Miring", correct: false },
      { text: "B. Kasar", correct: false },
      { text: "C. Licin", correct: true },
      { text: "D. Berlubang", correct: false },
    ],
  },
  {
    question:
      "Jenis lantai yang memiliku gaya gesek paling kecil yaitu lantai yang ...",
    answers: [
      { text: "A. Dibuat dari kramik", correct: true },
      { text: "B. Dilapisi permadani", correct: false },
      { text: "C. Dilapisi keset", correct: false },
      { text: "D. Dilapisi karet", correct: false },
    ],
  },
  {
    question:
      "Batu-batu di bawah ini yang merupakan jenis batuan beku yaitu ...",
    answers: [
      { text: "A. Batu pualam, batu basal, batu sabak", correct: false },
      { text: "B. Batu obsidian, batu apung, batu granit", correct: true },
      { text: "C. Batu apung, batu granit, batu pasir", correct: false },
      { text: "D. Batu serpih, batu pasir, batu kapur", correct: false },
    ],
  },
  {
    question:
      "Jenis tanah yang paling subur dan sangat baik untuk pertanian yaitu jenis tanah ...",
    answers: [
      { text: "A. Berpasir", correct: false },
      { text: "B. Berhumus", correct: true },
      { text: "C. Liat", correct: false },
      { text: "D. Berkapur", correct: false },
    ],
  },
  {
    question:
      "Jenis batuan yang terjadi bila batu kapur mengalami perubahan suhu dan tekanan tinggi yaitu ...",
    answers: [
      { text: "A. Batu granit", correct: false },
      { text: "B. Batu serpih", correct: false },
      { text: "C. Batu pualam", correct: false },
      { text: "D. Batu sabak", correct: true },
    ],
  },
  {
    question:
      "Bahan cair yang terdapat di dalam dan sangat panas perut bumi dinamakan ...",
    answers: [
      { text: "A. Lava", correct: true },
      { text: "B. Lava", correct: false },
      { text: "C. Magma", correct: false },
      { text: "D. Kawah", correct: false },
    ],
  },
  {
    question:
      "Jenis tanah ini mengandung humus sedikit sekali, mengandung bebatuan, dan sangat mudah dilalui air. Tanah tersebut termasuk jenis tanah ...",
    answers: [
      { text: "A. Berpasir", correct: false },
      { text: "B. Berhamus", correct: false },
      { text: "C. Berkapur", correct: true },
      { text: "D. Liat", correct: false },
    ],
  },
  {
    question:
      "Jenis tanah berdasarkan komposisi penyusun dibedakan menjadi tanah ...",
    answers: [
      { text: "A. Longsor", correct: false },
      { text: "B. Liat", correct: true },
      { text: "C. Endapan", correct: false },
      { text: "D. Kerikil", correct: false },
    ],
  },
  {
    question:
      "Di bawah ini yang bukan merupakan nama lapisan atmosfir yaitu ...",
    answers: [
      { text: "A. Troposfer", correct: true },
      { text: "B. Mesofer", correct: false },
      { text: "C. Hidrosfer", correct: false },
      { text: "D. Stratosfer", correct: false },
    ],
  },
  {
    question:
      "Tanah yang berwarna gelap dan mengandung banyak humus dinamakan ...",
    answers: [
      { text: "A. Tanah berpasir", correct: false },
      { text: "B. Tanah humus", correct: false },
      { text: "C. Tanah liat", correct: true },
      { text: "D. Tanah berbatu", correct: false },
    ],
  },
  {
    question:
      "Dua jenis gas yang merupakan penyusun terbesar dari Matahari yaitu ...",
    answers: [
      { text: "A. Helium dan oksigen", correct: false },
      { text: "B. Helium dan hidrogen", correct: false },
      { text: "C. Hidrogen dan oksigen", correct: true },
      { text: "D. Hidrogen dan nitrogen", correct: false },
    ],
  },
  {
    question: "Penyakit yang disebabkan oleh gangguan pencernaan adalah ...",
    answers: [
      { text: "A. Diare", correct: true },
      { text: "B. Paru-paru", correct: false },
      { text: "C. Asma", correct: false },
      { text: "D. Influenza", correct: false },
    ],
  },
  {
    question:
      "Alat musik seperti pada di gambar dapat mengubah energi ... menjadi energi bunyi",
    answers: [
      { text: "A. Gerak", correct: true },
      { text: "B. Panas", correct: false },
      { text: "C. Listrik", correct: false },
      { text: "D. Kimia", correct: false },
    ],
  },
  {
    question: "Lemak dibutuhkan manusia untuk ...",
    answers: [
      { text: "A. Zat pengatur", correct: false },
      { text: "B. Sumber tenaga", correct: true },
      { text: "C. Cadangan makanan", correct: false },
      { text: "D. Zat pembangun", correct: false },
    ],
  },
  {
    question:
      "Fungsi pohon-pohon besar dipinggir jalan raya di kota adalah untuk ...",
    answers: [
      { text: "A. Sebagai tempat berteduh pejalan kaki", correct: false },
      { text: "B. Melindungi burung-burung", correct: false },
      { text: "C. Hiasan jalan", correct: false },
      { text: "D. Menyerap udara kotor", correct: true },
    ],
  },
  {
    question:
      "Bagian dari biji tumbuhan yang dijadikan sumber makanan oleh manusia adalah biji ...",
    answers: [
      { text: "A. Padi", correct: true },
      { text: "B. Pepaya", correct: false },
      { text: "C. Kangkung", correct: false },
      { text: "D. Singkong", correct: false },
    ],
  },
  {
    question:
      "Tanaman berikut ini yang dapat menyesuaikan dirinya dengan cara memperbesar penguapan yaitu tanaman ...",
    answers: [
      { text: "A. Kaktus", correct: false },
      { text: "B. kangkung", correct: false },
      { text: "C. Teratai", correct: true },
      { text: "D. Eceng gondok", correct: false },
    ],
  },
  {
    question:
      "Besi yang didiamkan di udara terbuka lama-lama akan menguning dan karatan. Proses ini dunamakan ...",
    answers: [
      { text: "A. Penguapan", correct: false },
      { text: "B. Pengaratan", correct: true },
      { text: "C. Pendinginan", correct: false },
      { text: "D. Pembusukkan", correct: false },
    ],
  },
  {
    question:
      "Benda berikut ini yang mempunyai sifat kenyal, lentur dan tidak dapat menghantarkan listrik yaitu ...",
    answers: [
      { text: "A. Jendela Kaca", correct: false },
      { text: "B. Ban sepeda", correct: true },
      { text: "C. Senar gitar", correct: false },
      { text: "D. Lemari kayu", correct: false },
    ],
  },
  {
    question:
      "Benda yang menempel pada magnet adalah sebagai berikut, kecuali ...",
    answers: [
      { text: "A. Kaleng", correct: false },
      { text: "B. Besi", correct: false },
      { text: "C. Kayu", correct: true },
      { text: "D. Paku", correct: false },
    ],
  },
  {
    question:
      "Termasuk jenis tanah yang berat, sulit dilalui air, jika basah sangat lengket dan elastis. Hal-hal tersebut merupakan ciri-ciri dari tanah ...",
    answers: [
      { text: "A. Berpasir", correct: false },
      { text: "B. Berhumus", correct: false },
      { text: "C. Liat", correct: true },
      { text: "D. Berkapur", correct: false },
    ],
  },
  {
    question:
      "Semua benda dapat bertahan ada di atas permukaan bumi disebabkan oleh adanya ...",
    answers: [
      { text: "A. Gaya Gravitasi", correct: true },
      { text: "B. Gaya gesek", correct: false },
      { text: "C. Gaya pegas", correct: false },
      { text: "D. Gaya magnet", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answer-button");

const nextButton = document.getElementById("next-button");

const quitButton = document.getElementById("quit-button");

const timerElement = document.getElementById("time");

let shuffledQuestions, currentQuestionIndex, usedQuestions;
let score = 0;
let timeLeft = 100;
let timerInterval = setInterval(updateTimer, 1000);

function startQuiz() {
  //nilai dan pertanyaan di atur dalam kondisi awal
  currentQuestionIndex = 0;
  score = 0;
  usedQuestions = []; //menyimpan soal yang sudah pernah muncul
  shuffledQuestions = getRandomQuestions(questions, 10); //memanggil function getRandomQuestions untuk mengambil 10 pertanyaan secara acak
  nextButton.innerHTML = "Selanjutnya";
  showQuestion();
}

//untuk mengacak pertanyaan
function getRandomQuestions(arr, num) {
  const shuffledArr = [...arr];
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return shuffledArr.slice(0, num);
}

//mengacak sisa pertanyaan agar tidak muncul 2 kali
function shuffleRemainingQuestions() {
  if (currentQuestionIndex + 4 >= shuffledQuestions.length) return;
  const shuffledIndices = new Array(4).fill(-1).map(() => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * shuffledQuestions.length);
    } while (
      shuffledQuestions.indexOf(
        shuffledQuestions[randomIndex],
        currentQuestionIndex + 1
      ) !== -1 ||
      usedQuestions.includes(shuffledQuestions[randomIndex])
    );
    return randomIndex;
  });

  for (let i = 0; i < shuffledIndices.length; i++) {
    const temp = shuffledQuestions[shuffledIndices[i]];
    shuffledQuestions[shuffledIndices[i]] =
      shuffledQuestions[currentQuestionIndex + 1 + i];
    shuffledQuestions[currentQuestionIndex + 1 + i] = temp;
  }
}

function showQuestion() {
  resetState();
  let currentQuestion;
  //mengecek pertanyaan dari shuffledQuestions, kalau blm pernah muncul maka akan jadi currenQuestion (ditampilin)
  for (let i = currentQuestionIndex; i < currentQuestionIndex + 4; i++) {
    if (!usedQuestions.includes(shuffledQuestions[i])) {
      currentQuestion = shuffledQuestions[i];
      break;
    }
  }
  if (!currentQuestion) {
    //jika loop sebelumnya tidak menemukan pertanyaan yang belum muncul maka panggil function dibawah ini untuk mengacak dan cari pertanyaan
    shuffleRemainingQuestions();
    showQuestion();
    return;
  }

  //menentukan nomor pertanyaan
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button"); //tombol jawaban
    button.innerHTML = answer.text; //isi tombol jawaban
    button.classList.add("btn"); //css styling
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct; //agar tombolnya "benar" kalau jawabannya benar
    }
    button.addEventListener("click", selectAnswer); //tombol jawaban di klik maka akan memanggil function selectAnswer
  });

  usedQuestions.push(currentQuestion); //mencatat pertnyaan yang sudah muncul
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true"; //kalau jawaban yg dipilih "true" berarti benar
  if (isCorrect) {
    selectedBtn.classList.add("correct"); //jawaban benar maka jawabannya akan di tandain benar
    score++; //jawaban benar maka "score" + 1
  } else {
    selectedBtn.classList.add("incorrect"); //jawaban salah maka ditandain salah
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true; //setelah menjawab, maka tombol tidak dapt di klik
  });
  nextButton.style.display = "block"; //akan muncul tombol "selanjutnya"
}

//bagian display nilai dan tombol "main lagi" "Quit"
function showScore() {
  clearInterval(timerInterval);
  timerElement.classList.add("hidden");
  resetState();
  questionElement.innerHTML = `Nilai anda ${score} dari ${shuffledQuestions.length} soal!`;
  //tombol main lagi
  nextButton.innerHTML = "Main lagi";
  nextButton.style.display = "block";
  //tombol quit
  quitButton.innerHTML = "Quit";
  quitButton.style.display = "block";
  quitButton.style.float = "right";
}

//reset halaman user untuk soal/tampilan selanjutnya
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

//bagian timer, sistemny hitung mundur
function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timerElement.textContent = `${minutes}:${seconds}`;

  if (timeLeft === 0) {
    //kalau waktu habis, display nilai
    showScore();
  } else {
    timeLeft--;
  }
}

//bagian untuk tombol "selanjutnya" akan mengarah ke soal selanjutnya atau bagian nilai
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    shuffleRemainingQuestions();
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < shuffledQuestions.length) {
    //mengecek masih ada pertanyaan?
    handleNextButton(); //kalau ada maka tetap tombol untuk soal selanjutnya
  } else {
    window.location.href = "kategori.html"; //kalau pertanyaan habis, maka mengarah ke halaman kategori
  }
});

startQuiz();
