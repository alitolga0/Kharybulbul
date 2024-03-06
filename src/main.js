

import { createApp } from 'vue';
import App from './App.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/core';

createApp(App)
  .component('swiper', Swiper)
  .component('swiper-slide', SwiperSlide)
  .use(Pagination)
  .mount('#app');
