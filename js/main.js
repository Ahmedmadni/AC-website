// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  const icon = menuBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});

document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// Sticky header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form -> WhatsApp
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  if (!name || !phone) {
    alert('الرجاء تعبئة الاسم ورقم الجوال');
    return;
  }

  const text =
    `طلب خدمة جديد من موقع فريق تكييف الرياض%0A` +
    `الاسم: ${name}%0A` +
    `الجوال: ${phone}%0A` +
    `الخدمة المطلوبة: ${service}%0A` +
    `التفاصيل: ${message || 'لا يوجد'}`;

  window.open(`https://wa.me/966560409811?text=${text}`, '_blank');
  contactForm.reset();
});
