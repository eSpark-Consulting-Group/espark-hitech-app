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
          <div class="login-title1">
            <h2>Log In</h2>
          </div>
          <div class="input">
            <!-- <label
              for="email"
              :style="[{ 'line-height': selected['email'] ? '18px' : '60px' }]"
              >Email</label
            > -->
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              id="email"
              required
              v-on:blur="handleFocusOut('email')"
              v-model="auth.email"
              @focus.prevent="select('email')"
            />
            <!-- <span
              class="spin"
              :style="[{ width: selected['email'] ? '100%' : '0%' }]"
            ></span> -->
            <div class="valid-feedback">Please fill the name</div>
          </div>
          <div class="input">
            <!-- <label
              for="password"
              :style="[
                { 'line-height': selected['password'] ? '18px' : '60px' },
              ]"
              >Password</label
            > -->
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              v-on:blur="handleFocusOut('password')"
              v-model="auth.password"
              @focus.prevent="select('password')"
            />
            <!-- <span
              class="spin"
              :style="[{ width: selected['password'] ? '100%' : '0%' }]"
            ></span> -->
            <div class="valid-feedback">Please fill the name</div>
          </div>
          <div class="input1">
            <label class="form-check-label rememberMe" for="rememberMe"
              >Remember me</label
            >
            <input
              class="form-check-input"
              type="checkbox"
              value="lsRememberMe"
              id="rememberMe"
            />
          </div>

          <div class="button btn-primary login">
            <button
              href="javascript:void(0)"
              @click.prevent="login"
              type="submit"
            >
              <span>Log In</span>
            </button>
          </div>
          <a
            href="javascript:void(0)"
            @click.prevent="$router.push('/auth/forgot_password')"
            class="pass-forgot"
            >Forgot your password?</a
          >
          <hr
            size="1"
            width="100%"
            color="black"
            style="margin-top: 7.5rem; position: relative"
          />

          <p class="sign-category">
            <span>{{ Orsigninwith }}</span>
          </p>

          <div class="row gx-md-3 gy-3">
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

          <p>Not a member?</p>
          <div class="button btn-primary login">
            <button
              href="javascript:void(0)"
              @click.prevent="$router.push('/auth/register')"
              type="submit"
            >
              <span>Sign up now</span>
            </button>
          </div>

          <!-- <nuxt-link to="/auth/register" class="button btn-primary login"
            ><button
              href="javascript:void(0)"
              @click.prevent="login"
              type="submit"
            >
              <span>Sign up now</span>
            </button></nuxt-link
          > -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'authLayout',
  data() {
    return {
      themeCss: '/demo2.css',
      auth: { email: 'test@gmail.com', password: 'test@123' },
      selected: { email: false, password: false },
      Orsigninwith: 'Or sign in with',
    }
  },
  head() {
    return {
      title: 'Login',
      link: [{ rel: 'icon', type: 'image/x-icon', href: ' favicon.png' }],
    }
  },
  created() {
    // if (process.client) {
    //   let layoutMode = localStorage.getItem("colorMode");
    //   if (layoutMode === "dark") this.themeCss = "/css/demo2_dark.css";
    //   else this.themeCss = "/css/demo2.css";
    // }
  },
  methods: {
    signup() {},
    select(textbox) {
      this.selected[textbox] = true
    },
    login() {
      this.$fire.auth
        .signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .catch(function (error) {})
        .then((user) => {
          if (user) this.$router.back()
        })
    },
    handleFocusOut(field) {
      this.auth[field] === '' && (this.selected[field] = false)
    },
  },
  mounted() {
    this.auth.email.length != 0 ? this.select('email') : false
    this.auth.password.length != 0 ? this.select('password') : false
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/demo1.scss';

.login-section::after {
}
.login-section {
  background: url('../../assets/images/electronics/slider/banner2.jpg');
}

.login-title1 h2 {
  width: 100%;
  line-height: 46px;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: calc(0px + (2 - 0) * ((100vw - 320px) / (1920 - 320)));

  display: flex;
  justify-content: center;
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
  background: #d1d1d1 !important;
}
.sign-category span {
  color: black;
  background-color: #d1d1d1 !important ;
}
.input {
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.81);
  height: 60px !important;
}
.input1 {
  position: relative;
  margin-top: calc(180px + (30 - 20) * ((100vw - 320px) / (1920 - 320)));
}
.input {
  &:before,
  .spin {
    width: 100%;
    height: 0px !important;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

.input {
  input {
    top: 0px !important;
    padding: 1rem;
  }
}

.materialContainer {
  max-width: 37.5rem !important;
}

.rememberMe {
  color: #000;
  text-align: center;
  font-size: 16px;

  font-style: normal;
  font-weight: 500;
  line-height: normal;
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

.pass-forgot {
  display: flex;
  justify-content: center;
  margin: 2px auto 0 !important;
}
/* // .login-title1 ::before {
//   @include pos;
//   width: 5px;
//   height: 100%;
//   top: 0;
//   left: calc(-10px + (-10 - 10) * ((100vw - 320px) / (1920 - 320)));
//   background: #51983c;
// }

// h2 {
//   font-size: calc(27px + (28 - 27) * ((100vw - 320px) / (1920 - 320)));
//   margin-left: calc(10px + (0 - 10) * ((100vw - 320px) / (1920 - 320)));
//   margin-top: -2px;
//   color: #51983c !important;
// } */
</style>
