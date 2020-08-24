class GalleryFilterOption {
    constructor(params) {
        this.parentDOM = params.parentDOM;
        this.data = params.data;

        this.DOM = null;

        this.init();
    }

    init() {
        this.render();
        this.addEvents();
    }

    addEvents() {
    }

    render() {
        this.parentDOM.insertAdjacentHTML('beforeend', `<div class="option">FILTER OPTION: ${this.data.title}</div>`);
        this.DOM = this.parentDOM.querySelector('.option');
    }
}

export { GalleryFilterOption };