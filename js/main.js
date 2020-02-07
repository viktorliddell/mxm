document.addEventListener('DOMContentLoaded', () => {

  // активируем wow.js
  new WOW().init()

  // активируем before-after
  new Cocoen(document.querySelector('.cocoen'));

  // активируем слайдер starsGlide
  const starsGlide = new Glide('.stars__glide', {
    type: 'carousel',
    gap: 10,
    perView: 3,
    animationDuration: 500,
    animationTimingFunc: 'ease-in-out',
    breakpoints: {
      1100: {
        perView: 2
      },
      750: {
        perView: 1
      }
    }
  })
  
  starsGlide.mount()

  // активируем слайдер galleryGlide
  const galleryGlide = new Glide('.gallery__glide', {
    type: 'carousel',
    gap: 0,
    perView: 1,
    autoplay: 6000,
    hoverpause: true,
    animationDuration: 500,
    animationTimingFunc: 'ease-in-out'
  })
  
  galleryGlide.mount()

  // активируем слайдер testimonials
  const testimonialsGlide = new Glide('.testimonials__glide', {
    type: 'carousel',
    perView: 3,
    gap: 50,
    animationDuration: 500,
    animationTimingFunc: 'ease-in-out'
  })
  
  testimonialsGlide.mount()

  // Функция для добавления анимации
  function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

  // Header
  const headerBtn = document.querySelector('.header__navbar-mobile-btn')
  const drawer = document.querySelector('.header__drawer')
  const wrapper = document.querySelector('.wrapper')
  const drawerLinks = document.querySelectorAll('.drawer__link')
  const addText = document.querySelector('.about__addtext')

  function addDrawer() {
    headerBtn.classList.add('header__navbar-mobile-btn--active')
    // Отображаем дровер
    drawer.classList.add('header__drawer--active')
    // Добавляем затемнение
    wrapper.classList.add('wrapper--active')
  }

  function removeDrawer() {
    // убираем активный класс
    headerBtn.classList.remove('header__navbar-mobile-btn--active')
    // Убираем дровер с экрана
    drawer.classList.remove('header__drawer--active')
    // Убираем затемнение
    wrapper.classList.remove('wrapper--active')
  }

  // Клик на кнопку
  headerBtn.addEventListener('click', function() {
    if (this.classList.contains('header__navbar-mobile-btn--active')) {
      removeDrawer()
    } else {
      addDrawer()
    }
  })

  // Нажатие ESC
  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
      if (headerBtn.classList.contains('header__navbar-mobile-btn--active')) {
        removeDrawer()
      }
    }
  })

  // Нажатие на обертку
  wrapper.addEventListener('click', function(event) {
    if (headerBtn.classList.contains('header__navbar-mobile-btn--active')) {
      removeDrawer()
    }
  })

  // Нажатие на ссылки дровера
  drawerLinks.forEach(element => {
    element.addEventListener('click', function() {
      if (headerBtn.classList.contains('header__navbar-mobile-btn--active')) {
        removeDrawer()
      }
    })
  })

  // Нажатие на кнопку ЧИТАТЬ ДАЛЕЕ
  readBtn.addEventListener('click', function(event) {
    animateCSS('#readBtn', 'bounceOut', function() {
      event.target.style.display = 'none'
      addText.style.display = 'block'
      animateCSS('.about__addtext', 'fadeInLeft')
      hideBtn.style.display = 'block'
    })
  })

})