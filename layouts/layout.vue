<template>
  <div>
    OLd oneeeeeeeeeeeeeeeeeee
    <TheHeader :offerCode="offerCode" />
    <slot></slot>
    <TheFooter />
    <MobileMenu />
  </div>
</template>

<script>
import TheHeader from '../components/Section/Common/TheHeader.vue'
import TheFooter from '../components/Section/Common/TheFooter.vue'
import MobileMenu from '../components/Section/Elements/Navigation/MobileMenu.vue'
export default {
  props: ['offerCode'],
  components: { TheHeader, TheFooter, MobileMenu },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
    // scroll smoothly on top when call from footer
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  },
}
</script>
