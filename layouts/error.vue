<template>
  <layout :offer-code="'Helloasd'">
    <Breadcrumb pageName="404" parent="404" />
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
        </div>
        <div class="col-md-8 mx-auto mt-md-5 mt-3">
          <div class="page-container pass-forgot">
            <div>
              <h2>Page Not Found</h2>
              <p>
                The page you are looking for doesn't exist or an other error
                occurred. Go back, or head over to choose a new direction.
              </p>
              <nuxt-link to="/" class="btn btn-solid-default"
                >Back Home Page</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <NewsSubscribe />
  </layout>
  <!-- <mobileMenu /> -->
</template>
<script>
import layout from './layout.vue'
import Breadcrumb from '../components/Section/Elements/Breadcrumbs/Breadcrumb.vue'
import NewsSubscribe from '../components/Section/Elements/HomePageElements/Banners/NewsSubscribe.vue'
export default {
  components: { layout, Breadcrumb, NewsSubscribe },
  data() {
    return {
      breadcrumb: true,
      offerCode: 'DEF4526',
    }
  },
}
</script>
