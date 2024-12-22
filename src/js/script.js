const nav = document.querySelector(".nav__list");
const navBurger = document.querySelector(".nav-burger");
const navClose = document.querySelector(".nav-burger-close");
const body = document.body;
const changeMainBackground = document.querySelector(".change-main-background");

navBurger.addEventListener("click", () => {
  nav.classList.toggle("active");
  body.classList.toggle("lock");
  changeMainBackground.classList.toggle("active");
});

navClose.addEventListener("click", () => {
  nav.classList.toggle("active");
  body.classList.toggle("lock");
  changeMainBackground.classList.toggle("active");
});

changeMainBackground.addEventListener("click", () => {
  if (nav.classList.contains("active")) {
    nav.classList.toggle("active");
  }
  body.classList.toggle("lock");
  changeMainBackground.classList.toggle("active");
  if (callForm.classList.contains("active")) {
    callForm.classList.toggle("active");
  }
  if (messageForm.classList.contains("active")) {
    messageForm.classList.toggle("active");
  }
});

const callBtn = document.querySelectorAll(".call-btn");
const callForm = document.querySelector(".form__call");
const messageBtn = document.querySelectorAll(".message-btn");
const messageForm = document.querySelector(".form__message");
const closeForm = document.querySelectorAll(".close-form");

for (let i = 0; i < callBtn.length; i++) {
  callBtn[i].addEventListener("click", () => {
    callForm.classList.toggle("active");
    body.classList.toggle("lock");
    changeMainBackground.classList.toggle("active");
    if (nav.classList.contains("active")) {
      nav.classList.toggle("active");
      body.classList.toggle("lock");
      changeMainBackground.classList.toggle("active");
    }
  });
}

for (let i = 0; i < closeForm.length; i++) {
  closeForm[i].addEventListener("click", () => {
    if (callForm.classList.contains("active")) {
      callForm.classList.toggle("active");
      body.classList.toggle("lock");
      changeMainBackground.classList.toggle("active");
    }
    if (messageForm.classList.contains("active")) {
      messageForm.classList.toggle("active");
      body.classList.toggle("lock");
      changeMainBackground.classList.toggle("active");
    }
  });
}

for (let i = 0; i < messageBtn.length; i++) {
  messageBtn[i].addEventListener("click", () => {
    messageForm.classList.toggle("active");
    body.classList.toggle("lock");
    changeMainBackground.classList.toggle("active");
    if (nav.classList.contains("active")) {
      nav.classList.toggle("active");
      body.classList.toggle("lock");
      changeMainBackground.classList.toggle("active");
    }
  });
}

const moreOpen = document.querySelectorAll(".more-link-open");
const moreClose = document.querySelectorAll(".more-link-close");
const elemLinkMore = document.querySelectorAll(".elem-more-link");
const elemCloseMore = document.querySelectorAll(".elem-close-more-link");
const content = document.querySelectorAll(".tabsContentItem");

for (let i = 0; i < moreOpen.length; i++) {
  moreOpen[i].addEventListener("click", () => {
    if (moreOpen[i].classList.contains("brands__link")) {
      moreOpen[i].classList.toggle("active");
      content[i].classList.toggle("active");
      moreClose[i].classList.toggle("active");
      elemLinkMore[i].classList.toggle("active");
      elemCloseMore[i].classList.toggle("active");
    }
  });
}

for (let i = 0; i < moreClose.length; i++) {
  moreClose[i].addEventListener("click", () => {
    if (moreClose[i].classList.contains("brands__link")) {
      moreOpen[i].classList.toggle("active");
      content[i].classList.toggle("active");
      moreClose[i].classList.toggle("active");
      elemLinkMore[i].classList.toggle("active");
      elemCloseMore[i].classList.toggle("active");
    }
  });
}

const brandsSwiper = new Swiper(".brands__swiper", {
  pagination: {
    el: ".swiper-pagination-item",
    clickable: true,
  },
  simulateTouch: true,

  touchRatio: 1,

  touchAngle: 45,

  grabCursor: true,

  slidesPerView: "auto",
});

const KindsSwiper = new Swiper(".kinds__swiper", {
  pagination: {
    el: ".swiper-pagination-item",
    clickable: true,
  },
  simulateTouch: true,

  touchRatio: 1,

  touchAngle: 45,

  grabCursor: true,

  slidesPerView: "auto",
});

const PriceSwiper = new Swiper(".price__swiper", {
  pagination: {
    el: ".swiper-pagination-item",
    clickable: true,
  },
  simulateTouch: true,

  touchRatio: 1,

  touchAngle: 45,

  grabCursor: true,

  slidesPerView: "auto",
});
