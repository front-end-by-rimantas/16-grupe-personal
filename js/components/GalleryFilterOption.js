class GalleryFilterOption {
    constructor(params) {
        this.parentDOM = params.parentDOM;
        this.tag = params.data;
        this.active = params.active;
        this.index = params.index;
        this.referenceToParentMethod = params.methodReference

        this.DOM = null;

        this.init();
    }

    init() {
        this.render();
        this.addEvents();
    }

    render() {
        this.parentDOM.insertAdjacentHTML('beforeend', `
            <div class="option ${this.active ? 'active' : ''}"
                data-tag="${this.tag}">${this.tag}</div>`);

        this.DOM = this.parentDOM.querySelector(`.option[data-tag="${this.tag}"]`);
    }

    addEvents() {
        this.DOM.addEventListener('click', () => {
            // kreipaisi i tevo metoda ir perduoda savo this.index
            this.referenceToParentMethod(this.index);
        });
    }

    activeOn() {
        this.DOM.classList.add('active');
    }

    activeOff() {
        this.DOM.classList.remove('active');
    }
}

export { GalleryFilterOption };