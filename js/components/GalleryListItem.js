import { Lightbox } from './Lightbox.js';

class GalleryListItem {
    constructor(params) {
        this.parentDOM = params.parentDOM;
        this.data = params.data;
        this.imagesDirectory = params.imagesDirectory;
        this.index = params.index;
        this.isVisible = true;

        this.visibleItems = params.visibleItems;

        this.DOM = null;
        this.hoverDOM = null;

        this.init();
    }

    init() {
        this.render();
        this.addEvents();
    }

    render() {
        const HTML = `<div class="item" data-index="${this.index}">
                        <div class="image">
                            <img src="${this.imagesDirectory + this.data.img}" alt="Image">
                            <div class="hover">
                                <i class="fa fa-globe"></i>
                            </div>
                        </div>
                        <div class="title">${this.data.title}</div>
                        <div class="tags">${this.data.tags}</div>
                    </div>`;
        this.parentDOM.insertAdjacentHTML('beforeend', HTML);
        this.DOM = this.parentDOM.querySelector(`.item[data-index="${this.index}"]`);
        this.hoverDOM = this.DOM.querySelector('.hover');
    }

    addEvents() {
        this.hoverDOM.addEventListener('click', () => {
            new Lightbox(this.visibleItems());
        });
    }

    updateState(tag) {
        if (this.data.tags.indexOf(tag) > -1 || !tag) {
            this.DOM.classList.remove('hidden');
            this.isVisible = true;
        } else {
            this.DOM.classList.add('hidden');
            this.isVisible = false;
        }
    }
}

export { GalleryListItem };