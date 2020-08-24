class GalleryListItem {
    constructor(params) {
        this.parentDOM = params.parentDOM;
        this.data = params.data;
        this.imagesDirectory = params.imagesDirectory;

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
        const HTML = `<div class="item">
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
        this.DOM = this.parentDOM.querySelector('.item');
    }
}

export { GalleryListItem };