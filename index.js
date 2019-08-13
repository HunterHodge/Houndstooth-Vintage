import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Navigo from 'navigo';
import axios from 'axios';

const router = new Navigo(location.origin);

const store = {
    'home': {
        'links': {
            'primary': [ 'Home' ]
        },
        'title': 'Home',
        'page': `<p>home page</p>`
    }
};

function render(state){
    document.querySelector('#root').innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Main(state)}
    ${Footer(state)}
    `;

    router.updatePageLinks();
}
/*
router
    .on(':view', (params) => {
        render(store[params.view]);
    })
    .on('/', () => {
        render(store.home);
    })
    .resolve();*/