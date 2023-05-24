<template>
  <section class="overflow-hidden">
    <div class="container">
      <div class="row g-5">
        <div class="col-xl-5 offset-xl-1">
          <div class="row g-3">
            <div class="col-md-6">
              <img
                src="~assets/images/inner-page/review-image/6.jpg"
                class="img-fluid rounded-3 about-image"
                alt=""
              />
            </div>
            <div class="col-md-6">
              <img
                src="~assets/images/inner-page/review-image/7.jpg"
                class="img-fluid rounded-3 about-image"
                alt=""
              />
            </div>
            <div class="col-12 ratio_40">
              <div>
                <img
                  src="~assets/images/inner-page/review-image/8.jpg"
                  class="img-fluid rounded-3 team-image bg-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-5">
          <div class="about-details">
            <div>
              <h2>{{ whoAreWe }}</h2>
              <h3>{{ largerFashion }}</h3>
              <p>
                {{ aboutUsDesc }}
              </p>
              <p>
                {{ aboutUsDesc2 }}
              </p>
              <button
                @click.prevent="$router.push('/')"
                type="button"
                class="btn btn-solid-default"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      whoAreWe: 'WHO ARE WE',
      largerFashion: 'eSpark Consulting Group',
      aboutUsDesc: `We love technology and creating cool stuff with it. From designing software, hardware, and mechanical projects, 
      everything we do is up-to-date with the latest trends. 
      Our design process and products help our clients stay ahead of their competitors. So far, we've completed over 150+ projects that are innovative and top-notch quality, 
      helping us to grow and succeed. Our focus on quality and innovation has helped us build long-term relationships with our clients, many of whom have been with us for years.
      `,
      aboutUsDesc2: `We offer a range of services, including Iot, software development, IT consulting, project management, and more.,
  expedita!`,
    }
  },
}
</script>

<style></style>
