import {infoCarousel} from "../../obj/infoCarousel.js"
export default function carousel(){

  const getCarousel = document.querySelector('.dev-Swiper .swiper-wrapper')

  infoCarousel.forEach(info => {

    const carousel = document.createElement('div')
    carousel.classList.add('swiper-slide') 
    
    const divCarousel = document.createElement('div')
    divCarousel.classList.add('carousel')
    
    const divCarouselImg = document.createElement('div')
    divCarouselImg.innerHTML = `<img src=".${info.img}" alt="${info.titulo}">`

    const tituloCarousel = document.createElement('h2')
    tituloCarousel.innerText = `${info.titulo}`

    const paragrafoCarousel = document.createElement('p')
    paragrafoCarousel.innerText = `${info.paragrafo}`
    
    divCarousel.appendChild(divCarouselImg)
    divCarousel.appendChild(tituloCarousel)
    divCarousel.appendChild(paragrafoCarousel)
    carousel.appendChild(divCarousel)
    getCarousel.appendChild(carousel)

  })

}

