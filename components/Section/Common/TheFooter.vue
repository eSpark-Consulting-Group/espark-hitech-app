<template>
  <footer class="footer-sm-space">
    <div class="main-footer">
      <div class="container">
        <div class="row gy-4">
          <div class="col-xl-4 col-lg-6 col-md-8">
            <div class="footer-contact">
              <BrandLogo />
              <ul class="contact-lists">
                <li>
                  <span>
                    <b>Phone :</b>
                    <span class="font-light"> +923232788259</span>
                  </span>
                </li>
                <li>
                  <span>
                    <b>{{ address.label }}</b>
                    <span class="font-light">{{ address.value }}</span>
                  </span>
                </li>
                <li>
                  <span>
                    <b>{{ email.label }} :</b>
                    <span class="font-light">{{ email.value }}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            :class="
              headings.linkClasses ? headings.linkClasses : 'col-lg-2 demo'
            "
            v-for="(headings, index) in links"
            :key="index"
          >
            <div class="footer-links">
              <div class="footer-title" @click="toggleFooterMenu(headings.id)">
                <h3>{{ $t(headings.title) }}</h3>
              </div>
              <div
                class="footer-content"
                :class="headings.menuOpen ? '' : 'd-none'"
              >
                <ul>
                  <li v-for="(links, index) in headings.items" :key="index">
                    <nuxt-link :to="{ path: links.path }" class="font-dark">{{
                      $t(links.title)
                    }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Footer NewsLetter -->
          <slot :class="windowSize === 'small' ? 'd-none' : ''">
            <FooterNewsLetter />
          </slot>
          <!-- Footer NewsLetter -->
        </div>
      </div>
    </div>
    <!-- Sub Footer -->
    <SubFooter />
    <!-- Sub Footer -->
  </footer>
</template>
<script>
import BrandLogo from '../BrandLogo/Logo.vue'
import FooterNewsLetter from '../Elements/FooterElements/FooterNewsLetter.vue'
import SubFooter from '../Elements/FooterElements/SubFooter.vue'
export default {
  components: { BrandLogo, FooterNewsLetter, SubFooter },
  data() {
    return {
      windowWidth: 1500,
      windowSize: 'large',
      clickingActive: false,
      address: {
        label: 'Address',
        value: `401/B 4th Floor, Blossom Trade Centre, Block 1
                    Gulistan-e-Johar, Karachi, 74300`,
      },
      email: {
        label: 'Email',
        value: `support@espark-hitech.com`,
      },
      links: [
        {
          id: 0,
          menuOpen: true,
          click: false,
          title: 'About Us',
          linkClasses: 'col-xl-2 col-lg-3 col-md-4 col-sm-6',
          items: [
            {
              title: 'HOME',
              path: '/',
            },
            {
              title: 'Products',
              path: '/category',
            },
            {
              title: 'About Us',
              path: '/about_us',
            },
            {
              title: 'BLOG',
              path: '/blogs',
            },
            {
              title: 'CONTACT US',
              path: '/contact_us',
            },
          ],
        },
        // {
        //   id: 1,
        //   menuOpen: true,
        //   click: false,
        //   title: 'Categories',
        //   linkClasses: 'col-xl-2 col-lg-3 col-md-4 col-sm-6',

        //   items: [
        //     {
        //       title: 'Audio Products',
        //       path: '/shop/audio-products',
        //     },
        //     {
        //       title: 'Battery Products',
        //       path: '/shop/batter',
        //     },
        //     {
        //       title: 'Cable Assemblies',
        //       path: '/shop/cable-assemblies',
        //     },
        //     {
        //       title: 'Computer Equipment',
        //       path: '/shop/computer-equipment',
        //     },
        //     {
        //       title: 'Capacitors',
        //       path: '/shop/capacitors',
        //     },
        //     {
        //       title: 'Connectors',
        //       path: '/shop/connectors',
        //     },
        //     {
        //       title: 'Development Kits',
        //       path: '/shop/development-kits',
        //     },
        //   ],
        // },
        {
          id: 2,
          menuOpen: true,
          click: false,
          title: 'Get Help',
          linkClasses: ' col-xl-2 col-lg-2 col-md-4 col-sm-6',
          items: [
            {
              title: 'Your Orders',
              path: '/cart',
            },
            {
              title: 'Your Account',
              path: '/user_dashboard',
            },
            {
              title: 'Track Orders',
              path: '/order_tracking',
            },
            // {
            //   title: 'Your Wishlist',
            //   path: '/pages/wishlist',
            // },
            {
              title: 'Shopping FAQS',
              path: '/Support/FAQs',
            },
            {
              title: 'Order Success',
              path: '/order_success',
            },
          ],
        },
      ],
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('resize', this.getWindowWidth)
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('resize', this.getWindowWidth)
    }
  },
  watch: {
    windowSize: function () {
      if (this.windowSize === 'small') this.clickingActive = true
      else this.clickingActive = false
    },
    data() {
      return {
        windowWidth: 1500,
        windowSize: 'large',
        clickingActive: false,
        lastActiveLink: 0,
      }
    },
  },
  computed: {
    // ...mapState({
    //   links: (state) => state.footerlinks,
    // }),
  },
  methods: {
    getWindowWidth() {
      this.windowWidth = screen.availWidth
      if (
        screen.availWidth < 750 &&
        screen.availWidth > 575 &&
        this.windowSize != 'medium'
      )
        this.windowSize = 'medium'
      else if (screen.availWidth < 575 && this.windowSize != 'small')
        this.windowSize = 'small'
      else if (screen.availWidth > 750 && this.windowSize != 'large')
        this.windowSize = 'large'
    },
    toggleFooterMenu(menuId) {
      if (this.clickingActive) {
        let isActive = this.links[menuId].menuOpen
        this.links.forEach((item, index) => {
          this.links[index].menuOpen = false
        })
        this.links[menuId].menuOpen = isActive
        this.links[menuId].menuOpen = !this.links[menuId].menuOpen
      }
    },
  },
  watch: {
    windowSize: function () {
      if (this.windowSize === 'small') this.clickingActive = true
      else this.clickingActive = false
    },
    clickingActive: function () {
      if (!this.clickingActive) {
        this.links.forEach((item) => (item.menuOpen = true))
      } else {
        this.links.forEach((item) => (item.menuOpen = false))
      }
    },
  },
}
</script>

<style scoped></style>
