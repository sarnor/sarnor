import '../style/index.css'
import '../style/index.less';




import htmlPages from './import/index.js';
console.log("🚀 ~ htmlPages:", htmlPages[1])

import httpAjax from './ajax/index.js'

import pageMain from '../veiw/main/index.html'
console.log("🚀 ~ pageMain:", pageMain)

setTimeout(() => { }, 1111)
document.querySelector('#root').insertAdjacentHTML('afterend', pageMain)

// httpAjax('GET', '../veiw/main/index.html', 'text').then(e => console.log(e))
// httpAjax('GET', `../veiw/main/index.html`, 'text').then(elem => document.querySelector('#root').innerHTML = elem);
// console.log("🚀 ~ httpAjax('GET',  htmlPages[0],'text'):", httpAjax('GET', htmlPages[0], 'text'))


console.log("🚀 ~ document.querySelector('#root'):", document.querySelector('#root'))



function ff(data = 'defult') {
    console.log(data);

}
ff('Data index.js')


document.querySelector('.click')
    .addEventListener('click', () => {
        ff('event')
    })


setTimeout(() => httpAjax('GET', '/fara', 'json').then(data => console.log("🚀 ~ httpAjax ~ data:", data)), 100)

