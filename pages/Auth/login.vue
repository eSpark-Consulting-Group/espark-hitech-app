<template>
  <div class="bg-image">
    <div class="login-section">
      <div class="materialContainer">
        <div class="uper">
          <img
            src="~assets/images/logo2.png"
            width="160"
            height="88"
            class="img-fluid"
            alt="logo"
          />
        </div>
        <div class="box">
          <h2 class="text-center mb-3">Log In</h2>
          <ValidationObserver v-slot="{ invalid }" class="w-100">
            <div class="row g-2 mt-md-1 mt-2">
              <div class="col-12">
                <ValidationProvider
                  rules="required|email"
                  v-slot="{ errors }"
                  name="Email"
                  class="d-block"
                >
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="values.email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    autocomplete="email"
                  />
                  <span class="validate-error text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </div>

              <div class="col-12">
                <ValidationProvider
                  rules="required"
                  v-slot="{ errors }"
                  name="Password"
                  class="d-block"
                >
                  <label for="password" class="form-label">Password</label>
                  <input
                    name="password"
                    autocomplete="current-password"
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter Your Password"
                    required
                    v-model="values.password"
                  />

                  <span class="validate-error text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </div>

              <div class="col-12">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Remember Me"
                  class="d-block"
                >
                  <div class="form-check ps-0 mt-3 custome-form-check">
                    <input
                      class="checkbox_animated check-it"
                      type="checkbox"
                      id="rememberMe"
                      value="rememberMe"
                      v-model="values.rememberMe"
                    />
                    <label
                      class="form-check-label checkout-label"
                      for="rememberMe"
                      >Remember Me</label
                    >
                  </div>
                  <span class="validate-error text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </div>
              <div class="col-12 d-flex align-items-center">
                <button
                  class="btn btn-solid-default btn fw-bold w-100 mt-2"
                  type="submit"
                  @click.prevent="login"
                  :disabled="invalid"
                >
                  Log In
                </button>
              </div>
            </div>
          </ValidationObserver>

          <div class="my-3 text-center">
            <router-link to="/auth/forgot_password"
              >Forgot your password?
            </router-link>
          </div>

          <hr size="1" width="100%" color="black" />

          <div class="text-center">
            {{ Orsigninwith }}
          </div>

          <div class="row gy-2 gy-md-0 gx-md-2 my-3">
            <div class="col-md-6">
              <a href="www.facebook.com">
                <div class="social-media fb-media">
                  <img
                    src="~assets/images/inner-page/facebook.png"
                    class="img-fluid"
                    alt=""
                  />
                  <h6>Facebook</h6>
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="www.gmail.com">
                <div class="social-media google-media bg-white">
                  <img
                    src="~assets/images/inner-page/google.png"
                    class="img-fluid"
                    alt=""
                  />
                  <h6>Google</h6>
                </div>
              </a>
            </div>
          </div>

          <div class="text-center">
            Not a member?
            <nuxt-link to="/auth/register">Sign up now </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full.esm';

export default {
  layout: 'authLayout',

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data() {
    return {
      themeCss: '/demo2.css',
      Orsigninwith: 'Or sign in with',
      values: {
        email: '',
        password: '',
        rememberMe: false,
      },
    };
  },

  head() {
    return {
      title: 'Login',
      link: [{ rel: 'icon', type: 'image/x-icon', href: ' favicon.png' }],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/demo1.scss';
.login-section {
  background: url('../../assets/images/electronics/slider/banner2.jpg');
  background-size: cover;
}

.uper {
  display: flex;
  justify-content: center;
  border-radius: 32px 32px 0px 0px;
  background: #e6f4f4;
  padding-bottom: 2rem;
  padding-top: 2rem;
}

.box {
  border-radius: 0px 0px 32px 32px !important;
  padding: calc(10px + (60 - 30) * ((100vw - 320px) / (1920 - 320)))
    calc(10px + (30 - 10) * ((100vw - 320px) / (1920 - 320)));
}

.materialContainer {
  max-width: 37.5rem !important;
}

.login {
  display: flex;
  justify-content: center;
}
.login {
  button {
    padding-right: 2.5rem !important;
    padding-left: 2.5rem !important;
    border-radius: 50px !important;
  }
}
</style>
