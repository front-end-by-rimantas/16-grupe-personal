import { GalleryFilterOption } from './GalleryFilterOption.js';

class GalleryFilter {
    constructor(params) {
        this.parentDOM = params.parentDOM;
        this.data = params.data;

        this.DOM = null;

        this.init();
    }

    init() {
        this.render();

        for (const item of this.data) {
            new GalleryFilterOption({
                parentDOM: this.DOM,
                data: item
            });
        }
        this.addEvents();
    }

    addEvents() {
    }

    render() {
        this.parentDOM.insertAdjacentHTML('beforeend', `<div class="filter"></div>`);
        this.DOM = this.parentDOM.querySelector('.filter');
    }
}

export { GalleryFilter };