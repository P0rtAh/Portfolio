document.addEventListener('DOMContentLoaded', function () {
    const nome = document.getElementById('nome');
    nome.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    
    const sobre = document.getElementById('sobre');
    sobre.classList.add('fadeIn');

    
    const links = document.querySelectorAll('.scroll-link');
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


document.addEventListener('DOMContentLoaded', function () {
    const sobre = document.getElementById('sobre');
    sobre.classList.add('fadeIn');
});


document.addEventListener('DOMContentLoaded', function () {
    const sobre = document.getElementById('sobre');
    sobre.classList.add('fadeIn');
});
