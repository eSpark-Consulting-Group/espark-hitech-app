<template>
  <div>
    <TheHeader :offerCode="offerCode" />
    <slot></slot>
    <!-- <TheHeader :offerCode="offerCode" />
      <slot></slot>
      <footer1>
          <slot name="footerRight"></slot>
        </footer1> -->
    <TheFooter />
    <!-- <mobileMenu /> -->
  </div>
</template>

<script>
// import header3 from "~/layout/common/headers/header3.vue";
// import footer1 from "~/layout/common/footers/footer1.vue";
//   import mobileMenu from "~/layout/elements/navigation/mobileMenu.vue";
import TheHeader from '../components/Section/Common/TheHeader.vue'
import TheFooter from '../components/Section/Common/TheFooter.vue'
export default {
  props: ['offerCode'],
  components: { TheHeader, TheFooter },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
}
</script>
