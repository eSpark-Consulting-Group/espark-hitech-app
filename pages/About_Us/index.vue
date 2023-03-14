<template>
  <layout :offer-code="offerCode">
    <Breadcrumb pageName="About Us" parent="About Us" />
    <!-- blogs -->
    <AboutUs />
  </layout>
</template>

<script>
import layout from '../../layouts/layout.vue'
import Breadcrumb from '../../components/Section/Elements/HeaderElements/Breadcrumb.vue'
import AboutUs from '../../components/Section/Elements/About_Us/About_Us.vue'
export default {
  components: {
    layout,
    Breadcrumb,
    AboutUs,
  },
  head() {
    return {
      title: 'About Us',
    }
  },
  data() {
    return {
      offerCode: 'DEF4526',
    }
  },
}
</script>
