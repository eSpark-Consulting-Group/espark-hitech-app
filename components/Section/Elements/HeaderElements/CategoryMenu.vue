<template>
  <div class="menu-left">
    <div class="category-menu">
      <!-- <client-only> -->
      <button
        type="button"
        class="btn btn-solid-default toggle-category d-sm-block d-none"
      >
        <!-- {{ $const.Allcategories }} -->
        {{ $t(message) }}
        <!-- <client-side>
          
        </client-side> -->
        <!-- <i class="fas fa-chevron-down d-xl-inline-block d-none"></i> -->
      </button>
      <!-- </client-only> -->
      <!-- <client-only> -->
      <div class="category-dropdown">
        <div class="close-btn d-xl-none">
          <!-- {{ message }} -->
          <!-- {{ arrayReverse }} -->
          <!-- {{ CategoryLists }} -->
          <!-- <client-side>
            {{ $const.CategoryList }}
          </client-side> -->
          <span class="back-category">
            <i class="fa fa-angle-left"></i>
          </span>
        </div>

        <ul>
          <li
            v-for="(items, index) in CategoryLists"
            :key="index"
            :class="items.children ? 'submenu' : ''"
          >
            <a href="javascript:void(0)">{{ items.title }}</a>
            <ul class="category-mega-menu" v-if="items.children">
              <li>
                <div class="row">
                  <div
                    class="col-xl-3"
                    v-for="(item, index) in items.children"
                    :key="index"
                  >
                    <div class="category-childmenu">
                      <div class="title-category">
                        <h6>{{ item.heading }}</h6>
                      </div>
                      <ul>
                        <li v-for="(link, index) in item.items" :key="index">
                          <a href="shop-left-sidebar.html">{{ link.title }}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-xl-3" v-if="items.bannerImage">
                    <div class="category-banner">
                      <!-- <img
                        :src="getImageUrl(items.bannerImage)"
                        class="img-fluid"
                        alt=""
                      /> -->
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- </client-only> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // message: process.env.constants.Allcategories,
      // categoryList: [],
      message: 'All categories',
      CategoryLists: [
        {
          id: 1,
          title: 'watches',
          active: false,
          bannerImage: 'electronics/banner/4.jpg',
          menuOpen: false,
          children: [
            {
              id: 1,
              heading: 'Watch Brands',
              subMenuOpen: false,
              items: [
                {
                  title: 'Coros',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Titan',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Citizen',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Casio',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Movado',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Tissot',
                  path: '#',
                  type: 'link',
                },
              ],
            },
            {
              id: 2,
              heading: 'Watch Display',
              subMenuOpen: false,
              items: [
                {
                  title: 'Analog',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Digital',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Hybrid',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Tactile',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Touchscreen',
                  path: '#',
                  type: 'link',
                },
              ],
            },

            {
              id: 3,
              heading: 'Watch Style',
              subMenuOpen: false,
              items: [
                {
                  title: 'Casual',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Dress',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Fashion',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Luxury',
                  path: '#',
                  type: 'link',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: 'Footwear',
          path: '#',
          type: 'link',
        },
        {
          id: 3,
          title: 'Clothing',
          active: false,
          menuOpen: false,
          bannerImage: 'banner/1.jpg',
          children: [
            {
              id: 1,
              subMenuOpen: false,
              heading: "Women's fashion",
              items: [
                {
                  title: 'Dress',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Skirts',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Western Wear',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Ethanic Wear',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Sports Wear',
                  path: '#',
                  type: 'link',
                },
              ],
            },
            {
              id: 2,
              heading: "Men's fashion",
              subMenuOpen: false,
              items: [
                {
                  title: 'Sports Wear',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Ethanic Wear',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Western Wear',
                  path: '#',
                  type: 'link',
                },
              ],
            },
            {
              id: 3,
              heading: 'Accesories',
              subMenuOpen: false,
              items: [
                {
                  title: 'Earrings',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Fashion Jewellery',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Ties',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Caps And Hats',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Cuffinks',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Precious Jewellery',
                  path: '#',
                  type: 'link',
                },
                {
                  title: 'Necklace',
                  path: '#',
                  type: 'link',
                },
              ],
            },
          ],
        },
        {
          id: 4,
          title: 'Accessories',
          path: '#',
          type: 'link',
        },
        {
          id: 5,
          title: 'Home & Decor',
          path: '#',
          type: 'link',
        },
        {
          id: 6,
          title: 'Bags',
          path: '#',
          type: 'link',
        },
        {
          id: 1,
          title: 'Kitchan',
          path: '#',
          type: 'link',
        },
      ],
    }
  },
  computed: {
    // categoryList() {
    //   return this.$store.state.data;
    // },
    // ...mapState({
    //   categoryList: (state) => state.data,
    // }),
  },
  methods: {},
  created() {
    // console.log(categoryList);
  },
}
</script>
