<template>
  <section class="testimonial-section section-b-space">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="title title1 text-center">
            <h2>Testimonial</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              assumenda hic porro odio voluptas qui quod sed.
            </p>
          </div>
        </div>
      </div>
      <div class="testimonial-slider product-wrapper slide-3-1 slick-lg-space">
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
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel-rtl'
export default {
  props: ['testimonials'],
  components: { VueSlickCarousel },
  data() {
    return {
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

<style></style>
