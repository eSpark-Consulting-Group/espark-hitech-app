<template>
  <div>
    <!-- team leader section Start -->
    <TeamLeaderSection />

    <!-- team leader section End -->

    <!-- service section start -->
    <CustomerServices serviceClasses="service-style-2 section-b-space" />
    <!-- service section end -->

    <!-- Leader section start -->
    <leaderSection :teamLeaders="teamLeaders" />

    <!-- leader section End -->
    <!-- testimonial section start -->
    <TestimonialSection :testimonials="testimonials" />
    <NewsSubscribe />
  </div>
</template>

<script>
import TeamLeaderSection from './TeamLeaderSection'
import TestimonialSection from './TestimonialSection'
import banners from '../../../../static/DummyData/banners.json'
import leaderSection from './leaderSection.vue'
import CustomerServices from '../HomePageElements/Banners/CustomerServices.vue'
import NewsSubscribe from '../HomePageElements/Banners/NewsSubscribe.vue'
export default {
  components: {
    TeamLeaderSection,
    TestimonialSection,
    leaderSection,
    CustomerServices,
    NewsSubscribe,
  },
  data() {
    return {
      banner: banners,
    }
  },
  computed: {
    testimonials() {
      return this.banner.data.filter(
        (item) => item.type == 'aboutUsTestimonial'
      )[0].children
    },
    teamLeaders() {
      return this.banner.data.filter(
        (item) => item.type === 'aboutTeamLeaders'
      )[0].children
    },
  },
}
</script>

<style></style>
