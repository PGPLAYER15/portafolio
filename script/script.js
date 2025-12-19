    window.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll('.Link');
    
        links.forEach(link => {
        link.addEventListener('click', handleLinkClick);
        });
    });
    
    function handleLinkClick(event) {
        event.preventDefault(); 
        const target = event.currentTarget.getAttribute('href');
        smoothScroll(target, 700, 79);
    }
    
    function smoothScroll(target, duration, offset) {
        const targetElement = document.querySelector(target);
        if (!targetElement) return; 
        
        const targetPosition = targetElement.offsetTop - offset; 
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        requestAnimationFrame(animation);
        }
    
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }