import { GalleryList } from './GalleryList.js';
import { GalleryFilter } from './GalleryFilter.js';

class Gallery {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
        this.imagesDirectory = params.imagesDirectory;

        this.selectorDOM = null;
        this.DOM = null;

        this.FILTER = null;
        this.LIST = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }
        this.render();

        this.FILTER = new GalleryFilter({
            parentDOM: this.DOM,
            data: this.data,
            stateUpdate: this.updateGalleryState
        });
        this.LIST = new GalleryList({
            parentDOM: this.DOM,
            data: this.data,
            imagesDirectory: this.imagesDirectory
        });

        this.addEvents();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string') {
            console.warn('Selector should be a "string" type.');
            return false;
        }
        if (this.selector === '') {
            console.warn('Selector should not be an empty string.');
            return false;
        }

        this.selectorDOM = document.querySelector(this.selector);
        if (!this.selectorDOM) {
            console.warn('Could not find any element by given selector.');
            return false;
        }

        return true;
    }

    addEvents() {
    }

    render() {
        this.selectorDOM.innerHTML = `<div class="gallery"></div>`;
        this.DOM = this.selectorDOM.querySelector('.gallery');
    }

    updateGalleryState = (tag) => {
        this.LIST.filterItemsByTag(tag);
    }
}

export { Gallery };




/*
- Gallery.js
    - filter
        - option
    - GalleryList.js
        - GalleryListItem.js
*/