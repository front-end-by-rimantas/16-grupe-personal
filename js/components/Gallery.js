import { GalleryList } from './GalleryList.js';

class Gallery {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;

        this.selectorDOM = null;
        this.DOM = null;

        this.LIST = null;

        console.log(params);

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }
        this.render();
        this.LIST = new GalleryList({
            parentDOM: this.DOM,
            data: this.data
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

        console.log(this.DOM);
    }
}

export { Gallery };




/*
- Gallery.js
    - GalleryList.js
        - GalleryListItem.js
*/