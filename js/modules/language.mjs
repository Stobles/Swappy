const languages = {
  en: {
    'nav-link': ['Main','Advantages','News','Reviews'],
    'advantages-title': 'Advantages',
    'advantages-card-title': ['Support', 'confidentiality', 'Warranty',],
    'advantages-card-text': ['Polite technical support around the clock ready to help you on any    matter', 
                              'We do not store or share your personal information with third parties.', 
                              '100% translation guarantee. The reliability of our service is confirmed by numerous reviews.',],
    'news-title': 'News',
    'news-p-title': ['What cryptocurrency to invest in 2022',
                      'What cryptocurrency to invest in 2022',
                      'What cryptocurrency to invest in 2022',],
    'news-p-text': ['Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'],
    'news-p-button': 'Read More',
    'reviews-title': 'Reviews',
    'footer-p-title': ['Telegram','Address','Phone','E-mail'],
    'button-login': 'Login',
    'button-see-all': 'See all',
  },
  ru:{
    'nav-link': ['Главная','Преимущества','О нас','Отзывы'],
    'advantages-title': 'Преимущества',
    'advantages-card-title': ['Поддержка', 'Конфиденциальность', 'Гарантия',],
    'advantages-card-text': ['Вежливая техподдержка круглосуточно готова помочь вам по любому вопросу.', 
                              'Мы не храним и не передаем вашу личную информацию третьим лицам.', 
                              '100% гарантия перевода. Надежность нашего сервиса подтверждена многочисленными отзывами.',],
    'news-title': 'Новости',
    'news-p-title': ['В какую криптовалюту инвестировать в 2022 году',
                      'В какую криптовалюту инвестировать в 2022 году',
                      'В какую криптовалюту инвестировать в 2022 году',],
    'news-p-text': ['Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии.',
                    'Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии.',
                    'Lorem Ipsum — это просто текст-пустышка полиграфической и наборной индустрии.'],
    'news-p-button': 'Читать далее...',
    'reviews-title': 'Отзывы',
    'footer-p-title': ['Telegram','Адрес','Телефон','E-mail'],
    'button-login': 'Авторизация',
    'button-see-all': 'Посмотреть все',
  }
}

export function setLang(lang) {
  const langArr = languages[lang];
  if (!languages.hasOwnProperty(lang)){ 
    // alert('Пока язык не поддерживается');
    return
  };
  if (window.hasOwnProperty('localStorage')) window.localStorage.setItem('lang', lang);
  for (let key in langArr) {
    const langElem = langArr[key];
    const elems = document.querySelectorAll(`[data-name=${key}]`);
    const values = langArr[key];
    replaceText(elems, values);
  }

  function replaceText(elems, values) {
    for (let i = 0; i < elems.length; i++) {
      switch (true) {
        case elems.length > 1 && isType(values, 'object'):
          elems[i].textContent = values[i];
          break;
        case elems.length > 1 && isType(values, 'string'):
          elems[i].textContent = values;
          break;
        case elems.length == 1 && isType(values, 'string'):
          elems[i].textContent = values;
          break;
        default:
          break;
      }
    }
  }

  function isType(el, type) {
    if(typeof type === 'string') return typeof el === type;
    return console.error('Переменная не является строкой');
  }
}