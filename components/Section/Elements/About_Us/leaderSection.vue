<template>
  <section class="section-b-space team-leader-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title title1 text-center">
            <h2>{{ meetOurTeam }}</h2>
            <p>
              {{ teamDesc }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="product-wrapper leader-section slick-lg-space slide-5_1 ratio_asos"
      >
        <VueSlickCarousel v-bind="settings" ref="brandCarousel">
          <div v-for="(leader, index) in teamLeaders" :key="index">
            <div class="leader-contain">
              <div
                class="leader-image sliderBackground bg-size"
                :style="{
                  'background-image': `url(${getImageUrl(leader.imageSrc)})`,
                }"
              >
                <img
                  :src="getImageUrl(leader.imageSrc)"
                  class="img-fluid bg-img d-none"
                  alt=""
                />
                <ul class="social-media">
                  <li>
                    <a href="www.facebook.com">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>

                  <li>
                    <a href="www.twitter.com">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a href="www.google.com">
                      <i class="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="leader-contain">
                <h3>{{ leader.name }}</h3>
                <h6>{{ leader.position }}</h6>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
// import { teamleadersSlider } from "@/static/data/SliderSettingsData.js";
import VueSlickCarousel from 'vue-slick-carousel-rtl'
export default {
  props: ['teamLeaders'],
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },
      meetOurTeam: 'Meet Our Team',
      teamDesc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda hic porro odio voluptas qui quod sed.',
    }
  },
  methods: {
    getImageUrl(path) {
      return require('@/assets/images/' + path)
    },
  },
}
</script>

<style></style>
