// script.js

// --- 1. DEKLARASI ELEMEN ---
const envelopeTrigger = document.getElementById('envelope-trigger');
const movingCard = document.getElementById('moving-card');

// Modal 1
const textModal = document.getElementById('text-modal');
const closeModalBtn = document.getElementById('close-modal');
const nextCardBtn = document.getElementById('next-card-btn'); // BARU

// Modal 2
const textModal2 = document.getElementById('text-modal-2'); // BARU
const closeModal2Btn = document.getElementById('close-modal-2'); // BARU


// --- 2. LOGIKA UTAMA (Klik Amplop) ---
envelopeTrigger.addEventListener('click', function() {
    movingCard.classList.add('fly-out');

    // Pastikan Modal 2 disembunyikan jika ada (untuk reset)
    textModal2.classList.remove('show'); 

    // Munculkan Modal 1 setelah kartu terbang
    setTimeout(() => {
        textModal.classList.add('show');
    }, 800); 
});


// --- 3. LOGIKA TOMBOL NEXT (Dari Modal 1 ke Modal 2) ---
nextCardBtn.addEventListener('click', function() {
    // 1. Sembunyikan Modal 1
    textModal.classList.remove('show');
    
    // 2. Tampilkan Modal 2 (dengan sedikit delay biar halus)
    setTimeout(() => {
        textModal2.classList.add('show');
    }, 300); 
});


// --- 4. LOGIKA TUTUP MODAL 1 (Tombol X di Modal 1) ---
closeModalBtn.addEventListener('click', function() {
    // Sembunyikan Modal 1
    textModal.classList.remove('show');
    
    // Kembalikan kartu ke amplop (Reset)
    setTimeout(() => {
        movingCard.classList.remove('fly-out');
    }, 500);
});


// --- 5. LOGIKA TUTUP MODAL 2 (Tombol X di Modal 2) ---
closeModal2Btn.addEventListener('click', function() {
    // Sembunyikan Modal 2
    textModal2.classList.remove('show');

    // Kembalikan kartu ke amplop (Reset)
    setTimeout(() => {
         movingCard.classList.remove('fly-out');
    }, 500);
});

// script.js

// Fungsi untuk mendapatkan angka acak dalam rentang min dan max
function getRandomNumber(min, max) {
    // Math.random() mengembalikan nilai 0 (inklusif) sampai 1 (eksklusif).
    // Rumus ini mengembalikan nilai acak dari min (inklusif) sampai max (eksklusif).
    return Math.floor(Math.random() * (max - min)) + min;
}

// Fungsi yang dipanggil saat tombol "Enggak" diklik
function proses(e) {
    if (e.value === "tidak") {
        const button = e;
        // Kita perlu mencari parent 'modal-content' sebagai batas
        const modalContent = button.closest('.modal-content');
        
        // Ambil dimensi area yang bisa digunakan (kotak putih)
        const modalWidth = modalContent.offsetWidth;
        const modalHeight = modalContent.offsetHeight;
        
        // Ambil dimensi tombol "Enggak"
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;

        // Tentukan batas aman (misalnya 10px dari tepi)
        const padding = 10;

        // Hitung posisi X acak baru (dari 10px sampai ModalWidth - ButtonWidth - 10px)
        let newX = getRandomNumber(padding, modalWidth - buttonWidth - padding);
        
        // Hitung posisi Y acak baru (dari 10px sampai ModalHeight - ButtonHeight - 10px)
        let newY = getRandomNumber(padding, modalHeight - buttonHeight - padding);
        
        
        // --- Perubahan Utama di Sini ---
        // Atur posisi menggunakan properti `top` dan `left`
        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;
        
        // Hapus `right` dan `bottom` agar `left` dan `top` yang bekerja
        button.style.right = 'unset';
        button.style.bottom = 'unset';
    }
}
