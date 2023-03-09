<template>
  <div class="col-auto">
    <ul class="border-list">
      <li
        id="link"
        class="onhover-dropdown auth-dropdown"
        style="text-align: start"
      >
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
              <a @click.prevent="signout" to="/page/login" class="d-block"
                >logout</a
              >
            </li>
            <!-- <li v-if="$store.state.firebase.user === null"> -->
            <li>
              <nuxt-link to="/page/register" class="d-block"
                >Register</nuxt-link
              >
            </li>
          </ul>
        </div>
      </li>
      <!--  -->
      <li>
        <div class="dropdown top-header-dropdown" ref="dropdowns">
          <a
            class="dropdown-toggle"
            @click="toggleDropdown('currency')"
            href="javascript:void(0)"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
          >
            <!-- <span>{{
              selectedDropdowns[key] == ''
                ? dropdowns[key].title
                : selectedDropdowns[key]
            }}</span> -->
            <!-- <span></span> -->
            <icons name="currency" size="sm" />
            <span>{{ selectedCurrency }}</span>
            <!-- <i class="fas fa-chevron-down"></i> -->
          </a>

          <ul
            class="dropdown-menu dropdown-menu-end"
            :class="[{ show: isCurrency }]"
            aria-labelledby="dropdownMenuLink"
          >
            <li
              class="w-100"
              v-for="(link, index) in currencydropdown"
              :key="'c' + index"
            >
              <a
                class="dropdown-item"
                @click.prevent="handleDropdown('currency', link)"
              >
                {{ link }}
              </a>

              <!-- <a
                v-else
                href="javascript:void(0)"
                class="dropdown-item"
                @click.prevent="handleDropdown(key, link)"
                >{{ link }}</a
              > -->
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div class="dropdown top-header-dropdown" ref="dropdowns">
          <a
            class="dropdown-toggle"
            @click="toggleDropdown('language')"
            href="javascript:void(0)"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
          >
            <!-- <span>{{
              selectedDropdowns[key] == ''
                ? dropdowns[key].title
                : selectedDropdowns[key]
            }}</span> -->
            <!-- <span></span> -->
            <icons name="language" size="sm" />
            <span>{{ selectedLanguageName }}</span>
            <!-- <i class="fas fa-chevron-down"></i> -->
          </a>

          <ul
            class="dropdown-menu dropdown-menu-end"
            :class="[{ show: isLanguage }]"
            aria-labelledby="dropdownMenuLink"
          >
            <li
              class="w-100"
              v-for="(link, index) in languagesdropdown"
              :key="'c' + index"
            >
              <a
                class="dropdown-item"
                @click="handleDropdown('languages', link)"
              >
                {{ link.name }}
              </a>

              <!-- <a
                v-else
                href="javascript:void(0)"
                class="dropdown-item"
                @click.prevent="handleDropdown(key, link)"
                >{{ link }}</a
              > -->
            </li>
          </ul>
        </div>
      </li>

      <!--  -->
      <!-- <li v-for="(index, key) in dropdowns" :key="key">
        <div class="dropdown top-header-dropdown" ref="dropdowns">
          <a
            class="dropdown-toggle"
            @click.prevent="toggleDropdown(key)"
            href="javascript:void(0)"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
          >
            <span>{{
              selectedDropdowns[key] == ''
                ? dropdowns[key].title
                : selectedDropdowns[key]
            }}</span>
            <i class="fas fa-chevron-down"></i>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            :class="[{ show: dropdowns[key].active }]"
            aria-labelledby="dropdownMenuLink"
          >
            <li
              class="w-100"
              v-for="(link, index) in dropdowns[key].links"
              :key="'a' + index"
            >
              <a
                href="javascript:void(0)"
                class="dropdown-item"
                @click.prevent="handleDropdown(key, link.code)"
                v-if="link.name"
                >{{ link.name }}</a
              >
              <a
                v-else
                href="javascript:void(0)"
                class="dropdown-item"
                @click.prevent="handleDropdown(key, link)"
                >{{ link }}</a
              >
            </li>
          </ul>
        </div>
      </li> -->
    </ul>
  </div>
</template>

<script>
import icons from '~/assets/icons.vue'
export default {
  components: { icons },
  data() {
    return {
      currencydropdown: ['Dollar', 'Rupee', 'Euro'],
      isCurrency: false,
      languagesdropdown: this.$i18n.locales,
      selectedLanguageName: 'English',
      selectedCurrency: 'Dollar',

      isLanguage: false,
      selectedDropdowns: {
        // loginAndRegister: '',
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
          links: this.$i18n.locales,
          // [
          //   {
          //     code: 'en',
          //     name: 'English',
          //   },
          //   {
          //     code: 'es',
          //     name: 'Español',
          //   },
          //   {
          //     code: 'fr',
          //     name: 'Français',
          //   },
          // ],
        },
      },
      dropdownKeys: ['Currency', 'Languages'],
    }
  },
  methods: {
    toggleDropdown(key) {
      // this.dropdowns[key].active = !this.dropdowns[key].active
      if (key == 'currency') {
        this.isCurrency = !this.isCurrency
        this.isLanguage = false
        console.log(key, this.isCurrency)
      } else if (key == 'language') {
        this.isLanguage = !this.isLanguage
        this.isCurrency = false
      }
    },
    handleDropdown(key, link) {
      console.log('asdasdsadsa')
      if (key == 'languages') {
        this.isCurrency = false
        this.isLanguage = false
        this.selectedDropdowns[key] != link.code &&
          (this.selectedDropdowns[key] = link.code)
        this.selectedLanguageName = link.name
        console.log(key, link.name)
      }

      if (key == 'currency') {
        this.isCurrency = false
        this.isLanguage = false

        this.selectedCurrency = link
        console.log(key, link)
      }
      // this.dropdowns[key].active = false
      // this.selectedDropdowns[key] != link &&
      //   (this.selectedDropdowns[key] = link)
      // if (key === 'currency') {
      //   // this.$store.dispatch("layout/setCurrency", { currency: link });
      // }
      // // this.$store.dispatch("products/currencyChanged");
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        console.log('close')
        this.isLanguage = false
        this.isCurrency = false
      }
    },
  },
  watch: {
    selectedDropdowns: {
      handler: function (n, o) {
        console.log('Watcher', n, o)
        if (
          // this.selectedDropdowns.languages != '' &&
          this.selectedLanguage != this.selectedDropdowns.languages
        ) {
          this.selectedLanguage = this.selectedDropdowns.languages
          if (this.selectedLanguage == 'en') {
          }
          console.log(this.selectedLanguage)
        }
        console.log(this.selectedLanguageName)
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
  mounted() {
    if (process.client) {
      document.addEventListener('click', this.close)
    }
  },
  beforeDestroy() {
    if (process.client) {
      document.removeEventListener('click', this.close)
    }
  },
}
</script>
