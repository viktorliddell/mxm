document.addEventListener('DOMContentLoaded', function() {

  // скрываем прелоадер
  window.onload = function () {
    const preloader = document.getElementById('preloader')
    animateCSS('.preloader__img', 'flipOutX', function () {
      document.querySelector('.preloader__img').style.display = 'none'
      preloader.style.opacity = 0
      setTimeout(() => {
        preloader.style.display = 'none'
      }, 500)
    })
  }
    
  // активируем wow.js
  new WOW().init()

  // активируем before-after
  new Cocoen(document.querySelector('.cocoen'))

  // активируем слайдер starsGlide
  const starsGlide = new Glide('.stars__glide', {
    type: 'carousel',
    gap: 15,
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
    breakpoints: {
      1200: {
        perView: 2
      },
      750: {
        perView: 1
      }
    },
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

  // Выбор ноды
  const headerBtn = document.querySelector('.header__navbar-mobile-btn')
  const drawer = document.querySelector('.header__drawer')
  const wrapper = document.querySelector('.wrapper')
  const drawerLinks = document.querySelectorAll('.drawer__link')
  const addText = document.querySelector('.about__addtext')
  const smoothLinks = document.querySelectorAll('.smooth__link')
  const arrowUp = document.getElementById('arrow-up')

  // Показать дровер
  function addDrawer() {
    headerBtn.classList.add('header__navbar-mobile-btn--active')
    // Отображаем дровер
    drawer.classList.add('header__drawer--active')
    // Добавляем затемнение
    wrapper.classList.add('wrapper--active')
  }

  // Удалить дровер
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

  // Плавный переход по якорю
  smoothLinks.forEach(element => {
    element.addEventListener('click', function(event) {
      event.preventDefault()

      let href = this.getAttribute('href').substring(1)
      const scrollTarget = document.getElementById(href)

      const topOffset = 100
      const elementPosition = scrollTarget.getBoundingClientRect().top
      const offsetPosition = elementPosition - topOffset

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      })
    })
  })

  // Добавление кнопки прокрутки наверх
  window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 1000) {
      if (arrowUp.style.display != 'block') {
        arrowUp.style.display = 'block'
        animateCSS('#arrow-up', 'fadeInRight')
      }
    } else {
      arrowUp.style.display = 'none'
    }
  })
})