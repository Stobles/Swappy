import { setLang } from "./modules/language.mjs";
import { loadingScreen } from "./modules/loadingScreen.mjs";
import { Select } from "./modules/select.mjs";
import { sidebar } from "./modules/sidebar.mjs";
import { getParent } from "./modules/getParent.mjs";

const loading = document.getElementById('loading');

loadingScreen(loading, 1000, 500);

let headerSelected = 1;

const headerSelect = new Select('.header__select', {
  defaultId: localStorage.getItem('selectedId'),
  data: [
    {id: 1, src: 'img/header/Select/united-kingdom.png', value: 'English/USD', language: 'en'},
    {id: 2, src: 'img/header/Select/russia.png', value: 'Русский/РУБ', language: 'ru'},
    {id: 3, src: 'img/header/Select/germany.png', value: 'Germany/EUR', language: 'de'}
  ]
})

const converterSendSelect = new Select('.send__form--select', {
  defaultId: 1,
  data: [
    {id: 1, src: 'img/converter/send/mono.svg', value: 'Monobank'},
    {id: 2, src: '', value: 'Русский/РУБ'},
    {id: 3, src: '', value: 'Germany/EUR'}
  ]
})

const converterGetSelect = new Select('.get__form--select', {
  defaultId: 1,
  data: [
    {id: 1, src: 'img/converter/get/tether.svg', value: 'Tether'},
    {id: 2, src: '', value: 'Русский/РУБ'},
    {id: 3, src: '', value: 'Germany/EUR'}
  ]
})

const converterAddressSelect = new Select('.address__select', {
  defaultId: 1,
  data: [
    {id: 1, src: '', value: 'English/USD'},
    {id: 2, src: '', value: 'Русский/РУБ'},
    {id: 3, src: '', value: 'Germany/EUR'}
  ]
})

sidebar('#header-sidebar','#burger-open', '#burger-close');

let lang = window.hasOwnProperty('localStorage') && localStorage.getItem('lang') !== null ? localStorage.getItem('lang') : 'en';

setLang(lang);

document.addEventListener('click', (e) => {
  const isHeader = e.target.closest('.header__select') != null ? true : false;
  if((e.target.dataset.type === 'item' || e.target.parentNode.dataset.type === 'item') && isHeader){
    window.localStorage.setItem('selectedId', e.target.dataset.id);
    window.localStorage.setItem('lang', e.target.dataset.language);
    window.location.reload();
    return;
  }
});

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
      e.preventDefault();
      let href = this.getAttribute("href").substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = document.querySelector(".header__container").offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset - 50;

      window.scrollBy({
          top: offsetPosition,
          behavior: "smooth"
      });
  });
});