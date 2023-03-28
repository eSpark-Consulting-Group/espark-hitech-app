<template>
  <div class="col-auto">
    <ul class="border-list">
      <!-- asdsa -->
      <li id="link" class="onhover-dropdown auth-dropdown" style="text-align: start">
        <div class="cart-media">
          <span class="mr-1">Welcome User</span>
          <icons name="user" size="sm" />
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
              <nuxt-link to="/page/login" class="d-block">Login</nuxt-link>
            </li>
            <li>
              <a @click.prevent="signout" to="/page/login" class="d-block">logout</a>
            </li>
            <!-- <li v-if="$store.state.firebase.user === null"> -->
            <li>
              <nuxt-link to="/page/register" class="d-block">Register</nuxt-link>
            </li>
          </ul>
        </div>
      </li>
      <li id="link" class="onhover-dropdown auth-dropdown" style="text-align: start">
        <div class="cart-media">
          <span class="mr-1">{{ $t('name') }}</span>
          <icons name="language" size="sm" />
        </div>
        <div class="onhover-div profile-dropdown">
          <ul>
            <li v-for="(locale) in availableLocales" :key="locale.code" @click="setLanguage(locale.code)">
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
  data() {
    return {
      selectedDropdowns: {
        loginAndRegister: '',
        currency: '',
        languages: '',
      },
      selectedLanguage: '',
      dropdowns: {
        // loginAndRegister: {
        //   title: 'Login & Register',
        //   active: false,
        //   links: ['login', 'register'],
        // },
        currency: {
          title: 'Currency',
          active: false,
          links: ['Dollar', 'Rupee', 'Euro'],
        },
        languages: {
          title: 'Languages',
          active: false,
          // links: this.$i18n.locales,
          links: [
            {
              code: 'en',
              name: 'English',
            },
            {
              code: 'es',
              name: 'Español',
            },
            {
              code: 'fr',
              name: 'Français',
            },
          ],
        },
      },
      dropdownKeys: [],
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    selectedLocale() {
      return this.$i18n.locales.find(i => i.code === this.$i18n.locale)
    },
  },
  methods: {
    toggleDropdown(key) {
      this.dropdowns[key].active = !this.dropdowns[key].active
    },
    changeLanguage(locale) {
      this.$i18n.setLocale(locale.code)
    },
    isLocaleSelected(locale) {
      return this.$i18n.locale === locale.code
    },
    handleDropdown(key, link) {
      this.dropdowns[key].active = false
      this.selectedDropdowns[key] != link &&
        (this.selectedDropdowns[key] = link)
      if (key === 'currency') {
        // this.$store.dispatch("layout/setCurrency", { currency: link });
      }
      // this.$store.dispatch("products/currencyChanged");
    },
    setLanguage(language) {
      this.$i18n.setLocale(language)
    },
  },
  watch: {
    selectedDropdowns: {
      handler: function () {
        if (
          this.selectedDropdowns.languages != '' &&
          this.selectedLanguage != this.selectedDropdowns.languages
        ) {
          this.selectedLanguage = this.selectedDropdowns.languages
        }
      },
      deep: true,
    },
    selectedLanguage: function () {
      this.$router.replace(
        this.switchLocalePath(this.selectedDropdowns.languages)
      )
      // this.$store.dispatch("layout/setLanguage", {
      //   languageCode: this.selectedDropdowns.languages,
      // });
    },
  },
  created() {
    this.dropdownKeys = Object.keys(this.dropdowns)
    // this.dropdowns.currency.links = [];
    // this.currencyList.forEach((item) => {
    //   this.dropdowns.currency.links.push(item.currency);
    // });
  },
}
</script>
