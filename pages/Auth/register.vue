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
        <h2 class="text-center">Register</h2>
        <div v-if="currentStep === 1">
          <div class="row g-4 mt-md-1 mt-2">
            <div class="col-md-6">
              <label for="first" class="form-label">First Name</label>
              <input
                type="text"
                class="form-control"
                id="first"
                placeholder="Enter Your First Name"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="last" class="form-label">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="last"
                placeholder="Enter Your Last Name"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label"> Email </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter Your Email Address"
                required
              />
            </div>

            <div class="col-md-6">
              <label for="phone" class="form-label"> Phone </label>
              <no-ssr>
                <vue-tel-input v-model="auth.phone"></vue-tel-input>
              </no-ssr>
            </div>

            <div class="col-6">
              <label for="country" class="form-label"> Country </label>
              <select
                class="form-select form-control"
                aria-label="Select Country"
              >
                <option selected>Select Country</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>

            <div class="col-6">
              <label for="city" class="form-label"> City </label>
              <select class="form-select form-control" aria-label="Select City">
                <option selected>Select City</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>

            <div class="col-12">
              <label for="address" class="form-label"> Address </label>
              <input
                class="form-control"
                id="address"
                placeholder="Enter Your Address"
                required
              />
            </div>

            <div class="col-12 d-flex align-items-center">
              <button
                class="btn btn-solid-default btn fw-bold w-100"
                type="submit"
                @click.prevent="nextStep"
              >
                Register
              </button>
            </div>
          </div>
        </div>
        <!-- <div v-if="currentStep === 2">
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
        </div> -->
        <div v-if="currentStep === 2">
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
        <div v-if="currentStep !== 2">
          <!-- <div class="flex d-flex justify-content-center gap-2">
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
          </div> -->
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
            <button
              class="btn btn-solid-default btn fw-bold"
              href="javascript:void(0)"
              @click="BackStep"
            >
              <span>Back</span>
            </button>
            <button
              class="btn btn-solid-default btn fw-bold"
              href="javascript:void(0)"
            >
              <span>Submit</span>
            </button>
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
      auth: {
        name: '',
        phone: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
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
      if (this.currentStep <= 1) {
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

.login-section {
  background: url('../../assets/images/electronics/slider/banner2.jpg');
}

.uper {
  display: flex;
  justify-content: center;
  border-radius: 32px 32px 0px 0px;
  background: #e6f4f4;
  padding-bottom: 1rem;
  padding-top: 1rem;
}

.box {
  border-radius: 0px 0px 32px 32px !important;
}
.sign-category span {
  color: black;
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

::v-deep .vue-tel-input {
  font-size: 14px;
  padding: calc(3px + 6 * (100vw - 320px) / 1600)
    calc(15px + 15 * (100vw - 320px) / 1600);
  background-color: #fff;
}

::v-deep .vue-tel-input input {
  background-color: inherit;
}

::v-deep .vue-tel-input:focus,
::v-deep .vue-tel-input:focus-within,
::v-deep .vue-tel-input input:focus,
::v-deep .vue-tel-input input:focus-within {
  background-color: #eff2f7;
  border-color: #ced4da;
  box-shadow: none;
  color: #212529;
}

.button {
  width: fit-content !important;
}
.resend-text strong {
  font-weight: bold;
}
</style>
