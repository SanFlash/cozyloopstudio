// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => observer.observe(section));

// Navbar scroll effect
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').style.background = window.scrollY > 100 ? 'rgba(253,246,227,0.98)' : 'rgba(253,246,227,0.95)';
});

// Custom cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor-glow');
document.body.appendChild(cursor);
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
document.querySelectorAll('a, button, .product-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(2)');
    el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});

// Lazy loading images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    document.querySelectorAll('img[loading="lazy"]').forEach(img => imageObserver.observe(img));
}

// Custom form submission with proper field names
document.getElementById('customForm').addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const request = {
        id: Date.now(),
        productType: formData.get('productType') || '',
        color: formData.get('color') || '',
        size: formData.get('size') || '',
        embroidery: formData.get('embroidery') || '',
        notes: formData.get('notes') || '',
        timestamp: new Date().toISOString()
    };
    await saveCustomRequest(request);
    alert('✅ Request submitted successfully! Our team will review it shortly.');
    e.target.reset();
});

// Page transitions
window.addEventListener('pageshow', () => document.body.style.opacity = '1');
