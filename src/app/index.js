import '../style/index.css'
import '../style/index.less';
console.log('fffffffffffffff');
const httpAjax = (method, url, response_type, body = null) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.responseType = response_type;
        xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        xhr.onload = () => xhr.status >= 400 ? reject(xhr.response) : resolve(xhr.response);
        xhr.onerrror = () => reject(xhr.response);
        xhr.send(JSON.stringify(body));
    });
};

setTimeout(() => {

    httpAjax('GET', '/fara', 'json').then(data => {
        console.log("🚀 ~ httpAjax ~ data:", data)

    })
}, 100)

console.log("ddddddddddddd");
