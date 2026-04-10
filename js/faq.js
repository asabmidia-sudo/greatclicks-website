// ===== FAQ Accordion =====

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-item').forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const answer = item.querySelector('.faq-answer');

    if (trigger && answer) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Close all others
        document.querySelectorAll('.faq-item.open').forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove('open');
            openItem.querySelector('.faq-answer').style.maxHeight = '0';
          }
        });

        // Toggle current
        if (isOpen) {
          item.classList.remove('open');
          answer.style.maxHeight = '0';
        } else {
          item.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });
});
