"use strict";
import galleryData from '../../data/featured-projects.js';

import { Header } from '../components/Header.js';
import { Services } from '../components/Services.js';
import { Gallery } from '../components/Gallery.js';
import { Footer } from '../components/Footer.js';
import { Newsletter } from '../components/Newsletter.js';

new Header({
    selector: '#main_header'
});
new Services('#services_list', 'services.json');
new Gallery({
    selector: '#featured_projects',
    data: galleryData,
    limit: 6,
    orderBy: 'newest'
});
new Footer({
    selector: '#main_footer'
});
new Newsletter({
    selector: '#footer_newsletter',
    insertPosition: 'beforeend'
});