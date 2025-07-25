// script.js
// Menu responsivo
const menuToggle = document.getElementById('menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Scroll suave
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 20,
        behavior: 'smooth'
      });
      navUl.classList.remove('active'); // Fecha menu mobile
    }
  });
});

// Botão WhatsApp com mensagem personalizada
const whatsappLink = document.getElementById('whatsapp-link');
const numero = '558008180800'; // Número real da empresa
const mensagem = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Soledade Turismo.');
if (whatsappLink) {
  whatsappLink.href = `https://wa.me/${numero}?text=${mensagem}`;
}

// Animação suave ao rolar para as seções
function revealSectionsOnScroll() {
  const sections = document.querySelectorAll('section');
  const trigger = window.innerHeight * 0.92;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add('visible');
    }
  });

  // Destacar menu ativo
  let currentSection = sections[0];
  let minDist = Math.abs(sections[0].getBoundingClientRect().top - 120);
  sections.forEach(section => {
    const dist = Math.abs(section.getBoundingClientRect().top - 120);
    if (dist < minDist) {
      minDist = dist;
      currentSection = section;
    }
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection.id) {
      link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealSectionsOnScroll);
window.addEventListener('DOMContentLoaded', revealSectionsOnScroll);

// Botão de voltar ao topo
const btnTopo = document.getElementById('btn-topo');
if (btnTopo) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnTopo.classList.add('show');
    } else {
      btnTopo.classList.remove('show');
    }
  });
  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Carrossel de imagens e frases
const carouselSlides = document.querySelectorAll('.carousel-slide');
const arrowLeft = document.querySelector('.carousel-arrow.left');
const arrowRight = document.querySelector('.carousel-arrow.right');
let currentSlide = 0;

function showSlide(idx) {
  carouselSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
  });
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % carouselSlides.length;
  showSlide(currentSlide);
}
function prevSlide() {
  currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
  showSlide(currentSlide);
}
if (arrowLeft && arrowRight) {
  arrowLeft.addEventListener('click', prevSlide);
  arrowRight.addEventListener('click', nextSlide);
  showSlide(currentSlide);
}

// Carrossel do topo (hero-carousel)
const heroSlides = document.querySelectorAll('.hero-slide');
const heroArrowLeft = document.querySelector('.hero-arrow.left');
const heroArrowRight = document.querySelector('.hero-arrow.right');
let heroCurrent = 0;
function showHeroSlide(idx) {
  heroSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
  });
}
function nextHeroSlide() {
  heroCurrent = (heroCurrent + 1) % heroSlides.length;
  showHeroSlide(heroCurrent);
}
function prevHeroSlide() {
  heroCurrent = (heroCurrent - 1 + heroSlides.length) % heroSlides.length;
  showHeroSlide(heroCurrent);
}
if (heroArrowLeft && heroArrowRight) {
  heroArrowLeft.addEventListener('click', prevHeroSlide);
  heroArrowRight.addEventListener('click', nextHeroSlide);
  showHeroSlide(heroCurrent);
} 