class GalleryListItem {
    constructor(params) {
        this.parentDOM = params.parentDOM;
        this.data = params.data;
        this.imagesDirectory = params.imagesDirectory;
        this.index = params.index;

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
    }

    updateState(tag) {
        console.log('Update item:', tag, '->', this.data.tags);

        if (this.data.tags.indexOf(tag) > -1 || !tag) {
            this.DOM.classList.remove('hidden');
        } else {
            this.DOM.classList.add('hidden');
        }
    }
}

export { GalleryListItem };