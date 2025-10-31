document.addEventListener('DOMContentLoaded', function() {
            
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Script de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* --- INÍCIO DO SCRIPT DE ENVIO ASSÍNCRONO DO FORMULÁRIO BREVO --- */
    const form = document.getElementById('sib-form');
    const formContainer = document.getElementById('form-container');
    const successContainer = document.getElementById('success-message-container');

    if (form && formContainer && successContainer) {
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(form);
            const formAction = form.getAttribute('action');

            fetch(formAction, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' 
            })
            .then(response => {
                formContainer.style.display = 'none';
                successContainer.style.display = 'block';
                successContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            })
            .catch(error => {
                console.error('Erro ao enviar o formulário:', error);
                alert('Não foi possível registrar sua assinatura. Por favor, tente novamente.');
            });
        });
    }
});