class GalleryListItem {
    constructor(params) {
        this.parentDOM = params.parentDOM;
        this.data = params.data;

        console.log(this.data);

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
        this.parentDOM.innerHTML += `<div class="item">GALLERY ITEM: ${this.data.title}</div>`;
        this.DOM = this.parentDOM.querySelector('.item');
    }
}

export { GalleryListItem };