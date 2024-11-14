// sidebar gambar
let currentIndex = 0;

function slideRight() {
    const images = document.getElementById('galeriImages');
    const totalImages = images.children.length;
    currentIndex = (currentIndex + 1) % totalImages;
    images.style.transform = `translateX(-${currentIndex * 600}px)`;
}
function slideLeft() {
    const images = document.getElementById('galeriImages');
    const totalImages = images.children.length;
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    images.style.transform = `translateX(-${currentIndex * 600}px)`;
}


// filter berita
function filterBerita() {
    const kategori = document.getElementById('kategori').value;
    const articles = document.querySelectorAll('#artikel-list article');

    articles.forEach(article => {
        if (kategori === 'semua' || article.getAttribute('data-kategori') === kategori) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}


// untuk melihat detail pada section program pelatihan
function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}


// untuk mengaktifkan menu search
// document.addEventListener('DOMContentLoaded', function() {
//     const searchButton = document.getElementById('search-button');
//     const searchInput = document.getElementById('search-input');

//     searchButton.addEventListener('click', function() {
//         const query = searchInput.value.trim();
//         if (query) {
//             // Arahkan pengguna ke halaman pencarian dengan query
//             window.location.href = `search.html?q=${encodeURIComponent(query)}`;
//         } else {
//             alert('Please enter a search query.');
//         }
//     });

//     // Opsional: Menangani pencarian saat menekan Enter di input
//     searchInput.addEventListener('keypress', function(e) {
//         if (e.key === 'Enter') {
//             searchButton.click();
//         }
//     });
// });

// document.getElementById('searchButton').addEventListener('click', function() {
//     var query = document.getElementById('searchInput').value;
//     if (query) {
//         // Lakukan pencarian atau tampilkan hasil pencarian
//         alert('Searching for: ' + query);
//         // Jika Anda memiliki data pencarian, lakukan sesuatu di sini
//         // Misalnya, Anda bisa memfilter artikel, produk, dll.
//     } else {
//         alert('Harap masukkan kata kunci pencarian.');
//     }
// });

// // Optional: Tambahkan pencarian dengan menekan Enter
// document.getElementById('searchInput').addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         document.getElementById('searchButton').click();
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen input dan button pencarian
    const searchInput = document.querySelector('.search-container input[type="text"]');
    const searchButton = document.querySelector('.search-container button');

    // Fungsi untuk scroll ke elemen dengan id yang cocok
    function scrollToSection(id) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Event listener untuk tombol pencarian
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();

        switch (query) {
            case 'profil':
                scrollToSection('profil');
                break;
            case 'programs':
                scrollToSection('programs');
                break;
            case 'informasi':
                scrollToSection('informasi');
                break;
            case 'berita':
                scrollToSection('berita');
                break;
            case 'galeri':
                scrollToSection('galeri');
                break;
            default:
                alert('Bagian yang dicari tidak ditemukan.');
                break;
        }
    });

    // Event listener untuk enter key pada input pencarian
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});
