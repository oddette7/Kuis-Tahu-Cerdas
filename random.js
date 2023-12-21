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
    question: "Sinar matahari sulit dilihat saat ada ...",
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
    question: "Apa yang dimaksud dengan corporate social responsibility (CSR)?",
    answers: [
      {
        text: "A. Tanggung jawab sosial individu dalam masyarakat",
        correct: false,
      },
      {
        text: "B. Tanggung jawab sosial korporasi terhadap lingkungan dan masyarakat",
        correct: true,
      },
      {
        text: "C. Tanggung jawab sosial pemerintah terhadap perusahaan",
        correct: false,
      },
      {
        text: "D. Tanggung jawab sosial lembaga keuangan terhadap pelanggan",
        correct: false,
      },
    ],
  },
  {
    question:
      "Apa yang dimaksud dengan sistem presidensial dalam sistem pemerintahan?",
    answers: [
      {
        text: "A. Kepala negara dan kepala pemerintahan terpisah",
        correct: true,
      },
      {
        text: "B. Kepala negara dan kepala pemerintahan digabungkan",
        correct: false,
      },
      { text: "C. Pemerintahan dijalankan oleh parlemen", correct: false },
      { text: "D. Kepala negara diangkat oleh parlemen", correct: false },
    ],
  },
  {
    question:
      "Siapakah tokoh yang terkenal dengan perjuangannya dalam memperjuangkan hak-hak pekerja di Indonesia?",
    answers: [
      { text: "A. Kartini", correct: false },
      { text: "B. Tan Malaka", correct: false },
      { text: "C. Soe Hok Gie", correct: false },
      { text: "D. Marsinah", correct: true },
    ],
  },
  {
    question: "Siapakah Presiden pertama Republik Indonesia?",
    answers: [
      { text: "A. Soekarno", correct: true },
      { text: "B. Soeharto", correct: false },
      { text: "C. Joko Widodo", correct: false },
      { text: "D. Megawati Soekarnoputri", correct: false },
    ],
  },
  {
    question: "Apa fungsi dari Mahkamah Konstitusi (MK) di Indonesia?",
    answers: [
      { text: "A. Menyusun undang-undang", correct: false },
      { text: "B. Menegakkan hukum", correct: false },
      { text: "C. Memutus sengketa hasil pemilihan umum", correct: true },
      { text: "D. Menyelenggarakan kegiatan politik", correct: false },
    ],
  },
  {
    question: "Pemilu di Indonesia diselenggarakan setiap berapa tahun sekali?",
    answers: [
      { text: "A. 2 tahun", correct: false },
      { text: "B. 3 tahun", correct: false },
      { text: "C. 4 tahun", correct: false },
      { text: "D. 5 tahun", correct: true },
    ],
  },
  {
    question: "Prinsip-prinsip Pancasila terdiri dari berapa jumlah?",
    answers: [
      { text: "A. 3", correct: false },
      { text: "B. 4", correct: false },
      { text: "C. 5", correct: true },
      { text: "D. 6", correct: false },
    ],
  },
  {
    question:
      "Apa peran Dewan Perwakilan Rakyat (DPR) dalam sistem ketatanegaraan Indonesia?",
    answers: [
      { text: "A. Menyusun undang-undang", correct: true },
      { text: "B. Memerintah negara", correct: false },
      { text: "C. Menegakkan keadilan", correct: false },
      { text: "D. Mengadili kasus korupsi", correct: false },
    ],
  },
  {
    question: "Pada tahun berapa Proklamasi Kemerdekaan Indonesia terjadi?",
    answers: [
      { text: "A. 1943", correct: false },
      { text: "B. 1945", correct: true },
      { text: "C. 1947", correct: false },
      { text: "D. 1950", correct: false },
    ],
  },
  {
    question: " Siapa penulis naskah pembukaan UUD 1945?",
    answers: [
      { text: "A. Mohammad Hatta", correct: false },
      { text: "B. Soekarno", correct: false },
      { text: "C. Ki Hadjar Dewantara", correct: false },
      { text: "D. Muhammad Yamin", correct: true },
    ],
  },
  {
    question:
      "Siapa yang memiliki kewenangan untuk mengangkat Menteri di pemerintahan Indonesia?",
    answers: [
      { text: "A. Presiden", correct: true },
      { text: "B. Wakil Presiden", correct: false },
      { text: "C. DPR", correct: false },
      { text: "D. Mahkamah Konstitusi", correct: false },
    ],
  },
  {
    question: "Apakah lambang negara Indonesia?",
    answers: [
      { text: "A. Burung Garuda ", correct: true },
      { text: "B. Harimau Sumatera ", correct: false },
      { text: "C. Gajah Sumatera", correct: false },
      { text: "D. Kuda nil", correct: false },
    ],
  },
  {
    question:
      "Manakah dari berikut yang bukan merupakan lembaga tinggi negara di Indonesia?",
    answers: [
      { text: "A. Dewan Perwakilan Rakyat (DPR)", correct: false },
      { text: "B. Mahkamah Agung (MA)", correct: false },
      { text: "C. Komisi Pemberantasan Korupsi (KPK)", correct: false },
      { text: "D. Bank Indonesia (BI)", correct: true },
    ],
  },
  {
    question:
      "Siapakah tokoh yang terkenal dengan peranannya dalam memimpin Konferensi Asia-Afrika di Bandung pada tahun 1955?",
    answers: [
      { text: "A. Soekarno", correct: true },
      { text: "B. Moh. Hatta", correct: false },
      { text: "C. Tan Malaka", correct: false },
      { text: "D. Ki Hadjar Dewantara", correct: false },
    ],
  },
  {
    question:
      "Siapakah tokoh yang memainkan peran penting dalam mendirikan Nahdlatul Ulama (NU) pada tahun 1926?",
    answers: [
      { text: "A. Kartini", correct: false },
      { text: "B. Soe Hok Gie", correct: false },
      { text: "C. KH Ahmad Dahlan", correct: true },
      { text: "D. Cut Nyak Dien", correct: false },
    ],
  },
  {
    question:
      "Siapa tokoh yang dikenal sebagai pahlawan nasional Indonesia yang berjuang melawan penjajahan Belanda di Jawa Barat?",
    answers: [
      { text: "A. Tan Malaka", correct: false },
      { text: "B. Kartini", correct: false },
      { text: "C. Diponegoro", correct: true },
      { text: "D. Cut Nyak Dien", correct: false },
    ],
  },
  {
    question:
      "Siapa tokoh yang terlibat dalam peristiwa Tragedi Semanggi pada tahun 1998?",
    answers: [
      { text: "A. Soe Hok Gie ", correct: false },
      { text: "B. Tan Malaka ", correct: false },
      { text: "C. Megawati Soekarnoputri", correct: false },
      { text: "D. Soeharto", correct: true },
    ],
  },
  {
    question:
      "Tokoh yang dikenal sebagai pemimpin pergerakan nasional di Sulawesi dan Indonesia Timur adalah...",
    answers: [
      { text: "A. Kartini ", correct: false },
      { text: "B. Tan Malaka ", correct: false },
      { text: "C. Sam Ratulangi", correct: true },
      { text: "D. Sukarni", correct: false },
    ],
  },
  {
    question:
      "Siapakah tokoh yang terkenal sebagai pelopor Gerakan Nasional di Indonesia dan mendirikan Budi Utomo pada tahun 1908?",
    answers: [
      { text: "A. Soekarno", correct: false },
      { text: "B. Kartini", correct: true },
      { text: "C. Mohammad Hatta", correct: false },
      { text: "D. Ki Hadjar Dewantara", correct: false },
    ],
  },
  {
    question:
      "Siapakah tokoh yang memimpin Tentara Nasional Indonesia (TNI) dan dikenal sebagai Bapak Tentara?",
    answers: [
      { text: "A. Soekarno", correct: false },
      { text: "B. Mohammad Hatta", correct: false },
      { text: "C. Sudirman", correct: true },
      { text: "D. Tan Malaka", correct: false },
    ],
  },
  {
    question:
      " Tokoh yang terlibat dalam Kongres Pemuda II tahun 1928 dan dikenal sebagai Bapak Pemuda adalah...",
    answers: [
      { text: "A. Soekarno", correct: true },
      { text: "B. Mohammad Hatta", correct: false },
      { text: "C. Soe Hok Gie", correct: false },
      { text: "D. Sutan Sjahrir", correct: false },
    ],
  },
  {
    question:
      "Tokoh yang dikenal sebagai Bapak Teknologi Indonesia dan memainkan peran penting dalam pengembangan pesawat terbang adalah...",
    answers: [
      { text: "A. Soekarno ", correct: false },
      { text: "B. Mohammad Hatta ", correct: false },
      { text: "C. Prof. Dr. Ing. B.J. Habibie", correct: true },
      { text: "D. Tan Malaka", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan Pancasila sebagai dasar negara?",
    answers: [
      { text: "A. Lima sila dasar negara", correct: true },
      { text: "B. Pancasila adalah nama presiden pertama", correct: false },
      { text: "C. Sistem pemerintahan Indonesia", correct: false },
      { text: "D. Pancasila merupakan bentuk negara", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan hak asasi manusia?",
    answers: [
      {
        text: "A. Hak yang diberikan hanya kepada warga negara",
        correct: false,
      },
      {
        text: "B. Hak yang melekat pada setiap manusia sejak lahir",
        correct: true,
      },
      { text: "C. Hak yang dapat dicabut oleh pemerintah", correct: false },
      {
        text: "D. Hak yang hanya dimiliki oleh pejabat negara",
        correct: false,
      },
    ],
  },
  {
    question: "Bagaimana sistem pemerintahan Indonesia?",
    answers: [
      { text: "A. Monarki", correct: false },
      { text: "B. Oligarki", correct: false },
      { text: "C. Republik", correct: true },
      { text: "D. Feudalisme", correct: false },
    ],
  },
  {
    question: ". Bagaimana peran media massa dalam demokrasi?",
    answers: [
      { text: "A. Mengontrol pemerintah", correct: true },
      { text: "B. Menjadi alat propaganda pemerintah", correct: false },
      { text: "C. Menentang segala bentuk pemerintahan", correct: false },
      { text: "D. Menjalankan pemerintahan", correct: false },
    ],
  },
  {
    question: "Apa peran Badan PBB dalam hubungan internasional?",
    answers: [
      { text: "A. Memerangi terorisme", correct: false },
      { text: "B. Membangun ekonomi global ", correct: false },
      { text: "C. Menjaga perdamaian dunia", correct: true },
      { text: "D. Mengatur hubungan bilateral", correct: false },
    ],
  },
  {
    question:
      "Apa yang dimaksud dengan musyawarah mufakat dalam sistem demokrasi?",
    answers: [
      { text: "A. Keputusan diambil oleh satu orang", correct: false },
      { text: "B. Rakyat langsung membuat keputusan", correct: false },
      {
        text: "C. Keputusan diambil setelah musyawarah dan mencapai kesepakatan bersama",
        correct: true,
      },
      { text: "D. Keputusan diambil oleh elit politik", correct: false },
    ],
  },
  {
    question: "Apa yang menjadi tujuan dari pembentukan ASEAN?",
    answers: [
      { text: "A. Persaingan ekonomi antar negara", correct: false },
      { text: "B. Meningkatkan keamanan regional", correct: true },
      {
        text: "C. Membentuk blok politik untuk mendominasi dunia",
        correct: false,
      },
      { text: "D. Menjaga kesejahteraan satu negara saja", correct: false },
    ],
  },
  {
    question: "Siapa yang memiliki hak untuk memilih dalam pemilihan umum?",
    answers: [
      { text: "A. Warga negara yang berusia di atas 21 tahun", correct: false },
      { text: "B. Warga negara yang berusia di atas 17 tahun", correct: true },
      { text: "C. Warga negara yang sudah menikah", correct: false },
      { text: "D. Warga negara yang sudah bekerja", correct: false },
    ],
  },
  {
    question: "Bagaimana mekanisme perubahan UUD 1945?",
    answers: [
      { text: "A. Melalui keputusan presiden", correct: false },
      { text: "B. Melalui referendum rakyat", correct: false },
      { text: "C. Dengan persetujuan DPR dan presiden", correct: true },
      { text: "D. Tidak bisa diubah", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan kebebasan pers?",
    answers: [
      { text: "A. Kebebasan untuk melakukan tindak kriminal", correct: false },
      {
        text: "B. Kebebasan untuk menyampaikan pendapat di media massa",
        correct: true,
      },
      {
        text: "C. Kebebasan untuk menyebarluaskan berita palsu",
        correct: false,
      },
      {
        text: "D. Kebebasan untuk merusak reputasi orang lain",
        correct: false,
      },
    ],
  },
  {
    question:
      "Siapa yang bertanggung jawab atas pelaksanaan pembangunan di tingkat daerah?",
    answers: [
      { text: "A. Bupati/Wali Kota", correct: false },
      { text: "B. Gubernur", correct: true },
      { text: "C. Presiden", correct: false },
      { text: "D. Kepala Desa", correct: false },
    ],
  },
  {
    question:
      "Bagaimana peran Komisi Pemilihan Umum (KPU) dalam pemilihan umum?",
    answers: [
      { text: "A. Menjadi calon presiden", correct: false },
      { text: "B. Menetapkan hasil pemilihan", correct: false },
      { text: "C. Mengawasi pelaksanaan pemilihan", correct: true },
      { text: "D. Membuat undang-undang pemilu", correct: false },
    ],
  },
  {
    question:
      "Apa yang menjadi prinsip dasar dalam politik luar negeri Indonesia?",
    answers: [
      { text: "A. Isolasionisme", correct: false },
      { text: "B. Nasionalisme", correct: true },
      { text: "C. Kolonialisme", correct: false },
      { text: "D. Imperialisme", correct: false },
    ],
  },
  {
    question: "Bagaimana upaya pelestarian lingkungan hidup di Indonesia?",
    answers: [
      { text: "A. Penebangan hutan secara masif", correct: false },
      {
        text: "B. Penggunaan bahan bakar fosil secara berlebihan",
        correct: false,
      },
      { text: "C. Penanaman pohon dan konservasi alam", correct: true },
      { text: "D. Pembuangan limbah tanpa pengelolaan", correct: false },
    ],
  },
  {
    question: "Apa yang menjadi hak asasi ekonomi?",
    answers: [
      { text: "A. Hak untuk bekerja dan memilih pekerjaan", correct: true },
      { text: "B. Hak untuk menyampaikan pendapat", correct: false },
      { text: "C. Hak untuk kebebasan beragama", correct: false },
      { text: "D. Hak untuk mendapatkan Pendidikan", correct: false },
    ],
  },
  {
    question:
      "Apa yang dimaksud dengan diplomasi sebagai alat hubungan internasional?",
    answers: [
      { text: "A. Penciptaan seni dan budaya", correct: false },
      { text: "B. Penyebaran agama", correct: false },
      {
        text: "C. Penyelesaian konflik melalui negosiasi dan dialog",
        correct: true,
      },
      { text: "D. Penciptaan blok ekonomi regional", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan sistem trias politica?",
    answers: [
      {
        text: "A. Pembagian kekuasaan negara menjadi tiga lembaga",
        correct: true,
      },
      { text: "B. Pemilihan umum tiga tahun sekali", correct: false },
      { text: "C. Pembentukan tiga partai politik utama", correct: false },
      {
        text: "D. Pembagian kekuasaan antara pemerintah pusat dan daerah",
        correct: false,
      },
    ],
  },
  {
    question:
      "Siapa yang bertanggung jawab atas kebijakan ekonomi di Indonesia?",
    answers: [
      { text: "A. Kementerian Perekonomian", correct: true },
      { text: "B. Bank Indonesia", correct: false },
      { text: "C. Presiden", correct: false },
      { text: "D. Dewan Perwakilan Rakyat (DPR)", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan pemerintahan desa?",
    answers: [
      { text: "A. Pemerintahan tingkat provinsi", correct: false },
      { text: "B. Pemerintahan tingkat kabupaten/kota", correct: false },
      { text: "C. Pemerintahan tingkat kecamatan", correct: false },
      { text: "D. Pemerintahan tingkat desa", correct: true },
    ],
  },
  {
    question: "Bagaimana cara mengajukan petisi di tingkat nasional?",
    answers: [
      { text: "A. Mengirim surat kepada pemerintah", correct: false },
      { text: "B. Mengajukan langsung ke Presiden", correct: false },
      { text: "C. Menggunakan media sosial untuk menyuarakan", correct: true },
      { text: "D. Melakukan demonstrasi di depan gedung DPR", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan konstitusi?",
    answers: [
      { text: "A. Peraturan pemerintah", correct: false },
      { text: "B. Undang-Undang Dasar Negara", correct: true },
      { text: "C. Kumpulan hukum adat", correct: false },
      { text: "D. Panduan pelaksanaan pemilu", correct: false },
    ],
  },
  {
    question:
      "Bagaimana peran Badan Intelijen Negara (BIN) dalam keamanan nasional?",
    answers: [
      { text: "A. Mengawasi pemerintah", correct: false },
      { text: "B. Menangkap penjahat", correct: false },
      { text: "C. Melakukan spionase dan intelijen", correct: true },
      { text: "D. Mengatur hubungan diplomatik", correct: false },
    ],
  },
  {
    question:
      "Apa yang dimaksud dengan Hak Asasi Ekonomi, Sosial, dan Budaya (HAE, SOS, KEB)?",
    answers: [
      { text: "A. Hak untuk bekerja dan memilih pekerjaan", correct: false },
      { text: "B. Hak untuk pendidikan dan kesehatan", correct: true },
      { text: "C. Hak untuk berbicara di depan umum", correct: false },
      {
        text: "D. Hak untuk mendapatkan keadilan di pengadilan",
        correct: false,
      },
    ],
  },
  {
    question: "Siapa yang bertanggung jawab atas kebijakan keuangan negara?",
    answers: [
      { text: "A. Kementerian Keuangan", correct: true },
      { text: "B. Bank Indonesia", correct: false },
      { text: "C. Kementerian Perekonomian", correct: false },
      { text: "D. Presiden", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan kebijakan fiskal?",
    answers: [
      { text: "A. Kebijakan terkait anggaran dan pajak", correct: true },
      {
        text: "B. Kebijakan terkait perdagangan internasional",
        correct: false,
      },
      { text: "C. Kebijakan terkait keamanan nasional", correct: false },
      { text: "D. Kebijakan terkait lingkungan hidup", correct: false },
    ],
  },
  {
    question: "Bagaimana pemerintah mengatur masalah hak cipta?",
    answers: [
      { text: "A. Melalui Kementerian Pariwisata", correct: false },
      {
        text: "B. Melalui Kementerian Hukum dan Hak Asasi Manusia",
        correct: true,
      },
      {
        text: "C. Melalui Kementerian Pendidikan dan Kebudayaan",
        correct: false,
      },
      {
        text: "D. Melalui Kementerian Komunikasi dan Informatika",
        correct: false,
      },
    ],
  },
  {
    question: "Apa yang dimaksud dengan lembaga peradilan internasional?",
    answers: [
      { text: "A. Pengadilan tingkat nasional", correct: false },
      { text: "B. Pengadilan tingkat provinsi", correct: false },
      {
        text: "C. Pengadilan yang berada di bawah Dewan Perwakilan Rakyat (DPR)",
        correct: false,
      },
      {
        text: "D. Pengadilan yang menangani kasus-kasus internasional",
        correct: true,
      },
    ],
  },
  {
    question: "Bagaimana kontribusi partai politik dalam sistem demokrasi?",
    answers: [
      { text: "A. Mengontrol pemerintah", correct: false },
      { text: "B. Menetapkan kebijakan luar negeri", correct: false },
      {
        text: "C. Mewakili kepentingan rakyat dalam lembaga legislatif",
        correct: true,
      },
      { text: "D. Menjalankan pemerintahan sehari-hari", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan gerakan sosial?",
    answers: [
      { text: "A. Gerakan militer", correct: false },
      { text: "B. Gerakan politik", correct: false },
      {
        text: "C. Gerakan masyarakat sipil untuk perubahan sosial",
        correct: true,
      },
      { text: "D. Gerakan keagamaan", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan korupsi?",
    answers: [
      { text: "A. Pencurian barang-barang negara", correct: false },
      {
        text: "B. Penyalahgunaan kekuasaan untuk keuntungan pribadi",
        correct: true,
      },
      { text: "C. Pembunuhan tokoh politik", correct: false },
      { text: "D. Penyalahgunaan obat-obatan terlarang", correct: false },
    ],
  },
  {
    question:
      "Bagaimana proses pengambilan keputusan di tingkat pemerintahan daerah?",
    answers: [
      { text: "A. Langsung oleh kepala daerah", correct: false },
      { text: "B. Melalui referendum rakyat", correct: false },
      { text: "C. Melalui musyawarah daerah", correct: true },
      { text: "D. Diputuskan oleh pemerintah pusat", correct: false },
    ],
  },
  {
    question:
      "Apa yang dimaksud dengan pilar keempat Pancasila, yakni keadilan sosial bagi seluruh rakyat Indonesia?",
    answers: [
      { text: "A. Pemerataan hak dan kewajiban di masyarakat", correct: false },
      { text: "B. Kesejahteraan ekonomi bagi semua golongan", correct: true },
      { text: "C. Pemerintahan yang adil dan transparan", correct: false },
      { text: "D. Pendidikan yang merata di seluruh wilayah", correct: false },
    ],
  },
  {
    question:
      " Bagaimana peran Komisi Yudisial dalam sistem peradilan Indonesia?",
    answers: [
      { text: "A. Mengawasi jalannya pemilihan umum", correct: false },
      { text: "B. Membuat kebijakan hukum", correct: false },
      {
        text: "C. Memberikan sanksi kepada hakim yang melanggar etika",
        correct: true,
      },
      { text: "D. Menyusun undang-undang", correct: false },
    ],
  },
  {
    question: "Apa yang menjadi hak asasi manusia dalam konteks sosial budaya?",
    answers: [
      { text: "A. Hak untuk bekerja dan memilih pekerjaan", correct: false },
      { text: "B. Hak untuk mendapatkan pendidikan", correct: false },
      { text: "C. Hak untuk menyampaikan pendapat", correct: false },
      { text: "D. Hak untuk beribadah sesuai keyakinan", correct: true },
    ],
  },
  {
    question: "Apa yang dimaksud dengan musyawarah dalam sistem demokrasi?",
    answers: [
      { text: "A. Penetapan kebijakan oleh satu orang", correct: false },
      { text: "B. Pemilihan langsung oleh rakyat", correct: false },
      {
        text: "C. Proses perundingan dan mencapai kesepakatan bersama",
        correct: true,
      },
      { text: "D. Penetapan kebijakan oleh elit politik", correct: false },
    ],
  },
  {
    question:
      "Bagaimana peran Mahkamah Konstitusi dalam sistem peradilan Indonesia?",
    answers: [
      { text: "A. Menetapkan hukuman pidana", correct: false },
      { text: "B. Menegakkan hukum dan keadilan", correct: false },
      { text: "C. Menguji undang-undang terhadap UUD 1945", correct: true },
      { text: "D. Menyusun undang-undang", correct: false },
    ],
  },
  {
    question:
      "Bagaimana pengaturan hubungan antara agama dan negara di Indonesia?",
    answers: [
      { text: "A. Negara berdasarkan agama tertentu", correct: false },
      { text: "B. Negara sekuler tanpa keterlibatan agama", correct: false },
      { text: "C. Negara mengakui beberapa agama utama", correct: true },
      { text: "D. Negara berdasarkan ajaran agama tertentu", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan kebebasan berserikat?",
    answers: [
      { text: "A. Hak untuk membentuk partai politik", correct: false },
      {
        text: "B. Hak untuk membentuk serikat buruh dan organisasi masyarakat",
        correct: true,
      },
      { text: "C. Hak untuk berserikat dengan negara lain", correct: false },
      {
        text: "D. Hak untuk mengekspresikan pendapat di media massa",
        correct: false,
      },
    ],
  },
  {
    question: "Bagaimana peran Indonesia dalam organisasi ASEAN?",
    answers: [
      { text: "A. Menjadi pemimpin tunggal di ASEAN", correct: false },
      { text: "B. Menjadi negara pendiri ASEAN", correct: false },
      { text: "C. Menjalin kerja sama ekonomi dengan ASEAN", correct: true },
      { text: "D. Mengusir negara-negara lain dari ASEAN", correct: false },
    ],
  },
  {
    question:
      "Bagaimana peran Komisi Pemberantasan Korupsi (KPK) dalam pemberantasan korupsi di Indonesia?",
    answers: [
      { text: "A. Membuat undang-undang ", correct: false },
      { text: "B. Menangkap dan menyelidiki kasus korupsi ", correct: true },
      { text: "C. Mengevaluasi kinerja pemerintah", correct: false },
      { text: "D. Memberikan hukuman kepada koruptor", correct: false },
    ],
  },
  {
    question: "Siapa yang memiliki wewenang untuk memberikan grasi?",
    answers: [
      { text: "A. Presiden", correct: true },
      { text: "B. Mahkamah Agung", correct: false },
      { text: "C. Menteri Hukum dan Hak Asasi Manusia", correct: false },
      { text: "D. Dewan Perwakilan Rakyat (DPR)", correct: false },
    ],
  },
  {
    question: "Bagaimana pengaturan hak untuk beribadah di Indonesia?",
    answers: [
      { text: "A. Bebas tanpa batasan", correct: true },
      { text: "B. Hanya diperbolehkan untuk agama tertentu", correct: false },
      { text: "C. Terbatas oleh pemerintah", correct: false },
      { text: "D. Bebas asalkan tidak melibatkan politik", correct: false },
    ],
  },
  {
    question: "Siapa yang memiliki wewenang untuk memberikan amnesti?",
    answers: [
      { text: "A. Presiden", correct: true },
      { text: "B. Mahkamah Agung", correct: false },
      { text: "C. Menteri Hukum dan Hak Asasi Manusia", correct: false },
      { text: "D. Kepala Kepolisian", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan asas supremasi hukum?",
    answers: [
      { text: "A. Hukum tertinggi adalah UUD 1945", correct: true },
      { text: "B. Hukum tertinggi adalah keputusan presiden", correct: false },
      { text: "C. Hukum tertinggi adalah keputusan MPR", correct: false },
      {
        text: "D. Hukum tertinggi adalah keputusan Mahkamah Agung",
        correct: false,
      },
    ],
  },
  {
    question: "Apa yang dimaksud dengan hak untuk hidup?",
    answers: [
      { text: "A. Hak untuk memiliki properti ", correct: false },
      { text: "B. Hak untuk bekerja dan memilih pekerjaan ", correct: false },
      { text: "C. Hak untuk hidup dan berkembang", correct: true },
      { text: "D. Hak untuk beribadah sesuai keyakinan", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan sistem multi partai dalam politik?",
    answers: [
      { text: "A. Hanya ada satu partai politik yang diakui ", correct: false },
      {
        text: "B. Ada lebih dari dua partai politik yang bersaing ",
        correct: true,
      },
      { text: "C. Sistem tanpa adanya partai politik", correct: false },
      { text: "D. Hanya ada dua partai politik yang diakui", correct: false },
    ],
  },
  {
    question:
      "Siapa yang bertanggung jawab atas pertahanan dan keamanan wilayah Indonesia?",
    answers: [
      { text: "A. Panglima TNI", correct: true },
      { text: "B. Kepala Kepolisian", correct: false },
      { text: "C. Menteri Pertahanan", correct: false },
      { text: "D.  Presiden", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan Bendera Merah Putih?",
    answers: [
      { text: "A. Bendera nasional Indonesia", correct: true },
      { text: "B. Bendera partai politik", correct: false },
      { text: "C. Bendera sekolah", correct: false },
      { text: "D. Bendera olahraga", correct: false },
    ],
  },
  {
    question:
      "Apa yang harus kita lakukan ketika mendengar lagu kebangsaan Indonesia Raya?",
    answers: [
      { text: "A. Berdiri tegak dan menyanyi", correct: true },
      { text: "B. Duduk santai", correct: false },
      { text: "C. Tidur", correct: false },
      { text: "D. Berlari-lari kecil", correct: false },
    ],
  },
  {
    question:
      "Apa yang harus dilakukan ketika kita melihat bendera setengah tiang?",
    answers: [
      { text: "A. Merayakan ", correct: false },
      { text: "B. Memberi hormat dan berduka cita ", correct: true },
      { text: "C. Menyanyikan lagu kebangsaan", correct: false },
      { text: "D. Melakukan upacara kecil", correct: false },
    ],
  },
  {
    question:
      "Apa yang harus dilakukan jika kita menemui sampah di tempat umum?",
    answers: [
      { text: "A. Meninggalkannya saja", correct: false },
      { text: "B. Membuangnya sembarangan", correct: false },
      {
        text: "C. Mengumpulkannya dan membuangnya pada tempatnya",
        correct: true,
      },
      { text: "D. TMenginjak-injaknya", correct: false },
    ],
  },
  {
    question:
      "Apa yang harus dilakukan jika kita menemukan bendera nasional yang robek atau kotor?",
    answers: [
      { text: "A. Biarkan saja", correct: false },
      { text: "B. Perbaiki sendiri", correct: false },
      { text: "C. Serahkan pada petugas yang berkompeten", correct: true },
      { text: "D. Buang ke tempat sampah", correct: false },
    ],
  },
  {
    question:
      "Apa yang menjadi tanggung jawab kita terhadap lingkungan sekitar?",
    answers: [
      { text: "A. Merusaknya", correct: false },
      { text: "B. Menjaga dan melestarikannya", correct: true },
      { text: "C. Meninggalkannya begitu saja", correct: false },
      { text: "D. Meminta orang lain untuk menjaganya", correct: false },
    ],
  },
  {
    question: ". Apa yang dimaksud dengan sila pertama dalam Pancasila?",
    answers: [
      { text: "A. Ketuhanan Yang Maha Esa", correct: true },
      { text: "B. Kemanusiaan yang Adil dan Beradab", correct: false },
      { text: "C. Persatuan Indonesia", correct: false },
      {
        text: "D. Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan",
        correct: false,
      },
    ],
  },
  {
    question: "Bagaimana kita bisa menunjukkan rasa cinta tanah air?",
    answers: [
      { text: "A. Tidak peduli dengan lingkungan sekitar", correct: false },
      { text: "B. Merusak fasilitas umum", correct: false },
      {
        text: "C. Mencintai dan menjaga kebersihan serta keindahan tanah air",
        correct: true,
      },
      {
        text: "D. Menyebarkan informasi negatif tentang tanah air",
        correct: false,
      },
    ],
  },
  {
    question:
      "Apa yang harus kita lakukan jika kita melihat ada teman yang membutuhkan bantuan?",
    answers: [
      { text: "A. Acuh tak acuh", correct: false },
      { text: "B. Membuat lelucon tentangnya", correct: true },
      { text: "C. Membantu sesuai kemampuan kita", correct: false },
      { text: "D. Mengabaikannya", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan HUT RI?",
    answers: [
      { text: "A. Hari Ulang Tahun Republik Indonesia", correct: true },
      { text: "B. Hari Ulang Tahun Rakyat Indonesia", correct: false },
      { text: "C. Hari Ulang Tahun Raja Indonesia", correct: false },
      { text: "D. Hari Ulang Tahun Rakyat Islam", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan toleransi?",
    answers: [
      {
        text: "A. Menghormati perbedaan dan menerima keberagaman",
        correct: true,
      },
      { text: "B. Menolak segala bentuk perbedaan", correct: false },
      { text: "C. Menghindari orang yang berbeda", correct: false },
      { text: "D. Bersikap egois dan tidak mau berbagi", correct: false },
    ],
  },
  {
    question: "Bagaimana konsep negara kesatuan di Indonesia?",
    answers: [
      {
        text: "A. Negara yang terdiri dari beberapa negara bagian",
        correct: false,
      },
      {
        text: "B. Negara yang tidak terikat oleh satu kesatuan wilayah",
        correct: false,
      },
      {
        text: "C. Negara yang terdiri dari berbagai kesatuan wilayah",
        correct: true,
      },
      {
        text: "D. Negara yang hanya terdiri dari satu kesatuan wilayah",
        correct: false,
      },
    ],
  },
  {
    question: "Apa yang menjadi tugas utama Menteri Luar Negeri di Indonesia?",
    answers: [
      { text: "A. Menangani kebijakan dalam negeri", correct: false },
      { text: "B. Mengawasi hubungan internasional", correct: false },
      { text: "C. Menetapkan kebijakan pertahanan negara", correct: false },
      { text: "D. Menangani kebijakan luar negeri", correct: true },
    ],
  },
  {
    question: "Apa singkatan dari G30S/PKI? ...",
    answers: [
      { text: "A. Gerakan 30 Siswa/Partai Komunis Indonesia", correct: false },
      {
        text: "B. Gerakan 30 September/Partai Kebangkitan Indonesia",
        correct: false,
      },
      {
        text: "C. Gerakan 30 September/Partai Komunis Indonesia",
        correct: true,
      },
      {
        text: "D. Gerakan 30 Sumpah/Partai Keadilan Indonesia",
        correct: false,
      },
    ],
  },
  {
    question: "Kapan peristiwa G30S/PKI terjadi?",
    answers: [
      { text: "A. 30 Agustus 1965", correct: false },
      { text: "B. 30 September 1965", correct: true },
      { text: "C. 30 Oktober 1965", correct: false },
      { text: "D. 30 November 1965", correct: false },
    ],
  },
  {
    question:
      "Siapa yang menjadi Presiden Indonesia saat peristiwa G30S/PKI terjadi?",
    answers: [
      { text: "A. Soekarno", correct: true },
      { text: "B. Soeharto", correct: false },
      { text: "C. Abdurrahman Wahid", correct: false },
      { text: "D. Megawati Soekarnoputri", correct: false },
    ],
  },
  {
    question: "Apa tujuan utama dari Gerakan 30 September (G30S)?",
    answers: [
      { text: "A. Menggulingkan pemerintahan yang sah", correct: true },
      { text: "B. Menyelamatkan bangsa dari ancaman asing", correct: false },
      { text: "C. Mempertahankan Pancasila", correct: false },
      { text: "D. Memperjuangkan kesejahteraan rakyat", correct: false },
    ],
  },
  {
    question:
      "Siapa tokoh militer yang menjadi korban dalam peristiwa G30S/PKI?",
    answers: [
      { text: "A. Jenderal Sudirman", correct: false },
      { text: "B. Jenderal Gatot Subroto", correct: false },
      { text: "C. Jenderal Ahmad Yani", correct: true },
      { text: "D. Jenderal Soeharto", correct: false },
    ],
  },
  {
    question: "Apa yang menjadi alasan utama di balik peristiwa G30S/PKI?",
    answers: [
      { text: "A. Kesenjangan ekonomi", correct: false },
      {
        text: "B. Konflik ideologi antara komunis dan non-komunis",
        correct: true,
      },
      { text: "C. Kecemburuan politik", correct: false },
      { text: "D. Ketidakpuasan terhadap pemerintah", correct: false },
    ],
  },
  {
    question:
      "Bagaimana kondisi politik dan ekonomi Indonesia setelah peristiwa G30S/PKI?",
    answers: [
      { text: "A. Stabil dan makmur", correct: false },
      { text: "B. Terguncang dan lesu", correct: false },
      { text: "C. Merosot dan kacau", correct: true },
      { text: "D. Berkembang pesat dan maju", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan Lembaga Ketahanan Nasional?",
    answers: [
      {
        text: "A. Lembaga yang bertanggung jawab dalam keamanan negara",
        correct: true,
      },
      {
        text: "B. Lembaga yang mengawasi kebijakan luar negeri",
        correct: false,
      },
      {
        text: "C. Lembaga yang menangani masalah dalam negeri",
        correct: false,
      },
      {
        text: "D. Lembaga yang memeriksa dan mengaudit keuangan negara",
        correct: false,
      },
    ],
  },
  {
    question: "Bagaimana peran media massa dalam peristiwa G30S/PKI?",
    answers: [
      { text: "A. Media massa memberikan informasi netral", correct: false },
      { text: "B. Media massa mendukung penuh G30S/PKI", correct: false },
      {
        text: "C. Media massa memberikan informasi sesuai fakta",
        correct: true,
      },
      { text: "D. Media massa memanipulasi informasi", correct: false },
    ],
  },
  {
    question:
      "Apa yang dilakukan pemerintah terhadap anggota PKI setelah peristiwa G30S?",
    answers: [
      { text: "A. Memberikan penghargaan", correct: false },
      { text: "B. Memberikan amnesti", correct: false },
      {
        text: "C. Melakukan pembersihan dan penindasan terhadap anggota PKI",
        correct: true,
      },
      {
        text: "D. Meminta maaf dan mengembalikan hak-hak politik mereka",
        correct: false,
      },
    ],
  },
  {
    question: "Apa yang dimaksud dengan Operasi Trisula?",
    answers: [
      {
        text: "A. Operasi militer untuk melawan pemberontakan PKI",
        correct: true,
      },
      { text: "B. Operasi perdamaian setelah G30S/PKI", correct: false },
      {
        text: "C. Operasi intelijen untuk menangkap para anggota PKI",
        correct: false,
      },
      { text: "D. Operasi kemanusiaan setelah bencana alam", correct: false },
    ],
  },
  {
    question:
      "Siapa yang menjadi tokoh utama dalam memadamkan peristiwa G30S/PKI?",
    answers: [
      { text: "A. Jenderal Sudirman", correct: false },
      { text: "B. Jenderal Soeharto", correct: true },
      { text: "C. Jenderal Gatot Subroto", correct: false },
      { text: "D. Jenderal Abdul Haris Nasution", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan Dwifungsi ABRI?",
    answers: [
      {
        text: "A. Dua fungsi utama Angkatan Bersenjata Republik Indonesia",
        correct: false,
      },
      {
        text: "B. Fungsi ganda dari Angkatan Bersenjata Republik Indonesia",
        correct: true,
      },
      { text: "C. Dua fungsi yang bertentangan", correct: false },
      { text: "D. Fungsi militer dan keamanan negara", correct: false },
    ],
  },
  {
    question:
      "dampak G30S/PKI terhadap hubungan Indonesia dengan negara-negara Barat?",
    answers: [
      { text: "A. Meningkatkan hubungan diplomatik", correct: false },
      { text: "B. Memburuknya hubungan diplomatik", correct: true },
      { text: "C. Tidak berpengaruh pada hubungan diplomatik", correct: false },
      { text: "D. Menjadi anggota Pakta Warsawa", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan Supersemar?",
    answers: [
      {
        text: "A. Surat perintah Soekarno kepada Jenderal Soeharto",
        correct: true,
      },
      {
        text: "B. Surat perintah Jenderal Soeharto kepada Soekarno",
        correct: false,
      },
      {
        text: "C. Surat perintah untuk melaksanakan Operasi Trisula",
        correct: false,
      },
      { text: "D. Surat perintah untuk membubarkan PKI", correct: false },
    ],
  },
  {
    question: "Bagaimana pandangan internasional terhadap peristiwa G30S/PKI?",
    answers: [
      { text: "A. Mendukung penuh", correct: false },
      { text: "B. Netral", correct: false },
      { text: "C. Mengutuk peristiwa tersebut", correct: true },
      { text: "D. Tidak mengetahui peristiwa tersebut", correct: false },
    ],
  },
  {
    question: "Apa yang menjadi simbol perlawanan terhadap PKI setelah G30S?",
    answers: [
      { text: "A. Bendera Merah Putih", correct: false },
      { text: "B. Bendera PKI", correct: false },
      { text: "C. Bendera PETA", correct: false },
      { text: "D. Bendera Palu Arit", correct: true },
    ],
  },
  {
    question: "Bagaimana dampak G30S/PKI terhadap pendidikan di Indonesia?",
    answers: [
      { text: "A. Meningkatkan kualitas pendidikan", correct: false },
      { text: "B. Memburuknya kualitas pendidikan", correct: true },
      { text: "C. Tidak berpengaruh pada kualitas pendidikan", correct: false },
      { text: "D. Meningkatkan literasi masyarakat", correct: false },
    ],
  },
  {
    question: "Hal-hal yang harus diutamakan dalam lompat tinggi adalah ...",
    answers: [
      { text: "A. masukilah dengan kaki tolak", correct: false },
      { text: "B. turunkan kepala dan bahu", correct: true },
      {
        text: "C. angkatlah kaki ayun dengan gerakan lompatan",
        correct: false,
      },
      { text: "D. melompat sekuat mungkin", correct: false },
    ],
  },
  {
    question: "Sasaran tinggi ditunjukan ke arah berikut, kecuali ...",
    answers: [
      { text: "A. ulu hati", correct: false },
      { text: "B. pinggang", correct: true },
      { text: "C. dagu", correct: false },
      { text: "D. hati", correct: false },
    ],
  },
  {
    question:
      "Posisi kaki tertentu sebagian dasar tumpuan untuk melakukan sikap dan gerakan bela serang disebut ...",
    answers: [
      { text: "A. sikap kuda-kuda", correct: false },
      { text: "B. sikap pasang", correct: true },
      { text: "C. salam pembuka", correct: false },
      { text: "D. sikap hormat", correct: false },
    ],
  },
  {
    question: "Letak berat badan saat melakukan kuda-kuda tengah berada di ...",
    answers: [
      { text: "A. kaki depan", correct: false },
      { text: "B. kaki belakang", correct: false },
      { text: "C. kedua kaki", correct: true },
      { text: "D. perut", correct: false },
    ],
  },
  {
    question:
      "Berikut yang bukan merupakan teknik gerak dasar dalam pencak silat adalah ...",
    answers: [
      { text: "A. langkah", correct: false },
      { text: "B. jatuhan", correct: true },
      { text: "C. tendangan", correct: false },
      { text: "D. pukulan", correct: false },
    ],
  },
  {
    question: "Berapa orang yang bermain dalam 1 regu tim basket ...",
    answers: [
      { text: "A. 5 orang", correct: true },
      { text: "B. 11 orang", correct: false },
      { text: "C. 6 orang", correct: false },
      { text: "D. 2 orang", correct: false },
    ],
  },
  {
    question:
      "Permainan olahraga yang menggunakan raket (terbuat dari papan kayu) dan dilapisi karet yang biasa disebut bet yaitu ...",
    answers: [
      { text: "A. Tenis lapangan", correct: false },
      { text: "B. Bola voli", correct: false },
      { text: "C. Tenis meja", correct: true },
      { text: "D. basket", correct: false },
    ],
  },
  {
    question: "Bola tenis meja berukuran  ...",
    answers: [
      { text: "A. 70 mm", correct: false },
      { text: "B. 50 mm", correct: false },
      { text: "C. 60 mm", correct: false },
      { text: "D. 40 mm", correct: true },
    ],
  },
  {
    question: "Nama lain permainan tenis meja yaitu ...",
    answers: [
      { text: "A. Ping pong", correct: true },
      { text: "B. Minnote", correct: false },
      { text: "C. Bulu tangkis", correct: false },
      { text: "D. baseball", correct: false },
    ],
  },
  {
    question: "Berat bola tenis meja yaitu ...",
    answers: [
      { text: "A. 2.7 gram", correct: true },
      { text: "B. 2.6 gram", correct: false },
      { text: "C. 2.5 gram", correct: false },
      { text: "D. 2.4 gram", correct: false },
    ],
  },
  {
    question: "Lebar bet tenis meja yaitu  ...",
    answers: [
      { text: "A. 15 cm", correct: true },
      { text: "B. 11 cm", correct: false },
      { text: "C. 6 cm", correct: false },
      { text: "D. 20 cm", correct: false },
    ],
  },
  {
    question:
      "Teknik memegang bet tenis meja seperti menjabat tangan dinamakan ...",
    answers: [
      { text: "A. american grip", correct: false },
      { text: "B. back hand grip", correct: false },
      { text: "C. penhold grip", correct: false },
      { text: "D. shakehand grip", correct: true },
    ],
  },
  {
    question:
      "Cara yang paling sederhana untuk mengembalikan pukulan bola yang keras yaitu ...",
    answers: [
      { text: "A. Block", correct: false },
      { text: "B. Push", correct: true },
      { text: "C. Drive", correct: false },
      { text: "D. Smash", correct: false },
    ],
  },
  {
    question:
      "Satu di antara teknik memegang bet pada permainan tenis meja seperti memegang tangkai pena dinamakan ...",
    answers: [
      { text: "A. Combination grip", correct: false },
      { text: "B. Skahehand grip", correct: false },
      { text: "C. Penhold grip", correct: true },
      { text: "D. american grip", correct: false },
    ],
  },
  {
    question: "Memukul bola untuk menyajikan bola pertama dinamakan ...",
    answers: [
      { text: "A. Block", correct: false },
      { text: "B. Push", correct: false },
      { text: "C. Service", correct: true },
      { text: "D. Smash", correct: false },
    ],
  },
  {
    question: "Di Indonesia, Induk olahraga tenis meja yaitu ...",
    answers: [
      { text: "A. PTMSI", correct: true },
      { text: "B. PSSI", correct: false },
      { text: "C. PERBASI", correct: false },
      { text: "D. PERTAMINA", correct: false },
    ],
  },
  {
    question:
      "Gerakan memukul bola tenis meja seperti menebang pohon dengan kapak dinamakan ...",
    answers: [
      { text: "A. Spin", correct: true },
      { text: "B. Chop", correct: false },
      { text: "C. Push", correct: false },
      { text: "D. Smash", correct: false },
    ],
  },
  {
    question:
      "Bet berada di sebelah kiri tubuh. Gerakkan bet ke depan, posisi bet tertutup (sisi depan bet menghadap ke bawah). Perhatikan arah datangnya bola, setelah bola memantul dari meja, perkenaan bola dengan bet tepat pada tengah bet merupakan proses melakukan pukulan  ...",
    answers: [
      { text: "A. Forehand block", correct: false },
      { text: "B. Backhand block", correct: true },
      { text: "C. Forehand chop ", correct: false },
      { text: "D. Backhand chop", correct: false },
    ],
  },
  {
    question: "Dalam tenis meja teknik gerakan kaki disebut ...",
    answers: [
      { text: "A. Forehand", correct: false },
      { text: "B. Blok", correct: false },
      { text: "C. Footwork", correct: true },
      { text: "D. smash", correct: false },
    ],
  },
  {
    question:
      "Teknik mengembalikan bola seperti gaya membacok dalam tenis meja ialah ...",
    answers: [
      { text: "A. Drive defensive", correct: false },
      { text: "B. Drive offensive", correct: false },
      { text: "C. Cut offensive", correct: false },
      { text: "D. Cut defensive", correct: true },
    ],
  },
  {
    question:
      "Berapa jumlah poin maksimal dalam satu game pada permainan tenis meja ...",
    answers: [
      { text: "A. 11 point", correct: true },
      { text: "B. 12 point", correct: false },
      { text: "C. 20 point", correct: false },
      { text: "D. 21 point", correct: false },
    ],
  },
  {
    question:
      "Dalam pertandingan bola basket, dua orang pemain depan yang bertugas untuk menyerang dinamakan ...",
    answers: [
      { text: "A. wasit", correct: false },
      { text: "B. Forward", correct: true },
      { text: "C. Guard", correct: false },
      { text: "D. Center", correct: false },
    ],
  },
  {
    question:
      "Satu orang pemain yang mempunyai tugas untuk merebut bola ketika jump ball dinamakan ...",
    answers: [
      { text: "A. center", correct: true },
      { text: "B. forward", correct: false },
      { text: "C. guard", correct: false },
      { text: "D. wasit", correct: false },
    ],
  },
  {
    question: "Waktu istirahat dalam permainan bola basket adalah ...",
    answers: [
      { text: "A. 10 menit", correct: true },
      { text: "B. 11 menit", correct: false },
      { text: "C. 12 menit", correct: false },
      { text: "D. 13 menit", correct: false },
    ],
  },
  {
    question: "Diameter lingkaran ring ialah ...",
    answers: [
      { text: "A. 40 cm", correct: false },
      { text: "B. 45 cm", correct: true },
      { text: "C. 50 cm", correct: false },
      { text: "D. 55 cm", correct: false },
    ],
  },
  {
    question: "Permainan bola basket berasal dari  ...",
    answers: [
      { text: "A. Indonesia", correct: false },
      { text: "B. Prancis", correct: false },
      { text: "C. India", correct: false },
      { text: "D. Amerika Serikat", correct: true },
    ],
  },
  {
    question:
      "Apabila seorang pemain bola basket dapat memasukkan bola kedalam ring dari daerah setengah lingkaran, maka ia akan mendapatkan nilai  ...",
    answers: [
      { text: "A. 2 point", correct: true },
      { text: "B. 1 point", correct: false },
      { text: "C. 3 point", correct: false },
      { text: "D. 4 point", correct: false },
    ],
  },
  {
    question:
      ". Bola basket pertama kali dipertandingkan pada Olimpiade di ...",
    answers: [
      { text: "A. Amerika Serikat", correct: true },
      { text: "B. Belarusia", correct: false },
      { text: "C. Jepang", correct: false },
      { text: "D. Indonesia", correct: false },
    ],
  },
  {
    question:
      "Dalam gerakan lay-up kanan, langkah kaki yang tepat saat bola sudah dipegang dengan kedua tangan adalah ...",
    answers: [
      { text: "A. Kanan kiri kanan-lompat", correct: true },
      { text: "B. Kiri kanan kiri-lompat", correct: false },
      { text: "C. Kanan kiri-lompat", correct: false },
      { text: "D. Kiri Kanan lompat", correct: false },
    ],
  },
  {
    question: "Orang yang menciptakan permainan bola basket adalah ...",
    answers: [
      { text: "A. Stephen Curry", correct: false },
      { text: "B. James Nasmith", correct: true },
      { text: "C. Michael Jordan", correct: false },
      { text: "D. Lebron James", correct: false },
    ],
  },
  {
    question: "Panjang dan lebar lapangan bola basket adalah...",
    answers: [
      { text: "A. 26 m x 14 m", correct: false },
      { text: "B. 26 m x 15 m", correct: true },
      { text: "C. 14 m x 25 m", correct: false },
      { text: "D. 15 m x 26 m", correct: false },
    ],
  },
  {
    question: "Induk organisasi bola basket di Indonesia adalah ...",
    answers: [
      { text: "A. FIFA", correct: false },
      { text: "B. PTMSI", correct: false },
      { text: "C. PSSI", correct: false },
      { text: "D. PERBASI", correct: true },
    ],
  },
  {
    question: "Tujuan teknik shooting adalah ...",
    answers: [
      { text: "A. Memasukkan bola ke dalam ring", correct: true },
      { text: "B. Menggiring bola", correct: false },
      { text: "C. Menangkap bola", correct: false },
      { text: "D. Menjaga musuh", correct: false },
    ],
  },
  {
    question:
      "Teknik man to marking atau man to man dalam permainan bola basket adalah ...",
    answers: [
      { text: "A. Teknik pertahanan satu lawan satu.", correct: true },
      { text: "B. Teknik pertahanan daerah", correct: false },
      { text: "C. Teknik penyerangan daerah", correct: false },
      { text: "D. Teknik penyerangan satu lawan satu", correct: false },
    ],
  },
  {
    question:
      "Menggiring bola adalah suatu usaha untuk membawa bola ke depan atau biasa disebut dribbling ball. Saat dribble, dorong bola ke lantai dan berputar mengelilingi pemain bertahan disebut ...",
    answers: [
      { text: "A. Back dribble", correct: false },
      { text: "B. Legs dribble", correct: false },
      { text: "C. Between the leg", correct: false },
      { text: "D. Spin dribble", correct: true },
    ],
  },
  {
    question: "Perbasi dibentuk pada tanggal  ...",
    answers: [
      { text: "A. 21 Oktober 1952", correct: false },
      { text: "B. 22 Oktober 1952", correct: true },
      { text: "C. 23 Oktober 1952", correct: false },
      { text: "D. 24 Oktober 1952", correct: false },
    ],
  },
  {
    question: "Persatuan renang dunia disebut ...",
    answers: [
      { text: "A. FINA", correct: true },
      { text: "B. FIBA", correct: false },
      { text: "C. FIFA", correct: false },
      { text: "D. PBVSI", correct: false },
    ],
  },
  {
    question: "Berikut ini yang tidak termasuk gaya dalam renang yaitu ...",
    answers: [
      { text: "A. Gaya kepala", correct: true },
      { text: "B. Gaya bebas", correct: false },
      { text: "C. Gaya dada", correct: false },
      { text: "D. Gaya lumba lumba", correct: false },
    ],
  },
  {
    question: "Bentuk gerakan kaki pada renang gaya bebas adalah ...",
    answers: [
      { text: "A. Memutar permukaan air", correct: false },
      { text: "B. Menekan permukaan air", correct: false },
      { text: "C. Naik turun memukul permukaan air", correct: true },
      { text: "D. menendang permukaan air", correct: false },
    ],
  },
  {
    question: "Pada awalnya gaya kupu-kupu merupakan variasi dari gaya ...",
    answers: [
      { text: "A. Gaya Telentang", correct: false },
      { text: "B. Gaya Bebas", correct: false },
      { text: "C. Gaya Dada", correct: true },
      { text: "D. Gaya lumba lumba", correct: false },
    ],
  },
  {
    question: "Renang gaya dada dibawah ini dengan gerakan ...",
    answers: [
      { text: "A. Melangkah di air", correct: false },
      { text: "B. Mendayung tangan", correct: true },
      { text: "C. Melayang", correct: false },
      { text: "D. Meluncur", correct: false },
    ],
  },
  {
    question:
      "Teknik gerakan yang lebih dominan digunakan dalam renang gaya bebas yaitu ...",
    answers: [
      { text: "A. Gerakan lengan", correct: true },
      { text: "B. Gerakan Kaki", correct: false },
      { text: "C. Gerakan Perut", correct: false },
      { text: "D. Gerakan Bahu", correct: false },
    ],
  },
  {
    question: "Berikut ini adalah manfaat dari olahraga renang kecuali ...",
    answers: [
      { text: "A. Menambah beban tubuh", correct: false },
      { text: "B. Membentuk otot", correct: false },
      { text: "C. menambah tinggi badan", correct: true },
      { text: "D. Menambah jangka nafas", correct: false },
    ],
  },
  {
    question:
      "Hal berikut perlu diperhatikan saat mengambil napas, kecuali  ...",
    answers: [
      { text: "A. Dilakukan dengan pelan", correct: false },
      { text: "B. Dilakukan secara teratur", correct: false },
      { text: "C. Dilakukan dengan santai", correct: false },
      { text: "D. Dilakukan secara asal", correct: true },
    ],
  },
  {
    question:
      "Renang dapat berpengaruh terhadap kejiwaan, hal ini disebabkan renang mampu...",
    answers: [
      { text: "A. Meperkuat mental", correct: false },
      { text: "B. Meningkatkan intelektual", correct: false },
      { text: "C. Menumbuhkan percaya diri", correct: false },
      { text: "D. Menghilangkan Stress", correct: true },
    ],
  },
  {
    question: "Gaya renang yang diperlombakan terdiri dari  ...",
    answers: [
      { text: "A. 3 gaya", correct: false },
      { text: "B. 4 gaya", correct: true },
      { text: "C. 5 gaya", correct: false },
      { text: "D. 2 gaya", correct: false },
    ],
  },
  {
    question: "Berapa orang yang bermain dalam1  regu tim basket ...",
    answers: [
      { text: "A. 5 orang", correct: true },
      { text: "B. 11 orang", correct: false },
      { text: "C. 6 orang", correct: false },
      { text: "D. 2 orang", correct: false },
    ],
  },
  {
    question:
      "Perenang berada dalam posisi start pada saat wasit meneriakkan ...",
    answers: [
      { text: "A. Aba-aba yak", correct: false },
      { text: "B. Aba-aba mulai", correct: false },
      { text: "C. Aba-aba siap", correct: true },
      { text: "D. Sebelum aba aba", correct: false },
    ],
  },
  {
    question: "Start renang gaya punggung dilakukan di  ...",
    answers: [
      { text: "A. Dalam air menghadap dinding kolam", correct: true },
      { text: "B. Atas kolam renang", correct: false },
      { text: "C. Atas balok start.", correct: false },
      { text: "D. Di lantai permukaan", correct: false },
    ],
  },
  {
    question: "Gaya renang yang melakukan start dari balok start adalah ...",
    answers: [
      { text: "A. Gaya punggung dan gaya dada", correct: false },
      { text: "B. Gaya dada dan gaya punggung", correct: false },
      { text: "C. Gaya kupu-kupu dan gaya punggung", correct: true },
      { text: "D. Gaya kupu kupu  dan gaya dada", correct: false },
    ],
  },
  {
    question: "Pada renang gaya bebas, sikap badan adalah ...",
    answers: [
      { text: "A. Telungkup", correct: false },
      { text: "B. telentang", correct: true },
      { text: "C. Overline", correct: false },
      { text: "D. Kayang", correct: false },
    ],
  },
  {
    question: "Pembalikan renang gaya punggung dilakukan dengan cara ...",
    answers: [
      { text: "A. Menyentuh dinding kolam", correct: true },
      { text: "B. Setengah salto ke depan", correct: false },
      { text: "C. Salto ke depan", correct: false },
      { text: "D. Salto ke belakang", correct: false },
    ],
  },
  {
    question: "Bentuk gerakan kaki pada renang gaya bebas yaitu  ...",
    answers: [
      { text: "A. Satu kaki dua tangan", correct: false },
      { text: "B. Dua kaki satu tangan", correct: false },
      { text: "C. Satu tangan satu kaki", correct: true },
      { text: "D. Dua tangan dua kaki", correct: false },
    ],
  },
  {
    question:
      "Perbandingan gerakan tungkai dan gerakan lengan dalam renang gaya dada yaitu untuk ...",
    answers: [
      { text: "A. Mencegah alergi kulit", correct: true },
      { text: "B. Meminimalkan gerakan tangan", correct: false },
      { text: "C. Memaksimalkan gerakan tangan", correct: false },
      { text: "D. Tidak ada bedanya", correct: false },
    ],
  },
  {
    question: "Kacamata renang dikenakan saat renang dengan tujuan ...",
    answers: [
      { text: "A. Mencegah alergi kulit", correct: false },
      { text: "B. Mencegah iritasi mata", correct: true },
      { text: "C. Memaksimalkan gerakan tangan", correct: false },
      { text: "D. Tidak ada gunanya", correct: false },
    ],
  },
  {
    question: "Ketika berenang gaya bebas, posisi wajah menghadap ke ...",
    answers: [
      { text: "A. Permukaan air", correct: true },
      { text: "B. Kiri", correct: false },
      { text: "C. Kanan", correct: false },
      { text: "D. Bawah", correct: false },
    ],
  },
  {
    question:
      "Olahraga pencak silat merupakan olahraga yang bertujuan untuk...",
    answers: [
      { text: "A. Membela diri", correct: true },
      { text: "B. Menyakiti lawan", correct: false },
      { text: "C. Menyerang lawan", correct: false },
      { text: "D. Menghormat lawan", correct: false },
    ],
  },
  {
    question: "Olahraga bela diri pencak silat berkaitan dengan aspek ...",
    answers: [
      { text: "A. Moral", correct: false },
      { text: "B. Akhlak-kerohanian", correct: true },
      { text: "C. Mental", correct: false },
      { text: "D. Ekonomi", correct: false },
    ],
  },
  {
    question: "Satu di antara ciri umum olahraga pencak silat adalah ...",
    answers: [
      {
        text: "A. Menggunakan seluruh anggota tubuh dalam pelaksanaan geraknya",
        correct: false,
      },
      { text: "B. Mencirikan khas budaya Indonesia", correct: true },
      { text: "C. Menggunakan senjata tertentu", correct: false },
      { text: "D. Menggunakan matras", correct: false },
    ],
  },
  {
    question:
      "Variasi dan kombinasi gerakan dalam pencak silat adalah, kecuali ...",
    answers: [
      { text: "A. Serangan", correct: false },
      { text: "B. Tangkisan", correct: false },
      { text: "C. Belaan", correct: true },
      { text: "D. Tendangan", correct: false },
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
