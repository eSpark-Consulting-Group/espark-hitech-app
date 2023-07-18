<template>
  <div class="home-slider sliderBackground bg-size img-fluid">
    <img :src="getImageUrl(slide.image)" class="bg-img w-100" alt="" />
    <!-- <div class="home-wrap relative">
      <div class="discover-block d-sm-block d-none" style="padding-bottom: 10%">
        <div class="d-flex">
          <div class="discover-content">
            <button
              href="javascript:void(0)"
              @click.prevent="$router.push('/shop/shop_left_sidebar')"
              type="button"
              class="buton1 btn"
            >
              {{ $t(Showdetails) }}
            </button>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="group-btn">
      <button
        href="javascript:void(0)"
        @click.prevent="$router.push('/shop/shop_left_sidebar')"
        type="button"
        class="btn btn-solid-default"
      >
        {{ $t(Showdetails) }}
      </button>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ['slide'],
  data() {
    return {
      Showdetails: 'Dicover More',
    }
  },
  computed: {
    currencySymbol() {
      return '$'
    },
    currencymultiple() {
      return 1
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
.home-slider {
  height: auto !important;
}
.bg-img {
  max-width: 1720px;
  max-height: 820px;
  width: 100%;
  height: auto;
}
/* .img-fluid {
  max-width: 100% !important;
} */
/* .home-slider {
  height: auto !important;
} */
/* @media (max-width: 768px) {

  ;
} */
@media (max-width: 768px) {
  .img-fluid {
    max-width: 100% !important;
  }

  /* .bg-img {
    width: 360px;
    height: auto;
  } */
}
.buton1 {
  position: absolute;
  bottom: 2%;
  left: 5%;
  width: 210px;
  height: 42px;
  border: none;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    180deg,
    #c6dbda 0%,
    rgba(228, 238, 237, 0.473958) 78.65%,
    rgba(255, 255, 255, 0) 100%
  ) !important;
  border-radius: 20px;
}

.buton1:hover,
.buton1:active {
  background: linear-gradient(
    360deg,
    #6edfd9 0%,
    rgba(228, 238, 237, 0.473958) 78.65%,
    rgba(255, 255, 255, 0) 100%
  ) !important;
}
</style>
