<template>
  <div class="col-auto">
    <ul class="border-list">
      <li v-for="(index, key) in dropdowns" :key="key">
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
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedDropdowns: {
        loginAndRegister: '',
        currency: '',
        languages: '',
      },
      selectedLanguage: '',
      dropdowns: {
        loginAndRegister: {
          title: 'Login & Register',
          active: false,
          links: ['login', 'register'],
        },
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
  methods: {
    toggleDropdown(key) {
      this.dropdowns[key].active = !this.dropdowns[key].active
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
