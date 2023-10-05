
const cont = document.querySelector('.conteiner')
const letters = Array.from('абвгґдеєжзиіїйклмнопрстуфхчцшщьюя'.toUpperCase())

document.addEventListener('click', addBalloon)

function divCreater(tag, className = null) {
    const myDiv = document.createElement(tag)
    myDiv.className = className
    return myDiv
}

function remove(elem, time) {
    setTimeout(() => {
        elem.remove()
    }, time)
}

function random(min, max) {
    const rand = Math.round(min - 0.5 + Math.random() * (max - min + 1))
    return rand
}

function addBalloon(e) {
    let boxinner = divCreater('div', 'boxinner')
    let div = divCreater('div', 'box')
    boxinner.textContent = letters[random(0, 32)]
    div.style.top = `${e.clientY - 80}px`
    div.style.left = `${e.clientX - 80}px`
    boxinner.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
    cont.append(div)
    div.append(boxinner)
    remove(div, random(2000, 4000))
}

