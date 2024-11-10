
// Interação com o botão "Solicite um Orçamento"
document.getElementById('ct-button').addEventListener('click', function() {
    alert('Entre em contato para solicitar um orçamento e transformar seu ambiente!');
});





// Função de rolagem suave para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Exemplo de mostrar ou ocultar a navegação no mobile (menu hamburguer)
let menuButton = document.querySelector('.menu-btn');
let nav = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('show');
});
