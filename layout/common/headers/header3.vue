<template>
  <header id="home" :class="{ 'nav-down': scrollDown, 'nav-up': scrollUp }">
    <topBar :offerCode="offerCode" />
    <div class="main-header navbar-searchbar">
      <div class="container-fluid-lg">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-menu">
              <div class="menu-left">
                <div class="brand-logo">
                  <a
                    href="javascript:void(0)"
                    @click.prevent="$router.push('/')"
                  >
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
                  </a>
                </div>
                <!-- <categoryList1 :headerButtonVisible="true" v-if="mobileView" /> -->
                <categoryMenu />
              </div>
              <mainNavbar />
              <menuRight @openSearchBar="toggleSearchbar" />
              <headerSearchBar
                @closeSearchBar="toggleSearchbar"
                :isopen="isSearchbarOpen"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import topBar from "~/layout/elements/headerElements/topBar.vue";
import categoryMenu from "~/layout/elements/headerElements/categoryMenu2.vue";
// import categoryList1 from "~/layout/elements/headerElements/categoryMenu1.vue";
import mainNavbar from "~/layout/elements/headerElements/mainNavbar1.vue";
import menuRight from "~/layout/elements/headerElements/menuSideIcons3.vue";
import headerSearchBar from "~/layout/elements/headerElements/headerSearchBar1.vue";
export default {
  components: {
    topBar,
    mainNavbar,
    menuRight,
    headerSearchBar,
    // categoryList1,
    categoryMenu,
  },
  props: ["offerCode", "stopScrollWork"],
  data() {
    return {
      isSearchbarOpen: false,
      headerDown: false,
      scrollTopDiff: 0,
      scrollUp: false,
      mobileView: false,
      scrollDown: false,
    };
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
      window.addEventListener("resize", this.getWindowWidth);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
      window.removeEventListener("resize", this.getWindowWidth);
    }
  },
  methods: {
    toggleSearchbar() {
      this.isSearchbarOpen = !this.isSearchbarOpen;
    },
    getWindowWidth() {
      if (process.client) {
        if (screen.availWidth < 1200) this.mobileView = true;
        else this.mobileView = false;
      }
    },
    handleScroll(event) {
      if (process.client) {
        if (!this.stopScrollWork) {
          if (window.scrollY > 0) {
            if (!this.headerDown) {
              this.headerDown = true;
              this.scrollDown = false;
              this.scrollUp = false;
            }
            if (window.scrollY > this.scrollTopDiff) {
              this.scrollDown = true;
              this.scrollUp = false;
            } else {
              this.scrollUp = true;
            }
            this.scrollTopDiff = window.scrollY;
          } else if (window.scrollY === 0) {
            this.headerDown = false;
            this.scrollDown = false;
            this.scrollUp = false;
          }
        }
      }
    },
  },
};
</script>
