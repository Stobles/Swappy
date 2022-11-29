import { Select } from "./modules/select.js";
import { sidebar } from "./modules/sidebar.js";

const headerSelect = new Select('.header__select', {
  defaultId: 2,
  data: [
    {id: 1, src: 'img/header/Select/united-kingdom.png', value: 'English/USD'},
    {id: 2, src: 'img/header/Select/russia.png', value: 'Русский/РУБ'},
    {id: 3, src: 'img/header/Select/germany.png', value: 'Germany/EUR'}
  ]
})

sidebar('#header-sidebar','#burger-open', '#burger-close');