//code soalnya panjang, jadi skip ke paling bawah untuk code lainnya

const questions = [
  {
    question: "Apa manfaat dari latihan peregangan sebelum berolahraga?",
    answers: [
      { text: "A. Meningkatkan kekuatan otot", correct: false },
      { text: "B. Mengurangi risiko cedera", correct: true },
      { text: "C. Mempercepat denyut jantung", correct: false },
      { text: "D. Memudahkan terjadinya cedera", correct: false },
    ],
  },
  {
    question: "Jenis olahraga yang fokus pada latihan kekuatan otot adalah ...",
    answers: [
      { text: "A. Jogging", correct: false },
      { text: "B. Angkat berat", correct: true },
      { text: "C. Basket", correct: false },
      { text: "D. Renang", correct: false },
    ],
  },
  {
    question:
      "Seberapa penting kegiatan kardiovaskular untuk kesehatan jantung?",
    answers: [
      { text: "A. Tidak Penting", correct: false },
      { text: "B. Sedikit Penting", correct: false },
      { text: "C. Mungkin Penting", correct: false },
      { text: "D. Sangat Penting", correct: true },
    ],
  },
  {
    question:
      "Manfaat apa yang didapatkan dari melakukan latihan yoga secara teratur ...",
    answers: [
      { text: "A. Peningkatan fleksibilitas", correct: true },
      { text: "B. Peningkatan berat badan", correct: false },
      { text: "C. Peningkatan konsumsi gula", correct: false },
      { text: "D. Peningkatan intensitas", correct: false },
    ],
  },
  {
    question: "Peralatan apa yang umumnya digunakan dalam latihan kekuatan ...",
    answers: [
      { text: "A. Jari tangan", correct: false },
      { text: "B. Dumbbell", correct: true },
      { text: "C. Sepatu lari", correct: false },
      { text: "D. Tongkat estafet", correct: false },
    ],
  },
  {
    question:
      "Bagaimana cara mengukur intensitas olahraga saat berlari atau bersepeda  ...",
    answers: [
      { text: "A. Dengan menggunakan stopwatch", correct: false },
      { text: "B. Dengan menghitung langkah", correct: false },
      { text: "C. Dengan skala percepatan denyut jantung", correct: true },
      { text: "D. Dengan tidak menggunakan apapun", correct: false },
    ],
  },
  {
    question: "Apa yang perlu diperhatikan saat memilih sepatu olahraga ...",
    answers: [
      { text: "A. Warna yang sesuai", correct: false },
      { text: "B. Ukuran yang pas", correct: true },
      { text: "C. Merk terkenal", correct: false },
      { text: "D. Model yang keren", correct: false },
    ],
  },
  {
    question: "Seberapa penting istirahat dalam program latihan fisik?",
    answers: [
      { text: "A. Tidak Penting", correct: false },
      { text: "B. Sangat Penting", correct: true },
      { text: "C. Kurang Penting", correct: false },
      { text: "D. Sedikit penting", correct: false },
    ],
  },
  {
    question: "Apa manfaat tidur yang cukup bagi performa atlet ...",
    answers: [
      { text: "A. Mengurangi energi ", correct: false },
      { text: "B. Meningkatkan pemulihan otot ", correct: true },
      { text: "C. Menurunkan stamina", correct: false },
      { text: "D. Memembuat malas", correct: false },
    ],
  },
  {
    question: "Apa fungsi utama pemanasan sebelum melakukan olahraga ...",
    answers: [
      { text: "A. Meningkatkan denyut jantung", correct: false },
      { text: "B. Mengurangi risiko cedera", correct: true },
      { text: "C. Menurunkan tekanan darah", correct: false },
      { text: "D. Membuat gampang terkena stroke", correct: false },
    ],
  },
  {
    question:
      "Apa jenis latihan yang fokus pada pengembangan kekuatan otot ...",
    answers: [
      { text: "A. cardio", correct: false },
      { text: "B. Anaerobik", correct: true },
      { text: "C. Aerobik", correct: false },
      { text: "D. Yoga", correct: false },
    ],
  },
  {
    question:
      "Manakah olahraga yang biasanya termasuk dalam kategori anaerobik ...",
    answers: [
      { text: "A. Lari", correct: false },
      { text: "B. Renang", correct: false },
      { text: "C. Angkat Beban", correct: true },
      { text: "D. Memukul samsak", correct: false },
    ],
  },
  {
    question:
      "Berapa langkah dasar dalam melakukan gerakan stretching statis ...",
    answers: [
      { text: "A. 1", correct: false },
      { text: "B. 3", correct: true },
      { text: "C. 5", correct: false },
      { text: "D. 10", correct: false },
    ],
  },
  {
    question: "Apa manfaat olahraga untuk kesehatan mental ...",
    answers: [
      { text: "A. Menurunkan berat badan ", correct: true },
      { text: "B. Meningkatkan risiko penyakit jantung ", correct: false },
      { text: "C. Menurunkan massa otot", correct: false },
      { text: "D. Mengurangi Stress", correct: false },
    ],
  },
  {
    question:
      "Bagaimana cara mengukur intensitas latihan dengan skala perceived exertion (RPE) ...",
    answers: [
      { text: "A. Mengukur denyut jantung ", correct: false },
      { text: "B. Menilai tingkat kelelahan subjektif ", correct: true },
      { text: "C. Menghitung jumlah langkah", correct: false },
      { text: "D. Tidak Perlu Dihitung", correct: false },
    ],
  },
  {
    question: "Apa yang harus dilakukan saat terjadi cedera selama latihan ...",
    answers: [
      { text: "A. Lanjutkan latihan", correct: false },
      { text: "B. Beristirahat dan beri pertolongan pertama", correct: true },
      { text: "C. Minum air putih", correct: false },
      { text: "D. Makan Yang banyak", correct: false },
    ],
  },
  {
    question:
      "Manakah olahraga yang membantu meningkatkan fleksibilitas tubuh ...",
    answers: [
      { text: "A. Angkat beban", correct: false },
      { text: "B. Yoga", correct: true },
      { text: "C. Berenang", correct: false },
      { text: "D. Basket", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan latihan pliometrik ...",
    answers: [
      { text: "A. Latihan kekuatan", correct: false },
      { text: "B. Latihan keseimbangan", correct: false },
      { text: "C. Latihan loncat", correct: true },
      { text: "D. Latihan memukul", correct: false },
    ],
  },
  {
    question: "Kapan waktu yang tepat untuk minum air saat berolahraga ...",
    answers: [
      { text: "A. Sebelum dan sesudah olahraga ", correct: true },
      { text: "B. Hanya selama olahraga ", correct: false },
      { text: "C. Setelah olahraga", correct: false },
      { text: "D. Tidak perlu", correct: false },
    ],
  },
  {
    question:
      "Corner kick dalam permainan sepak bola dilakukan di daerah pojok lapangan ...",
    answers: [
      { text: "A. Sebelah kanan lapangan", correct: false },
      { text: "B. Tengah lapangan", correct: false },
      { text: "C. sebelah kiri atau kanan", correct: true },
      { text: "D. Tendangan dari kiper", correct: false },
    ],
  },
  {
    question:
      "Dalam permainan sepak bola merupakan olahraga beregu yang terdiri dari ...",
    answers: [
      { text: "A. 9 Pemain", correct: false },
      { text: "B. 11 Pemain", correct: true },
      { text: "C. 10 Pemain", correct: false },
      { text: "D. 12 Pemain", correct: false },
    ],
  },
  {
    question: "Yang tidak termasuk teknik dasar sepak bola adalah ...",
    answers: [
      { text: "A. menendang bola", correct: false },
      { text: "B. dribble", correct: false },
      { text: "C. tendangan ke dalam", correct: true },
      { text: "D. berlari", correct: false },
    ],
  },
  {
    question:
      "Latihan menendang bola yang bertujuan untuk menembakkan bola dengan keras tetapi arah bola sering kurang terkontrol merupakan cara menendang bola yang menggunakan ...",
    answers: [
      { text: "A. kura-kura bagian dalam", correct: false },
      { text: "B. kura-kura bagian luar", correct: false },
      { text: "C. punggung kaki", correct: true },
      { text: "D. Kaki belakang", correct: false },
    ],
  },
  {
    question:
      "Posisi perkenaan bola yang benar dalam teknik menyundul bola (heading) adalah ...",
    answers: [
      { text: "A. kepala bagian depan (kening)", correct: false },
      { text: "B. kepala bagian tengah ", correct: false },
      { text: "C. kepala bagian atas", correct: true },
      { text: "D. kepala bagian belakang", correct: false },
    ],
  },
  {
    question:
      "Sikap badan yang benar saat menahan bola dengan telapak kaki adalah ...",
    answers: [
      { text: "A. condong ke depan", correct: false },
      { text: "B. condong dan membungkuk ke depan", correct: true },
      { text: "C. condong ke belakang", correct: false },
      { text: "D. condong ke samping", correct: false },
    ],
  },
  {
    question: "Permainan bola basket dimainkan oleh ...",
    answers: [
      { text: "A. 3 regu", correct: false },
      { text: "B. 2 regu", correct: true },
      { text: "C. 4 regu", correct: false },
      { text: "D. 1 regu", correct: false },
    ],
  },
  {
    question:
      "Teknik yang digunakan mengoper bola jarak dekat dalam permainan bola basket adalah ...",
    answers: [
      { text: "A. chest pass", correct: true },
      { text: "B. jeveline pass", correct: false },
      { text: "C. side pass", correct: false },
      { text: "D. bound pass", correct: false },
    ],
  },
  {
    question: "Teknik menembak sambil melayang dalam bola basket disebut ...",
    answers: [
      { text: "A. shooting", correct: false },
      { text: "B. lay up shoot", correct: false },
      { text: "C. Jump short", correct: true },
      { text: "D. Floater", correct: false },
    ],
  },
  {
    question: "Tujuan utama permainan sepak bola adalah ...",
    answers: [
      { text: "A. Berusaha merebut bola dari lawan", correct: false },
      { text: "B. Menguasai bola selama-lamanya", correct: false },
      {
        text: "C. Memasukan bola ke gawang lawan dan mempertahankan gawang supaya tidak terjadi gol",
        correct: true,
      },
      { text: "D. Menampilkan dribble yang keren", correct: false },
    ],
  },
  {
    question:
      "Pertandingan bola basket dapat dimainkan 220 menit atau dapat juga dimainkan dengan waktu ...",
    answers: [
      { text: "A. 4 x 12 menit", correct: true },
      { text: "B. 4 x 8 menit", correct: false },
      { text: "C. 4 x 10 menit", correct: false },
      { text: "D. 4 x 14 menit", correct: false },
    ],
  },
  {
    question: "Induk organisasi bola basket tingkat internasional adalah ...",
    answers: [
      { text: "A. FIBA", correct: true },
      { text: "B. PERBASI", correct: false },
      { text: "C. FINA", correct: false },
      { text: "D. FIFA", correct: false },
    ],
  },
  {
    question:
      "Berputar ke segala arah dengan bertumpu pada salah satu kaki (kaki poros) pada bola basket disebut sebagai?",
    answers: [
      { text: "A. Dribble", correct: false },
      { text: "B. Pivot", correct: true },
      { text: "C. Shooting", correct: false },
      { text: "D. Lay up", correct: false },
    ],
  },
  {
    question:
      "Teknik atau cara memgang raket bulu tangkis ada empat cara. Yaitu cara memegang raket grip dengan memutar putaran ke kiri disebut dengan pegangan cara ...",
    answers: [
      { text: "A. Backhand grip", correct: true },
      { text: "B. England grip", correct: false },
      { text: "C. Shakehand grip", correct: false },
      { text: "D. Penhold grip", correct: false },
    ],
  },
  {
    question:
      "Teknik pukulan dengan tujuan untuk melambungkan shootlecock setinggi mungkin mengarah jauh ke garis belakang adalah pukulan ...",
    answers: [
      { text: "A. Servis", correct: false },
      { text: "B. Lob", correct: true },
      { text: "C. Dropshot", correct: false },
      { text: "D. Smash", correct: false },
    ],
  },
  {
    question: "Pukulan yang jatuhnya dekat net disebut pukulan ...",
    answers: [
      { text: "A. Servis", correct: false },
      { text: "B. Lob", correct: false },
      { text: "C. Smash", correct: false },
      { text: "D. Dropshot", correct: true },
    ],
  },
  {
    question:
      "Seorang pemain dinyatakan menang dalam satu set permainan bulu tangkis apa bila telah mencapai angka ...",
    answers: [
      { text: "A. 11", correct: false },
      { text: "B. 21", correct: true },
      { text: "C. 22", correct: false },
      { text: "D. B10", correct: false },
    ],
  },
  {
    question:
      "Pukulan servis bulu tangkis yang melambung tinggi ke belakang disebut ...",
    answers: [
      { text: "A. lob service", correct: true },
      { text: "B. dropshot", correct: false },
      { text: "C. smash", correct: false },
      { text: "D. service", correct: false },
    ],
  },
  {
    question: "Pukulan smash dilakukan pada saat bola ...",
    answers: [
      { text: "A. meluncur turun", correct: false },
      { text: "B. melambung di depan atas kepala", correct: true },
      { text: "C. menjelang meluncur jatuh", correct: false },
      { text: "D. saat bola sudah turun ke permukaan", correct: false },
    ],
  },
  {
    question:
      "Macam-macam pukulan dalam permainan bulu tangkis, antara lain ...",
    answers: [
      { text: "A. smash, backhand, lurus", correct: true },
      { text: "B. drive, dropshot, horizontal", correct: false },
      { text: "C. vertikal, lurus, lob", correct: false },
      { text: "D. vertikal, dropshot, lurus", correct: false },
    ],
  },
  {
    question: "Macam gaya dalam lompat jauh ada ...",
    answers: [
      { text: "A. 3 gaya", correct: true },
      { text: "B. 4 gaya", correct: false },
      { text: "C. 5 gaya", correct: false },
      { text: "D. 6 gaya", correct: false },
    ],
  },
  {
    question:
      "Gerakan larijarak menengah sedikit berbeda dengan gerak lari cepat. Perbedaan itu terutama pada ...",
    answers: [
      { text: "A. cara kaki melangkah", correct: false },
      { text: "B. cara kaki menapak", correct: true },
      { text: "C. pengambilan start", correct: false },
      { text: "D. gaya lari", correct: false },
    ],
  },
  {
    question:
      "Seorang pelari dianggap masuk finish apabila ... telah memasuki finish",
    answers: [
      { text: "A. kakinya", correct: false },
      { text: "B. kepalanya", correct: true },
      { text: "C. punggungnya", correct: false },
      { text: "D. badannya", correct: false },
    ],
  },
  {
    question: "Nomor-nomor lari jarak menengah adalah ...",
    answers: [
      { text: "A. 100 m, 200 m, dan 400 m", correct: false },
      { text: "B. 800 m, 1.500 m, 3.000 m", correct: true },
      { text: "C. 200 m, 400 m, dan 800 m", correct: false },
      { text: "D. 200 m, 300 m, dan 400 m", correct: false },
    ],
  },
  {
    question:
      "Menggunakan seluruh punggung dibantu dengan lengan adalah latihan teknik ...",
    answers: [
      { text: "A. mendarat", correct: true },
      { text: "B. bertolak", correct: false },
      { text: "C. ancang-ancang", correct: false },
      { text: "D. kuda kuda", correct: false },
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
      "Apabila seorang pemain bola basket dapat memasukkan bola kedalam ring dari daerah setengah lingkaran, maka ia akan mendapatkan nilai ...",
    answers: [
      { text: "A. 2 point", correct: true },
      { text: "B. 1 point", correct: false },
      { text: "C. 3 point", correct: false },
      { text: "D. 4 point", correct: false },
    ],
  },
  {
    question: "Bola basket pertama kali dipertandingkan pada Olimpiade di ...",
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
    question: "Panjang dan lebar lapangan bola basket adalah ...",
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
      "Hal berikut perlu diperhatikan saat mengambil napas, kecuali ...",
    answers: [
      { text: "A. Dilakukan dengan pelan", correct: false },
      { text: "B. Dilakukan secara teratur", correct: false },
      { text: "C. Dilakukan dengan santai", correct: false },
      { text: "D. Dilakukan secara asal", correct: true },
    ],
  },
  {
    question:
      "Renang dapat berpengaruh terhadap kejiwaan, hal ini disebabkan renang mampu ...",
    answers: [
      { text: "A. Meperkuat mental", correct: false },
      { text: "B. Meningkatkan intelektual", correct: false },
      { text: "C. Menumbuhkan percaya diri", correct: false },
      { text: "D. Menghilangkan Stress", correct: true },
    ],
  },
  {
    question: "Gaya renang yang diperlombakan terdiri dari ...",
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
    question: "Start renang gaya punggung dilakukan di ...",
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
      "Olahraga pencak silat merupakan olahraga yang bertujuan untuk ...",
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
  {
    question: "Gerak tubuh yang menyesuaikan dengan aspek irama adalah ...",
    answers: [
      { text: "A. Wiraga", correct: false },
      { text: "B. Wirasa", correct: true },
      { text: "C. Wirahma", correct: false },
      { text: "D. Wiraswasta", correct: false },
    ],
  },
  {
    question:
      "Gerakan yang termasuk pembelaan dalam olahraga pencak silat adalah ...",
    answers: [
      { text: "A. Serangan", correct: true },
      { text: "B. Kuncian", correct: false },
      { text: "C. Elakan", correct: false },
      { text: "D. Tangkis", correct: false },
    ],
  },
  {
    question: "Bentuk dari gerakan kombinasi serangan dan tangkisan adalah ...",
    answers: [
      { text: "A. Memukul dan menendang", correct: false },
      { text: "B. Memukul dan menghindar", correct: true },
      { text: "C. Memukul dan menangkap", correct: false },
      { text: "D. Menghindar dan Menangkis", correct: false },
    ],
  },
  {
    question:
      "Manfaat pencak silat melalui permainan kupu-kupu terbang kian kemari adalah . ...",
    answers: [
      { text: "A. Mengenal arah", correct: false },
      { text: "B. Mengenal serangan lawan", correct: true },
      { text: "C. Mengenal daerah", correct: false },
      { text: "D. Mengenal lawan", correct: false },
    ],
  },
  {
    question:
      "Tujuan permainan kereta dorong dalam olahraga pencak silat adalah  ...",
    answers: [
      { text: "A. Melatih ketahanan", correct: false },
      { text: "B. Melatih sikap kuda-kuda", correct: false },
      { text: "C. Melatih kekuatan", correct: true },
      { text: "D. Melatih kesadaran", correct: false },
    ],
  },
  {
    question:
      "Tujuan permainan putri berhias dalam olahraga pencak silat adalah  ...",
    answers: [
      { text: "A. Melatih kebersamaan/kekompakan", correct: false },
      { text: "B. Melatih kelincahan", correct: false },
      { text: "C. Melatih pukulan dan tangkisan", correct: true },
      { text: "D. Melatih ketenangan", correct: false },
    ],
  },
  {
    question:
      "Anggota bagian tubuh yang menjadi sasaran pada pertandingan pencak silat adalah kecuali ...",
    answers: [
      { text: "A. Dada", correct: false },
      { text: "B. Perut", correct: false },
      { text: "C. Leher", correct: true },
      { text: "D. Kaki", correct: false },
    ],
  },
  {
    question:
      "Jumlah perangkat yang memimpin jalannya pertandingan pada pencak silat adalah ...",
    answers: [
      { text: "A. 1 wasit dibantu 3 juri penilai", correct: false },
      { text: "B. 1 wasit dibantu 5 juri penilai", correct: true },
      { text: "C. 2 wasit dibantu 3 juri penilai", correct: false },
      { text: "D. 2 wasit dibantu 4 juri", correct: false },
    ],
  },
  {
    question: "Taktik bertahan yang ada pada pencak silat adalah ...",
    answers: [
      { text: "A. Aktif", correct: true },
      { text: "B. Pasif", correct: false },
      { text: "C. maksimal", correct: false },
      { text: "D. optimal", correct: false },
    ],
  },
  {
    question:
      "Elakan, hindaran, tangkapan dan tangkisan merupakan strategi yang dibutuhkan pencak silat pada saat ...",
    answers: [
      { text: "A. Penyerangan", correct: false },
      { text: "B. Pertahanan", correct: true },
      { text: "C. Pertandingan", correct: false },
      { text: "D. Pertemuan", correct: false },
    ],
  },
  {
    question:
      "Pada saat menyerang, atlit pencak silat menggunakan strategi ...",
    answers: [
      { text: "A. Jab Strike", correct: false },
      { text: "B. Kaki diangkat", correct: false },
      { text: "C. Tangkisan", correct: false },
      { text: "D. Sapuan", correct: true },
    ],
  },
  {
    question:
      "Berikut yang bukan termasuk strategi yang dibutuhkan dalam pertandingan silat adalah ...",
    answers: [
      { text: "A. Cengkraman", correct: true },
      { text: "B. Elakan", correct: false },
      { text: "C. Tangkisan", correct: false },
      { text: "D. Sapuan", correct: false },
    ],
  },
  {
    question:
      "Secara umum strategi pertandingan dalam pencak silat terbagi menjadi 2 bagian yaitu ...",
    answers: [
      { text: "A. Serangan dan Hindaran", correct: false },
      { text: "B. Menyerang dan Elakan", correct: false },
      { text: "C. Menyerang dan kabur", correct: false },
      { text: "D. bertahan dan menyerang", correct: true },
    ],
  },
  {
    question:
      "Pembagian kelas dalam pertandingan pencak silat dapat digolongkan berdasarkan...",
    answers: [
      { text: "A. Usia, kelas dan berat badan", correct: false },
      { text: "B. Usia dan berat badan", correct: true },
      { text: "C. Umur, berat badan dan tinggi badan", correct: false },
      { text: "D. Umur, berat, dan ketampanan", correct: false },
    ],
  },
  {
    question:
      "Gerakan menjatuhkan lawan dalam pencak silat yang dilakukan dengan menjepit kedua tungkai kaki pada sasaran leher, pinggang, atau tungkai lawan hingga menyebabkan lawan terjatuh disebut ...",
    answers: [
      { text: "A. Teknik jepitan", correct: false },
      { text: "B. Teknik sapuan", correct: false },
      { text: "C. Teknik gutingan", correct: true },
      { text: "D. Teknik tendangan", correct: false },
    ],
  },
  {
    question:
      "Dalam melakukan serangan menggunakan siku, serangan dapat dilakukan dengan arah serangan ...",
    answers: [
      {
        text: "A. Ke depan, samping, belakang, serong atas, serta bawah",
        correct: true,
      },
      { text: "B. Ke samping dan belakang", correct: false },
      { text: "C. Ke samping, belakang dan depan", correct: false },
      { text: "D. Ke samping", correct: false },
    ],
  },
  {
    question:
      "Strategi pertandingan dalam pencak silat dapat diartikan sebagai ...",
    answers: [
      {
        text: "A. Siasat atau cara melakukan pertandingan agar memenangkan pertandingan",
        correct: true,
      },
      {
        text: "B. Siasat dalam perlombaan agar dapat dan bertahan",
        correct: false,
      },
      {
        text: "C. Siasat dalam pertandingan agar dapat menyerang dan bertahan",
        correct: false,
      },
      {
        text: "D. Siasat dalam pertandingan agar dapat bertahan",
        correct: false,
      },
    ],
  },
  {
    question:
      "Salah satu strategi yang sering digunakan pada pertandingan pencak silat adalah perang saraf ...",
    answers: [
      { text: "A. Menyerang mental lawan sebelum pertandingan", correct: true },
      { text: "B. Perang dengan saraf lawan", correct: false },
      { text: "C. Mematikan saraf lawan terlebih dahulu", correct: false },
      {
        text: "D. Menyerang organ saraf lawan saat bertanding",
        correct: false,
      },
    ],
  },
  {
    question:
      "Sebelum melakukan pertandingan dalam pencak silat pelatih harus merancang strategi sebaik mungkin. Salah satu strategi tersebut pelatih harusnya mempunyai...",
    answers: [
      {
        text: "A. Kekurangan dan kelemahan arena pertandingan",
        correct: false,
      },
      { text: "B. Catatan tentang lawan yang akan dihadapi", correct: true },
      {
        text: "C. Catatan latihan sebelum dan sesudah pertandingan",
        correct: false,
      },
      { text: "D. Insting", correct: false },
    ],
  },
  {
    question:
      "Dalam pencak silat terdapat taktik penyerangan yang bertujuan ...",
    answers: [
      {
        text: "A. Menandingi pertahanan lawan untuk mencari kemenangan dalam bertanding secara sportif",
        correct: false,
      },
      {
        text: "B. Mematahkan pertahanan lawan untuk mencari kemenangan dalam bertanding secara sportif",
        correct: true,
      },
      {
        text: "C. Meninjau pertahanan lawan untuk mencari kemenangan dalam bertanding",
        correct: false,
      },
      { text: "D. Melumpuhkan lawan", correct: false },
    ],
  },
  {
    question:
      "Taktik bertahan dalam beladiri Pencak silat dibedakan menjadi ...",
    answers: [
      { text: "A. Teknik bertahan serentak dan bagian", correct: false },
      { text: "B. Teknik bertahan siaga dan kuda-kuda", correct: false },
      { text: "C. Teknik bertahan pasif dan aktif", correct: true },
      { text: "D. Teknik bertahan biasa", correct: false },
    ],
  },
  {
    question:
      "Taktik ganjalan dilakukan dengan cara menghentikan gerakan lawan pada saat akan melakukan serangan dengan menggunakan ...",
    answers: [
      { text: "A. Tendangan depan", correct: false },
      { text: "B. Tendangan T (samping)", correct: true },
      { text: "C. Tendangan memutar", correct: false },
      { text: "D. Tendangan Bawah", correct: false },
    ],
  },
  {
    question:
      "Jenis taktik bertahan yang tepat digunakan untuk menghadapi lawan yang memiliki tipe menyerang langsung adalah ...",
    answers: [
      { text: "A. Hindar Sambut", correct: true },
      { text: "B. Jemputan", correct: false },
      { text: "C. Patahan", correct: false },
      { text: "D. Pukulan", correct: false },
    ],
  },
  {
    question:
      "Berikut yang bukan termasuk pola langkah dalam pencak silat adalah ...",
    answers: [
      { text: "A. Pola Langkah Huruf S, U, dan Segi tiga", correct: false },
      { text: "B. Pola Langkah Huruf S, U, dan Segi empat", correct: false },
      { text: "C. Pola Langkah menyamping", correct: true },
      { text: "D. Pola Abstrak", correct: false },
    ],
  },
  {
    question:
      "Dalam pencak silat, teknik pola langkah lurus dilakukan ketika ...",
    answers: [
      {
        text: "A. Petarung melakukan gerak langkah menciptakan garis lurus",
        correct: true,
      },
      { text: "B. Pesilat melangkah ke depan dan belakang", correct: false },
      {
        text: "C. Petarung melakukan gerak langkah menciptakan garis sejajar dengan lawan",
        correct: false,
      },
      { text: "D. Petraung melalukan gerakan menyerang", correct: false },
    ],
  },
  {
    question:
      "Untuk melakukan pola langkah zigzag dalam pencak silat didahului sikap pasang yang selanjutnya melakukan gerakan ...",
    answers: [
      { text: "A. Menyerong", correct: true },
      { text: "B. Menyamping", correct: false },
      { text: "C. Mendepani", correct: false },
      { text: "D. Membelakangi", correct: false },
    ],
  },
  {
    question:
      "Latihan yang pertama dilakukan untuk menerapkan pola pukulan adalah ...",
    answers: [
      { text: "A. Permainan net yang tipis-tipis", correct: false },
      { text: "B. Pukulan silang dan lob", correct: true },
      { text: "C. Pukulan yang dapat mematikan lawan", correct: false },
      { text: "D. Pukulan lambung", correct: false },
    ],
  },
  {
    question: "Underhand disebut juga dengan ...",
    answers: [
      { text: "A. Pukulan dari samping", correct: false },
      { text: "B. Pukulan dari bawah", correct: true },
      { text: "C. Pukulan dari atas", correct: false },
      { text: "D. Pukulan dari tengah", correct: false },
    ],
  },
  {
    question:
      "Dasar yang bisa menghasilkan pukulan berkualitas dalam olahraga bulu tangkis adalah apabila dilakukan dalam posisi baik disebut dengan ...",
    answers: [
      { text: "A. Preparation", correct: false },
      { text: "B. Lob", correct: true },
      { text: "C. Drive", correct: false },
      { text: "D. Smash", correct: false },
    ],
  },
  {
    question: "Pukulan lob dibedakan menjadi dua macam yakni ...",
    answers: [
      { text: "A. Lob panjang dan lob pendek", correct: false },
      { text: "B. Lob depan dan lob belakang", correct: true },
      { text: "C. Lob menyerang dan lob belakang", correct: false },
      { text: "D. Lob pelan dan Lob cepat", correct: false },
    ],
  },
  {
    question:
      "Dalam bulu tangkis yang dimaksud pukulan seperti smash disebut dengan  ...",
    answers: [
      { text: "A. Dropshot", correct: true },
      { text: "B. Clear", correct: false },
      { text: "C. Drive", correct: false },
      { text: "D. Spike", correct: false },
    ],
  },
  {
    question:
      "Pukulan overhead yang meluncur dekat net dan jatuh di depan lapangan lawan disebut ...",
    answers: [
      { text: "A. Servis", correct: false },
      { text: "B. Smes", correct: false },
      { text: "C. Netting", correct: true },
      { text: "D. Dropshot", correct: false },
    ],
  },
  {
    question:
      "Kejuaraan bulu tangkis beregu putri tingkat dunia, memperebutkan piala yang bernama ...",
    answers: [
      { text: "A. FIFA WORLD CUP", correct: false },
      { text: "B. FIBA WORLD CUP", correct: false },
      { text: "C. Champions League", correct: false },
      { text: "D. Thomas Cup", correct: true },
    ],
  },
  {
    question: "Permainan bulu tangkis dipopulerkan oleh ...",
    answers: [
      { text: "A. George Hanscock", correct: false },
      { text: "B. Lewis Robert", correct: true },
      { text: "C. H. Fisher", correct: false },
      { text: "D. Jonathan Christie", correct: false },
    ],
  },
  {
    question: "Jumlah set dalam permainan bulu tangkis adalah ...",
    answers: [
      { text: "A. 1 dan 3 set", correct: false },
      { text: "B. 2 dan 3 set", correct: true },
      { text: "C. 3 dan 4 set", correct: false },
      { text: "D. 4 dan 5 set", correct: false },
    ],
  },
  {
    question: "Organisasi bulu tangkis Indonesia adalah ...",
    answers: [
      { text: "A. PASI", correct: false },
      { text: "B. Perbasi", correct: false },
      { text: "C. PBSI", correct: true },
      { text: "D. PSSI", correct: false },
    ],
  },
  {
    question:
      "Bermain ganda dalam bulu tangkis atau badminton hal utama yang perlu diperhatikan yaitu ...",
    answers: [
      { text: "A. Teknik servis", correct: false },
      { text: "B. Kerja Sama", correct: true },
      { text: "C. Footwork", correct: false },
      { text: "D. Smash", correct: false },
    ],
  },
  {
    question: "Permainan bulu tangkis berasal dari negara ...",
    answers: [
      { text: "A. India", correct: true },
      { text: "B. Amerika", correct: false },
      { text: "C. Inggris", correct: false },
      { text: "D. Indonesia", correct: false },
    ],
  },
  {
    question:
      "Seorang pemain dinyatakan menang dalam satu set permainan bulu tangkis apa bila telah mencapai angka ...",
    answers: [
      { text: "A. 21", correct: true },
      { text: "B. 20", correct: false },
      { text: "C. 11", correct: false },
      { text: "D. 10", correct: false },
    ],
  },
  {
    question: "Juaraan dunia bulu tangkis khusus putra adalah...",
    answers: [
      { text: "A. Jarum Super championship", correct: false },
      { text: "B. Sudirman Cup", correct: false },
      { text: "C. Thomas Cup", correct: true },
      { text: "D. Piala Presiden", correct: false },
    ],
  },
  {
    question:
      "Cara memegang raket seperti English Grip, tetapi raket diputar ke arah kiri sehingga ibu jari lebih aktif menekan raket disebut ...",
    answers: [
      { text: "A. Next hand grip", correct: true },
      { text: "B. Campuran", correct: false },
      { text: "C. Inggris", correct: false },
      { text: "D. America grip", correct: false },
    ],
  },
  {
    question: "Permulaan permainan bola voli diawali dengan dilakukannya ...",
    answers: [
      { text: "A. Passing", correct: false },
      { text: "B. Smash", correct: false },
      { text: "C. Servis", correct: true },
      { text: "D. Spike", correct: false },
    ],
  },
  {
    question: "Berapa standar ukuran panjang dan lebar lapangan bola voli  ...",
    answers: [
      { text: "A. 18 m x 9 m", correct: false },
      { text: "B. 15 m x 12 m", correct: false },
      { text: "C. 22 m x 11 m", correct: true },
      { text: "D. 26 m x 16 m", correct: false },
    ],
  },
  {
    question:
      "Teknik dasar yang berguna untuk mengoperkan bola kepada teman bermain disebut ...",
    answers: [
      { text: "A. Passing", correct: true },
      { text: "B. Smash", correct: false },
      { text: "C. Servis", correct: false },
      { text: "D. Spike", correct: false },
    ],
  },
  {
    question:
      "Teknik dasar yang perlu dikuasai dalam permainan bola voli adalah  ...",
    answers: [
      { text: "A. Passing, servis, smash, dan block", correct: true },
      { text: "B. Taktik penyerangan", correct: false },
      { text: "C. Strategi", correct: false },
      { text: "D. Spike", correct: false },
    ],
  },
  {
    question:
      "Nilai permainan bola voli berakhir bila satu di antara tim berhasil memperoleh ...",
    answers: [
      { text: "A. 20", correct: false },
      { text: "B. 11", correct: false },
      { text: "C. 21", correct: false },
      { text: "D. 25", correct: true },
    ],
  },
  {
    question:
      "Apakah organisasi yang menaungi olahraga bola voli internasional adalah  ...",
    answers: [
      { text: "A. FIBA", correct: false },
      { text: "B. IAAF", correct: false },
      { text: "C. FIVB", correct: true },
      { text: "D. FIFA", correct: false },
    ],
  },
  {
    question: "Siapakah yang menciptakan permainan bola voli ...",
    answers: [
      { text: "A. William C. Morgan", correct: true },
      { text: "B. Halsted Sringfi eld", correct: false },
      { text: "C. George J. Fisher", correct: false },
      { text: "D. Shin Tae Yong", correct: false },
    ],
  },
  {
    question:
      "Manakah yang bukan termasuk sarana dan prasarana dalam permainan bola voli ...",
    answers: [
      { text: "A. Lapangan bola voli", correct: false },
      { text: "B. Bola voli", correct: false },
      { text: "C. Tongkat estafet", correct: true },
      { text: "D. Net", correct: false },
    ],
  },
  {
    question: "Jumlah pemain bola voli dalam satu regu adalah ...",
    answers: [
      { text: "A. 20", correct: false },
      { text: "B. 11", correct: false },
      { text: "C. 21", correct: false },
      { text: "D. 25", correct: true },
    ],
  },
  {
    question:
      "Nilai permainan bola voli berakhir bila satu di antara tim berhasil memperoleh ...",
    answers: [
      { text: "A. 5 orang", correct: false },
      { text: "B. 7 orang", correct: false },
      { text: "C. 11 orang", correct: false },
      { text: "D. 6 orang", correct: true },
    ],
  },
  {
    question: "Ukuran tinggi net bola voli untuk putra dan putri adalah ...",
    answers: [
      { text: "A. 2.35 m dan 2.14 m", correct: false },
      { text: "B. 2.43 m dan 2.24 m", correct: true },
      { text: "C. 2.85 m dan 2.42 m", correct: false },
      { text: "D. 2.80 m dan 2.12 m", correct: false },
    ],
  },
  {
    question: "Induk organisasi bola voli se-Indonesia adalah ...",
    answers: [
      { text: "A. PBVSI", correct: true },
      { text: "B. FIVB", correct: false },
      { text: "C. PSSI", correct: false },
      { text: "D. PERBASI", correct: false },
    ],
  },
  {
    question:
      "Teknik dasar yang berguna untuk mengoperkan bola kepada teman bermain disebut ...",
    answers: [
      { text: "A. Passing", correct: true },
      { text: "B. Smash", correct: false },
      { text: "C. Servis", correct: false },
      { text: "D. Spike", correct: false },
    ],
  },
  {
    question:
      "Posisi yang memiliki tugas sebagai pengumpan kepada smasher adalah ...",
    answers: [
      { text: "A. Libero", correct: false },
      { text: "B. Spiker", correct: false },
      { text: "C. Setter", correct: true },
      { text: "D. Ace", correct: false },
    ],
  },
  {
    question:
      "Diameter bola yang digunakan untuk permainan bola voli adalah ...",
    answers: [
      { text: "A. 10-15 cm", correct: false },
      { text: "B. 18-20 cm", correct: true },
      { text: "C. 20-25 cm", correct: false },
      { text: "D. 30-35 cm", correct: false },
    ],
  },
  {
    question:
      "Hal terpenting yang harus dikuasai terlebih dahulu dalam permainan bola kasti adalah ...",
    answers: [
      { text: "A. Teknik dasar", correct: true },
      { text: "B. Taktik penyerangan", correct: false },
      { text: "C. strategi", correct: false },
      { text: "D. Cara membentuk tim yang tangguh", correct: false },
    ],
  },
  {
    question: "Lapangan bola kasti berbentuk ...",
    answers: [
      { text: "A. Persegi", correct: false },
      { text: "B. Bujur sangkar", correct: false },
      { text: "C. Persegi panjang", correct: true },
      { text: "D. Lingkaran", correct: false },
    ],
  },
  {
    question: "Pemain minimal untuk permainan kasti adalah ...",
    answers: [
      { text: "A. 20 pemain", correct: false },
      { text: "B. 11 pemain", correct: false },
      { text: "C. 21 pemain", correct: false },
      { text: "D. 12 pemain", correct: true },
    ],
  },
  {
    question: "Babak permainan dalam permainan bola kasti adalah   ...",
    answers: [
      { text: "A. 4 babak", correct: false },
      { text: "B. 3 babak", correct: false },
      { text: "C. 1 babak", correct: false },
      { text: "D. 2 babak", correct: true },
    ],
  },
  {
    question: "Bola kasti adalah jenis permainan dengan menggunakan ...",
    answers: [
      { text: "A. Bola besar", correct: false },
      { text: "B. Bola Basket", correct: false },
      { text: "C. Bola sepak", correct: false },
      { text: "D. Bola kecil", correct: true },
    ],
  },
  {
    question: "Arah bola hasil lemparan melambung adalah ...",
    answers: [
      { text: "A. ke samping", correct: false },
      { text: "B. Ke bawah", correct: false },
      { text: "C. Ke atas", correct: false },
      { text: "D. Mendatar", correct: true },
    ],
  },
  {
    question:
      "Jari tangan terbuka, posisi satu tangan seperti mulut buaya yang terbuka, merupakan bagian dari teknik ...",
    answers: [
      { text: "A. Menangkap bola datar", correct: true },
      { text: "B. Menangkap bola menggelinding", correct: false },
      { text: "C. Melempar bola datar", correct: false },
      { text: "D. Melempar bola menggelinding", correct: false },
    ],
  },
  {
    question:
      "Permainan bola kasti menggunakan alat pemukul yang terbuat dari ...",
    answers: [
      { text: "A. Marmer", correct: false },
      { text: "B. Besi", correct: false },
      { text: "C. Karet", correct: false },
      { text: "D. Kayu", correct: true },
    ],
  },
  {
    question: "Posisi tangan saat memegang pemukul adalah ...",
    answers: [
      { text: "A. Dipegang oleh salah satu tangan", correct: true },
      { text: "B. Dipegang oleh kedua tangan", correct: false },
      { text: "C. Kedua tangan saling berpegangan", correct: false },
      { text: "D. Kedua tangan tidak memegang apapun", correct: false },
    ],
  },
  {
    question:
      "Mengayun lengan seperti gerak bandul merupakan gerakan teknik lemparan ...",
    answers: [
      { text: "A. Bola mendatar", correct: false },
      { text: "B. Bola ke bawah", correct: true },
      { text: "C. Bola ke atas", correct: false },
      { text: "D. Bola ke samping", correct: false },
    ],
  },
  {
    question:
      "Pemain yang bertugas melempar bola yang akan dipukul disebut ...",
    answers: [
      { text: "A. Pitcher", correct: false },
      { text: "B. Umpire", correct: true },
      { text: "C. Catcher", correct: false },
      { text: "D. Setter", correct: false },
    ],
  },
  {
    question:
      "Tongkat dipegang dengan posisi tangan di bawah 2,5 cm atau 5 cm dari bonggol merupakan teknik memegang bet dengan cara pegangan  ...",
    answers: [
      { text: "A. Rendah", correct: false },
      { text: "B. Atas", correct: false },
      { text: "C. Bawah", correct: false },
      { text: "D. Tinggi", correct: true },
    ],
  },
  {
    question: "Permainan softball diciptakan oleh...",
    answers: [
      { text: "A. Pep Guardiola", correct: false },
      { text: "B. William G Morgan", correct: false },
      { text: "C. James Naismith", correct: false },
      { text: "D. George Hancock", correct: true },
    ],
  },
  {
    question: "Lamanya waktu bermain sofbol adalah  ...",
    answers: [
      { text: "A. 5 inning", correct: false },
      { text: "B. 6 inning", correct: false },
      { text: "C. 7 inning", correct: true },
      { text: "D. 8 inning", correct: false },
    ],
  },
  {
    question: "Softball merupakan jenis permainan...",
    answers: [
      { text: "A. Bola besar", correct: false },
      { text: "B. Bola kecil", correct: true },
      { text: "C. Bola lempar", correct: false },
      { text: "D. Bola Tembak", correct: false },
    ],
  },
  {
    question: "Nama lain dari permainan softball adalah ...",
    answers: [
      { text: "A. Ball toss", correct: false },
      { text: "B. Ping Pong", correct: false },
      { text: "C. Basketball", correct: false },
      { text: "D. Rounders", correct: true },
    ],
  },
  {
    question: "Panjang tiap sisi lapangan softball adalah  ...",
    answers: [
      { text: "A. 20.28 sampai 22.91 meter", correct: false },
      { text: "B. 16,76 sampai 18,29 meter", correct: true },
      { text: "C. 14,35 sampai 16,75 meter", correct: false },
      { text: "D. 13,07 sampai 14,34 meter", correct: false },
    ],
  },
  {
    question: "Jarak dari home base ke tempat pelempar adalah ...",
    answers: [
      { text: "A. 20,23 meter", correct: false },
      { text: "B. 16,76 meter", correct: false },
      { text: "C. 15,92 meter", correct: false },
      { text: "D. 13,07 meter", correct: true },
    ],
  },
  {
    question: "Tempat pelempar/pitcher's plate berukuran  ...",
    answers: [
      { text: "A. 60 X 16 cm", correct: true },
      { text: "B. 45 X 10 cm", correct: false },
      { text: "C. 40 X 16 cm", correct: false },
      { text: "D. 35 X 16 cm", correct: false },
    ],
  },
  {
    question:
      "Permainan softball menggunakan alat pemukul yang terbuat dari  ...",
    answers: [
      { text: "A. Karet", correct: false },
      { text: "B. Besi", correct: false },
      { text: "C. Kayu", correct: true },
      { text: "D. Marmer", correct: false },
    ],
  },
  {
    question:
      "Dalam permainan softball, pergantian dilakukan apabila regu bertahan berhasil mematikan pemain dari regu penyerang sebanyak ... orang.",
    answers: [
      { text: "A. 2", correct: false },
      { text: "B. 1", correct: false },
      { text: "C. 3", correct: false },
      { text: "D. 4", correct: true },
    ],
  },
  {
    question: "Arti on deck circle adalah ...",
    answers: [
      {
        text: "A. Tempat berdiri sebelum mendapat giliran memukul",
        correct: true,
      },
      { text: "B. Tempat berdiri pemukul yang akan memukul.", correct: false },
      { text: "C. Tempat berdiri picher yang mau melempar.", correct: false },
      { text: "D. Tempat beridiri setelah memukul", correct: false },
    ],
  },
  {
    question: "Permainan softball berasal dari negara  ...",
    answers: [
      { text: "A. Inggris", correct: false },
      { text: "B. Amerika", correct: true },
      { text: "C. Jerman ", correct: false },
      { text: "D. Bulgaria", correct: false },
    ],
  },
  {
    question:
      "Cabang olahraga mirip dengan bola voli dan bulu tangkis yang dimainkan dengan menggunakan kaki disebut ...",
    answers: [
      { text: "A. Sepak bola", correct: false },
      { text: "B. Rugby", correct: false },
      { text: "C. American Football", correct: false },
      { text: "D. Sepak Takraw", correct: true },
    ],
  },
  {
    question: "Sepak takraw disebut juga sebagai ...",
    answers: [
      { text: "A. Ping pong", correct: false },
      { text: "B. Football", correct: false },
      { text: "C. Basket", correct: false },
      { text: "D. Sepak Rago", correct: true },
    ],
  },
  {
    question: "Induk organisasi sepak takraw di dunia yaitu ...",
    answers: [
      { text: "A. PTMSI", correct: false },
      { text: "B. PSSI", correct: false },
      { text: "C. PERBASI", correct: false },
      { text: "D. ISTAF", correct: true },
    ],
  },
  {
    question:
      "Pada tahun berapakah organisasi internasional sepak takraw dibentuk ...",
    answers: [
      { text: "A. 1980", correct: false },
      { text: "B. 1982", correct: false },
      { text: "C. 1983", correct: false },
      { text: "D. 1992", correct: true },
    ],
  },
  {
    question: "Induk organisasi sepak takraw di Indonesia adalah ...",
    answers: [
      { text: "A. PSTI", correct: true },
      { text: "B. Perserasi", correct: false },
      { text: "C. ASTAF", correct: false },
      { text: "D. PSSI", correct: false },
    ],
  },
  {
    question: "Bola basket merupakan contoh dari jenis bola yang mana...",
    answers: [
      { text: "A. Bola kecil", correct: false },
      { text: "B. Bola Tembak", correct: false },
      { text: "C. Bola Sepak", correct: false },
      { text: "D. Bola Besar", correct: true },
    ],
  },
  {
    question:
      "Bola bulu tangkis merupakan contoh dari jenis bola yang mana ...",
    answers: [
      { text: "A. Bola besar", correct: false },
      { text: "B. Bola tembak", correct: false },
      { text: "C. Bola sepak", correct: false },
      { text: "D. Bola kecil", correct: true },
    ],
  },
  {
    question:
      "Pemain sepak bola menggunakan bagian tubuh apa untuk mengontrol bola...",
    answers: [
      { text: "A. Tangan", correct: false },
      { text: "B. Kaki", correct: true },
      { text: "C. Jari tangan", correct: false },
      { text: "D. Lengan", correct: false },
    ],
  },
  {
    question: "Jenis atletik apa yang melibatkan lari, lompat, dan lempar...",
    answers: [
      { text: "A. Atletik Gabungan", correct: true },
      { text: "B. Atletik lompat tinggi", correct: false },
      { text: "C. Atletik lempar", correct: false },
      { text: "D. Aerobik", correct: false },
    ],
  },
  {
    question: "Apa yang menjadi tujuan utama dalam permainan bola voli...",
    answers: [
      { text: "A. Mencetak gol", correct: false },
      { text: "B. Mencetak poin", correct: true },
      { text: "C. Mencegah lawan mencetak poin", correct: false },
      { text: "D. Mencetak sejarah", correct: false },
    ],
  },
  {
    question: "Bentuk bola yang digunakan dalam permainan rugby adalah...",
    answers: [
      { text: "A. Bola kecil", correct: false },
      { text: "B. Bola tembak", correct: false },
      { text: "C. Bola sepak", correct: false },
      { text: "D. Bola Besar", correct: true },
    ],
  },
  {
    question:
      "Dalam lompat jauh, atlet mencoba melompat sejauh mungkin dari titik yang disebut...",
    answers: [
      { text: "A. Kasti", correct: false },
      { text: "B. Tolak peluru", correct: false },
      { text: "C. Lompat biasa", correct: false },
      { text: "D. Papan lompat", correct: true },
    ],
  },
  {
    question: "Berapakah jumlah pemain dalam tim bola basket ...",
    answers: [
      { text: "A. 5", correct: true },
      { text: "B. 11", correct: false },
      { text: "C. 7", correct: false },
      { text: "D. 2", correct: false },
    ],
  },
  {
    question:
      "Apa nama atletik yang membutuhkan kedisiplinan tinggi dan keterampilan akrobatik ...",
    answers: [
      { text: "A. Lompat tinggi", correct: true },
      { text: "B. Lompat galah", correct: false },
      { text: "C. Lompat jauh", correct: false },
      { text: "D. Lompat Indah", correct: false },
    ],
  },
  {
    question:
      "Dalam atletik, apa yang menjadi tujuan dari nomor lari marathon ...",
    answers: [
      { text: "A. Menyelesaikan jarak tercepat", correct: false },
      { text: "B. Mencapai kecepatan tertentu", correct: false },
      { text: "C. Menyelesaikan jarak dengan waktu terlama", correct: true },
      { text: "D. Tidak menyelesaikannya", correct: false },
    ],
  },
  {
    question:
      "Nilai permainan bola voli berakhir bila satu di antara tim berhasil memperoleh ...",
    answers: [
      { text: "A. 20", correct: false },
      { text: "B. 11", correct: false },
      { text: "C. 21", correct: false },
      { text: "D. 25", correct: true },
    ],
  },
  {
    question: "Teknik menembak sambil melayang dalam bola basket disebut ...",
    answers: [
      { text: "A. shooting", correct: false },
      { text: "B. lay up shoot", correct: false },
      { text: "C. Jump short", correct: true },
      { text: "D. Floater", correct: false },
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
