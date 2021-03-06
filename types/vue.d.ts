import Vue from 'vue'
import { AxiosStatic } from 'axios';

declare module 'vue/types/vue' {
  interface Vue {
    $api: AxiosStatic,
    $swiper: any,
    mainSwiper: any
  }
}