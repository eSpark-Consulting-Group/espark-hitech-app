<template>
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
          <h2>Register</h2>
        </div>
        <div v-if="currentStep === 1">
          <div
            class="row d-flex justify-content-start align-items-center h-100"
          >
            <div class="row align-items-center pt-4 pb-3">
              <div class="col-md-3 ps-5">
                <h6 class="mb-0 title">Full name</h6>
              </div>
              <div class="col-md-9 pe-5 ps-2">
                <input
                  type="text"
                  name="name"
                  placeholder="full name"
                  id="name"
                  class="form-control form-control-lg input-register"
                  v-model="auth.name"
                  @focus.prevent="select('name')"
                  v-on:blur="handleFocusOut('name')"
                />
              </div>
            </div>

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">
                <h6 class="mb-0 title">Email address</h6>
              </div>
              <div class="col-md-9 pe-5 ps-2">
                <input
                  type="text"
                  name="name"
                  id="emailname"
                  placeholder="name@example.com"
                  class="form-control form-control-lg input-register"
                  v-model="auth.email"
                  @focus.prevent="select('email')"
                  v-on:blur="handleFocusOut('email')"
                />
              </div>
            </div>

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">
                <h6 class="mb-0 title">Password</h6>
              </div>
              <div class="col-md-9 pe-5 ps-2">
                <input
                  type="password"
                  id="inputPassword6"
                  placeholder="your password"
                  class="form-control form-control-lg input-register"
                  aria-describedby="passwordHelpInline"
                />
              </div>
            </div>

            <div class="row align-items-center py-3">
              <div class="col-md-3 ps-5">
                <h6 class="mb-0 title">Phone Number</h6>
              </div>
              <div class="col-md-9 pe-5">
                <input
                  type="text"
                  name="name"
                  id="emailname"
                  placeholder="phone"
                  class="form-control form-control-lg input-register"
                  v-model="auth.email"
                  @focus.prevent="select('email')"
                  v-on:blur="handleFocusOut('email')"
                />
              </div>
            </div>
            <div class="row align-items-center py-3">
              <div class="col-md-5 ps-5">
                <h6 class="mb-0 title">This account is for:</h6>
              </div>
              <div class="col-md-6 pe-5">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1"
                    >Bussiness</label
                  >
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2"
                    >Self</label
                  >
                </div>
              </div>
            </div>
            <div class="flex d-flex"></div>
          </div>
        </div>
        <div v-if="currentStep === 2">
          <div
            class="row d-flex justify-content-start align-items-center h-100"
          >
            <div class="row align-items-center pt-4 pb-3">
              <div class="col-md-2 ps-2">
                <h6 class="mb-0 title">First Name</h6>
              </div>
              <div class="col-md-10 pe-5">
                <input
                  type="text"
                  name="name"
                  placeholder="first name"
                  id="name"
                  class="form-control form-control-lg input-register"
                  v-model="auth.name"
                  @focus.prevent="select('name')"
                  v-on:blur="handleFocusOut('name')"
                />
              </div>
            </div>

            <div class="row align-items-center py-3">
              <div class="col-md-2 ps-2">
                <h6 class="mb-0 title">Last Name</h6>
              </div>
              <div class="col-md-10 pe-5">
                <input
                  type="text"
                  name="name"
                  id="emailname"
                  placeholder="last name"
                  class="form-control form-control-lg input-register"
                  v-model="auth.email"
                  @focus.prevent="select('email')"
                  v-on:blur="handleFocusOut('email')"
                />
              </div>
            </div>
            <div class="row align-items-center py-3">
              <div class="col-md-2 ps-2">
                <h6 class="mb-0 title">Email</h6>
              </div>
              <div class="col-md-10 pe-5">
                <input
                  type="text"
                  name="name"
                  id="emailname"
                  placeholder="name@example.com"
                  class="form-control form-control-lg input-register"
                  v-model="auth.email"
                  @focus.prevent="select('email')"
                  v-on:blur="handleFocusOut('email')"
                />
              </div>
            </div>
            <div class="row align-items-center py-3">
              <div class="col-md-2 ps-2">
                <h6 class="mb-0 title">Address</h6>
              </div>
              <div class="col-md-10 pe-5">
                <input
                  type="text"
                  name="name"
                  id="emailname"
                  placeholder="address"
                  class="form-control form-control-lg input-register"
                  v-model="auth.email"
                  @focus.prevent="select('email')"
                  v-on:blur="handleFocusOut('email')"
                />
              </div>
            </div>
            <div class="row align-items-center py-3">
              <div class="col-md-6">
                <div class="flex d-flex align-items-center gap-2">
                  <h6 class="mb-0 ps-0 title">Country</h6>
                  <select class="select input-register" style="width: 100%">
                    <option value="1">State</option>
                    <option value="2">Option 1</option>
                    <option value="3">Option 2</option>
                    <option value="4">Option 3</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="flex d-flex align-items-center gap-2">
                  <h6 class="mb-0 ps-0 title">City</h6>
                  <select class="select input-register" style="width: 100%">
                    <option value="1">City</option>
                    <option value="2">Option 1</option>
                    <option value="3">Option 2</option>
                    <option value="4">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row align-items-center py-3">
              <div class="col-md-2 ps-2">
                <h6 class="mb-0 title">Postal Code</h6>
              </div>
              <div class="col-md-10 pe-5">
                <input
                  type="text"
                  name="name"
                  id="emailname"
                  placeholder="postal code"
                  class="form-control form-control-lg input-register"
                  v-model="auth.email"
                  @focus.prevent="select('email')"
                  v-on:blur="handleFocusOut('email')"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-if="currentStep === 3">
          <div
            class="row d-flex justify-content-start align-items-center h-100"
          >
            <div class="mt-4">
              <span class="title mb-0"
                >A verification code has been sent. Please enter the code below
                to continue.</span
              >
            </div>
            <div class="mt-2">
              <h6 class="mb-1">abc@gmail.com</h6>
            </div>
            <div class="col-md-10 pe-5">
              <input
                type="text"
                name="name"
                id="emailname"
                placeholder="name@example.com"
                class="email input-register"
                v-model="auth.email"
                @focus.prevent="select('email')"
                v-on:blur="handleFocusOut('email')"
              />
            </div>
            <div class="mt-4 flex d-flex">
              <span class="resend-text title"
                >Didn't Receive Code? <strong>Resend</strong></span
              >
            </div>
          </div>
        </div>
        <div v-if="currentStep !== 3">
          <div class="flex d-flex justify-content-center gap-2">
            <div class="button login">
              <button href="javascript:void(0)" @click="BackStep">
                <span>Back</span>
              </button>
            </div>
            <div class="button login">
              <button href="javascript:void(0)" @click="nextStep">
                <span>Next</span>
              </button>
            </div>
          </div>
          <hr
            size="1"
            width="100%"
            color="black"
            style="margin-top: 2rem; position: relative"
          />
          <p class="sign-category">
            <span>Or sign up with</span>
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
          <p>
            <nuxt-link to="/auth/login" class="theme-color">{{
              Alreadyhaveanaccount
            }}</nuxt-link>
          </p>
        </div>
        <div v-else class="flex d-flex justify-content-center">
          <div class="flex d-flex justify-content-center gap-2">
            <div class="button login">
              <button href="javascript:void(0)" @click="BackStep">
                <span>Back</span>
              </button>
            </div>
            <div class="button login">
              <button href="javascript:void(0)">
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'authLayout',
  asyncData() {
    return {
      Alreadyhaveanaccount: 'Already have an account?',
    }
  },
  data() {
    return {
      currentStep: 1,
      themeCss: '/demo2.css',
      auth: { name: '', email: '', password: '', confirmPassword: '' },
      selected: {
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
      },
    }
  },
  head() {
    return {
      title: 'Register',
    }
  },
  methods: {
    nextStep() {
      this.currentStep = 1 + this.currentStep
      if (this.currentStep === 3) {
        this.currentStep = 3
      }
    },
    BackStep() {
      this.currentStep = this.currentStep - 1
      if (this.currentStep === 1) {
        this.currentStep = 1
      }
    },
    handleFocusOut(field) {
      this.auth[field] === '' && (this.selected[field] = false)
    },
    select(textbox) {
      this.selected[textbox] = true
    },
  },
  created() {
    // let layoutMode = localStorage.getItem("colorMode");
    // if (layoutMode === "dark") this.themeCss = "/voxo/css/demo2_dark.css";
    // else this.themeCss = "/voxo/css/demo2.css";
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/demo1.scss';
.button.login {
  margin: 0;
  padding: 0;
}

.button.login button {
  margin: 0;
  padding: 0;
}
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
.input-register {
  border: none;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.81);

  display: flex;
}
.input1 {
  position: relative;
  margin-top: calc(180px + (30 - 20) * ((100vw - 320px) / (1920 - 320)));
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

.title {
  color: #000;
  text-align: start;
  font-size: 16px;

  font-style: normal;
  font-weight: 300;
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

.button {
  width: fit-content !important;
}

.select {
  font-size: 14px;
  padding: calc(8px + 6 * (100vw - 320px) / 1600)
    calc(15px + 15 * (100vw - 320px) / 1600);
}
.email {
  font-size: 14px;
  padding: calc(8px + 6 * (100vw - 320px) / 1600)
    calc(15px + 15 * (100vw - 320px) / 1600);
}

.resend-text strong {
  font-weight: bold;
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
