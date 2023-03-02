<template>
  <section class="section-b-space">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="brand-slider">
            <vue-slick-carousel v-bind="settings" ref="brandCarousel">
              <div v-for="(image, index) in images" :key="index">
                <div class="brand-image">
                  <img
                    :src="getImageUrl(image)"
                    class="img-fluid"
                    alt="brand logo"
                  />
                </div>
              </div>
            </vue-slick-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "brand/1.png",
        "brand/2.png",
        "brand/3.png",
        "brand/4.png",
        "brand/5.png",
        "brand/6.png",
        "brand/4.png",
      ],
      settings: {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },
    };
  },
  methods:{
    getImageUrl(path) {
      return require("@/assets/images/" + path);
    },
  }
};
</script>
