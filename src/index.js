import './style.scss'

function component() {
    let elementDiv = document.createElement('div');
    let elementSpan = document.createElement('span');


    elementSpan.innerHTML = 'hello webpack'
    elementDiv.appendChild(elementSpan)

    return elementDiv
}

document.body.appendChild(component())

console.log([1, 2, 3].map(x => x * x))