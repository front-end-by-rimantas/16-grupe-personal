import { GalleryListItem } from './GalleryListItem.js';

class GalleryList {
    constructor(params) {
        this.parentDOM = params.parentDOM;
        this.data = params.data;

        this.DOM = null;

        this.init();
    }

    init() {
        this.render();
        for (const item of this.data) {
            new GalleryListItem({
                parentDOM: this.DOM,
                data: item
            });
        }
        this.addEvents();
    }

    addEvents() {
    }

    render() {
        this.parentDOM.innerHTML = `<div class="list"></div>`;
        this.DOM = this.parentDOM.querySelector('.list');
    }
}

export { GalleryList };