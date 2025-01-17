document.addEventListener('DOMContentLoaded', function () {
    const nome = document.getElementById('nome');
    nome.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Animação para "Sobre mim"
    const sobre = document.getElementById('sobre');
    sobre.classList.add('fadeIn');

    // Função para navegação suave para as seções
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 50, 
                behavior: 'smooth'
            });
        });
    });
});

// Animação suave para o texto de introdução
document.addEventListener('DOMContentLoaded', function () {
    const sobre = document.getElementById('sobre');
    sobre.classList.add('fadeIn');
});

// Animação CSS
document.addEventListener('DOMContentLoaded', function () {
    const sobre = document.getElementById('sobre');
    sobre.classList.add('fadeIn');
});
