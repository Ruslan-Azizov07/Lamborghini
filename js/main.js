const menuBtnOpen = document.querySelector('.menu__btn-open');
const menuBtnClose = document.querySelector('.menu__btn-close');
const menuMobile = document.querySelector('.menu-mobile');

menuBtnOpen.addEventListener('click', () => {
    menuMobile.classList.add('menu-mobile--active');
});

menuBtnClose.addEventListener('click', () => {
    menuMobile.classList.remove('menu-mobile--active');
});


const swiper = new Swiper('.swiper', {
    
    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    740: {
        slidesPerView: 2,
        spaceBetween: 20,
    }
  }
});


ymaps.ready(init);
function init(){

    var myMap = new ymaps.Map("map", {
        center: [37.2313785, -8.631852],
        zoom: 14,
    });

    var myPlacemark = new ymaps.Placemark([37.2313785, -8.631852], {}, {
        preset: 'islands#greyIcon'
    });


    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('rulerControl');

    myMap.geoObjects.add(myPlacemark); 
};
