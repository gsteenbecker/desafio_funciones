function changeColorToBlack (event){
    event.target.style.backgroundColor = 'black'
}

const div1 = document.getElementById('box1')
const div2 = document.getElementById('box2')
const div3 = document.getElementById('box3')
const div4 = document.getElementById('box4')

div1.addEventListener('click', changeColorToBlack)
div2.addEventListener('click', changeColorToBlack)
div3.addEventListener('click', changeColorToBlack)
div4.addEventListener('click', changeColorToBlack)