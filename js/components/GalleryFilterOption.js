class GalleryFilterOption {
    constructor(params) {
        this.parentDOM = params.parentDOM;
        this.tag = params.data;

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
        this.parentDOM.insertAdjacentHTML('beforeend', `<div class="option">${this.tag}</div>`);
        this.DOM = this.parentDOM.querySelector('.option');
    }
}

export { GalleryFilterOption };