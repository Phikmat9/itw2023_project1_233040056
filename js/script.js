// Mengambil semua tautan navigasi
const navLinks = document.querySelectorAll('nav ul li a');

// Mengaitkan event click pada setiap tautan navigasi
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        // Mengambil nilai href dari tautan
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Menjalankan animasi scroll ke bagian target
        if (targetElement) {
            // Menghitung posisi bagian target
            const offsetTop = targetElement.offsetTop;

            // Menganimasikan smooth scroll ke posisi bagian target
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth' // Efek animasi smooth
            });
        }
    });
});
