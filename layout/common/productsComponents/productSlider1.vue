<template>
  <div class="col-md-6" :class="sliderClass ? sliderClass : ''">
    <div class="degree-section">
      <div class="details-image ratio_asos no-arrow">
        <vue-slick-carousel
          v-bind="sliderSetting"
          ref="c1"
          :asNavFor="$refs.c2"
          :focusOnSelect="true"
        >
          <div v-for="(topImage, index) in currentImages" :key="index">
            <div class="product-image-tag">
              <vue-image-zoomer
                :regular="getImageUrl(topImage.src)"
                img-class="img-fluid w-100 image_zoom_cls-0"
                hover-message="Click once on image"
                :zoom-amount="5"
              />
              <div class="label-tag">
                <h6>
                  <i class="fas fa-star"></i> 4.8
                  <span class="font-light">120</span>
                </h6>
              </div>
            </div>
          </div>
        </vue-slick-carousel>
      </div>
      <div class="details-image-option black-slide mt-4 rounded">
        <vue-slick-carousel
          v-bind="settings2"
          ref="c2"
          :asNavFor="$refs.c1"
          :focusOnSelect="true"
        >
          <div v-for="(bottomImage, index2) in currentImages" :key="index2">
            <img :src="getImageUrl(bottomImage.src)" class="img-fluid" alt="" />
          </div>
        </vue-slick-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  productPageTopSlider,
  productPageBottomSlider,
} from "~/static/data/SliderSettingsData";
// import imageZoom from "vue-image-zoomer";
export default {
  props: ["sliderClass", "images"],
  components: {
    // "vue-image-zoomer": imageZoom,
  },
  data() {
    return {
      zoomAmount: 0,
      currentImages: {},
      changeValue: 0,
      sliderSetting: {},
      settings1: productPageTopSlider,
      settings2: productPageBottomSlider,
    };
  },
  mounted() {
    setTimeout(() => {
      this.sliderSetting = this.settings1;
    }, 100);
  },
  computed: {
    ...mapState({
      backupImages: (state) =>
        state.products.filter((item) => item.type === "fashion")[0].images,
    }),
  },
  created() {
    if (this.images != undefined) this.currentImages = this.images;
    else this.currentImages = this.backupImages;
  },
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
};
</script>

<style lang="scss">
.product-image-tag {
  overflow: hidden;

  .vh--outer {
    display: block;

    picture {
      width: 100%;
    }

    .vh--holder {
      display: block;
      width: 100%;
    }
  }
}

.details-items {
  .details-image {
    .product-image-tag {
      img {
        &.vh--abs {
          position: absolute !important;
        }

        height: unset !important;
      }
    }
  }
}
</style>
