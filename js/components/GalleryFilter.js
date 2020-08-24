import { GalleryFilterOption } from './GalleryFilterOption.js';

class GalleryFilter {
    constructor(params) {
        this.parentDOM = params.parentDOM;
        this.data = params.data;
        this.tags = [];

        console.log(this.data);

        this.DOM = null;

        this.init();
    }

    init() {
        this.render();
        this.filterTags();

        for (const tag of this.tags) {
            new GalleryFilterOption({
                parentDOM: this.DOM,
                data: tag
            });
        }
        this.addEvents();
    }

    filterTags() {
        for (const item of this.data) {
            for (const tag of item.tags) {
                if (!this.tags.includes(tag)) {
                    this.tags.push(tag);
                }
            }
        }
    }

    addEvents() {
    }

    render() {
        this.parentDOM.insertAdjacentHTML('beforeend', `<div class="filter"></div>`);
        this.DOM = this.parentDOM.querySelector('.filter');
    }
}

export { GalleryFilter };