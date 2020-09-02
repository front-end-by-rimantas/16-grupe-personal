// TODO: kai pele nejuda, po ~10s pasislepia visi action'ai
// TODO: esc mygtukas uzdaro
// TODO: paspaudimas juodame fone irgi uzdaro
// TODO: rodyklemis naviguojame per rodoma sarasa
// TODO: galerijos nuotraukos naviguojamos ratu, t.y. pvz: is paskutines pereina i pirma

class Lightbox {
    constructor(params) {
        this.images = params;
        this.imageCount = this.images.length;

        this.parentDOM = document.querySelector('body');
        this.DOM = null;
        this.originalSizeDOM = null;
        this.zoomMinusDOM = null;
        this.zoomPlusDOM = null;
        this.fullscreenDOM = null;
        this.normalscreenDOM = null;
        this.downloadDOM = null;
        this.exitDOM = null;
        this.previousDOM = null;
        this.nextDOM = null;

        this.init();
    }

    init() {
        this.render();
        this.addEvents();
    }

    render() {
        console.log(this.images);

        this.parentDOM.insertAdjacentHTML('beforeend', `
            <div class="lightbox ${this.imageCount < 2 ? 'no-navigation' : ''}">
                <div class="top">
                    <div class="count">1/${this.imageCount}</div>
                    <div class="actions">
                        <i class="fa fa-clone"></i>
                        <i class="fa fa-search-minus"></i>
                        <i class="fa fa-search-plus"></i>
                        <i class="fa fa-expand"></i>
                        <i class="fa fa-compress"></i>
                        <i class="fa fa-download"></i>
                        <i class="fa fa-times"></i>
                    </div>
                </div>
                <div class="middle">
                    <i class="fa fa-caret-left"></i>
                    <div class="img" style="background-image: url('${this.images[0].directory + this.images[0].img}');"></div>
                    <i class="fa fa-caret-right"></i>
                </div>
                <div class="bottom">Nuotraukos pavadinimas/tekstas</div>
            </div>
        `);
        this.DOM = this.parentDOM.querySelector('.lightbox');
        this.originalSizeDOM = this.DOM.querySelector('.fa-clone');
        this.zoomMinusDOM = this.DOM.querySelector('.fa-search-minus');
        this.zoomPlusDOM = this.DOM.querySelector('.fa-search-plus');
        this.fullscreenDOM = this.DOM.querySelector('.fa-expand');
        this.normalscreenDOM = this.DOM.querySelector('.fa-compress');
        this.downloadDOM = this.DOM.querySelector('.fa-download');
        this.exitDOM = this.DOM.querySelector('.fa-times');
        this.previousDOM = this.DOM.querySelector('.fa-caret-left');
        this.nextDOM = this.DOM.querySelector('.fa-caret-right');

    }

    close() {
        this.DOM.remove();
    }

    addEvents() {
        this.originalSizeDOM.addEventListener('click', () => {
            console.log('ACTION: originalSizeDOM');
        })

        this.zoomMinusDOM.addEventListener('click', () => {
            console.log('ACTION: zoomMinusDOM');
        })

        this.zoomPlusDOM.addEventListener('click', () => {
            console.log('ACTION: zoomPlusDOM');
        })

        this.fullscreenDOM.addEventListener('click', () => {
            console.log('ACTION: fullscreenDOM');
        })

        this.normalscreenDOM.addEventListener('click', () => {
            console.log('ACTION: normalscreenDOM');
        })

        this.downloadDOM.addEventListener('click', () => {
            console.log('ACTION: downloadDOM');
        })

        this.exitDOM.addEventListener('click', () => {
            this.close();
        })

        this.previousDOM.addEventListener('click', () => {
            console.log('ACTION: previousDOM');
        })

        this.nextDOM.addEventListener('click', () => {
            console.log('ACTION: nextDOM');
        })

        window.addEventListener('keyup', (e) => {
            if (e.keyCode === 27) {
                this.close();
            }
        });
    }
}

export { Lightbox };