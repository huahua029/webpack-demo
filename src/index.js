import './style.scss'
import img from './google.png'

function component() {
    let elementDiv = document.createElement('div')
    let elementSpan = document.createElement('span')
    let elementImg = document.createElement('img')


    elementSpan.innerHTML = 'hello webpack'
    elementImg.src = img
    elementDiv.appendChild(elementSpan)
    elementDiv.appendChild(elementImg)

    return elementDiv
}

document.body.appendChild(component())

console.log([1, 2, 3].map(x => x * x))