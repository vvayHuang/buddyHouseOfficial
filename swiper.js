// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles
// import 'swiper/css';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: "4",
    breakpoints: {
        // when window width is >= 320px
        375: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },
    speed: 10000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});