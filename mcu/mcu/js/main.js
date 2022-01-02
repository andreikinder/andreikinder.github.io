const body = document.querySelector('.body');

try {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction()
  };

  // Get the header
  var menu = document.getElementById("myHeader");

  // Get the offset position of the navbar
  var sticky = menu.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      $('.error').addClass('scroll');
      menu.classList.add("sticky");
      $('.doctor_page').addClass('scroll');
      $('.thank').addClass('scroll');
    } else {
      $('.error').removeClass('scroll');
      menu.classList.remove("sticky");
      $('.doctor_page').removeClass('scroll');
      $('.thank').removeClass('scroll');
    }
  }
} catch (el) {

}

$('.menu__cart').on('click', () => {
  $('.cart').toggleClass('active');
  $('.menu__cart-icon').toggleClass('open');
})

$('.btn_cart2').on('click', () => {
  $('.cart').removeClass('active');
  $('.menu__cart-icon').removeClass('open');
})

$('.mobile__cart').on('click', () => {
  body.classList.toggle('scroll');
})

const humb = document.querySelector('.humb');
const humbBtn = document.querySelector('.humb__btn');
const humbMenu = document.querySelector('.humb__menu');

humbBtn.addEventListener('click', () => {
  humb.classList.toggle('active');
  humbMenu.classList.toggle('active')
  body.classList.toggle('scroll');
})

const modals = document.querySelectorAll('.modal');
const modalMain = document.querySelector('.modal_main');
const modalForm = document.querySelector('.modal_form');
const modalThank = document.querySelector('.modal_thank');

const modalCloses = document.querySelectorAll('.modal_close');
const overlays = document.querySelectorAll('.modal__overlay');

const btnsModal = document.querySelectorAll('.btnModal');
const btnDocs = document.querySelectorAll('.btn_doctor');
const btnsThank = document.querySelectorAll('.btn_Thank');

for (modalClose of modalCloses) {
  modalClose.addEventListener('click', () => {
    for (modal of modals) {
      modal.classList.remove('active');
      body.classList.remove('scroll');
    }
  })
}

for (overlay of overlays) {
  overlay.addEventListener('click', () => {
    for (modal of modals) {
      modal.classList.remove('active');
      body.classList.remove('scroll');
    }
  })
}

for (btnDoc of btnDocs) {
  btnDoc.addEventListener('click', () => {
    modalMain.classList.add('active');
    body.classList.add('scroll');
  })
}

for (btnModal of btnsModal) {
  btnModal.addEventListener('click', () => {
    modalForm.classList.add('active');
    body.classList.add('scroll');
  })
}

for (btnThank of btnsThank) {
  btnThank.addEventListener('click', () => {
    modalMain.classList.remove('active');
    modalForm.classList.remove('active');
    modalThank.classList.add('active');
    body.classList.add('scroll');
  })
}

var element = document.querySelectorAll('.phoneMask');
var maskOptions = {
  mask: '+{7} (000) 000-00-00'
};

for (el of element) {
  var mask = IMask(el, maskOptions);
}

let swiperTime = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 3.5,
  loop: true,
  speed: 500,
  navigation: {
    nextEl: '.tabs__next',
    prevEl: '.tabs__prev',
  },
  breakpoints: {
    320: {
      allowTouchMove: false,
    },
    560: {
      allowTouchMove: true,
    }
  },
});

let swiperFooter = new Swiper(".swiperFooter", {
  direction: "vertical",
  slidesPerView: 1,
  loop: true,
  speed: 1200,
  navigation: {
    nextEl: '.footer__next',
    prevEl: '.footer__prev',
  },

  breakpoints: {
    320: {
      allowTouchMove: false,
    },
    560: {
      allowTouchMove: true,
    }
  },
});


let swiperQuote = new Swiper(".quoteSwiper", {
  loop: true,
  speed: 1000,
  navigation: {
    nextEl: '.quote__next',
    prevEl: '.quote__prev',
  },
});

let swiperNews = new Swiper(".swiperNews", {
  loop: true,
  speed: 700,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.news__next',
    prevEl: '.news__prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

let swiperDoctor = new Swiper(".swiperDoctor", {
  loop: true,
  speed: 700,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.doctor__next',
    prevEl: '.doctor__prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

let swiperHeader = new Swiper(".swiperHeader", {
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".header-swiper-dot",
    clickable: true,
  },
});