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
    <!-- <NewsSubscribe /> -->
  </div>
</template>

<script>
import TeamLeaderSection from '../../components/Section/Elements/About_Us/TeamLeaderSection.vue'
import TestimonialSection from '../../components/Section/Elements/About_Us/TestimonialSection.vue'
import leaderSection from '../../components/Section/Elements/About_Us/leaderSection.vue'
import CustomerServices from '../../components/Section/Elements/HomePageElements/Banners/CustomerServices.vue'
import banners from '../../static/DummyData/banners.json'
export default {
  head() {
    return {
      title: 'About Us',
    }
  },
  components: {
    TeamLeaderSection,
    TestimonialSection,
    leaderSection,
    CustomerServices,
  },
  created() {
    this.setBreadcrumbs({
      pageParent: 'About Us',
      pageName: 'About Us',
    })
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
