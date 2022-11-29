export function sidebar(selector, openSelector, closeSelector) {
  const sidebar = document.querySelector(selector);
  const openButton = document.querySelector(openSelector);
  const closeButton = document.querySelector(closeSelector);

  openButton.addEventListener('click', () => {
    document.body.classList.add('lock');
    sidebar.classList.add('active');
  });

  closeButton.addEventListener('click', () => {
    document.body.classList.remove('lock');
    sidebar.classList.remove('active');
  });
}