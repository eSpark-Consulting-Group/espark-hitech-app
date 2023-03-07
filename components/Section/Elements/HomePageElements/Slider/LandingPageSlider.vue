<template>
  <section class="home-section home-section-1">
    <div class="container-fluid p-0">
      <div class="slick-1 classic-arrow">
        <VueSlickCarousel v-bind="settings">
          <div v-for="(slide, index) in slides" :key="index">
            <homeSlide :slide="slide" />
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import homeSlide from './homeSlide.vue'
import VueSlickCarousel from 'vue-slick-carousel-rtl'
// import { ElectronicMainSlider } from "~/static/data/SliderSettingsData";
export default {
  props: ['slides'],
  components: {
    homeSlide,
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      },
    }
  },
}
</script>

<style>
@-webkit-keyframes fadeInUpSD {
  0% {
    opacity: 0;
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInUpSD {
  0% {
    opacity: 0;
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeInUpSD {
  -webkit-animation-name: fadeInUpSD;
  animation-name: fadeInUpSD;
}

.slick-active > .fadeInUp {
  animation-name: fadeInUpSD;
  animation-duration: 1s;
  opacity: 1;
  width: 100%;
  padding: 10px 20px 30px 0;
}

.slick-slide.slick-active .fadeInUp {
  animation-name: fadeInUpSD;
  animation-duration: 1s;
  opacity: 1;
  width: 100%;
}
</style>
