import { GalleryFilterOption } from './GalleryFilterOption.js';

class GalleryFilter {
    constructor(params) {
        this.parentDOM = params.parentDOM;
        this.data = params.data;
        this.tags = [];
        this.options = [];
        this.activeOption = 0;

        this.DOM = null;

        this.init();
    }

    init() {
        this.render();
        this.filterTags();

        // Default "All" tag
        this.options.push(new GalleryFilterOption({
            parentDOM: this.DOM,
            data: 'All',
            active: true,
            index: 0,
            methodReference: this.changeActiveOption
        }));

        // rest of the tags
        const size = this.tags.length;

        for (let i = 0; i < size; i++) {
            const tag = this.tags[i];
            this.options.push(new GalleryFilterOption({
                parentDOM: this.DOM,
                data: tag,
                active: false,
                index: i + 1,
                methodReference: this.changeActiveOption
            }));
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

    changeActiveOption = (optionIndex) => {
        this.options[this.activeOption].activeOff();
        this.activeOption = optionIndex;
        this.options[optionIndex].activeOn();
    }
}

export { GalleryFilter };