import '../style/index.css'
import '../style/index.less';

import htmlPages from './import/index.js';

import httpAjax from './ajax/index.js'

const h1 = document.querySelector('h1')
console.log(h1);

function foot(data = 'default') {
    console.log(data);
}

h1.addEventListener('click', foot)