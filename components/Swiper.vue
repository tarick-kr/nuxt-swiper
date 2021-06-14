<template>
  <div class="swiper" v-swiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner, key) in banners" :key="key">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        "https://via.placeholder.com/150x200?text=1",
        "https://via.placeholder.com/150x200?text=2",
        "https://via.placeholder.com/150x200?text=3",
        "https://via.placeholder.com/150x200?text=4",
        "https://via.placeholder.com/150x200?text=5",
        "https://via.placeholder.com/150x200?text=6"
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: false
        }
      }
    };
  }
};
</script>

<docs>
```
<template>
  <div class="swiper" v-swiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner, key) in banners" :key="key">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>
<script>
  import { directive } from 'vue-awesome-swiper';
  import 'swiper/swiper-bundle.css';
  export default {
    directives: {
      swiper: directive
    },
    data() {
      return {
        banners: [
          "https://via.placeholder.com/150x200?text=1",
          "https://via.placeholder.com/150x200?text=2",
          "https://via.placeholder.com/150x200?text=3",
          "https://via.placeholder.com/150x200?text=4",
          "https://via.placeholder.com/150x200?text=5",
          "https://via.placeholder.com/150x200?text=6"
        ],
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 20,
          pagination: {
            el: ".swiper-pagination",
            dynamicBullets: false
          }
        }
      };
    }
  };
</script>
```
</docs>
