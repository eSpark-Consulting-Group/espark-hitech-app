<template>
  <nav>
    <client-only>
      <div class="main-navbar">
        <div id="mainnav">
          <div
            class="toggle-nav"
            @click="toggleMobileNav"
            v-if="!hideToggleBars"
          >
            <i class="fa fa-bars sidebar-bar"></i>
          </div>
          <ul
            class="nav-menu"
            :style="{ right: openMobileNav ? '0px' : '-410px' }"
          >
            <li class="back-btn d-xl-none" @click="toggleMobileNav">
              <div class="close-btn">
                Menu
                <span class="mobile-back"
                  ><i class="fa fa-angle-left"></i
                ></span>
              </div>
            </li>

            <li
              class="dropdown"
              v-for="(items, index) in menuList"
              :key="index"
              :class="getClass(items.title)"
            >
              <client-only>
                <!-- {{ items.path ? true : false }} -->
                <nuxt-link v-if="items.path" :to="items.path">
                  {{ $t(items.title) }}
                </nuxt-link>
                <a
                  v-else
                  href="javascript:void(0)"
                  class="nav-link menu-title"
                  :class="[
                    items.title === mobileListDropdown[0] && openMobileNav
                      ? 'active'
                      : '',
                    items.children ? 'caret' : '',
                  ]"
                  @click.prevent="openMobileViewList(items.title)"
                >
                  <span
                    class="according-menu"
                    v-if="
                      openMobileNav && mobileListDropdown[0] !== items.title
                    "
                    >+</span
                  >
                  <span
                    class="according-menu"
                    v-if="
                      mobileListDropdown[0] === items.title && openMobileNav
                    "
                    >-</span
                  >

                  <span v-if="items.title != 'VOXO PLUS'">
                    <!-- {{ $t(items.title) }} -->
                    {{ items.title }}
                    <span
                      class="according-menu"
                      v-if="
                        openMobileNav && mobileListDropdown[0] !== items.title
                      "
                      >+</span
                    >
                    <span
                      class="according-menu"
                      v-if="
                        mobileListDropdown[0] === items.title && openMobileNav
                      "
                      >-</span
                    >
                  </span>
                </a>
              </client-only>

              <ul
                v-if="items.children ? true : false"
                class="nav-submenu menu-content"
                :style="{
                  display: openMobileNav
                    ? items.title === mobileListDropdown[0]
                      ? 'block'
                      : 'none'
                    : '',
                }"
              >
                <li v-for="(link, index) in items.children" :key="'B' + index">
                  <a
                    href="javascript:void(0)"
                    @click.prevent="changePage(link.path)"
                    >{{ link.title
                    }}<span v-if="link.badge" :class="link.badgeClass">{{
                      link.badge
                    }}</span></a
                  >
                </li>
              </ul>
            </li>

            <li
              class="mobile-poster d-flex d-xl-none"
              :style="{ right: openMobileNav ? '0px' : '-410px' }"
            >
              <img src="~assets/images/pwa.png" class="img-fluid" alt="" />
              <div class="mobile-contain">
                <h5>{{ EnjoyExperience }}</h5>
                <p class="font-light">
                  {{ EnjoyExperienceDescription }}
                </p>
                <a
                  href="javascript:void(0)"
                  id="installApp"
                  class="btn btn-solid-default btn-spacing w-100"
                  >ADD TO HOMESCREEN</a
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </client-only>
  </nav>
</template>

<script>
// import { mapState } from "vuex";
export default {
  props: ['openMobileNavProp', 'hideToggleBars'],
  data() {
    return {
      mobileListDropdown: [],
      voxoSubLists: [],
      EnjoyExperience: 'Enjoy app-like experience',
      EnjoyExperienceDescription:
        'With this Screen option you can use Website like an App.',
      menuList: [
        {
          title: 'HOME',
          active: false,
          isHome: true,
          path: '/',
        },
        {
          title: 'Product',
          active: false,
          path: '/category',
        },

        // {
        //   title: 'PRODUCT',
        //   active: false,
        //   children: [
        //     {
        //       path: '/product/product_4_images',
        //       title: 'Product 4 Images',
        //       type: 'link',
        //     },
        //     {
        //       path: '/product/product_360_view',
        //       title: 'Product 360 View',
        //       type: 'link',
        //     },
        //     {
        //       path: '/product/product_bundle',
        //       title: 'Product Bundle',
        //       type: 'link',
        //     },
        //     {
        //       path: '/product/product_left_sidebar',
        //       title: 'Product Left Sidebar',
        //       type: 'link',
        //     },
        //     {
        //       path: '/product/product_left_thumbnail',
        //       title: 'Product Left Thumbnail',
        //       type: 'link',
        //     },
        //     {
        //       path: '/product/product_no_sidebar',
        //       title: 'Product No Sidebar',
        //       type: 'link',
        //     },
        //     {
        //       path: '/product/product_right_sidebar',
        //       title: 'Product Right Sidebar',
        //       type: 'link',
        //     },
        //     {
        //       path: '/product/product_right_thumbnail',
        //       title: 'Product Right Thumbnail',
        //       type: 'link',
        //     },
        //     {
        //       path: '/product/product_sticky',
        //       title: 'Product Sticky',
        //       type: 'link',
        //     },
        //     {
        //       path: '/product/product_video_thumbnail',
        //       title: 'Product Video Thumbnail',
        //       type: 'link',
        //     },
        //   ],
        // },

        {
          title: 'BLOG',
          active: false,
          path: '/blogs',
        },
        {
          title: 'CONTACT US',
          active: false,
          path: '/Contact_Us',
        },
      ],
      openMobileNav: false,
    }
  },
  // computed: {
  //   ...mapState({
  //     menuList: (state) => state.menu,
  //     // openMobileNav: (state) => state.clickEvents.shopFilterBar,
  //   }),
  // },
  watch: {
    openMobileNavProp: function () {
      if (this.openMobileNavProp) this.openMobileNav = this.openMobileNavProp
    },
  },
  methods: {
    openMobileViewList(title) {
      if (title === this.mobileListDropdown[0]) {
        this.mobileListDropdown = []
      } else {
        this.mobileListDropdown = []
        this.mobileListDropdown.push(title)
      }
    },
    toggleVoxoSubList(subLinkTitle) {
      if (subLinkTitle === this.voxoSubLists[0]) {
        this.voxoSubLists = []
      } else {
        this.voxoSubLists = []
        this.voxoSubLists.push(subLinkTitle)
      }
    },
    getClass(title) {
      if (title === 'HOME') {
        return 'mega-menu home-menu'
      } else if (title === 'VOXO PLUS') {
        return 'mega-menu ratio_40'
      }
    },
    toggleMobileNav() {
      // this.$store.dispatch('clickEvents/toggleShopFilterBar')
    },

    changePage(path) {
      console.log('clicked ', path)
      // document
      //   .getElementById('bootstrap-link')
      //   .setAttribute('href', '/css/bootstrap.min.css')
      // this.$router.push(path)
    },
  },
}
</script>
