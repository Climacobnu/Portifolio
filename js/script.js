/* alternar barra de navegação de ícones */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* seção de rolagem */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  
  /* barra de navegação */
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100)

  /* remover barra de navegação de ícones ao clicar no link de navegação (scroll) */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};


  /* revelação de rolagem  */
ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projeto-box, .contato form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img',  { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content',  { origin: 'right' });


  /* typed js*/
  
  const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Front-end', 'e Desenvolvedor Back-end'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true

  });
  



/*  Envio Email */


        function funcao()
        {
        var x;
        var r=confirm("Mensagem enviada com Sucesso!");
        if (r==true)
          {
          x="você pressionou OK!";
          }
        else
          {
          x="Você pressionou Cancelar!";
          }
        document.getElementById("demo").innerHTML=x;
        }


  // ========================================


  