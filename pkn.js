//code soalnya panjang, jadi skip ke paling bawah untuk code lainnya
const questions = [
  {
    question: "Apa yang dimaksud dengan hak asasi manusia?",
    answers: [
      { text: "A. Hak milik pribadi", correct: false },
      { text: "B. Hak alamiah manusia", correct: false },
      { text: "C. Hak fundamental setiap manusia", correct: true },
      { text: "D. Hak istimewa kelompok tertentu", correct: false },
    ],
  },
  {
    question:
      "Siapakah presiden Indonesia pertama yang menandatangani Proklamasi Kemerdekaan?",
    answers: [
      { text: "A. Soekarno", correct: true },
      { text: "B. Soeharto", correct: false },
      { text: "C. Joko Widodo", correct: false },
      { text: "D. Megawati Soekarnoputri", correct: false },
    ],
  },
  {
    question: "Fungsi DPR (Dewan Perwakilan Rakyat) adalah",
    answers: [
      { text: "A. Membuat kebijakan pemerintah", correct: false },
      { text: "B. Melaksanakan kebijakan pemerintah", correct: false },
      { text: "C. Mengawasi pelaksanaan kebijakan pemerintah", correct: true },
      { text: "D. Menetapkan kebijakan presiden", correct: false },
    ],
  },
  {
    question:
      "Pancasila sebagai dasar negara Indonesia terdiri dari berapa sila?",
    answers: [
      { text: "A. 3", correct: false },
      { text: "B. 4", correct: false },
      { text: "C. 5", correct: true },
      { text: "D. 6", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan demokrasi?",
    answers: [
      { text: "A. Kekuasaan raja", correct: false },
      { text: "B. Kekuasaan rakyat", correct: true },
      { text: "C. Kekuasaan militer", correct: false },
      { text: "D. Kekuasaan agama", correct: false },
    ],
  },
  {
    question:
      "Apa peran Mahkamah Konstitusi (MK) dalam sistem ketatanegaraan Indonesia?",
    answers: [
      { text: "A. Membuat undang-undang", correct: false },
      { text: "B. Mengadili perkara konstitusi", correct: true },
      { text: "C. Menetapkan kebijakan pemerintah", correct: false },
      { text: "D. Menjadi lembaga eksekutif", correct: false },
    ],
  },
  {
    question: "Tokoh yang terkenal sebagai bapak koperasi di Indonesia adalah",
    answers: [
      { text: "A. Mohammad Hatta", correct: true },
      { text: "B. Soekarno", correct: false },
      { text: "C. Ra Kartini", correct: false },
      { text: "D. Raden Saleh", correct: false },
    ],
  },
  {
    question: "Siapa penulis naskah proklamasi kemerdekaan Indonesia?",
    answers: [
      { text: "A. Mohammad Hatta", correct: false },
      { text: "B. Soekarno", correct: true },
      { text: "C. Soeharto", correct: false },
      { text: "D. Agus Salim", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan globalisasi?",
    answers: [
      { text: "A. Penyebaran budaya lokal", correct: false },
      { text: "B. Integrasi ekonomi dan komunikasi global", correct: true },
      { text: "C. Pemisahan antarbangsa", correct: false },
      { text: "D. Isolasi dalam kebijakan luar negeri", correct: false },
    ],
  },
  {
    question:
      "Siapakah tokoh yang terkenal dengan perjuangannya dalam memperjuangkan hak-hak perempuan di Indonesia?",
    answers: [
      { text: "A. Soekarno", correct: false },
      { text: "B. Kartini", correct: true },
      { text: "C. Hatta", correct: false },
      { text: "D. Megawati Soekarnoputri", correct: false },
    ],
  },
  {
    question:
      "Berikut ini yang merupakan manfaat adanya pancasila sebagai dasar negara adalah ",
    answers: [
      { text: "A. pemerintahan yang otoriter", correct: false },
      { text: "B. kehancuran  sebuah negara secara lambat", correct: false },
      {
        text: "C. cita cita dan tujuan negara dapat tercapai dengan baik",
        correct: true,
      },
      { text: "D. ketidakteraturan dalam pemerintahan", correct: false },
    ],
  },
  {
    question:
      "Sebagai dasar negara, Pancasila memiliki beberapa fungsi antara lain sebagai berikut ini, kecuali ..",
    answers: [
      { text: "A. dasar berdirinya kedaulatan negara", correct: false },
      { text: "B. dasar kegiatan penyelenggaraan negara", correct: false },
      { text: "C. dasar untuk menguasai negara lain", correct: true },
      { text: "D. dasar dan sumber hukum nasional", correct: false },
    ],
  },
  {
    question:
      "Pada situasi kegentingan yang memaksa, presiden dapat menetapkan ....",
    answers: [
      { text: "A. UU", correct: false },
      { text: "B. TAP MPR", correct: false },
      {
        text: "C. Peraturan Pemerintah Pengganti Undang- Undang",
        correct: true,
      },
      { text: "D. Peraturan Pemerintah", correct: false },
    ],
  },
  {
    question:
      "Salah satu contoh sikap dan perbuatan menaati aturan- aturan hukum yang berlaku dalam kehidupan masyarakat adalah ",
    answers: [
      { text: "A. mematuhi aturan berlalu lintas ", correct: true },
      { text: "B. mengikuti kerja bakti warga ", correct: false },
      {
        text: "C. memasang hiasan dan dekorasi menyambut hari kemerdekaan",
        correct: false,
      },
      { text: "D. bermusyawarah dalam menyelesaikan masalah", correct: false },
    ],
  },
  {
    question:
      "Kesadaran terhadap aturan hukum dapat terwujud apabila sikap warga masyarakat ....",
    answers: [
      {
        text: "A. mengetahui dan hafal seluruh aturan hukum yang berlaku ",
        correct: false,
      },
      {
        text: "B. memiliki sikap yang positif terhadap aturan hukum yang berlaku ",
        correct: true,
      },
      {
        text: "C. mengikuti sosialisasi terhadap aturan hukum yang baru",
        correct: false,
      },
      { text: "D. mempunyai produk aturan hukum yang berlaku", correct: false },
    ],
  },
  {
    question:
      "Di berbagai daerah, VOC melakukan tindakan dengan melaksanakan politik devide et impera. Pengertian politik devide et impera yaitu...",
    answers: [
      { text: "A. politik balas budi", correct: false },
      { text: "B. politik tebang pilih", correct: false },
      { text: "C. politik etis", correct: false },
      { text: "D. politik adu domba", correct: true },
    ],
  },
  {
    question:
      "Memunculkan sikap tenggang rasa dan tepo seliro dalam hubungan sosial merupakan salah satu nilai ajaran Pancasila terutama sila ....",
    answers: [
      { text: "A. pertama", correct: false },
      { text: "B. kedua", correct: true },
      { text: "C. ketiga", correct: false },
      { text: "D. keempat", correct: false },
    ],
  },
  {
    question: "Dasar negara Indonesia adalah ...",
    answers: [
      { text: "A. burung garuda", correct: false },
      { text: "B. Pancasila", correct: true },
      { text: "C. UUD 1945", correct: false },
      { text: "D. Bhinneka Tunggal Ika", correct: false },
    ],
  },
  {
    question:
      "Lembaga negara yang berwenang melakukan pengambilan sumpah pelantikan presiden adalah ...",
    answers: [
      { text: "A. DPR ", correct: false },
      { text: "B. MPR ", correct: true },
      { text: "C. MA", correct: false },
      { text: "D. MK", correct: false },
    ],
  },
  {
    question:
      "Seorang warga negara berhak memilih dalam pemilu, jika memenuhi syarat antara lain ...",
    answers: [
      { text: "A. berusia 21 tahun atau sudah menikah", correct: false },
      { text: "B. berpendidikan paling rendah SLTA", correct: false },
      { text: "C. tidak sedang hilang ingatan", correct: false },
      { text: "D. sehat jasmani dan Rohani", correct: true },
    ],
  },
  {
    question:
      "Ada beberapa sistem pemerintahan di dunia. Saat ini Indonesia menganut sistem pemerintahan ..",
    answers: [
      { text: "A. sosialis", correct: false },
      { text: "B. komunis", correct: false },
      { text: "C. presidensial", correct: true },
      { text: "D. parlementer", correct: false },
    ],
  },
  {
    question:
      "MPR dan presiden merupakan dua lembaga negara yang saling berhubungan. Kedudukan MPR dengan presiden adalah ...",
    answers: [
      { text: "A. sama dan merupakan mitra kerja", correct: false },
      { text: "B. lebih tingi presiden", correct: false },
      { text: "C. lebih tinggi MPR", correct: false },
      { text: "D. presiden sebagai mandataris MPR", correct: true },
    ],
  },
  {
    question: "Di bawah ini yang merupakan salah satu tugas MPR adalah….",
    answers: [
      { text: "A. mengubah dan menetapkan UUD", correct: true },
      { text: "B. menyusun RAPBN", correct: false },
      { text: "C. membuat undang-undang", correct: false },
      { text: "D. mengesahkan undang-undang", correct: false },
    ],
  },
  {
    question:
      "DPR memiliki hak untuk melakukan penyelidikan terhadap kebijakan pemerintah yang disebut……",
    answers: [
      { text: "A. hak menyatakan pendapat", correct: false },
      { text: "B. hak interpelasi ", correct: false },
      { text: "C. hak angket", correct: true },
      { text: "D. hak budget", correct: false },
    ],
  },
  {
    question:
      "DPD merupakan sebuah lembaga yang dibentuk sebagai perwujudan demokrasi di Indonesia. Kewenangan DPD adalah ...",
    answers: [
      { text: "A. menentukan kebijakan fiskal", correct: false },
      { text: "B. pengolahan sumber daya daerah", correct: true },
      {
        text: "C. menetapkan peraturan tentang pertahanan dan keamanan",
        correct: false,
      },
      { text: "D. mengurangi anggaran pendidikan", correct: false },
    ],
  },
  {
    question: "Kedudukan DPD terletak di tiap ...",
    answers: [
      { text: "A. provinsi", correct: true },
      { text: "B. kabupaten", correct: false },
      { text: "C. kota", correct: false },
      { text: "D. ibu kota", correct: false },
    ],
  },
  {
    question: "Menurut UUD 1945 yang memegang kekuasaan pemerintahan adalah….",
    answers: [
      { text: "A. MPR", correct: false },
      { text: "B. DPR", correct: false },
      { text: "C. DPD", correct: false },
      { text: "D. presiden", correct: true },
    ],
  },
  {
    question:
      "Ir Soekarno mengemukaan gagasannya tentang dasar negara pada tanggal...",
    answers: [
      { text: "A. 4 Juni 1945", correct: false },
      { text: "B. 1 Juli 1945", correct: false },
      { text: "C. 2 Juni 1945", correct: false },
      { text: "D. 1 Juni 1945", correct: true },
    ],
  },
  {
    question:
      "Tokoh di bawah ini yang menjabat sebagai ketua BPUPKI adalah ...",
    answers: [
      { text: "A. Radjiman Widyodiningrat", correct: true },
      { text: "B. Moh. Hatta", correct: false },
      { text: "C. Moh. Yamin", correct: false },
      { text: "D. Mr. Soepomo", correct: false },
    ],
  },
  {
    question:
      "Di dalam Pembukaan UUD 1945 termuat hal-hal berikut ini, kecuali ....",
    answers: [
      { text: "A. tujuan negara", correct: false },
      { text: "B. sejarah negara", correct: true },
      { text: "C. bentuk negara", correct: false },
      { text: "D. dasar negara", correct: false },
    ],
  },
  {
    question: "Dasar Negara Indonesia merdeka ditetapkan pada tanggal ....",
    answers: [
      { text: "A. 17 Agustus 1945", correct: true },
      { text: "B. 18 Agustus 1945", correct: false },
      { text: "C. 19 Agustus 1945", correct: false },
      { text: "D. 20 Agustus 1945", correct: false },
    ],
  },
  {
    question:
      "Agar nilai-nilai Pancasila tetap hidup dan berkembang dalam kehidupan bermasyarakat, berbangsa, dan bernegara maka seharusnya nilai-nilai Pancasila harus ....",
    answers: [
      { text: "A. Dihafalkan isinya", correct: false },
      { text: "B. Dihayati isinya", correct: false },
      { text: "C. Dijadikan materi dalam setiap perlombaan", correct: false },
      {
        text: "D. Dihayati dan diterapkan dalam kehidupan sehari-hari",
        correct: true,
      },
    ],
  },
  {
    question:
      "Contoh perilaku yang mencerminkan sila ke-5 Pancasila adalah ....",
    answers: [
      {
        text: "A. Mementingkan urusan pribadi di atas kepentingan bersama",
        correct: false,
      },
      { text: "B. Suka menabung", correct: false },
      {
        text: "C. Suka menolong dengan memberi bantuan sosial kepada masyarakat",
        correct: true,
      },
      { text: "D. Rajin melatih keterampilan diri", correct: false },
    ],
  },
  {
    question: "Contoh penerapan Pancasila ke-3 yakni, kecuali...",
    answers: [
      { text: "A. Bersikap individualis", correct: true },
      {
        text: "B. Berteman dengan tidak membeda-bedakan suku, agama, ras, dan antargolongan",
        correct: false,
      },
      { text: "C. Menghargai teman di kelas", correct: false },
      { text: "D. Memiliki rasa cinta tanah air", correct: false },
    ],
  },
  {
    question: "Contoh penerapan Pancasila ke-5 yakni, kecuali...",
    answers: [
      { text: "A. Membiasakan antre", correct: false },
      { text: "B. Belajar sesuai kemampuan", correct: true },
      { text: "C. Bersikap adil dengan teman saat bermain", correct: false },
      { text: "D. Belajar dengan sungguh-sungguh", correct: false },
    ],
  },
  {
    question:
      "Kuasa untuk menerima atau melakukan sesuatu yang mestinya diterima/dilakukan oleh pihak-pihak yang lain yang pada prinsipnya dapat dituntut secara paksa olehnya disebut ....",
    answers: [
      { text: "A. Hak", correct: true },
      { text: "B. Kewajiban", correct: false },
      { text: "C. Wewenang", correct: false },
      { text: "D. Tugas", correct: false },
    ],
  },
  {
    question:
      "Mengakui persamaan derajat, hak, dan kewajiban antara sesama manusia merupakan pengamalan sila .... dari Pancasila.",
    answers: [
      { text: "A. Pertama", correct: false },
      { text: "B. Kedua", correct: true },
      { text: "C. Ketiga", correct: false },
      { text: "D. Keempat", correct: false },
    ],
  },
  {
    question:
      "Negara harus mempunyai UU Kewarganegaraan karena diperlukan untuk ....",
    answers: [
      { text: "A. Mengetahui jumlah warga negara", correct: false },
      {
        text: "B. Membatasi masuknya orang asing ke Indonesia",
        correct: false,
      },
      {
        text: "C. Menentukan syarat-syarat menjadi warga negara",
        correct: true,
      },
      { text: "D. Menjamin hak dan kewajiban warga negara", correct: false },
    ],
  },
  {
    question:
      "Undang-Undang NRI Tahun 1945 Pasal 30 menekankan bahwa usaha pertahanan dan keamanan negara merupakan tugas dari .... sebagai kekuatan utama.",
    answers: [
      { text: "A. Seluruh elemen pemerintahan dan masyarakat", correct: false },
      { text: "B. TNI", correct: false },
      { text: "C. Seluruh rakyat Indonesia", correct: true },
      { text: "D. TNI dan POLISI", correct: false },
    ],
  },
  {
    question:
      "Pada masa reformasi, telah terjadi beberapa kali pergantian presiden. Presiden Joko Widodo yang memegang kekuasaan sebagai kepala negara dan kepala pemerintahan saat ini adalah presiden ke ...",
    answers: [
      { text: "A. 3", correct: false },
      { text: "B. 4", correct: false },
      { text: "C. 5", correct: false },
      { text: "D. 7", correct: true },
    ],
  },
  {
    question: "Apa yang dimaksud dengan konstitusi?",
    answers: [
      { text: "A. Hukum adat", correct: false },
      { text: "B. Undang-undang", correct: false },
      { text: "C. Peraturan pemerintah", correct: false },
      { text: "D. Hukum tertulis yang mengatur dasar negara", correct: true },
    ],
  },
  {
    question:
      "Siapakah tokoh yang terkenal dengan perjuangannya dalam memperjuangkan hak-hak buruh di Indonesia?",
    answers: [
      { text: "A. Soekarno", correct: false },
      { text: "B. Mohammad Hatta", correct: false },
      { text: "C. Kartini", correct: false },
      { text: "D. Soe Hok Gie", correct: true },
    ],
  },
  {
    question:
      "Siapakah tokoh yang dikenal sebagai bapak pembangunan di Indonesia?",
    answers: [
      { text: "A. Soekarno", correct: false },
      { text: "B. Mohammad Hatta", correct: false },
      { text: "C. Soeharto", correct: true },
      { text: "D. Megawati Soekarnoputri", correct: false },
    ],
  },
  {
    question:
      "Organisasi internasional yang berfokus pada perdagangan antarnegara adalah...",
    answers: [
      { text: "A. ASEAN", correct: false },
      { text: "B. PBB (Pertubuhan Bangsa-Bangsa Bersatu)", correct: false },
      { text: "C. WTO (World Trade Organization)", correct: true },
      {
        text: "D. UNICEF (United Nations International Children's Emergency Fund)",
        correct: false,
      },
    ],
  },
  {
    question: "Apa yang dimaksud dengan dualisme hukum?",
    answers: [
      { text: "A. Keberlakuan dua sistem hukum berbeda", correct: true },
      { text: "B. Kesetaraan dalam hukum", correct: false },
      {
        text: "C. Hukum yang hanya berlaku di daerah tertentu",
        correct: false,
      },
      { text: "D. Pemberlakuan hukum yang sama untuk semua", correct: false },
    ],
  },
  {
    question:
      "Siapa tokoh yang terkenal dengan perjuangannya dalam bidang pendidikan di Indonesia?",
    answers: [
      { text: "A. Soekarno", correct: false },
      { text: "B. Kartini", correct: false },
      { text: "C. Mohammad Hatta", correct: false },
      { text: "D. Ki Hajar Dewantara", correct: true },
    ],
  },
  {
    question: "Apa yang dimaksud dengan politik luar negeri bebas aktif?",
    answers: [
      { text: "A. Tidak terlibat dalam urusan luar negeri", correct: false },
      {
        text: "B. Bersikap netral dalam konflik internasional",
        correct: false,
      },
      {
        text: "C. Aktif berperan dalam hubungan internasional tanpa ikut campur dalam konflik negara lain",
        correct: true,
      },
      { text: "D. Mengutamakan kebijakan isolasionis", correct: false },
    ],
  },
  {
    question:
      "Siapa penulis buku Indonesia Menggugat yang memicu pergerakan nasional Indonesia?",
    answers: [
      { text: "A. Soekarno", correct: true },
      { text: "B. Mohammad Hatta", correct: false },
      { text: "C. Soe Hok Gie", correct: false },
      { text: "D. Tan Malaka", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan negara hukum?",
    answers: [
      { text: "A. Negara yang hukumnya tidak berlaku", correct: false },
      { text: "B. Negara yang mengabaikan hukum", correct: false },
      { text: "C. Negara yang diatur dan dipimpin oleh hukum", correct: true },
      { text: "D. Negara yang tidak memiliki sistem hukum", correct: false },
    ],
  },
  {
    question:
      "Bagaimana kedudukan dan peran Wakil Presiden dalam sistem pemerintahan Indonesia?",
    answers: [
      { text: "A. Kepala negara", correct: false },
      {
        text: "B. Pembantu presiden dan penerus presiden jika terjadi kekosongan jabatan",
        correct: true,
      },
      { text: "C. Ketua DPR", correct: false },
      { text: "D. Kepala pemerintahan daerah", correct: false },
    ],
  },
  {
    question:
      "Pancasila sebagai pandangan hidup bangsa dan negara bersifat terbuka. Artinya...",
    answers: [
      {
        text: "A. menerima pengaruh asing sebagai suatu keharusan",
        correct: false,
      },
      {
        text: "B. menerima pengaruh dan budaya asing dengan selektif",
        correct: true,
      },
      {
        text: "C. menerima masuknya ajaran dan pandangan ideologi yang lain",
        correct: false,
      },
      {
        text: "D. menyaring budaya dan iptek dengan penuh kewaspadaan",
        correct: false,
      },
    ],
  },
  {
    question: "Bentuk pengamalan Pancasila dalam kehidupan keluarga yaitu...",
    answers: [
      { text: "A. melaksanakan tugas sekolah", correct: false },
      { text: "B. membantu pekerjaan orang tua", correct: true },
      { text: "C. mengikuti kegiatan karang taruna", correct: false },
      { text: "D. mengikuti perlombaan kegiatan 17 agustus", correct: false },
    ],
  },
  {
    question:
      "Pancasila sebagai norma dasar negara yang fundamental, artinya...",
    answers: [
      {
        text: "A. aturan yang menjadi acuan dalam berperilaku",
        correct: false,
      },
      {
        text: "B. aturan pokok untuk menjalankan kedaulatan rakyat",
        correct: false,
      },
      { text: "C. kaidah negara yang berlaku untuk selamanya", correct: false },
      {
        text: "D. aturan pokok untuk mengatur kehidupan bangsa dan negara",
        correct: true,
      },
    ],
  },
  {
    question:
      "Peraturan perundang-undangan yang ditetapkan oleh presiden untuk menjalankan perintah peraturan perundang-undangan yang lebih tinggi di sebut...",
    answers: [
      { text: "A. peraturan Presiden", correct: true },
      { text: "B. peraturan Pemerintah", correct: false },
      { text: "C. keputusan Presiden", correct: false },
      { text: "D. instruksi Presiden", correct: false },
    ],
  },
  {
    question:
      "Contoh peran serta siswa dalam mematuhi peraturan perundang-undangan dalam kehidupan sehari-hari di sekolah yaitu...",
    answers: [
      { text: "A. menaati tata tertib siswa", correct: true },
      { text: "B. melaksanakan semua perintah guru", correct: false },
      { text: "C. suka mengalah dalam pergaulan", correct: false },
      { text: "D. melaksanakan piket setiap hari", correct: false },
    ],
  },
  {
    question:
      "Supaya undang-undang yang dibuatoleh presiden dan DPR dapat di patuhi oleh masyarakat maka seharusnya sesuai dengan...",
    answers: [
      {
        text: "A. kehendak pemerintah untuk kepentingan presiden",
        correct: false,
      },
      { text: "B. kehendak DPR untuk kepentingan presiden", correct: false },
      {
        text: "C. kehendak presiden untuk kepentingan para menteri",
        correct: false,
      },
      { text: "D. kebutuhan Masyarakat", correct: true },
    ],
  },
  {
    question:
      "Apa yang dimaksud dengan gotong royong dalam masyarakat Indonesia?",
    answers: [
      { text: "A. Pembagian tugas dalam keluarga", correct: false },
      { text: "B. Bekerja sama dalam kebersamaan", correct: true },
      { text: "C. Pemberian bantuan sosial", correct: false },
      { text: "D. Persaingan antarindividu", correct: false },
    ],
  },
  {
    question:
      "Apa peran Badan Pemeriksa Keuangan (BPK) dalam sistem pengawasan keuangan negara?",
    answers: [
      { text: "A. Membuat kebijakan fiskal", correct: false },
      { text: "B. Mengelola keuangan negara", correct: false },
      { text: "C. Mengawasi pengelolaan keuangan negara", correct: true },
      { text: "D. Menetapkan anggaran belanja negara", correct: false },
    ],
  },
  {
    question:
      "Apa yang dimaksud dengan Tri Tunggal dalam konsep pembangunan Indonesia?",
    answers: [
      { text: "A. Politik, ekonomi, dan budaya ", correct: true },
      { text: "B. Industri, pertanian, dan perdagangan ", correct: false },
      { text: "C. Ekonomi, sosial, dan budaya", correct: false },
      { text: "D. Pertahanan, keamanan, dan pendidikan", correct: false },
    ],
  },
  {
    question:
      "Apa yang dimaksud dengan keadilan sosial bagi seluruh rakyat Indonesia?",
    answers: [
      { text: "A. Pembagian harta secara merata", correct: false },
      { text: "B. Kesetaraan dalam segala bidang", correct: true },
      { text: "C. Pemerataan kekayaan di masyarakat", correct: false },
      {
        text: "D. Pemberian hak istimewa kepada golongan tertentu",
        correct: false,
      },
    ],
  },
  {
    question:
      "Peran lembaga peradilan dalam sistem ketatanegaraan Indonesia adalah...",
    answers: [
      { text: "A. Membuat undang-undang", correct: false },
      { text: "B. Mengawasi pelaksanaan kebijakan pemerintah", correct: false },
      { text: "C. Menegakkan hukum dan keadilan", correct: true },
      { text: "D. Menetapkan kebijakan presiden", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan demokrasi terpimpin?",
    answers: [
      { text: "A. Sistem pemerintahan monarki", correct: false },
      { text: "B. Sistem pemerintahan otoriter", correct: true },
      {
        text: "C. Sistem pemerintahan demokratis dengan kebijakan terpilih",
        correct: false,
      },
      {
        text: "D. Sistem pemerintahan demokratis dengan panduan satu pemimpin",
        correct: false,
      },
    ],
  },
  {
    question:
      "Siapakah tokoh yang terkenal dengan perjuangannya dalam memperjuangkan hak anak di Indonesia?",
    answers: [
      { text: "A. Soekarno", correct: false },
      { text: "B. Mohammad Hatta", correct: false },
      { text: "C. Ani Yudhoyono", correct: true },
      { text: "D. Soeharto", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan pemberdayaan masyarakat?",
    answers: [
      { text: "A. Penghapusan peran masyarakat ", correct: false },
      { text: "B. Memberikan wewenang kepada pemerintah ", correct: false },
      {
        text: "C. Meningkatkan kemandirian dan partisipasi masyarakat dalam pengambilan keputusan",
        correct: true,
      },
      {
        text: "D. Pemberian wewenang kepada kelompok tertentu",
        correct: false,
      },
    ],
  },
  {
    question: "Apa yang dimaksud dengan hak imunitas diplomatik?",
    answers: [
      { text: "A. Hak istimewa diplomat ", correct: false },
      { text: "B. Kebebasan berbicara diplomat ", correct: false },
      {
        text: "C. Hak diplomat untuk terlibat dalam politik domestik",
        correct: false,
      },
      {
        text: "D. Kekebalan hukum bagi diplomat dari hukum negara penerima",
        correct: true,
      },
    ],
  },
  {
    question: "Apa yang dimaksud dengan Masyarakat Ekonomi ASEAN (MEA)?",
    answers: [
      { text: "A. Integrasi ekonomi antara negara ASEAN", correct: true },
      { text: "B. Organisasi ekonomi global", correct: false },
      { text: "C. Aliansi militer ASEAN", correct: false },
      { text: "D. Kesatuan mata uang ASEAN", correct: false },
    ],
  },
  {
    question:
      "Siapa tokoh yang dikenal sebagai Bapak Pendidikan Nasional di Indonesia?",
    answers: [
      { text: "A. Soekarno", correct: false },
      { text: "B. Mohammad Hatta", correct: true },
      { text: "C. Ki Hajar Dewantara", correct: false },
      { text: "D. Sutan Sjahrir", correct: false },
    ],
  },
  {
    question:
      "Apa yang menjadi fungsi dari Kementerian Koordinator Bidang Perekonomian di Indonesia?",
    answers: [
      { text: "A. Mengatur urusan luar negeri", correct: false },
      {
        text: "B. Mengkoordinasikan kebijakan perekonomian nasional",
        correct: true,
      },
      { text: "C. Menangani masalah keamanan dalam negeri", correct: false },
      { text: "D. Menetapkan kebijakan pertahanan negara", correct: false },
    ],
  },
  {
    question: "Siapakah tokoh yang dikenal sebagai Bapak Kepolisian Indonesia?",
    answers: [
      { text: "A. Soekarno ", correct: false },
      { text: "B. Mohammad Hatta ", correct: false },
      { text: "C. Jenderal Soedirman", correct: false },
      { text: "D. Jenderal Polisi Soetoyo", correct: true },
    ],
  },
  {
    question: "Apa yang dimaksud dengan globalisasi budaya?",
    answers: [
      { text: "A. Penyebaran budaya lokal ke seluruh dunia", correct: true },
      { text: "B. Penciptaan budaya baru di tingkat global", correct: false },
      {
        text: "C. Penyatuan budaya seluruh dunia menjadi satu",
        correct: false,
      },
      { text: "D. Isolasi budaya dari pengaruh luar", correct: false },
    ],
  },
  {
    question:
      "Organisasi internasional yang bertujuan untuk mengatasi masalah kesehatan dunia adalah...",
    answers: [
      { text: "A. WHO (World Health Organization)", correct: true },
      {
        text: "B. UNICEF (United Nations International Children's Emergency Fund)",
        correct: false,
      },
      { text: "C. FAO (Food and Agriculture Organization)", correct: false },
      { text: "D. ILO (International Labour Organization)", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan negara federal?",
    answers: [
      { text: "A. Negara yang dipimpin oleh raja atau ratu", correct: false },
      {
        text: "B. Negara yang terdiri dari beberapa wilayah dengan otonomi tinggi",
        correct: true,
      },
      { text: "C. Negara yang tidak memiliki pemerintahan", correct: false },
      {
        text: "D. Negara yang terdiri dari satu wilayah tanpa pembagian administratif",
        correct: false,
      },
    ],
  },
  {
    question:
      ". Siapakah tokoh yang terkenal dengan perjuangannya dalam memperjuangkan hak buruh di Indonesia?",
    answers: [
      { text: "A. Mohammad Hatta", correct: false },
      { text: "B. Soekarno", correct: false },
      { text: "C. Tan Malaka", correct: true },
      { text: "D. Soe Hok Gie", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan hak prerogatif presiden?",
    answers: [
      { text: "A. Hak istimewa yang dimiliki oleh presiden", correct: true },
      { text: "B. Hak veto terhadap kebijakan parlemen ", correct: false },
      {
        text: "C. Hak untuk mencalonkan diri sebagai presiden seumur hidup",
        correct: false,
      },
      {
        text: "D. Hak untuk mengeluarkan uang negara sesuai keinginan",
        correct: false,
      },
    ],
  },
  {
    question:
      "Apa yang dimaksud dengan UUD 1945 sebagai hukum dasar negara Indonesia?",
    answers: [
      { text: "A. Undang-undang", correct: false },
      { text: "B. Undang-Undang Dasar", correct: true },
      { text: "C. Peraturan Pemerintah", correct: false },
      { text: "D. Ketetapan MPR", correct: false },
    ],
  },
  {
    question: "Siapa tokoh yang dikenal sebagai Bapak Repelita di Indonesia?",
    answers: [
      { text: "A. Soekarno", correct: false },
      { text: "B. Mohammad Hatta", correct: false },
      { text: "C. Soeharto", correct: true },
      { text: "D. Abdurrahman Wahid (Gus Dur)", correct: false },
    ],
  },
  {
    question:
      "Apa yang menjadi fungsi Dewan Perwakilan Rakyat (DPR) dalam sistem ketatanegaraan Indonesia?",
    answers: [
      { text: "A. Membuat undang-undang", correct: false },
      { text: "B. Menetapkan kebijakan presiden", correct: true },
      { text: "C. Mengadili perkara hukum", correct: false },
      { text: "D. Mengatur keuangan negara", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan perwakilan diplomatik?",
    answers: [
      { text: "A. Kebebasan diplomat untuk berbicara", correct: false },
      { text: "B. Kekebalan diplomatik", correct: false },
      { text: "C. Hubungan diplomatik antara negara", correct: true },
      { text: "D. Kepemimpinan diplomatik", correct: false },
    ],
  },
  {
    question:
      "Organisasi internasional yang fokus pada pengendalian narkotika dan kejahatan terorganisir adalah...",
    answers: [
      { text: "A. INTERPOL", correct: false },
      {
        text: "B. UNODC (United Nations Office on Drugs and Crime)",
        correct: true,
      },
      { text: "C. WHO (World Health Organization)", correct: false },
      {
        text: "D. UNESCO (United Nations Educational, Scientific and Cultural Organization)",
        correct: false,
      },
    ],
  },
  {
    question:
      "Apa yang dimaksud dengan hak ulayat dalam konteks masyarakat adat di Indonesia?",
    answers: [
      { text: "A. Hak kekayaan intelektual", correct: false },
      { text: "B. Hak tanah dan sumber daya alam", correct: true },
      { text: "C. Hak politik", correct: false },
      { text: "D. Hak Kesehatan", correct: false },
    ],
  },
  {
    question:
      "Siapakah tokoh yang dikenal sebagai Bapak Kesehatan di Indonesia?",
    answers: [
      { text: "A. Soekarno", correct: false },
      { text: "B. Ki Hajar Dewantara", correct: false },
      { text: "C. Dr. Sardjito", correct: true },
      { text: "D. Mohammad Hatta", correct: false },
    ],
  },
  {
    question:
      " Apa yang menjadi fungsi Mahkamah Agung dalam sistem peradilan Indonesia?",
    answers: [
      { text: "A. Membuat undang-undang", correct: false },
      { text: "B. Menetapkan kebijakan presiden", correct: false },
      { text: "C. Menegakkan hukum dan keadilan", correct: true },
      { text: "D. Mengatur keuangan negara", correct: false },
    ],
  },
  {
    question:
      "Siapakah tokoh yang dikenal sebagai Bapak Kependudukan di Indonesia?",
    answers: [
      { text: "A. Soekarno", correct: false },
      { text: "B. Mohammad Hatta", correct: false },
      { text: "C. Soeharto", correct: true },
      { text: "D. B.J. Habibie", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan konservasi alam?",
    answers: [
      { text: "A. Penggunaan alam secara berlebihan", correct: false },
      {
        text: "B. Pelestarian dan perlindungan lingkungan dan keanekaragaman hayati",
        correct: true,
      },
      { text: "C. Eksploitasi alam secara berlebihan", correct: false },
      {
        text: "D. Penghancuran lingkungan untuk kepentingan ekonomi",
        correct: false,
      },
    ],
  },
  {
    question:
      "Siapakah tokoh yang dikenal sebagai Bapak Angkatan Darat di Indonesia?",
    answers: [
      { text: "A. Jenderal Sudirman", correct: false },
      { text: "B. Soeharto", correct: false },
      { text: "C. Jenderal Soedirman", correct: true },
      { text: "D. Mohammad Hatta", correct: false },
    ],
  },
  {
    question:
      "Apa yang menjadi tujuan dari Gerakan Non-Blok (Non-Aligned Movement)?.",
    answers: [
      { text: "A. Menjaga ketertiban dunia", correct: false },
      { text: "B. Menghancurkan blok ekonomi", correct: false },
      { text: "C. Mempertahankan kemerdekaan nasional", correct: true },
      { text: "D. Menjadi anggota organisasi ekonomi global", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan G20?",
    answers: [
      { text: "A. Kelompok 20 negara terkaya di dunia", correct: false },
      { text: "B. Grup 20 negara berkembang di dunia", correct: false },
      { text: "C. Grup 20 negara industri maju dan berkembang", correct: true },
      {
        text: "D. Koalisi 20 negara dengan ideologi yang sama",
        correct: false,
      },
    ],
  },
  {
    question: "Apa yang dimaksud dengan asas negara hukum?",
    answers: [
      { text: "A. Negara yang hukumnya tidak berlaku", correct: false },
      { text: "B. Negara yang mengabaikan hukum", correct: false },
      { text: "C. Negara yang diatur dan dipimpin oleh hukum", correct: true },
      { text: "D. Negara yang tidak memiliki sistem hukum", correct: false },
    ],
  },
  {
    question:
      "Siapakah tokoh yang terkenal dengan perjuangannya dalam mendirikan Himpunan Mahasiswa Islam (HMI)?",
    answers: [
      { text: "A. Mohammad Hatta", correct: false },
      { text: "B. Soekarno", correct: false },
      { text: "C. Tan Malaka", correct: false },
      { text: "D. Nurcholish Madjid", correct: true },
    ],
  },
  {
    question:
      "Apa yang dimaksud dengan doctrine of separation of powers (doktrin pemisahan kekuasaan)?",
    answers: [
      {
        text: "A. Kekuasaan eksekutif, legislatif, dan yudikatif yang terpusat pada satu pihak",
        correct: false,
      },
      {
        text: "B. Pemisahan kekuasaan antara pemerintah pusat dan daerah",
        correct: false,
      },
      {
        text: "C. Pembagian kekuasaan antara presiden dan wakil presiden",
        correct: false,
      },
      {
        text: "D. Pembagian kekuasaan antara eksekutif, legislatif, dan yudikatif",
        correct: true,
      },
    ],
  },
  {
    question:
      "Apa yang menjadi fungsi Kementerian Luar Negeri dalam sistem pemerintahan Indonesia?",
    answers: [
      { text: "A. Mengkoordinasikan kebijakan ekonomi", correct: false },
      { text: "B. Menangani masalah pertahanan negara", correct: false },
      { text: "C. Menetapkan kebijakan luar negeri", correct: true },
      { text: "D. Membuat undang-undang", correct: false },
    ],
  },
  {
    question: "Apa yang dimaksud dengan kebijakan ekonomi liberal?",
    answers: [
      {
        text: "A. Pemerintah mengontrol seluruh sektor ekonomi",
        correct: false,
      },
      {
        text: "B. Laissez-faire, pemerintah minim campur tangan dalam ekonomi",
        correct: true,
      },
      { text: "C. Pendekatan sosialis dalam ekonomi", correct: false },
      { text: "D. Pemerintah mengatur semua aspek ekonomi", correct: false },
    ],
  },
  {
    question:
      "Organisasi internasional yang bertujuan untuk mengatasi masalah lingkungan global adalah...",
    answers: [
      { text: "A. Greenpeace", correct: false },
      {
        text: "B. UNDP (United Nations Development Programme)",
        correct: false,
      },
      { text: "C. WHO (World Health Organization)", correct: false },
      { text: "D. UNEP (United Nations Environment Programme)", correct: true },
    ],
  },
  {
    question: "Apa yang dimaksud dengan negara kesatuan?",
    answers: [
      {
        text: "A. Negara yang terdiri dari beberapa wilayah otonom",
        correct: false,
      },
      {
        text: "B. Negara yang terdiri dari beberapa negara kecil",
        correct: false,
      },
      {
        text: "C. Negara yang terdiri dari satu wilayah tanpa pembagian administratif",
        correct: true,
      },
      {
        text: "D. Negara yang terdiri dari beberapa negara dengan kebijakan seragam",
        correct: false,
      },
    ],
  },
  {
    question:
      "Siapakah tokoh yang terkenal dengan perjuangannya dalam mendirikan BPUPKI (Badan Penyelidik Usaha Persiapan Kemerdekaan Indonesia)?",
    answers: [
      { text: "A. Soekarno", correct: true },
      { text: "B. Mohammad Hatta", correct: false },
      { text: "C. Soedirman", correct: false },
      { text: "D. Ki Hadjar Dewantara", correct: false },
    ],
  },
  {
    question:
      "Apa yang menjadi fungsi BPKP (Badan Pengawasan Keuangan dan Pembangunan) dalam sistem pengawasan keuangan negara?",
    answers: [
      { text: "A. Membuat kebijakan fiskal", correct: false },
      { text: "B. Mengelola keuangan negara", correct: false },
      { text: "C. Mengawasi pengelolaan keuangan negara", correct: true },
      { text: "D. Menetapkan anggaran belanja negara", correct: false },
    ],
  },
  {
    question:
      "Siapakah tokoh yang dikenal sebagai Bapak Industri di Indonesia?",
    answers: [
      { text: "A. Soekarno", correct: false },
      { text: "B. Mohammad Hatta", correct: false },
      { text: "C. Soeharto", correct: false },
      { text: "D. B.J. Habibie", correct: true },
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
    question:
      "Apa yang menjadi dampak sosial bagi keluarga anggota PKI setelah G30S?",
    answers: [
      { text: "A. Meningkatkan kesejahteraan", correct: false },
      { text: "B. Stigma sosial dan diskriminasi", correct: true },
      { text: "C. Meningkatkan kebahagiaan", correct: false },
      { text: "D. Memberikan penghargaan", correct: false },
    ],
  },
  {
    question:
      "Bagaimana upaya pemerintah dalam mendidik generasi muda mengenai G30S/PKI?",
    answers: [
      { text: "A. Melupakan sejarah tersebut", correct: false },
      { text: "B. Menyensor informasi", correct: false },
      { text: "C. Meningkatkan literasi sejarah", correct: true },
      {
        text: "D. Tidak memberikan informasi pada generasi muda",
        correct: false,
      },
    ],
  },
  {
    question: "Apa yang dimaksud dengan bersikap jujur?",
    answers: [
      { text: "A. Berbohong", correct: false },
      { text: "B. Tidak dapat dipercaya", correct: false },
      { text: "C. Berkata sejujurnya tanpa menipu", correct: true },
      { text: "D. Menyembunyikan kebenaran", correct: false },
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
