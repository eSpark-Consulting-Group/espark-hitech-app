<template>
  <header
    id="home"
    :class="{ 'nav-down': scrollDown, 'nav-up': scrollUp }"
    class="transition-navbar"
  >
    <TopBar :offerCode="offerCode" />
    <div class="main-header navbar-searchbar">
      <div class="container-fluid-lg">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-menu">
              <div class="menu-left">
                <BrandLogo />
                <!-- <div class="brand-logo">
                  <nuxt-link to="/">
                    <svg class="svg-icon">
                      <use
                        class="fill-color"
                        xlink:href="~assets/svg/logo1.svg#logo"
                      ></use>
                    </svg>
                    <img
                      src="~assets/images/logo2.png"
                      width="58"
                      height="28"
                      class="img-fluid"
                      alt="logo"
                    />
                  </nuxt-link>
                </div> -->
                <!-- <categoryList1 :headerButtonVisible="true" v-if="mobileView" /> -->
                <CategoryMenu />
              </div>
              <MainNavBar />
              <MenuSearch @openSearchBar="toggleSearchbar" />
              <!-- <HeaderSearchBar
                @closeSearchBar="toggleSearchbar"
                :isopen="isSearchbarOpen"
              /> -->
              <HeaderSearchBar
                :isopen="isSearchbarOpen"
                @closeSearchBar="toggleSearchbar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import TopBar from '../Elements/HeaderElements/TopBar.vue'
import BrandLogo from '../BrandLogo/Logo.vue'
import CategoryMenu from '../Elements/HeaderElements/CategoryMenu.vue'
import MainNavBar from '../Elements/HeaderElements/MainNavBar.vue'
import MenuSearch from '../Elements/HeaderElements/MenuSearch.vue'
import HeaderSearchBar from '../Elements/HeaderElements/HeadSearchBar.vue'
export default {
  name: 'TheHeader',
  props: ['offerCode', 'stopScrollWork'],
  components: {
    TopBar,
    BrandLogo,
    CategoryMenu,
    MainNavBar,
    MenuSearch,
    HeaderSearchBar,
  },
  data() {
    return {
      isSearchbarOpen: false,
      headerDown: false,
      scrollTopDiff: 0,
      scrollUp: false,
      mobileView: false,
      scrollDown: false,
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.getWindowWidth)
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('resize', this.getWindowWidth)
    }
  },
  methods: {
    toggleSearchbar() {
      this.isSearchbarOpen = !this.isSearchbarOpen
    },
    getWindowWidth() {
      if (process.client) {
        if (screen.availWidth < 1200) this.mobileView = true
        else this.mobileView = false
      }
    },
    handleScroll(event) {
      if (process.client) {
        if (!this.stopScrollWork) {
          if (window.scrollY > 0) {
            if (!this.headerDown) {
              console.log('1st', window.scrollY)
              this.headerDown = true
              this.scrollDown = false
              this.scrollUp = false
            }
            if (window.scrollY > this.scrollTopDiff) {
              console.log('up', window.scrollY)
              this.scrollDown = true
              this.scrollUp = false
            } else {
              console.log('up-else', window.scrollY)
              this.scrollUp = true
            }
            this.scrollTopDiff = window.scrollY
          } else if (window.scrollY === 0) {
            console.log('top', window.scrollY)
            this.headerDown = false
            this.scrollDown = false
            this.scrollUp = false
          }
        }
      }
    },
  },
}
</script>
<style scoped>
.transition-navbar {
  transition: opacity 0.3s ease;
}
.navbar-searchbar {
  transition: all 0.3s ease;
}
.nav-down1 .navbar-searchbar {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  margin-top: 0;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(23, 32, 90, 0.15);
  transition: all 0.3s ease;
  z-index: 6;
}
header.nav-down1 .main-menu {
  padding: 10px 0;
}
</style>
