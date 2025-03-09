import '../style/index.css'
import '../style/index.less';

console.log(document.querySelector('h1'));

const foot = (data = 'default') => console.log(data);

foot('js')

document.querySelector('h2').addEventListener('click', () => foot('h2'))