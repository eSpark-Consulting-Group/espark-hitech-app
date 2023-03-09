<template>
  <div>
    <layout :offerCode="offerCode">
      <breadcrumb v-if="breadcrumb" pageName="404" parent="404" />
      <section class="page-not-found section-b-space">
        <div class="container">
          <div class="row gx-md-2 gx-0 gy-md-0 gy-3">
            <div class="col-md-8 m-auto">
              <div class="page-image">
                <img
                  src="~assets/images/inner-page/404.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div class="col-md-8 mx-auto mt-md-5 mt-3">
              <div class="page-container pass-forgot">
                <div>
                  <h2>{{ pagenotfound }}</h2>
                  <p>
                    {{ pagedescriptions }}
                  </p>
                  <nuxt-link to="/" class="btn btn-solid-default">{{
                    BackHomePage
                  }}</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <subscribe />
    </layout>
    <!-- <mobileMenu /> -->
  </div>
</template>

<script>
// import header3 from "~/layout/common/headers/header3.vue";
// import footer1 from "~/layout/common/footers/footer1.vue";
//   import mobileMenu from "~/layout/elements/navigation/mobileMenu.vue";
import subscribe from '../components/Section/Elements/HomePageElements/Banners/subscribe.vue'
import layout from './layout.vue'
import breadcrumb from '../components/Section/Elements/breadcrumbs/breadcrumb.vue'
import TheHeader from '../components/Section/Common/TheHeader.vue'
import TheFooter from '../components/Section/Common/TheFooter.vue'
export default {
  layout: 'error',
  data() {
    return {
      breadcrumb: true,
      offerCode: 'DEF4526',
      pagenotfound: 'page not found',
      pagedescription:
        "The page you are looking for doesn't exist or an other error occurred. Go back, or head over to choose a new direction.",
      BackHomePage: 'Back Home Page',
    }
  },
  components: { TheHeader, TheFooter, breadcrumb, layout, subscribe },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
}
</script>
