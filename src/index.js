import './style.scss'

function component() {
    var elementDiv = document.createElement('div');
    var elementSpan = document.createElement('span');


    elementSpan.innerHTML = 'hello webpack'
    elementDiv.appendChild(elementSpan)

    return elementDiv
}

document.body.appendChild(component())