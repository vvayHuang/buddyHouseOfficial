// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles
// import 'swiper/css';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: "4",
    speed: 10000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});