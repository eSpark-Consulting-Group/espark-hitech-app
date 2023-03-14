<template>
  <layout :offer-code="offerCode">
    <Breadcrumb pageName="About Us" parent="About us" />
    <!-- blogs -->
    <AboutUS />
  </layout>
</template>

<script>
import layout from '../../layouts/layout.vue'
import Breadcrumb from '../../components/Section/Elements/HeaderElements/Breadcrumb.vue'
import AboutUS from '../../components/Section/Elements/AboutUS/AboutUS.vue'
export default {
  components: {
    layout,
    Breadcrumb,
    AboutUS,
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
