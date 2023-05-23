<template>
  <div class="col-xl-3 col-lg-4 col-sm-6 d-none d-sm-block">
    <div class="footer-newsletter">
      <h3>Let's Connect</h3>
      <p class="font-dark mb-0">
        Keep up to date with our latest news and special offers.
      </p>
      <form
        action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&amp;id=082f74cbda"
        class="form-newsletter needs-validation"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
      >
        <div class="input-group mb-4">
          <input
            type="email"
            class="form-control"
            :class="formControlColor ? formControlColor : ''"
            placeholder="Your Email Address"
          />
          <span class="input-group-text" id="basic-addon4">
            <i class="fas fa-arrow-right"></i>
          </span>
        </div>

        <h3 class="mb-0">Follow us</h3>

        <div class="social-icons">
          <shareIt />
          <!-- <a href="www.facebook.com">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="www.twitter.com">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="www.facebook.com">
                      <i class="fab fa-linkedin"></i>
                    </a> -->
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import icons from '../../../../assets/icons.vue'
import shareIt from '../product/productsComponents/shareIt.vue'

export default {
  props: ['formControlColor'],
  components: { icons },
}
</script>

<style scoped>
.social-icons {
  display: flex;
  gap: 10px;
}

.social-icons a {
  font-size: 1.5rem;
  transition: color 0.2s;
}
</style>
