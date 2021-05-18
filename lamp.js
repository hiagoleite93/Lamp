const on = document.getElementById('on');
const off = document.getElementById('off');
const lamp = document.getElementById('lamp');

function is_broken() {
    return lamp.src.indexOf('lamp_crack') > -1
}

function lampOn() {
    if (!is_broken()) {
        lamp.src = './img/lamp_on.jpg';
    }

}

function lampOff() {
    if (!is_broken()) {
        lamp.src = './img/lamp_off.jpg'
    }
}

function lampBroken() {
    lamp.src = './img/lamp_crack.jpg'
}

function lampReset() {
    lamp.src = './img/lamp_off.jpg'
}

on.addEventListener('click', lampOn)
off.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)
lamp.addEventListener('click', lampReset)
