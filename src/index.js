var preview = document.querySelector('.preview')
var box1 = document.querySelector('.box1')
preview.onclick = () => {
    box1.style.display;
    if (box1.style.display !== 'flex') {
        box1.style.display = 'flex'
    } else {
        box1.style.display = 'none'

    }
}