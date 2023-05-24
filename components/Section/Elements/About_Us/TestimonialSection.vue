<template>
  <section class="testimonial-section section-b-space">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title title1 text-center">
            <h2>Fast Facts</h2>
            <!-- <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              assumenda hic porro odio voluptas qui quod sed.
            </p> -->
          </div>
        </div>
      </div>
      <!-- <div class="fastfacts-container">
        <div class="fastfacts-item" v-for="faq in facts" :key="faq.id">
          <div class="faq-option">
            <icons
              class="link mb-3 mt-2"
              :name="faq.icon"
              size="lg"
              color="theme-color"
            />
            <h3 class="link question mb-3" @click="toggleAnswer(faq)">
              {{ faq.header }}
            </h3>
            <h4 class="answer mb-2">{{ faq.answer }}</h4>
          </div>
        </div>
      </div> -->
      <div class="fastfacts-container">
        <div class="row">
          <div
            class="col-md-4 fastfacts-item"
            v-for="faq in facts"
            :key="faq.id"
          >
            <div>
              <div class="faq-option">
                <icons
                  class="link mb-3 mt-2"
                  :name="faq.icon"
                  size="lg"
                  color="theme-color"
                />
                <h3 class="link question mb-3" @click="toggleAnswer(faq)">
                  {{ faq.header }}
                </h3>
                <h4 class="answer mb-2">{{ faq.answer }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="testimonial-slider product-wrapper slide-3-1 slick-lg-space">
        <VueSlickCarousel v-bind="settings" ref="brandCarousel">
          <div v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-contain">
              <div class="textimonial-image">
                <img
                  :src="getImageUrl(testimonial.imageSrc)"
                  class="img-fluid"
                  alt=""
                />
              </div>

              <div class="testimonial-details">
                <ul class="rating">
                  <li
                    v-for="(star, index) in testimonial.ratingStars"
                    :key="'a' + index"
                  >
                    <i class="fas fa-star theme-color"></i>
                  </li>

                  <li
                    v-for="(star, index) in 5 - testimonial.ratingStars"
                    :key="'b' + index"
                  >
                    <i class="fas fa-star"></i>
                  </li>
                </ul>
                <h5 class="details-images">
                  <i class="fas fa-quote-left"></i>{{ testimonial.description
                  }}<i class="fas fa-quote-right"></i>
                </h5>
                <h5>
                  <strong>{{ testimonial.name }}</strong> /
                  {{ testimonial.name }}
                </h5>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div> -->
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel-rtl'
import icons from '../../../../assets/icons.vue'
export default {
  props: ['testimonials'],
  components: { VueSlickCarousel, icons },
  data() {
    return {
      facts: [
        {
          id: 2,
          header: 'NUMBER OF EMPLOYEES',
          answer: '5,000 +',
          icon: 'employees',
        },
        {
          id: 3,
          header: 'FACILITIES',
          answer: 'Over 3 Million Square Feet',
          icon: 'question',
        },
        {
          id: 4,
          header: 'PRODUCTS AVAILABLE',
          answer: '14.9 Million +',
          icon: 'products',
        },
        {
          id: 5,
          header: 'SUPPLIERS',
          answer: '2,300 +',
          icon: 'question',
        },

        {
          id: 11,
          header: 'ORDERS SHIPPED SAME DAY',
          answer: '99.9%',
          icon: 'question',
        },
        {
          id: 12,
          header: 'CUSTOMER SERVICE',
          answer: 'Available 24/7',
          icon: 'question',
        },
      ],

      settings: {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              fade: true,
            },
          },
        ],
      },
    }
  },
  methods: {
    getImageUrl(path) {
      return require('@/assets/images/' + path)
    },
  },
}
</script>

<style scoped>
.fastfacts-container {
  background-color: #eff2f7;
  border-radius: 12px;
  padding: 40px 20px 20px 20px;
}
.fastfacts-container {
  display: flex;
  flex-flow: row wrap;
  padding: 10px px 1% 20px 1%;
  width: 98%;
  text-align: center;
}
.faq-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.fastfacts-item {
  border: 1px solid #dee2e6;
  /* border-right: 1px solid #ddd; */
}
/* .fastfacts-item {
  position: relative;
  width: 22%;
  -webkit-flex: 1 0 auto;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0px;
  box-sizing: content-box;
  overflow: hidden;
  padding: 0px;
  min-height: 120px;
} */

/* .question {
  color: white !important;
}
.answer {
  color: #ddd;
} */
</style>
