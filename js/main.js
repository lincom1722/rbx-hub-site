// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar efeitos de glitch aleatórios
    setInterval(addRandomGlitch, 3000);
    
    // Criar partículas flutuantes
    createFloatingParticles();
    
    // Marcar link ativo na navegação
    markActiveNavLink();
    
    // Adicionar efeitos sonoros opcionais
    setupSoundEffects();
});

// Marcar link ativo na navegação
function markActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Adicionar efeitos de glitch aleatórios
function addRandomGlitch() {
    const glitchElements = document.querySelectorAll('.glitch');
    if (glitchElements.length === 0) return;
    
    const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
    
    if (randomElement) {
        randomElement.style.animation = 'none';
        setTimeout(() => {
            randomElement.style.animation = '';
        }, 100);
    }
}

// Criar partículas flutuantes
function createFloatingParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'floating-particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    
    document.body.appendChild(particleContainer);
    
    // Criar partículas individuais
    for (let i = 0; i < 15; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    const colors = ['#00ff00', '#ff00ff', '#00ffff', '#ff0000'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: ${color};
        border-radius: 50%;
        box-shadow: 0 0 6px ${color};
        animation: float ${5 + Math.random() * 10}s linear infinite;
        left: ${Math.random() * 100}%;
        top: 100%;
        opacity: ${0.3 + Math.random() * 0.7};
    `;
    
    container.appendChild(particle);
    
    // Remover partícula após a animação
    setTimeout(() => {
        if (particle.parentElement) {
            particle.remove();
            createParticle(container); // Criar nova partícula
        }
    }, (5 + Math.random() * 10) * 1000);
}

// Configurar efeitos sonoros opcionais
function setupSoundEffects() {
    const buttons = document.querySelectorAll('.btn, .card');
    
    buttons.forEach(button => {
        button.addEventListener('click', playSelectSound);
    });
}

// Efeito sonoro de seleção (opcional)
function playSelectSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        // Ignorar se Web Audio API não estiver disponível
    }
}

// Sistema de notificações
function showNotification(message, type = 'info') {
    // Remover notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Adicionar estilos
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#00ff00' : type === 'error' ? '#ff0000' : '#00ffff'};
        color: #000000;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        font-family: 'Orbitron', monospace;
        font-weight: 700;
        max-width: 300px;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remover após 5 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Funções de navegação com parâmetros
function navigateToMaps() {
    window.location.href = 'maps.html';
}

function navigateToProducts(selectedMap = null) {
    let url = 'products.html';
    if (selectedMap) {
        url += `?map=${encodeURIComponent(selectedMap)}`;
    }
    window.location.href = url;
}

function navigateToPurchase(selectedMap = null, selectedProduct = null) {
    let url = 'purchase.html';
    const params = new URLSearchParams();
    
    if (selectedMap) params.append('map', selectedMap);
    if (selectedProduct) params.append('product', selectedProduct);
    
    if (params.toString()) {
        url += `?${params.toString()}`;
    }
    
    window.location.href = url;
}

// Obter parâmetros da URL
function getUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        map: urlParams.get('map'),
        product: urlParams.get('product')
    };
}

// Adicionar estilos de animação
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes float {
        from { 
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        to { 
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: inherit;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

document.head.appendChild(style);

