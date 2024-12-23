const nav = document.querySelector('.nav__list')
const navBurger = document.querySelector('.nav-burger')
const navClose = document.querySelector('.nav-burger-close')
const body = document.body
const changeMainBackground = document.querySelector('.change-main-background')

//NavBar functions

const navToggleBtn = () => {
  nav.classList.toggle('active')
  body.classList.toggle('lock')
  changeMainBackground.classList.toggle('active')
}

navBurger.addEventListener('click', () => navToggleBtn())
navClose.addEventListener('click', () => navToggleBtn())

changeMainBackground.addEventListener('click', () => {
  if (nav.classList.contains('active')) {
    nav.classList.toggle('active')
  }
  body.classList.toggle('lock')
  changeMainBackground.classList.toggle('active')
  if (callForm.classList.contains('active')) {
    callForm.classList.toggle('active')
  }
  if (messageForm.classList.contains('active')) {
    messageForm.classList.toggle('active')
  }
})

// Form && Message functions

const callBtn = document.querySelectorAll('.call-btn')
const callForm = document.querySelector('.form__call')
const messageBtn = document.querySelectorAll('.message-btn')
const messageForm = document.querySelector('.form__message')
const closeForm = document.querySelectorAll('.close-form')

const formToggleBtn = (type) => {
  if (type === 'call') {
    callForm.classList.toggle('active')
  } else {
    messageForm.classList.toggle('active')
  }
  body.classList.toggle('lock')
  changeMainBackground.classList.toggle('active')
}

for (let i = 0; i < callBtn.length; i++) {
  callBtn[i].addEventListener('click', () => {
    formToggleBtn('call')
    if (nav.classList.contains('active')) {
      navToggleBtn()
    }
  })
}

for (let i = 0; i < messageBtn.length; i++) {
  messageBtn[i].addEventListener('click', () => {
    formToggleBtn()
    if (nav.classList.contains('active')) {
      navToggleBtn()
    }
  })
}

for (let i = 0; i < closeForm.length; i++) {
  closeForm[i].addEventListener('click', () => {
    if (callForm.classList.contains('active')) {
      formToggleBtn('call')
    }
    if (messageForm.classList.contains('active')) {
      formToggleBtn()
    }
  })
}

// "Read more" functions

const moreOpen = document.querySelectorAll('.more-link-open')
const moreClose = document.querySelectorAll('.more-link-close')
const elemLinkMore = document.querySelectorAll('.elem-more-link')
const elemCloseMore = document.querySelectorAll('.elem-close-more-link')
const content = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < moreOpen.length; i++) {
  moreOpen[i].addEventListener('click', () => {
    if (moreOpen[i].classList.contains('brands__link')) {
      moreOpen[i].classList.toggle('active')
      content[i].classList.toggle('active')
      moreClose[i].classList.toggle('active')
      elemLinkMore[i].classList.toggle('active')
      elemCloseMore[i].classList.toggle('active')
    }
  })
}

for (let i = 0; i < moreClose.length; i++) {
  moreClose[i].addEventListener('click', () => {
    if (moreClose[i].classList.contains('brands__link')) {
      moreOpen[i].classList.toggle('active')
      content[i].classList.toggle('active')
      moreClose[i].classList.toggle('active')
      elemLinkMore[i].classList.toggle('active')
      elemCloseMore[i].classList.toggle('active')
    }
  })
}

// swiper options

const swiperOptions = {
  pagination: {
    el: '.swiper-pagination-item',
    clickable: true
  },
  simulateTouch: true,

  touchRatio: 1,

  touchAngle: 45,

  grabCursor: true,

  slidesPerView: 'auto'
}

const brandsSwiper = new Swiper('.brands__swiper', {
  ...swiperOptions
})

const KindsSwiper = new Swiper('.kinds__swiper', {
  ...swiperOptions
})

const PriceSwiper = new Swiper('.price__swiper', {
  ...swiperOptions
})
