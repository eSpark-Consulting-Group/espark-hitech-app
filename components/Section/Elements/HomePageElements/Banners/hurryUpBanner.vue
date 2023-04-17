<template>
  <section class="tab-section">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="title text-center">
            <h5>{{ $t( JustForYou) }}</h5>
            <h2>{{ $t(OurCollection) }}</h2>
          </div>
          <div class="tab-wrap">
            <ul class="nav nav-tabs" id="myTab">
              <li
                class="nav-item"
                v-for="(tab, index) in tabList"
                :key="index"
                @click="setActive(tab.name)"
              >
                <button
                  class="nav-link"
                  :class="tab.active ? 'active' : ''"
                  :id="tab.linkId"
                  data-bs-toggle="tab"
                  :data-bs-target="tab.target"
                  type="button"
                >
                  {{ tab.displayTitle }}
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <hurryUpCard
                v-for="(tab, index) in tabList"
                :key="index"
                :tab="tab"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import hurryUpCard from './bannerBoxes/hurryUpBox.vue'

export default {
  // props: ['tabList'],
  components: {
    hurryUpCard,
  },
  data() {
    return {
      JustForYou: 'Just For You',
      OurCollection: 'Our Collection',
      HurryUp: 'Hurry up!',
      SpecialOffer: 'Special Offer',
      tabList: [
        {
          name: 'Camera',
          active: false,
          displayTitle: 'Audio Products',
          children: [
            {
              childtype: 'leftbanners',
              banners: [
                {
                  mrp: '$58.00',
                  price: '$25.00',
                  title: 'Digital Unisex Watch',
                  ratingstars: 2,
                  image: 'electronics/product/png/11.png',
                },
                {
                  mrp: '$850.00',
                  price: '$700.00',
                  title: 'Smart Security Camera (White)',
                  ratingstars: 3,
                  image: 'electronics/product/png/13.png',
                },
                {
                  mrp: '$90.00',
                  price: '$78.00',
                  title: 'White dial Wrist Watch',
                  ratingstars: 5,
                  image: 'electronics/product/png/12.png',
                },
              ],
            },
            {
              childtype: 'middlebanner',
              price: '$49',
              mrp: '$52',
              lefttag: 'New',
              righttag: '50% off',
              heading: 'Hurry Up !!!!',
              subheading: 'Offer Expires in 02 Hours',
              image: 'electronics/product/png/14.png',
              title: 'Bluetooth Wireless Earphones (black)',
              ratingstars: 2,
            },
            {
              childtype: 'rightbanners',
              banners: [
                {
                  mrp: '$60.00',
                  price: '$52.00',
                  title: '16MP 4K HD Action Waterproof Camera',
                  ratingstars: 5,
                  image: 'electronics/product/png/8.png',
                },
                {
                  mrp: '$50.00',
                  price: '$30.00',
                  title: 'Smart Security Camera (White)',
                  ratingstars: 4,
                  image: 'electronics/product/png/9.png',
                },
                {
                  mrp: '$1068.00',
                  price: '$1000.00',
                  title: 'Full HD Indoor WiFi Spy Security Camera',
                  ratingstars: 2,
                  image: 'electronics/product/png/10.png',
                },
              ],
            },
          ],
        },
        {
          name: 'Audio',
          active: false,
          displayTitle: 'Quality Products',
          children: [
            {
              childtype: 'leftbanners',
              banners: [
                {
                  mrp: '$1068.00',
                  price: '$1000.00',
                  title: 'Full HD Indoor WiFi Spy Security Camera',
                  ratingstars: 2,
                  image: 'electronics/product/png/10.png',
                },
                {
                  mrp: '$60.00',
                  price: '$52.00',
                  title: '16MP 4K HD Action Waterproof Camera',
                  ratingstars: 5,
                  image: 'electronics/product/png/8.png',
                },
                {
                  mrp: '$850.00',
                  price: '$700.00',
                  title: 'Smart Security Camera (White)',
                  ratingstars: 3,
                  image: 'electronics/product/png/13.png',
                },
              ],
            },
            {
              childtype: 'middlebanner',
              price: '$49',
              mrp: '$52',
              lefttag: 'New',
              righttag: '50% off',
              heading: 'Hurry Up',
              subheading: 'Offer Expires in 02 Hours',
              image: 'electronics/product/png/14.png',
              title: 'Bluetooth Wireless Earphones (black)',
              ratingstars: 2,
            },
            {
              childtype: 'rightbanners',
              banners: [
                {
                  mrp: '$58.00',
                  price: '$25.00',
                  title: 'Digital Unisex Watch',
                  ratingstars: 2,
                  image: 'electronics/product/png/11.png',
                },
                {
                  mrp: '$50.00',
                  price: '$30.00',
                  title: 'Smart Security Camera (White)',
                  ratingstars: 4,
                  image: 'electronics/product/png/10.png',
                },
                {
                  mrp: '$90.00',
                  price: '$78.00',
                  title: 'White dial Wrist Watch',
                  ratingstars: 5,
                  image: 'electronics/product/png/12.png',
                },
              ],
            },
          ],
        },
        {
          name: 'Navigation',
          active: false,
          displayTitle: 'Cable assemblies',
          children: [
            {
              childtype: 'leftbanners',
              banners: [
                {
                  mrp: '$1068.00',
                  price: '$1000.00',
                  title: 'Full HD Indoor WiFi Spy Security Camera',
                  ratingstars: 2,
                  image: 'electronics/product/png/10.png',
                },
                {
                  mrp: '$60.00',
                  price: '$52.00',
                  title: '16MP 4K HD Action Waterproof Camera',
                  ratingstars: 5,
                  image: 'electronics/product/png/8.png',
                },
                {
                  mrp: '$58.00',
                  price: '$25.00',
                  title: 'Digital Unisex Watch',
                  ratingstars: 2,
                  image: 'electronics/product/png/11.png',
                },
              ],
            },
            {
              childtype: 'middlebanner',
              price: '$49',
              mrp: '$52',
              lefttag: 'New',
              righttag: '50% off',
              heading: 'Hurry Up',
              subheading: 'Offer Expires in 02 Hours',
              image: 'electronics/product/png/14.png',
              title: 'Bluetooth Wireless Earphones (black)',
              ratingstars: 2,
            },
            {
              childtype: 'rightbanners',
              banners: [
                {
                  mrp: '$90.00',
                  price: '$78.00',
                  title: 'White dial Wrist Watch',
                  ratingstars: 5,
                  image: 'electronics/product/png/12.png',
                },
                {
                  mrp: '$50.00',
                  price: '$30.00',
                  title: 'Smart Security Camera (White)',
                  ratingstars: 4,
                  image: 'electronics/product/png/10.png',
                },
                {
                  mrp: '$850.00',
                  price: '$700.00',
                  title: 'Smart Security Camera (White)',
                  ratingstars: 3,
                  image: 'electronics/product/png/13.png',
                },
              ],
            },
          ],
        },
        {
          name: 'others',
          active: true,
          displayTitle: 'Capacitor',
          children: [
            {
              childtype: 'leftbanners',
              banners: [
                {
                  mrp: '$90.00',
                  price: '$78.00',
                  title: 'White dial Wrist Watch',
                  ratingstars: 5,
                  image: 'electronics/product/png/12.png',
                },
                {
                  mrp: '$50.00',
                  price: '$30.00',
                  title: 'Smart Security Camera (White)',
                  ratingstars: 4,
                  image: 'electronics/product/png/10.png',
                },
                {
                  mrp: '$60.00',
                  price: '$52.00',
                  title: '16MP 4K HD Action Waterproof Camera',
                  ratingstars: 5,
                  image: 'electronics/product/png/8.png',
                },
              ],
            },
            {
              childtype: 'middlebanner',
              price: '$49',
              mrp: '$52',
              lefttag: 'New',
              righttag: '50% off',
              heading: 'Hurry Up',
              subheading: 'Offer Expires in 02 Hours',
              image: 'electronics/product/png/14.png',
              title: 'Bluetooth Wireless Earphones (black)',
              ratingstars: 2,
            },
            {
              childtype: 'rightbanners',
              banners: [
                {
                  mrp: '$1068.00',
                  price: '$1000.00',
                  title: 'Full HD Indoor WiFi Spy Security Camera',
                  ratingstars: 2,
                  image: 'electronics/product/png/10.png',
                },
                {
                  mrp: '$850.00',
                  price: '$700.00',
                  title: 'Smart Security Camera (White)',
                  ratingstars: 3,
                  image: 'electronics/product/png/13.png',
                },
                {
                  mrp: '$58.00',
                  price: '$25.00',
                  title: 'Digital Unisex Watch',
                  ratingstars: 2,
                  image: 'electronics/product/png/11.png',
                },
              ],
            },
          ],
        },
        {
          name: 'phones',
          active: false,
          displayTitle: 'Computer Equipment',
          children: [
            {
              childtype: 'leftbanners',
              banners: [
                {
                  mrp: '$1068.00',
                  price: '$1000.00',
                  title: 'Full HD Indoor WiFi Spy Security Camera',
                  ratingstars: 2,
                  image: 'electronics/product/png/10.png',
                },
                {
                  mrp: '$850.00',
                  price: '$700.00',
                  title: 'Smart Security Camera (White)',
                  ratingstars: 3,
                  image: 'electronics/product/png/13.png',
                },
                {
                  mrp: '$58.00',
                  price: '$25.00',
                  title: 'Digital Unisex Watch',
                  ratingstars: 2,
                  image: 'electronics/product/png/11.png',
                },
              ],
            },
            {
              childtype: 'middlebanner',
              price: '$49',
              mrp: '$52',
              lefttag: 'New',
              righttag: '50% off',
              heading: 'Hurry Up',
              subheading: 'Offer Expires in 02 Hours',
              image: 'electronics/product/png/14.png',
              title: 'Bluetooth Wireless Earphones (black)',
              ratingstars: 2,
            },
            {
              childtype: 'rightbanners',
              banners: [
                {
                  mrp: '$60.00',
                  price: '$52.00',
                  title: '16MP 4K HD Action Waterproof Camera',
                  ratingstars: 5,
                  image: 'electronics/product/png/8.png',
                },
                {
                  mrp: '$90.00',
                  price: '$78.00',
                  title: 'White dial Wrist Watch',
                  ratingstars: 5,
                  image: 'electronics/product/png/12.png',
                },
                {
                  mrp: '$50.00',
                  price: '$30.00',
                  title: 'Smart Security Camera (White)',
                  ratingstars: 4,
                  image: 'electronics/product/png/10.png',
                },
              ],
            },
          ],
        },
        {
          name: 'Computer',
          active: false,
          displayTitle: 'Connectors',
          children: [
            {
              childtype: 'leftbanners',
              banners: [
                {
                  mrp: '$58.00',
                  price: '$25.00',
                  title: 'Digital Unisex Watch',
                  ratingstars: 2,
                  image: 'electronics/product/png/11.png',
                },
                {
                  mrp: '$50.00',
                  price: '$30.00',
                  title: 'Smart Security Camera (White)',
                  ratingstars: 4,
                  image: 'electronics/product/png/10.png',
                },
                {
                  mrp: '$90.00',
                  price: '$78.00',
                  title: 'White dial Wrist Watch',
                  ratingstars: 5,
                  image: 'electronics/product/png/12.png',
                },
              ],
            },
            {
              childtype: 'middlebanner',
              price: '$49',
              mrp: '$52',
              lefttag: 'New',
              righttag: '50% off',
              heading: 'Hurry Up',
              subheading: 'Offer Expires in 02 Hours',
              image: 'electronics/product/png/14.png',
              title: 'Bluetooth Wireless Earphones (black)',
              ratingstars: 2,
            },
            {
              childtype: 'rightbanners',
              banners: [
                {
                  mrp: '$1068.00',
                  price: '$1000.00',
                  title: 'Full HD Indoor WiFi Spy Security Camera',
                  ratingstars: 2,
                  image: 'electronics/product/png/10.png',
                },
                {
                  mrp: '$60.00',
                  price: '$52.00',
                  title: '16MP 4K HD Action Waterproof Camera',
                  ratingstars: 5,
                  image: 'electronics/product/png/8.png',
                },
                {
                  mrp: '$850.00',
                  price: '$700.00',
                  title: 'Smart Security Camera (White)',
                  ratingstars: 3,
                  image: 'electronics/product/png/13.png',
                },
              ],
            },
          ],
        },
        {
          name: 'Accesories',
          active: false,
          displayTitle: 'Development Kits',
          children: [
            {
              childtype: 'leftbanners',
              banners: [
                {
                  mrp: '$58.00',
                  price: '$25.00',
                  title: 'Digital Unisex Watch',
                  ratingstars: 2,
                  image: 'electronics/product/png/11.png',
                },
                {
                  mrp: '$50.00',
                  price: '$30.00',
                  title: 'Smart Security Camera (White)',
                  ratingstars: 4,
                  image: 'electronics/product/png/10.png',
                },
                {
                  mrp: '$60.00',
                  price: '$52.00',
                  title: '16MP 4K HD Action Waterproof Camera',
                  ratingstars: 5,
                  image: 'electronics/product/png/8.png',
                },
              ],
            },
            {
              childtype: 'middlebanner',
              price: '$49',
              mrp: '$52',
              lefttag: 'New',
              righttag: '50% off',
              heading: 'Hurry Up',
              subheading: 'Offer Expires in 02 Hours',
              image: 'electronics/product/png/14.png',
              title: 'Bluetooth Wireless Earphones (black)',
              ratingstars: 2,
            },
            {
              childtype: 'rightbanners',
              banners: [
                {
                  mrp: '$1068.00',
                  price: '$1000.00',
                  title: 'Full HD Indoor WiFi Spy Security Camera',
                  ratingstars: 2,
                  image: 'electronics/product/png/10.png',
                },
                {
                  mrp: '$90.00',
                  price: '$78.00',
                  title: 'White dial Wrist Watch',
                  ratingstars: 5,
                  image: 'electronics/product/png/12.png',
                },
                {
                  mrp: '$850.00',
                  price: '$700.00',
                  title: 'Smart Security Camera (White)',
                  ratingstars: 3,
                  image: 'electronics/product/png/13.png',
                },
              ],
            },
          ],
        },
      ],
    }
  },
  methods: {
    setActive(activeTab) {
      for (var i = 0; i < this.tabList.length; i++) {
        if (activeTab === this.tabList[i].name) {
          this.tabList[i].active = true
        } else {
          this.tabList[i].active = false
        }
      }
    },
  },
}
</script>
