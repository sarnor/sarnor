import '../style/index.css'
import '../style/index.less';

import httpAjax from './ajax/index.js'
setTimeout(() => { }, 1111)


function ff(data = 'defult') {
    console.log(data);

}
ff('Data index.js')


document.querySelector('.click')
    .addEventListener('click', () => {
        ff('event')
    })


setTimeout(() => httpAjax('GET', '/fara', 'json').then(data => console.log("🚀 ~ httpAjax ~ data:", data)), 100)

