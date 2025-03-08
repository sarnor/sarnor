import '../style/index.css'
import '../style/index.less';

import htmlPages from './import/index.js';

import httpAjax from './ajax/index.js'

import pageMain from '../veiw/main/index.html'

document.querySelector('#root').insertAdjacentHTML('afterend', pageMain)
1
const isEmail = (data = 'defult') => {
    console.log(data);
}
isEmail('Data index.js');