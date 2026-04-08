//page prête
window.onload = () => {
    const overlay = document.getElementById('overlay');
    const imgFull = document.getElementById('img-full');

    // On cherche toutes les images dans tes cadres (gallery, presentation, etc.)
    document.querySelectorAll('.photo-box img, .image-box img, .final-box img').forEach(image => {
        image.onclick = () => {
            imgFull.src = image.src;      // On prend la source de l'image cliquée
            overlay.style.display = 'flex'; // On montre le fond noir
        };
    });

    // On ferme quand on clique sur le fond noir
    overlay.onclick = () => {
        overlay.style.display = 'none';
    };
};

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('moon-btn');
    btn.innerHTML = document.body.classList.contains('dark-mode') ? "Mode jour" : "Mode nuit";
}
