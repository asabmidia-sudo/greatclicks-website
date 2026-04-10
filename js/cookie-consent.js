// ===== Cookie Consent Banner =====
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('cookie-consent')) return;

  const banner = document.createElement('div');
  banner.id = 'cookie-consent';
  banner.className = 'fixed bottom-0 left-0 right-0 z-[70] bg-white border-t border-gray-200 shadow-lg px-6 py-4 md:py-5';
  banner.innerHTML = `
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-gray-600 text-sm leading-relaxed text-center sm:text-left">
        We use cookies and analytics to improve your experience. By continuing to use this site, you agree to our
        <a href="/privacy" class="text-primary-600 hover:underline">Privacy Policy</a>.
      </p>
      <div class="flex items-center gap-3 flex-shrink-0">
        <button id="cookie-decline" class="text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors px-4 py-2">
          Decline
        </button>
        <button id="cookie-accept" class="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-primary-700 hover:to-primary-600 transition-all duration-300">
          Accept
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);

  document.getElementById('cookie-accept').addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'accepted');
    banner.remove();
  });

  document.getElementById('cookie-decline').addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'declined');
    banner.remove();
  });
});
