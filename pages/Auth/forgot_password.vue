<template>
  <div class="login-section">
    <div class="materialContainer">
      <div class="box">
        <div class="login-title">
          <h2>ForgotPassword</h2>
        </div>
        <div class="input">
          <label
            for="emailname"
            :style="[{ 'line-height': selected['email'] ? '18px' : '60px' }]"
            >EnterEmailAddress
          </label>
          <input
            type="text"
            name="name"
            class="is-invalid"
            id="emailname"
            v-model="auth.email"
            v-on:blur="handleFocusOut('email')"
            @focus.prevent="select('email')"
          />
          <span
            class="spin"
            :style="[{ width: selected['email'] ? '100%' : '0%' }]"
          ></span>
        </div>
        <div class="button login button-1">
          <button href="javascript:void(0)" @click.prevent="$router.push('/')">
            <span>Send </span>
            <i class="fa fa-check"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themeCss: '/demo2.css',
      auth: { email: '' },
      selected: { email: false, empty: false },
    }
  },
  head() {
    return {
      title: 'Forgot Password',
    }
  },
  methods: {
    select(textbox) {
      this.selected[textbox] = true
    },

    handleFocusOut(field) {
      this.auth[field] === '' && (this.selected[field] = false)
    },
  },
  created() {
    // let layoutMode = localStorage.getItem('colorMode')
    // if (layoutMode === 'dark') this.themeCss = '/voxo/css/demo2_dark.css'
    // else this.themeCss = '/voxo/css/demo2.css'
  },
}
</script>

<style lang="scss">
@import '~assets/scss/demo2.scss';
</style>
