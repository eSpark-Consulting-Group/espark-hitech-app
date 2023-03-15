<template>
  <div>
    <LandingPageSlider :slides="slides" />
    <CustomerServices serviceClasses="service-style-2 section-b-space" />
    <TopBanner />
    <!-- :banners="
        bannersList.filter((item) => item.subtype === 'topbanner')[0].banners
      "
    /> -->
    <OurCollections />
    <!-- :products="productsList" -->
    <TopSellingCarousel />
    <hurryUpBanner />
    <BrandCarousel />
  </div>
</template>

<script>
import LandingPageSlider from '../../../components/Section/Elements/HomePageElements/Slider/LandingPageSlider.vue'
import CustomerServices from '../../../components/Section/Elements/HomePageElements/Banners/CustomerServices'
import TopBanner from '../../../components/Section/Elements/HomePageElements/Banners/TopBanner.vue'
import OurCollections from '../../../components/Section/Elements/HomePageElements/Banners/OurCollections.vue'
import BrandCarousel from '../../../components/Section/Elements/HomePageElements/Banners/Brands.vue'
import TopSellingCarousel from '../../../components/Section/Elements/HomePageElements/Banners/TopSellingCarousel.vue'
import hurryUpBanner from '../../../components/Section/Elements/HomePageElements/Banners/hurryUpBanner.vue'
export default {
  head() {
    return {
      title: 'Electronic Store',
    }
  },
  components: {
    LandingPageSlider,
    CustomerServices,
    TopBanner,
    OurCollections,
    BrandCarousel,
    TopSellingCarousel,
    hurryUpBanner,
  },
  data() {
    return {
      sliderData: {
        slides: [
          {
            image: 'electronics/slider/banner1.jpg',
            left: {
              top: 'NEW OFFER',
              topdescription: 'Buy One Get One Free',
              headingtop: '4K',
              headingbottom: 'CAMERA',
              tagline: 'Wishing for is right',
              mrp: 480,
              price: 456,
              description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              bottomheadind: 'Discover',
              bottomsubheading: 'Our Collection',
            },
            right: {
              heading: 'Suggestion Product',
              subheading: 'Our Collection',
              description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              image1: 'electronics/slider/2.jpg',
              image2: 'electronics/slider/3.jpg',
            },
          },
          {
            image: 'electronics/slider/banner2.jpg',
            left: {
              top: 'NEW OFFER',
              topdescription: 'Buy One Get One Free',
              headingtop: '4K',
              headingbottom: 'CAMERA',
              tagline: 'Wishing for is right',
              mrp: 480,
              price: 456,
              description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              bottomheadind: 'Discover',
              bottomsubheading: 'Our Collection',
            },
            right: {
              heading: 'Suggestion Product',
              subheading: 'Our Collection',
              description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              image1: 'electronics/slider/2.jpg',
              image2: 'electronics/slider/3.jpg',
            },
          },
        ],
      },
      // themeCss: '/voxo/css/demo1.css',
    }
  },

  // created() {
  //   // if (process.client) {
  //   //   this.$store.dispatch("layout/setPrimaryColor", {
  //   //     primaryColor: "#0163d2",
  //   //   });
  //   //   let layoutMode = localStorage.getItem("colorMode");
  //   //   if (layoutMode === "dark") this.themeCss = "/voxo/css/demo1_dark.css";
  //   //   else this.themeCss = "/voxo/css/demo1.css";
  //   // }
  // },
  // mounted() {
  //   // if (process.client) {
  //   //   !localStorage.getItem("newsLetterSet") &&
  //   //     this.$store.dispatch("clickEvents/toggleNewsLetterModal");
  //   // }
  // },

  computed: {
    slides() {
      // return this.$store.state.slider.filter(
      return this.sliderData.slides
      // .filter(
      //   (item) => item.type === 'electronic'
      // )[0].slides
    },
    // productsList() {
    //   return this.$store.state.products.filter(
    //     (item) => item.type === "electronic"
    //   );
    // },
    // slides() {
    //   return this.$store.state.slider.filter(
    //     (item) => item.type === "electronic"
    //   )[0].slides;
    // },
    // hurryUpBannersList() {
    //   return this.$store.state.tabsBanners.filter(
    //     (item) => item.type === "electronic"
    //   );
    // },
    // bannersList() {
    //   return this.$store.state.banners.filter(
    //     (item) => item.type === "electronic"
    //   );
    // },
  },
}
</script>
<style lang="scss">
@import '~assets/scss/demo1.scss';
</style>
