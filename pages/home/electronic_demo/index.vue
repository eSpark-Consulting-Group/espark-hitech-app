<template>
  <layout :offerCode="offerCode">
    <homeSlider :slides="slides" />
    <customerServices serviceClasses="service-style-2 section-b-space" />
    <topBanner
      :banners="
        bannersList.filter((item) => item.subtype === 'topbanner')[0].banners
      "
    />

    <ourCollectionCarousel :products="productsList" />

    <bannerWithTimer
      :banner="bannersList.filter((item) => item.subtype === 'dealday')[0]"
    />

    <vrCollectionCarousel
      :products="productsList.filter((item) => item.category === 'vr')"
    />

    <hurryUpBanner
      :tabList="
        hurryUpBannersList.filter((item) => item.subtype === 'hurryup')[0].tabs
      "
    />
    <!--
    <instagramShop
      :banners="
        bannersList.filter((item) => item.subtype === 'instagramshop')[0]
          .children
      "
    />
    
   
    <cookieBar1 cookieBarClasses="cookiebar-left-section" />
    <newsLetterModal /> -->
    <brandCarousel />
    <template v-slot:footerRight>
      <footerRight1 />
    </template>
  </layout>
</template>

<script>
import layout from "~/layout/layouts/layout.vue";
// import cookieBar1 from "~/layout/elements/cookieBars/cookieBar1.vue";
import homeSlider from "~/components/home/electronicDemoComponents/homeSlider.vue";
import customerServices from "~/layout/elements/banners/customerServices.vue";
import topBanner from "~/components/home/electronicDemoComponents/electronicBanner.vue";
import ourCollectionCarousel from "~/components/home/electronicDemoComponents/ourCollectionCarousel.vue";
import bannerWithTimer from "~/components/home/electronicDemoComponents/bannerWithTimer.vue";
import vrCollectionCarousel from "~/components/home/electronicDemoComponents/vrCollectionCarousel.vue";
// import instagramShop from "~/components/home/electronicDemoComponents/instagramShop.vue";
import hurryUpBanner from "~/components/home/electronicDemoComponents/hurryUpBanner.vue";
import brandCarousel from "~/layout/elements/banners/brand.vue";
import footerRight1 from "~/layout/elements/footerElements/footerRight1.vue";
// import newsLetterModal from "~/layout/elements/modals/newsLetterModal.vue";

export default {
  head() {
    return {
      title: "Electronic Store",
      link: [{ rel: "icon", type: "image/x-icon", href: "1.png" }],
    };
  },
  components: {
    layout,
    // cookieBar1,
    homeSlider,
    customerServices,
    topBanner,
    ourCollectionCarousel,
    bannerWithTimer,
    vrCollectionCarousel,
    hurryUpBanner,
    // instagramShop,
    brandCarousel,
    footerRight1,
    // newsLetterModal,
  },
  data() {
    return {
      offerCode: "DEF4526",
      themeCss: "/voxo/css/demo1.css",
    };
  },

  computed: {
    productsList() {
      return this.$store.state.products.filter(
        (item) => item.type === "electronic"
      );
    },
    slides() {
      return this.$store.state.slider.filter(
        (item) => item.type === "electronic"
      )[0].slides;
    },
    hurryUpBannersList() {
      return this.$store.state.tabsBanners.filter(
        (item) => item.type === "electronic"
      );
    },
    bannersList() {
      return this.$store.state.banners.filter(
        (item) => item.type === "electronic"
      );
    },
  },
  created() {
    // if (process.client) {
    //   this.$store.dispatch("layout/setPrimaryColor", {
    //     primaryColor: "#0163d2",
    //   });
    //   let layoutMode = localStorage.getItem("colorMode");
    //   if (layoutMode === "dark") this.themeCss = "/voxo/css/demo1_dark.css";
    //   else this.themeCss = "/voxo/css/demo1.css";
    // }
  },
  mounted() {
    // if (process.client) {
    //   !localStorage.getItem("newsLetterSet") &&
    //     this.$store.dispatch("clickEvents/toggleNewsLetterModal");
    // }
  },
};
</script>

<style lang="scss">
@import "~assets/scss/demo1.scss";
</style>
