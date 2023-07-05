<template>
  <div class="col-auto">
    <ul class="border-list">
      <!-- asdsa -->
      <li
        id="link"
        class="onhover-dropdown auth-dropdown"
        style="text-align: start"
      >
        <div class="cart-media">
          <div class="col align-items-center">
            <span class="mr-2">Welcome User</span>
            <span> <icons name="user" size="s" /></span>
          </div>
        </div>
        <div class="onhover-div profile-dropdown">
          <ul>
            <li>
              Welcome User
              <!-- {{
                  $store.state.firebase.user === null
                    ? "User"
                    : $store.state.firebase.user.email
                }} -->
            </li>
            <!-- <li v-if="$store.state.firebase.user === null"> -->
            <li>
              <nuxt-link to="/auth/login" class="d-block">{{
                $t('Login')
              }}</nuxt-link>
            </li>
            <li>
              <a @click.prevent="signout" to="/auth/login" class="d-block">{{
                $t('Logout')
              }}</a>
            </li>
            <!-- <li>
              <a @click.prevent="signout" to="/" class="d-block">logout</a>
            </li> -->
            <!-- <li v-if="$store.state.firebase.user === null"> -->
            <li>
              <nuxt-link to="/auth/register" class="d-block">{{
                $t('Register')
              }}</nuxt-link>
            </li>
          </ul>
        </div>
      </li>
      <li
        id="link"
        class="onhover-dropdown auth-dropdown"
        style="text-align: start"
      >
        <div class="cart-media">
          <span class="mr-1">{{ $t('name') }}</span>
          <icons name="language" size="sm" />
        </div>
        <div class="onhover-div profile-dropdown">
          <ul>
            <li
              v-for="locale in availableLocales"
              :key="locale.code"
              @click="setLanguage(locale.code)"
            >
              {{ locale.label }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import icons from '~/assets/icons.vue'
export default {
  components: { icons },

  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    selectedLocale() {
      return this.$i18n.locales.find((i) => i.code === this.$i18n.locale)
    },
  },
  methods: {
    isLocaleSelected(locale) {
      return this.$i18n.locale === locale.code
    },
    setLanguage(language) {
      this.$i18n.setLocale(language)
    },
  },
}
</script>
