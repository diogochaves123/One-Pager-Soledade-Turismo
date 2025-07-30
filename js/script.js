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

// Funcionalidade de swipe para mobile
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {
  const swipeThreshold = 50; // Distância mínima para considerar um swipe
  const diff = touchStartX - touchEndX;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe para a esquerda - próximo depoimento
      changeReview(1);
    } else {
      // Swipe para a direita - depoimento anterior
      changeReview(-1);
    }
  }
}

// Adiciona event listeners para touch apenas em dispositivos móveis
function addSwipeListeners() {
  const carousel = document.querySelector('.reviews-carousel');
  
  if (carousel && window.innerWidth <= 768) {
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });
    
    carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
  }
}

// Chama a função quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
  addSwipeListeners();
  
  // Re-adiciona listeners quando a janela é redimensionada
  window.addEventListener('resize', addSwipeListeners);
});

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

// Careers Form Functionality
document.addEventListener('DOMContentLoaded', function() {
  const careersForm = document.getElementById('careers-form');
  const fileInput = document.getElementById('curriculo');
  const fileLabel = document.querySelector('.file-label .file-text');
  
  if (careersForm && fileInput && fileLabel) {
    // File upload feedback
    fileInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        // Validate file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
          alert('Arquivo muito grande. Tamanho máximo: 5MB');
          this.value = '';
          fileLabel.textContent = 'Escolher arquivo';
          return;
        }
        
        // Validate file type
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.includes(file.type)) {
          alert('Tipo de arquivo não suportado. Use PDF, DOC ou DOCX');
          this.value = '';
          fileLabel.textContent = 'Escolher arquivo';
          return;
        }
        
        fileLabel.textContent = file.name;
      } else {
        fileLabel.textContent = 'Escolher arquivo';
      }
    });
    
    // Form submission
    careersForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitButton = this.querySelector('.submit-button');
      const originalText = submitButton.innerHTML;
      
      // Show loading state
      submitButton.innerHTML = '<span class="button-text">Enviando...</span><span class="button-icon">⏳</span>';
      submitButton.disabled = true;
      
      // Simulate form submission (replace with actual form handling)
      setTimeout(() => {
        // Success state
        submitButton.innerHTML = '<span class="button-text">Enviado com Sucesso!</span><span class="button-icon">✅</span>';
        submitButton.style.background = 'var(--accent-color)';
        
        // Reset form
        careersForm.reset();
        fileLabel.textContent = 'Escolher arquivo';
        
        // Show success message
        showNotification('Candidatura enviada com sucesso! Entraremos em contato em breve.', 'success');
        
        // Reset button after 3 seconds
        setTimeout(() => {
          submitButton.innerHTML = originalText;
          submitButton.style.background = 'var(--gradient-primary)';
          submitButton.disabled = false;
        }, 3000);
      }, 2000);
    });
  }
});

// Notification system
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">${type === 'success' ? '✅' : 'ℹ️'}</span>
      <span class="notification-message">${message}</span>
      <button class="notification-close">×</button>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#10b981' : '#3b82f6'};
    color: white;
    padding: 16px 20px;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 400px;
  `;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Close button functionality
  const closeButton = notification.querySelector('.notification-close');
  closeButton.style.cssText = `
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    margin-left: 10px;
  `;
  
  closeButton.addEventListener('click', () => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => notification.remove(), 300);
  });
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Phone number formatting
document.addEventListener('DOMContentLoaded', function() {
  const phoneInput = document.getElementById('telefone');
  
  if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      
      if (value.length <= 11) {
        if (value.length <= 2) {
          value = `(${value}`;
        } else if (value.length <= 6) {
          value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else if (value.length <= 10) {
          value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
        } else {
          value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
        }
      }
      
      e.target.value = value;
    });
  }
});

// Funções globais para o carrossel (para uso nos onclick do HTML)
window.changeReview = changeReview;
window.currentReview = goToReview; 