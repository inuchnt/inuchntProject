// script.js
window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach((card, index) => {
        // 初期状態を透明にして下にずらす
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        // 時間差（index * 200ms）で表示
        setTimeout(() => {
            card.style.transition = 'all 1s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});