import { createApp } from 'vue';
import App from './App.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import router from './router'; // Doğru import edildiğine dikkat edin
import { Pagination } from 'swiper/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

library.add(faWhatsapp, faInstagram, faFacebook);

createApp(App)
  .component('swiper', Swiper)
  .component('swiper-slide', SwiperSlide)
  .use(Pagination)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app');
