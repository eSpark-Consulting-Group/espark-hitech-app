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
      <div class="row">
        <div class="col-6">
          <div
            class="faq-heading d-flex justify-content-center"
            v-for="faq in faq.faq"
            :key="faq.id"
          >
            <icons name="arrow-down" size="sm" color="theme-color" />
            <div class="faq-option">
              <h3 class="link question m-0" @click="toggleAnswer(faq)">
                {{ faq.question }}
              </h3>
              <h6 v-if="faq.clicked" class="font-light">{{ faq.answer }}</h6>
            </div>
          </div>
        </div>
        <div class="col-6">
          <img
            src="~assets/images/inner-page/review-image/8.jpg"
            class="img-fluid rounded-3 about-image border"
            alt=""
          />
        </div>
      </div>

      <!-- <div
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
      </div> -->
    </div>
  </section>
</template>

<script>
// import { teamleadersSlider } from "@/static/data/SliderSettingsData.js";
import VueSlickCarousel from 'vue-slick-carousel-rtl'
import icons from '../../../../assets/icons.vue'
import aboutUs from '../../../../static/DummyData/aboutUs.json'
export default {
  props: ['teamLeaders'],
  components: { VueSlickCarousel, icons },
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
      meetOurTeam: 'eSpark Hi-Tech',
      teamDesc: 'Electronic Store',
      faqList: aboutUs.faqList,
      faq: [],
      index: 0,
      selectedIndex: 0,
    }
  },
  methods: {
    getImageUrl(path) {
      return require('@/assets/images/' + path)
    },
    toggleAnswer(faq) {
      faq.clicked = !faq.clicked // toggle clicked property
    },
  },
  created() {
    this.faq = this.faqList.filter((item) => item.indexOf == this.index)[0]
  },
}
</script>

<style scoped>
a {
  cursor: pointer;
}
.link {
  cursor: pointer;
}

a:hover {
  color: #01b7a1 !important;
}
a.selected {
  color: #01b7a1 !important; /* Change the color of the selected link */
  /* Add any other styling you want for the selected link */
}
faq-heading .faq-option h3 {
  margin-top: 0px !important;
}
</style>
