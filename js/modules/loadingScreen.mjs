// Загрузочный экран

export function loadingScreen(element,delay, delayTransition) {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      element.style.opacity = 0;
    }, delay);
    
    setTimeout(() => {
      element.style.display = 'none';
      document.body.classList.remove('lock');
    }, delay + delayTransition);
  })
}