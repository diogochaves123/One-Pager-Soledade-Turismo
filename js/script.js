// JavaScript para o One Pager moderno da Soledade Turismo

// Função para gerar mensagem baseada no horário
function getGreetingMessage() {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    return "Bom dia, gostaria de solicitar um orçamento!";
  } else if (hour >= 12 && hour < 18) {
    return "Boa tarde, gostaria de solicitar um orçamento!";
  } else {
    return "Boa noite, gostaria de solicitar um orçamento!";
  }
}

// Atualizar links do WhatsApp com mensagem automática
function updateWhatsAppLinks() {
  const whatsappNumber = '558008180800';
  const message = encodeURIComponent(getGreetingMessage());
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
  
  // Atualizar todos os links do WhatsApp
  const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
  whatsappLinks.forEach(link => {
    link.href = whatsappUrl;
  });
}

// Navegação suave
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const headerHeight = document.querySelector('.modern-header').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Header com efeito de scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('.modern-header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)';
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = 'none';
  }
});

// Carrossel de depoimentos
let currentReview = 0;
const reviewSlides = document.querySelectorAll('.review-slide');
const dots = document.querySelectorAll('.dot');

function showReview(index) {
  // Esconde todos os slides
  reviewSlides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Remove classe active de todos os dots
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  // Mostra o slide atual
  if (reviewSlides[index]) {
    reviewSlides[index].classList.add('active');
  }
  
  // Ativa o dot atual
  if (dots[index]) {
    dots[index].classList.add('active');
  }
}

function changeReview(direction) {
  currentReview += direction;
  
  if (currentReview >= reviewSlides.length) {
    currentReview = 0;
  } else if (currentReview < 0) {
    currentReview = reviewSlides.length - 1;
  }
  
  showReview(currentReview);
}

function goToReview(index) {
  currentReview = index - 1; // Ajusta para o índice baseado em 0
  showReview(currentReview);
}

// Adiciona event listeners para os dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToReview(index + 1);
  });
});

// Auto-play do carrossel
setInterval(() => {
  changeReview(1);
}, 10000);

// Animação de entrada das seções
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observa todas as seções
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});

// Newsletter form
document.addEventListener('DOMContentLoaded', function() {
  const newsletterForm = document.querySelector('.newsletter-form');
  const emailInput = document.querySelector('.email-input');
  const subscribeButton = document.querySelector('.subscribe-button');
  
  if (newsletterForm && emailInput && subscribeButton) {
    subscribeButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      const email = emailInput.value.trim();
      
      if (email && isValidEmail(email)) {
        // Simula envio do formulário
        subscribeButton.textContent = 'Inscrito!';
        subscribeButton.style.background = 'var(--accent-color)';
        emailInput.value = '';
        
        setTimeout(() => {
          subscribeButton.textContent = 'Inscrever-se';
          subscribeButton.style.background = 'var(--gradient-accent)';
        }, 3000);
      } else {
        emailInput.style.border = '2px solid #e74c3c';
        emailInput.placeholder = 'Email inválido';
        
        setTimeout(() => {
          emailInput.style.border = 'none';
          emailInput.placeholder = 'Seu email*';
        }, 3000);
      }
    });
  }
});

// Validação de email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Efeito de hover nos cards de features
document.addEventListener('DOMContentLoaded', function() {
  const featureCards = document.querySelectorAll('.feature-card');
  
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Smooth scroll para botões
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('a[href^="#"]');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = document.querySelector('.modern-header').offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});

// Efeito de loading da página
window.addEventListener('load', function() {
  document.body.style.opacity = '1';
});

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  // Mostra o primeiro depoimento
  showReview(0);
  
  // Atualizar links do WhatsApp com mensagem automática
  updateWhatsAppLinks();
  
  // Adiciona classe de carregamento
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  // Remove classe de carregamento após um breve delay
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Funções globais para o carrossel (para uso nos onclick do HTML)
window.changeReview = changeReview;
window.currentReview = goToReview; 