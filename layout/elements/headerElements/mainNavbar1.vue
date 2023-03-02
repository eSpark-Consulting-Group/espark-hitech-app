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
                <a
                  href="javascript:void(0)"
                  class="nav-link menu-title"
                  :class="
                    items.title === mobileListDropdown[0] && openMobileNav
                      ? 'active'
                      : ''
                  "
                  @click.prevent="openMobileViewList(items.title)"
                >
                  <div class="gradient-title" v-if="items.title == 'VOXO PLUS'">
                    Voxo plus
                  </div>
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
                    {{ $t(items.title) }}
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
              <div
                class="mega-menu-container menu-content"
                :style="{
                  display: openMobileNav
                    ? items.title === mobileListDropdown[0]
                      ? 'block'
                      : 'none'
                    : '',
                }"
                v-if="items.title == 'HOME'"
              >
                <div class="container-fluid">
                  <div class="row">
                    <div
                      class="col mega-box"
                      v-for="(link, index) in items.children"
                      :key="'A' + index"
                    >
                      <div class="link-section">
                        <div class="opensubmegamenu">
                          <ul>
                            <li>
                              <a
                                href="javascript:void(0)"
                                @click.prevent="changePage(link.path)"
                                class="megamenu-image"
                              >
                                <!-- <img
                                  :src="getImageUrl(link.imagePath)"
                                  class="img-fluid"
                                  alt=""
                                /> -->
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div class="megamenu-image-title pb-0">
                          <h5 class="mb-0">{{ link.title }}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ul
                class="nav-submenu menu-content"
                :style="{
                  display: openMobileNav
                    ? items.title === mobileListDropdown[0]
                      ? 'block'
                      : 'none'
                    : '',
                }"
                v-if="items.title != 'HOME' && items.title != 'VOXO PLUS'"
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
              <div
                class="mega-menu-container poster-bg-image menu-content"
                :style="{
                  display: openMobileNav
                    ? items.title === mobileListDropdown[0]
                      ? 'block'
                      : 'none'
                    : '',
                }"
                v-if="items.title == 'VOXO PLUS'"
              >
                <div class="container-fluid">
                  <div class="row row-cols-3">
                    <div
                      class="col mega-box"
                      v-for="(item, index) in items.children"
                      :key="'C' + index"
                    >
                      <div
                        class="link-section"
                        v-for="(subItem, index) in item.rows"
                        :key="'D' + index"
                      >
                        <div
                          class="submenu-title"
                          @click.prevent="toggleVoxoSubList(subItem.title)"
                        >
                          <h5>
                            {{ subItem.title
                            }}<span
                              class="according-menu"
                              v-if="
                                openMobileNav &&
                                voxoSubLists[0] === subItem.title
                              "
                              >-</span
                            >
                            <span
                              class="according-menu"
                              v-if="
                                openMobileNav &&
                                voxoSubLists[0] !== subItem.title
                              "
                              >+</span
                            >
                          </h5>
                        </div>
                        <div
                          class="submenu-content opensubmegamenu"
                          :class="
                            openMobileNav
                              ? voxoSubLists[0] === subItem.title
                                ? ''
                                : 'd-none'
                              : ''
                          "
                        >
                          <ul class="list">
                            <li
                              v-for="(link, index) in subItem.children"
                              :key="'E' + index"
                            >
                              <a
                                href="javascript:void(0)"
                                @click.prevent="changePage(link.path)"
                                >{{ link.title }}</a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
import { mapState } from "vuex";
export default {
  props: ["openMobileNavProp", "hideToggleBars"],
  data() {
    return {
      mobileListDropdown: [],
      voxoSubLists: [],
      EnjoyExperience: "Enjoy app-like experience",
      EnjoyExperienceDescription:
        "With this Screen option you can use Website like an App.",
      // menuList: [
      //   {
      //     title: "HOME",
      //     active: false,
      //     isHome: true,
      //     children: [
      //       {
      //         path: "/home/fashion_demo",
      //         title: "Fashion Demo",
      //         type: "link",
      //         imagePath: "demo-image/fashion.jpg",
      //       },
      //       {
      //         path: "/home/flowers_demo",
      //         title: "Flowers Demo",
      //         type: "link",
      //         imagePath: "demo-image/flower.jpg",
      //       },
      //       {
      //         path: "/home/furniture_demo",
      //         title: "Furniture Demo",
      //         type: "link",
      //         imagePath: "demo-image/furniture.jpg",
      //       },
      //       {
      //         path: "/home/electronic_demo",
      //         title: "Electronic Demo",
      //         type: "link",
      //         imagePath: "demo-image/electonic.jpg",
      //       },
      //       {
      //         path: "/home/shoes_demo",
      //         title: "Shoes Demo",
      //         type: "link",
      //         imagePath: "demo-image/shoes.jpg",
      //       },
      //       {
      //         path: "/home/vegetables_demo",
      //         title: "Vegetables Demo",
      //         type: "link",
      //         imagePath: "demo-image/vagetables.jpg",
      //       },
      //     ],
      //   },
      //   {
      //     title: "SHOP",
      //     active: false,
      //     children: [
      //       {
      //         path: "/shop/shop_canvas_filter",
      //         title: "Shop Canvas Filter",
      //         type: "link",
      //       },
      //       {
      //         path: "/shop/shop_category_filter",
      //         title: "Shop Category Filter",
      //         type: "link",
      //       },
      //       {
      //         path: "/shop/shop_filter_hide",
      //         title: "Shop Filter Hide",
      //         type: "link",
      //       },
      //       {
      //         path: "/shop/shop_left_sidebar",
      //         title: "Shop Left Sidebar",
      //         type: "link",
      //         badge: "trending",
      //       },
      //       {
      //         path: "/shop/shop_list_infinite",
      //         title: "Shop List Infinite",
      //         type: "link",
      //       },
      //       {
      //         path: "/shop/shop_list",
      //         title: "Shop List",
      //         type: "link",
      //       },
      //       {
      //         path: "/shop/shop_no_sidebar",
      //         title: "Shop No Sidebar",
      //         type: "link",
      //       },
      //       {
      //         path: "/shop/shop_right_sidebar",
      //         title: "Shop RIght Sidebar",
      //         type: "link",
      //       },
      //       {
      //         path: "/shop/shop_top_filter",
      //         title: "Shop Top Filter",
      //         type: "link",
      //       },
      //       {
      //         path: "/shop/shop_with_category",
      //         title: "Shop With Category",
      //         type: "link",
      //         badge: "new",
      //         badgeClass: "tren-budge",
      //       },
      //     ],
      //   },
      //   {
      //     title: "PRODUCT",
      //     active: false,
      //     children: [
      //       {
      //         path: "/product/product_4_images",
      //         title: "Product 4 Images",
      //         type: "link",
      //       },
      //       {
      //         path: "/product/product_360_view",
      //         title: "Product 360 View",
      //         type: "link",
      //       },
      //       {
      //         path: "/product/product_bundle",
      //         title: "Product Bundle",
      //         type: "link",
      //       },
      //       {
      //         path: "/product/product_left_sidebar",
      //         title: "Product Left Sidebar",
      //         type: "link",
      //       },
      //       {
      //         path: "/product/product_left_thumbnail",
      //         title: "Product Left Thumbnail",
      //         type: "link",
      //       },
      //       {
      //         path: "/product/product_no_sidebar",
      //         title: "Product No Sidebar",
      //         type: "link",
      //       },
      //       {
      //         path: "/product/product_right_sidebar",
      //         title: "Product Right Sidebar",
      //         type: "link",
      //       },
      //       {
      //         path: "/product/product_right_thumbnail",
      //         title: "Product Right Thumbnail",
      //         type: "link",
      //       },
      //       {
      //         path: "/product/product_sticky",
      //         title: "Product Sticky",
      //         type: "link",
      //       },
      //       {
      //         path: "/product/product_video_thumbnail",
      //         title: "Product Video Thumbnail",
      //         type: "link",
      //       },
      //     ],
      //   },
      //   {
      //     title: "VOXO PLUS",
      //     active: false,
      //     children: [
      //       {
      //         rows: [
      //           {
      //             title: "Portfolio Page",
      //             active: false,
      //             children: [
      //               {
      //                 path: "/voxo_plus/portfolio_page/portfolio_2_grid",
      //                 title: "Portfolio 2 Grid",
      //                 type: "link",
      //               },
      //               {
      //                 path: "/voxo_plus/portfolio_page/portfolio_2_masonary",
      //                 title: "Portfolio 2 Masonary",
      //                 type: "link",
      //               },
      //               {
      //                 path: "/voxo_plus/portfolio_page/portfolio_3_grid",
      //                 title: "Portfolio 3 Grid",
      //                 type: "link",
      //               },
      //               {
      //                 path: "/voxo_plus/portfolio_page/portfolio_3_masonary",
      //                 title: "Portfolio 3 Masonary",
      //                 type: "link",
      //               },
      //               {
      //                 path: "/voxo_plus/portfolio_page/portfolio_4_grid",
      //                 title: "Portfolio 4 Grid",
      //                 type: "link",
      //               },
      //               {
      //                 path: "/voxo_plus/portfolio_page/portfolio_4_masonary",
      //                 title: "Portfolio 4 Masonary",
      //                 type: "link",
      //               },
      //               {
      //                 path: "/voxo_plus/portfolio_page/portfolio_no_space",
      //                 title: "Portfolio No Space",
      //                 type: "link",
      //               },
      //             ],
      //           },
      //         ],
      //       },
      //       {
      //         rows: [
      //           {
      //             title: "Element Page",
      //             active: false,
      //             children: [
      //               {
      //                 path: "/voxo_plus/element_page/element_button",
      //                 title: "Element Button",
      //                 type: "link",
      //               },
      //               {
      //                 path: "/voxo_plus/element_page/element_categories",
      //                 title: "Element Category",
      //                 type: "link",
      //               },
      //               {
      //                 path: "/voxo_plus/element_page/element_collection_banner",
      //                 title: "Element Collection Banner",
      //                 type: "link",
      //               },
      //               {
      //                 path: "/voxo_plus/element_page/element_deal_banner",
      //                 title: "Element Deal Banner",
      //                 type: "link",
      //               },
      //               {
      //                 path: "/voxo_plus/element_page/element_header",
      //                 title: "Element Header",
      //                 type: "link",
      //               },
      //               {
      //                 path: "/voxo_plus/element_page/element_home",
      //                 title: "Element Home",
      //                 type: "link",
      //               },
      //               {
      //                 path: "/voxo_plus/element_page/element_product",
      //                 title: "Element Product",
      //                 type: "link",
      //               },
      //             ],
      //           },
      //         ],
      //       },
      //       {
      //         rows: [
      //           {
      //             title: "Cookie Bar",
      //             active: false,
      //             children: [
      //               {
      //                 path: "/voxo_plus/cookie_bar/bottom",
      //                 title: "Bottom",
      //                 type: "link",
      //               },
      //               {
      //                 path: "/voxo_plus/cookie_bar/bottom_left",
      //                 title: "Bottom Left",
      //                 type: "link",
      //               },
      //               {
      //                 path: "/voxo_plus/cookie_bar/bottom_right",
      //                 title: "Bottom Right",
      //                 type: "link",
      //               },
      //             ],
      //           },
      //           {
      //             title: "Search",
      //             active: false,
      //             children: [
      //               {
      //                 path: "/voxo_plus/search",
      //                 title: "Ajax Search",
      //                 type: "link",
      //               },
      //             ],
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     title: "PAGES",
      //     active: false,
      //     children: [
      //       {
      //         path: "/page/404",
      //         title: "404",
      //         type: "link",
      //       },
      //       {
      //         path: "/page/login",
      //         title: "Log In",
      //         type: "link",
      //       },
      //       {
      //         path: "/page/register",
      //         title: "Register",
      //         type: "link",
      //       },
      //       {
      //         path: "/page/forgot_password",
      //         title: "Forgot Password",
      //         type: "link",
      //       },
      //       {
      //         path: "/page/about_us",
      //         title: "About Us",
      //         type: "link",
      //       },
      //       {
      //         path: "/page/cart",
      //         title: "Cart",
      //         type: "link",
      //       },
      //       {
      //         path: "/page/checkout",
      //         title: "Checkout",
      //         type: "link",
      //       },
      //       {
      //         path: "/page/comming_soon",
      //         title: "Comming Soon",
      //         type: "link",
      //         badge: "trending",
      //       },
      //       {
      //         path: "/page/compare",
      //         title: "Compare",
      //         type: "link",
      //       },
      //       {
      //         path: "/page/contact_us",
      //         title: "Contact us",
      //         type: "link",
      //       },
      //       {
      //         path: "/page/faq",
      //         title: "faq",
      //         type: "link",
      //       },
      //       {
      //         path: "/page/order_success",
      //         title: "Order Success",
      //         type: "link",
      //       },
      //       {
      //         path: "/page/order_tracking",
      //         title: "Order Tracking",
      //         type: "link",
      //       },
      //       {
      //         path: "/page/review",
      //         title: "Review",
      //         type: "link",
      //       },
      //       {
      //         path: "/page/search",
      //         title: "search",
      //         type: "link",
      //       },
      //       {
      //         path: "/page/user_dashboard",
      //         title: "User Dashboard",
      //         type: "link",
      //       },
      //       {
      //         path: "/page/wishlist",
      //         title: "Wishlist",
      //         type: "link",
      //       },
      //     ],
      //   },
      //   {
      //     title: "BLOG",
      //     active: false,
      //     children: [
      //       {
      //         path: "/blog/blog_details",
      //         title: "Blog Details",
      //         type: "link",
      //       },
      //       {
      //         path: "/blog/blog_infinite_scroll",
      //         title: "Blog Infinite Scroll",
      //         type: "link",
      //       },
      //       {
      //         path: "/blog/blog_left_sidebar",
      //         title: "Blog Left Sidebar",
      //         type: "link",
      //       },
      //       {
      //         path: "/blog/blog_listing",
      //         title: "Blog Listing",
      //         type: "link",
      //       },
      //       {
      //         path: "/blog/blog_masonary",
      //         title: "Blog Masonary",
      //         type: "link",
      //         badge: "new",
      //         badgeClass: "tren-budge",
      //       },
      //       {
      //         path: "/blog/blog_no_sidebar",
      //         title: "Blog No Sidebar",
      //         type: "link",
      //       },
      //       {
      //         path: "/blog/blog_right_sidebar",
      //         title: "Blog Right Sidebar",
      //         type: "link",
      //       },
      //     ],
      //   },
      // ],
      openMobileNav: false,
    };
  },
  computed: {
    ...mapState({
      menuList: (state) => state.menu,
      // openMobileNav: (state) => state.clickEvents.shopFilterBar,
    }),
  },
  watch: {
    openMobileNavProp: function () {
      if (this.openMobileNavProp) this.openMobileNav = this.openMobileNavProp;
    },
  },
  methods: {
    openMobileViewList(title) {
      if (title === this.mobileListDropdown[0]) {
        this.mobileListDropdown = [];
      } else {
        this.mobileListDropdown = [];
        this.mobileListDropdown.push(title);
      }
    },
    toggleVoxoSubList(subLinkTitle) {
      if (subLinkTitle === this.voxoSubLists[0]) {
        this.voxoSubLists = [];
      } else {
        this.voxoSubLists = [];
        this.voxoSubLists.push(subLinkTitle);
      }
    },
    getClass(title) {
      if (title === "HOME") {
        return "mega-menu home-menu";
      } else if (title === "VOXO PLUS") {
        return "mega-menu ratio_40";
      }
    },
    toggleMobileNav() {
      this.$store.dispatch("clickEvents/toggleShopFilterBar");
    },

    changePage(path) {
      document
        .getElementById("bootstrap-link")
        .setAttribute("href", "/css/bootstrap.min.css");
      this.$router.push(path);
    },
  },
};
</script>
