const burger = document.querySelector('.page-header__burger');
const menu = document.querySelector('.page-header__nav-wrapper');

burger.addEventListener('click', () => {
  menu.classList.toggle('page-header__nav-wrapper--show'),
    burger.classList.toggle('page-header__burger--active');
});

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

function initMap() {
  var pos = {
    lat: 45.42308378848974,

    lng: -75.68305780065548
  };
  var opt = {
    center: pos,
    zoom: 15,
  };

  var myMap = new google.maps.Map(document.getElementById('map'), opt);
  var marker = new google.maps.Marker({
    position: pos,
    map: myMap,
    title: 'University of Ottawa'
  });
}

$(document).ready(function () {
  $('.news__slider-list').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    responsive: [{
        breakpoint: 1140,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
});
