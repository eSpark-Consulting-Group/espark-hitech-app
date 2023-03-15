<template>
  <AboutUs />
</template>

<script>
import AboutUs from '../../components/Section/Elements/About_Us/About_Us.vue'
export default {
  head() {
    return {
      title: 'About Us',
    }
  },
  components: { AboutUs },
  created() {
    this.setBreadcrumbs({
      pageParent: 'About Us',
      pageName: 'About Us',
    })
  },
}
</script>
