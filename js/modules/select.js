const getTemplate = (data, selectedParagraph) => {
  const items = data.map(item => {
    let cls = '';
    if(selectedParagraph.id === item.id){
      cls = 'selected';
    }
    return `
    <li class="select__paragraph ${cls}" data-type="item" data-id="${item.id}">
      <span class="select__paragraph--imgbox">
        <img class="select__paragraph--img" src="${item.src}" alt="">
      </span>
      <p data-value="${item.value}" data-id="${item.id}" class="select__paragraph--text ellipsis">${item.value}</p>
    </li>
    `
  });

  return `
  <div data-type="input" class="select__input ellipsis">
    <span class="select__paragraph--imgbox">
      <img data-img class="select__paragraph--img" src="${selectedParagraph.src}" alt="">
    </span>
    <p data-type="value" class="select__text">${selectedParagraph.value}</p>
    <span class="select__arrow"></span>
  </div>
  <ul data-list class="select__list">
    ${items.join('')}
  </ul>
  `
}

export class Select {
  constructor(selector, options){
    this.$el = document.querySelector(selector);
    this.options = options;
    this.selectedId = 3;

    this.#render();
    this.#setup();
  }

  #render(){
    const {data, defaultId} = this.options;
    const selectedParagraph = data.find(item => item.id === defaultId) != undefined ? data.find(item => item.id === defaultId) : data[0];
    this.$el.innerHTML = getTemplate(data, selectedParagraph);
    this.$value = this.$el.querySelector('[data-type="value"]');
    this.$img = this.$el.querySelector('[data-img]');
  }

  #setup(){
    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener('click', this.clickHandler)
  }

  clickHandler(event){
    const type = event.target.dataset.type;
    if(type === "input" || event.target.parentNode.dataset.type === "input"){
      this.toggle();
    }
    if(type === "item" || event.target.parentNode.dataset.type === "item"){
      const id = event.target.dataset.id;
      this.select(id);
    }
  }

  get current(){
    return this.options.data.find(item => item.id === this.selectedId);
  }

  get isOpen(){
    return this.$el.classList.contains('active');
  }

  select(id){
    this.selectedId = Number(id);
    this.$value.textContent = this.current.value;
    this.$img.src = this.current.src;

    this.$el.querySelectorAll('[data-type="item"]').forEach(el => {
      el.classList.remove('selected');
    });
    this.$el.querySelector(`[data-id="${this.selectedId}"]`).classList.add('selected');
    this.close();
  }

  toggle(){
    this.isOpen ? this.close() : this.open();
  }

  open(){
    const list = this.$el.querySelector('[data-list]');
    list.style.display = 'block';
    setTimeout(() => {
      this.$el.classList.add('active');
    }, 5);
  }

  close(){
    const list = this.$el.querySelector('[data-list]');
    this.$el.classList.remove('active');
    setTimeout(() => {
      list.style.display = 'none';
    }, 300);
  }

  destroy(){
    this.$el.removeEventListener('click', this.clickHandler);
  }
}