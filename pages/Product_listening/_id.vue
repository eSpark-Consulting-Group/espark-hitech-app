<template>
  <section class="section-b-space">
    <div class="container">
      <div class="row g-4">
        <!-- filter button -->
        <div class="filter-button">
          <!-- <button
            class="danger-button danger-center btn btn-sm filter-btn"
            @click.prevent="toggleFilterBar"
          >
            Filter
          </button> -->
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              v-model="isChecked"
            />
            <label class="form-check-label" for="flexSwitchCheckChecked"
              >stacked/scroll</label
            >
          </div>
        </div>
        <div
          class="col-12 d-flex mr-2"
          :class="isChecked ? 'flex-container' : 'table-container'"
        >
          <div
            v-for="key in Object.keys(items[0])"
            :key="key"
            style="margin-right: 0.7rem"
          >
            <!-- <p>{{ key }}</p> -->
            <PFilter :items="getValuesByKey(key)" :title="key" />
          </div>
        </div>
        <!-- filter button -->

        <!-- label and featured section -->

        <div class="col-12">
          <PTable />
        </div>
        <!-- <ShopOptions
          :setCardsLayout="setCardsLayout"
          @changeCardLayout="changeCardLayout"
        />  -->
        <!--   @changeProductsPerPage="changeProductsPerPage"-->
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import ProductBox from '../../components/Section/Elements/ProductBox/ProductBox2.vue'
import ProBoxSkeletonLoader from '../../components/Section/Elements/ProductBox/ProBoxSkeletonLoader.vue'
import products from '../../static/DummyData/products.json'
import ShopOptions from '../../components/Section/Elements/ShopElements/ShopOptions.vue'
import TopShopBanner from '../../components/Section/Elements/ShopElements/TopShopBanner.vue'
import ShopFiltersbar from '../../components/Section/Elements/ShopElements/ShopFiltersBar.vue'
import PTable from '../../components/Section/Elements/ProductListening/PTable.vue'
import PFilter from '../../components/Section/Elements/ProductListening/PFilter.vue'
export default {
  head() {
    return {
      title: 'Shop - Category',
    }
  },
  components: {
    ProductBox,
    ProBoxSkeletonLoader,
    ShopOptions,
    TopShopBanner,
    ShopFiltersbar,
    PTable,
    PFilter,
  },
  props: [
    'setCardsLayout',
    'showSidebarCarousel',
    'filterbarPosition',
    'filterBarClasses',
    'filterHide',
    'showSizeListInComponent',
    'showRating',
    'showPriceRange2',
    'isMobileView',
  ],
  data() {
    return {
      //   breadcrumb: true,
      isChecked: true,
      HideFilter: 'Hide Filter',
      ShowFilter: 'Show Filter',
      showSkeletonLoad: true,
      showFilterBar: false,
      cardsLayout: 4,
      cards: [],
      pages: [],
      cardsToShow: 12,
      totalCards: 8,
      currentPage: 1,
      totalPages: 2,
      initCards: products.data,
      // showFilters: false,
      filtersList: [],
      items: [
        {
          'Mfr Part #': 'ABC123',
          'Quantity Available': 100,
          Price: 10.99,
          Series: 'XYZ',
          Package: 'Package A',
          'Product Status': 'In Stock',
          Resistance: '100 Ohms',
          Tolerance: '5%',
          'Power (Watts)': 1,
          Composition: 'Carbon Film',
          Features: 'High precision',
          'Temperature Coefficient': '±100 ppm/°C',
          'Operating Temperature': '-40°C to +85°C',
          'Package / Case': 'Case A',
          'Supplier Device Package': 'Device Package A',
          'Size / Dimension': '10mm x 5mm',
          'Height - Seated (Max)': '3mm',
          'Number of Terminations': 2,
          'Failure Rate': '1%',
        },
        {
          'Mfr Part #': 'DEF456',
          'Quantity Available': 50,
          Price: 5.49,
          Series: 'UVW',
          Package: 'Package B',
          'Product Status': 'Backordered',
          Resistance: '220 Ohms',
          Tolerance: '10%',
          'Power (Watts)': 0.5,
          Composition: 'Metal Film',
          Features: 'Low noise',
          'Temperature Coefficient': '±50 ppm/°C',
          'Operating Temperature': '-20°C to +70°C',
          'Package / Case': 'Case B',
          'Supplier Device Package': 'Device Package B',
          'Size / Dimension': '7mm x 3mm',
          'Height - Seated (Max)': '2mm',
          'Number of Terminations': 3,
          'Failure Rate': '0.5%',
        },
        {
          'Mfr Part #': 'GHI789',
          'Quantity Available': 200,
          Price: 2.99,
          Series: 'PQR',
          Package: 'Package C',
          'Product Status': 'Discontinued',
          Resistance: '1k Ohms',
          Tolerance: '1%',
          'Power (Watts)': 0.25,
          Composition: 'Thick Film',
          Features: 'High power handling',
          'Temperature Coefficient': '±200 ppm/°C',
          'Operating Temperature': '-10°C to +60°C',
          'Package / Case': 'Case C',
          'Supplier Device Package': 'Device Package C',
          'Size / Dimension': '5mm x 2mm',
          'Height - Seated (Max)': '1mm',
          'Number of Terminations': 1,
          'Failure Rate': '0.2%',
        },
      ],
    }
  },
  computed: {
    checkboxClass() {
      return {
        '.flex-container': this.isChecked,
      }
    },
    // ...mapGetters({
    //   initCards: "filters/cardsToReturn",
    // }),
    ...mapState({
      showFilters: (state) => state.clickEvents.shopFilterBar,
      // filtersList: (state) => state.filters.filtersList,
      // appliedFiltersList: (state) => state.filters.appliedFilters,
    }),
  },
  watch: {
    initCards: function () {
      this.cards = this.initCards.filter((item) => item.category != 'vr')
    },
    cards: function () {
      this.totalPages = Math.ceil(this.cards.length / this.cardsToShow)
      //   this.changePage(1)
    },
  },
  created() {
    // this.$store.dispatch("filters/setCategory", this.category);
    this.cards = this.initCards.filter((item) => item.category != 'vr')
    this.setBreadcrumbs({
      pageParent: 'Category - Listing',
      pageName: 'Electronic Store - Categories',
    })
  },
  methods: {
    getValuesByKey(key) {
      return this.items.map((item) => item[key])
    },
    changeCardLayout(toLayout) {
      this.cardsLayout = toLayout
    },
    changePage(toPage) {
      if (toPage > 0 && toPage <= this.totalPages) {
        this.currentPage = toPage
        this.calculatePages()
      }
    },
    calculatePages() {
      this.pages = []
      var startPage, endPage
      if (this.currentPage == 1) {
        startPage = 1
        endPage = 4
      } else {
        startPage = this.currentPage - 1
        endPage = this.currentPage + 2
      }
      for (var i = startPage; i < endPage; i++) {
        if (i <= this.totalPages) {
          this.pages.push(i)
        }
      }
    },
    toggleFilterBar() {
      if (this.filterHide)
        this.$store.dispatch('clickEvents/toggleShopFilterBarNoOverlay')
      else this.$store.dispatch('clickEvents/toggleShopFilterBar')
    },
  },
  mounted() {
    this.totalCards = this.cards.length
    this.totalPages = Math.ceil(this.totalCards / this.cardsToShow)
    this.calculatePages()
    if (this.setCardsLayout != undefined) this.cardsLayout = this.setCardsLayout
  },
}
</script>

<style scoped>
.filter-button {
  display: block;
}
.row-cols-2 > * {
  flex: 0 0 auto;
  width: 20%;
}
@media (min-width: 576px) {
  .container {
    max-width: 100%;
  }
  .row-cols-2 > * {
    flex: 0 0 auto;
    width: 16.5%;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 100%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 16.5%;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 100%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 16.5%;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 100%;
  }
  .row-cols-l-4 > * {
    flex: 0 0 auto;
    width: 16.5%;
  }
}
@media (min-width: 1400px) {
  .container {
    max-width: 100%;
  }
  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 10.5%;
  }
}

.container {
  margin: 0px;
  padding: 0 1.5rem 0 1.5rem;
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
