document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.skill-card, .stats img, .social-icon, .section-title');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic Greeting based on time
    const greetingElement = document.querySelector('.hero-greeting');
    if(greetingElement) {
        const hour = new Date().getHours();
        let greetingText = 'Hi 👋, my name is';
        
        if (hour < 12) greetingText = 'Good Morning! My name is';
        else if (hour < 18) greetingText = 'Good Afternoon! My name is';
        else greetingText = 'Good Evening! My name is';
        
        // Typewriter effect
        const originalText = greetingElement.textContent;
        // if user wants the simple "Hi" keep it, but let's add a subtle type appearance
        // greetingElement.textContent = greetingText; 
    }
});
