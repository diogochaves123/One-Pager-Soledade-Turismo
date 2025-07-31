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
  const isMobile = window.innerWidth <= 768;
  
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)';
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = isMobile ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none';
  }
});

// Melhorar experiência do cabeçalho no mobile
function handleMobileHeader() {
  const header = document.querySelector('.modern-header');
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // Adicionar classe específica para mobile
    header.classList.add('mobile-header');
    
    // Ajustar altura do header para evitar sobreposição
    const headerHeight = header.offsetHeight;
    document.body.style.paddingTop = headerHeight + 'px';
  } else {
    header.classList.remove('mobile-header');
    document.body.style.paddingTop = '0';
  }
}

// Executar no carregamento e no redimensionamento
window.addEventListener('load', handleMobileHeader);
window.addEventListener('resize', handleMobileHeader);



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

// Removendo configuração do EmailJS - agora usamos Resend via Netlify Functions

// Careers Form Functionality
document.addEventListener('DOMContentLoaded', function() {
  const careersForm = document.getElementById('careers-form');
  const fileInput = document.getElementById('curriculo');
  const fileLabel = document.querySelector('.file-label .file-text');
  
  if (careersForm && fileInput && fileLabel) {
    // Phone number formatting
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
      telefoneInput.addEventListener('input', function(e) {
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
    
    // Form submission with Resend via Netlify Functions
    careersForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitButton = this.querySelector('.submit-button');
      const originalText = submitButton.innerHTML;
      
      // Show loading state
      submitButton.innerHTML = '<span class="button-text">Enviando...</span><span class="button-icon">⏳</span>';
      submitButton.disabled = true;
      
      try {
        // Get form data
        const formData = new FormData(this);
        const nome = formData.get('nome');
        const email = formData.get('email');
        const telefone = formData.get('telefone');
        const cargo = formData.get('cargo');
        const experiencia = formData.get('experiencia');
        const curriculoFile = formData.get('curriculo');
        
        // Prepare data for API
        const data = {
          nome,
          email,
          telefone,
          cargo,
          experiencia: experiencia || 'Não informado'
        };
        
        // Handle file upload if present
        if (curriculoFile && curriculoFile.size > 0) {
          const reader = new FileReader();
          const fileData = await new Promise((resolve) => {
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(curriculoFile);
          });
          
          // Extract base64 data
          const base64Data = fileData.split(',')[1];
          data.curriculo = {
            name: curriculoFile.name,
            type: curriculoFile.type,
            data: base64Data
          };
        }
        
        // Send to Netlify Function
        const response = await fetch('/.netlify/functions/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
          // Show success message
          showNotification('Candidatura enviada com sucesso! Entraremos em contato em breve.', 'success');
          
          // Reset form
          careersForm.reset();
          fileLabel.textContent = 'Escolher arquivo';
        } else {
          throw new Error(result.error || 'Erro ao enviar candidatura');
        }
        
      } catch (error) {
        console.error('Erro:', error);
        showNotification('Erro ao enviar candidatura. Tente novamente.', 'error');
      } finally {
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
      }
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