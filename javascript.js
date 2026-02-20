const openFaq = document.getElementById('open-faq');
const closeFaq = document.getElementById('close-faq');
const faqModal = document.getElementById('faq-modal');

openFaq.addEventListener('click', () => {
    faqModal.style.display = 'flex';
});

closeFaq.addEventListener('click', () => {
    faqModal.style.display = 'none';
});

// Menutup FAQ jika klik di luar kotak
window.addEventListener('click', (e) => {
    if (e.target == faqModal) {
        faqModal.style.display = 'none';
    }
});
