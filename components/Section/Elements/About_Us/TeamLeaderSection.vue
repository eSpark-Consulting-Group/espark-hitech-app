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
                @click.prevent="$router.push('/shop/shop_left_sidebar')"
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
      largerFashion: 'largest Online fashion destination',
      aboutUsDesc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
  culpa! Asperiores labore amet nemo ullam odit atque adipisci,
  hic, aliquid animi fugiat praesentium quidem. Perspiciatis,
  expedita!`,
      aboutUsDesc2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
  culpa! Asperiores labore amet nemo ullam odit atque adipisci,
  hic, aliquid animi fugiat praesentium quidem. Perspiciatis,
  expedita!`,
    }
  },
}
</script>

<style></style>
