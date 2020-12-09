let thumbbar = document.getElementById('thumb-bar')
let section2 = document.getElementById('SecTwo')
let displayedImage = document.getElementsByClassName('displayed-img')
let submitButton = document.getElementsByTagName('button')
let inputarea = document.getElementById('effect')
let picnum = 1

section2.style.display = 'none'

for (let i = 0; i < 5; i++) {
    let img = document.createElement('img')
    img.src = './images/pic'+picnum+'.jpg'
    img.id = 'pic'+picnum
    thumbbar.appendChild(img)
    picnum++
}

thumbbar.addEventListener('mouseover', hoverImage)
submitButton[0].addEventListener('click', BlurBabyBlur)

function hoverImage(event){
    section2.style.display = ''
    if (String(event.target.id).includes('pic')){
        displayedImage[0].src = './images/'+event.target.id+'.jpg'
        displayedImage[0].id = event.target.id
    }
    if (document.documentElement.clientWidth <= 640){
        displayedImage[0].style = 'width: '+(.8 * document.documentElement.clientWidth)+'px'
    }
}

function BlurBabyBlur(){
    if (inputarea.value == 'blur'){
        let varid = displayedImage[0].id
        displayedImage[0].src = './images/'+displayedImage[0].id+'B.jpg'
    }
    else {
        alert('Invalid Effect')
    }
    inputarea.value = ''
}