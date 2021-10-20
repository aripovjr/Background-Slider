const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activelist=0

rightBtn.addEventListener('click', ()=>{
    activelist++

    if(activelist>slides.length-1){
        activelist=0
    }

    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', ()=>{
    activelist--

    if(activelist<0){
        activelist=slides.length-1
    }

    setBgToBody()
    setActiveSlide()
})

setBgToBody()

function setBgToBody(){
    body.style.backgroundImage=slides[activelist].style.backgroundImage
}

function setActiveSlide(){
    slides.forEach((slide)=>slide.classList.remove('active'))

    slides[activelist].classList.add('active')
}