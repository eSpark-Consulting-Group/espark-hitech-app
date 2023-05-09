<template>
  <div class="col-md-6">
    <div class="row justify-content-end">
      <div class="col-lg-2 oder-lg-1 order-2">
        <div class="details-image-vertical black-slide rounded">
          <VueSlickCarousel
            v-bind="settingsVertical"
            :style="{ height: '372px' }"
            ref="c2"
            :asNavFor="$refs.c1"
            :slidesToShow="3"
            :focusOnSelect="true"
          >
            <div v-for="(verticalImage, index) in productImages" :key="index">
              <img
                :src="getImageUrl(verticalImage.src)"
                class="img-fluid"
                alt=""
              />
            </div>
          </VueSlickCarousel>
        </div>
      </div>
      <div class="col-lg-10 order-lg-2 order-1">
        <div class="details-image-1 ratio_asos no-arrow">
          <VueSlickCarousel
            v-bind="sliderSetting"
            ref="c1"
            :asNavFor="$refs.c2"
            :focusOnSelect="true"
          >
            <div v-for="(image, index2) in productImages" :key="index2">
              <img
                :src="getImageUrl(image.src)"
                id="zoom_01"
                :data-zoom-image="getImageUrl(image.src)"
                class="img-fluid w-100 image_zoom_cls-0 "
                alt=""
              />
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel-rtl'
import dummyproducts from '../../../../../static/DummyData/information.json'
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      sliderSetting: {},
      settings: {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      settingsVertical: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.details-image-1',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        centerPadding: '0',
        arrows: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              vertical: false,
            },
          },
        ],
      },
      products: dummyproducts.data,
    }
  },
  mounted() {
    setTimeout(() => {
      this.sliderSetting = this.settings
    }, 1000)
  },
  computed: {
    // ...mapState({
    //   productImages: (state) =>
    //     state.information.data.filter(
    //       (item) => item.type === "fashionImages"
    //     )[0].images,
    // }),
    productImages() {
      return this.products.filter((item) => item.type === 'fashionImages')[0]
        .images
    },
  },
  methods: {
    getImageUrl(path) {
      return require('@/assets/images/' + path)
    },
  },
}
</script>

<style scoped>
@media (min-width: 992px) {
  .col-lg-10 {
    flex: 0 0 auto;
    width: 63.33333333%;
  }
}
</style>
