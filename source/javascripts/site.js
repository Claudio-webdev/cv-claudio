//Click Events
const menuBtns     = Array.from(document.querySelectorAll('.js-toSection'))
const topBar       = document.querySelector('.js-top')
const goBack       = document.querySelector('.js-toTop')
const about        = document.querySelector('.js-about')
const experience   = document.querySelector('.js-experience')
const contact      = document.querySelector('.js-contact')
const goDown       = document.querySelector('.js-goDown')
const menuOpen     = document.querySelector('.js-openMenu')
const menuList     = document.querySelector('.js-menuList')
const menuClose    = document.querySelector('.js-closeMenu')
const dropdownList = Array.from(document.querySelectorAll('.js-dropdownList'))
const title        = Array.from(document.querySelectorAll('.js-letter'))
const imgBack      = document.querySelector('.js-background')
const subTitle     = document.querySelector('.js-subtitle')
const sectionTitle = Array.from(document.querySelectorAll('.js-sectionTitle'))
const paragraphes  = Array.from(document.querySelectorAll('.js-p'))

var index = 0;

 if (window.innerWidth >768){
  init() 
}
 

function init(){
  reset()
  setHome()
  titleAnimation()

}

//RESET
function reset(){
  sectionTitle.forEach((el,i)=>{
    gsap.to(el, {duration: 0 ,opacity: 0,y: 16})
  })
  paragraphes.forEach((el,i)=>{
    gsap.to(el, {duration: 0 ,opacity: 0,y: 25})
  })

}
function setHome(){
  gsap.to(imgBack, {opacity:0, duration:0});
  gsap.to(subTitle, {x:-2000, opacity:1, duration:0});
}

//CLICK EVENTS
dropdownList.forEach((el,i)=>{
   el.addEventListener('click',()=> {
        goToSection(i)
    })

})

menuBtns.forEach((el,i)=>{
   el.addEventListener('click',()=> {
        goToSection(i)
    })
  gsap.to(el, {opacity: 0, y:100, duration: 0});
    setTimeout(() => {
    gsap.to(el, {opacity: 1, y:0, duration: 1});
  }, i * 200);
})

goDown.addEventListener('click', ()=>{
      about.scrollIntoView({
          behavior: 'smooth'
      })
})
goBack.addEventListener('click', ()=>{
      topBar.scrollIntoView({
          behavior: 'smooth'
      })
})

function goToSection(i) {
  console.log(i)
   if (i == 0 ) {
      about.scrollIntoView({
          behavior: 'smooth'
      })
  } else if (i == 1) {
    experience.scrollIntoView({
        behavior: 'smooth'
      }) 
    }else if (i == 2){
     contact.scrollIntoView({
        behavior: 'smooth'
      })      
  }


}

//ANIMATIONS

  function titles_animation(y) {
    sectionTitle.forEach((el) => {
      if (verge.inY(el) && !el.animated) {
        el.animated = true
        gsap.to(el,{
          y:0,
          scale:1,
          opacity: 1,
          duration: .7,
          delay: .2
        })
      }
    })
}

function text_animation(y) {
    paragraphes.forEach((el) => {
      if (verge.inY(el) && !el.animated) {
        el.animated = true
        gsap.to(el,{
          y:0,
          scale:1,
          opacity: 1,
          duration: 1,
          delay: .2
        })
      }
    })
}
function titleAnimation(){
  title.forEach((el,i)=>{
    setTitle(el)

    setTimeout(() => {
        gsap.to(el, {opacity: 1, x:0, color: "#dfe0e4", duration: 1, onComplete: add()});
      }, i * 100);
  })  
}
function setTitle(el){
    gsap.to(el, {opacity: 0, x:2000, duration: 0});
}
function add(){
  index++
   if (index == title.length ){
    gsap.to(imgBack, {opacity:0.1, duration:3});
    gsap.to(subTitle, {x:0, opacity:1, duration:2});
      }
}
//SCROLL
function scroll_animations() {
    const y = window.scrollY
  titles_animation(y)
  text_animation(y)
}
if (window.innerWidth > 375){
  window.addEventListener('scroll', function() {
      scroll_animations() 
  })
}
//click event

menuOpen.addEventListener('click',()=>{
  menuOpen.classList.toggle('hide')
  menuClose.classList.toggle('hide')
  menuList.classList.toggle('hide')
})
menuClose.addEventListener('click',()=>{
  menuOpen.classList.toggle('hide')
  menuClose.classList.toggle('hide')
  menuList.classList.toggle('hide')
})


