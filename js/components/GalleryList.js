import { GalleryListItem } from './GalleryListItem.js';

class GalleryList {
    constructor(params) {
        this.parentDOM = params.parentDOM;
        this.data = params.data;
        this.imagesDirectory = params.imagesDirectory;

        this.itemsList = [];
        this.DOM = null;

        this.init();
    }

    init() {
        this.render();

        let itemIndex = 0;

        for (const item of this.data) {
            this.itemsList.push(new GalleryListItem({
                parentDOM: this.DOM,
                data: item,
                imagesDirectory: this.imagesDirectory,
                index: itemIndex++
            }));
        }
        this.addEvents();
    }

    addEvents() {
    }

    render() {
        this.parentDOM.insertAdjacentHTML('beforeend', `<div class="list"></div>`);
        this.DOM = this.parentDOM.querySelector('.list');
    }

    filterItemsByTag(tag) {
        for (const item of this.itemsList) {
            item.updateState(tag);
        }
    }
}

export { GalleryList };