export function sidebar(selector, openSelector, closeSelector) {
  const sidebar = document.querySelector(selector);
  const openButton = document.querySelector(openSelector);
  const closeButton = document.querySelector(closeSelector);

  openButton.addEventListener('click', () => {
    sidebar.className = 'header__content active';
  });

  closeButton.addEventListener('click', () => {
    sidebar.className = 'header__content';
  });
}