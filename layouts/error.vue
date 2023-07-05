<template>
  <div class="vh-100">
    <div class="ms-5 mt-2">
      <img
        src="~assets/images/logo2.png"
        width="160"
        height="88"
        class="img-fluid"
        alt="logo"
      />
    </div>
    <section class="page-not-found section-b-space">
      <div class="d-flex align-items-center justify-content-center">
        <div class="w-50 m-auto" style="background: #e7e7e7; padding: 4rem">
          <div class="row gx-md-2 gx-0 gy-md-0 gy-3">
            <div class="col-md-12">
              <h1 class="d-flex align-items-center justify-content-center">
                <span style="font-size: 200px">4</span>
                <img
                  src="~assets/errorImage404.gif"
                  alt="GIF"
                  class="img-fluid"
                />

                <span style="font-size: 200px">4</span>
              </h1>
            </div>
          </div>
          <div class="col-md-8 mx-auto mt-1">
            <div class="page-container pass-forgot">
              <div>
                <h2 style="color: #01b7a1; white-space: pre; font-size: 20px">
                  The page you're trying to access can't be found on our site.
                </h2>

                <nuxt-link to="/" class="btn btn-solid-default"
                  >Back Home Page</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'errorlayout',
  head() {
    return {
      title: '404 - Not Found',
    }
  },
  created() {
    this.setBreadcrumbs({ pageParent: '404', pageName: 'Not Found' })
  },
}
</script>
