<template>
  <section class="section-b-space">
    <div class="container">
      <div class="row">
        <ShopFiltersbar :showFilterBar="showFilters" v-if="filterbarPosition != 'right'"
          :filterBarClasses="filterBarClasses" :showSidebarCarousel="showSidebarCarousel" :isMobileView="isMobileView" />
        <!-- :showRating="showRating"
            :showPriceRange2="showPriceRange2"
            :showSizeListInComponent="showSizeListInComponent"
            :showFilterBar="showFilters"
            v-if="filterbarPosition != 'right'"
            :filterBarClasses="filterBarClasses"
            :showSidebarCarousel="showSidebarCarousel"
            :isMobileView="isMobileView" -->
        <div class="col-xxl-10 col-lg-9 col-12 ratio_30" :class="[{ 'col-lg-12': showFilters }]">
          <!-- <slot name="topBanner"></slot> -->
          <!-- <TopShopBanner /> -->
          <div class="hide-button d-flex mb-3" v-if="filterHide">
            <button class="danger-button danger-center btn btn-sm filter-btn" @click.prevent="toggleFilterBar">
              <span class="d-lg-inline-block" v-if="showFilters">{{
                ShowFilter
              }}</span>
              <span class="d-lg-inline-block" v-else>{{ HideFilter }}</span>
            </button>
          </div>
          <div class="row g-4">
            <!-- filter button -->
            <div class="filter-button">
              <button class="danger-button danger-center btn btn-sm filter-btn" @click.prevent="toggleFilterBar">
                Filter
              </button>
            </div>

            <!-- filter button -->

            <!-- label and featured section -->
            <div class="col-12" v-if="filtersList.length != 0">
              <ul class="short-name">
                <li v-for="(filter, index) in filtersList" :key="index">
                  <div class="label-tag">
                    <span>{{ filter }}</span>
                    <button type="button" class="btn-close" aria-label="Close" @click="removeFilter(filter)"></button>
                  </div>
                </li>
                <li>
                  <div class="label-tag" v-if="filtersList.length != 0">
                    <a href="javascript:void(0)" @click.prevent="clearAllFilters"><span>Clear All</span></a>
                  </div>
                </li>
              </ul>
            </div>

          </div>
          <!-- label and featured section -->

          <!-- Prodcut setion -->

          <ul class="row mt-3 product-list">

            <h1 class="product-list-title display-3 mb-4 mt-2">Product Categories ({{ totalProductsCount }})</h1>

            <li class="col-12 product-list-item" v-for="(product, index) in products" :key="index">
              <h4 class="product-list-item-title pb-2">
                <NuxtLink class="subproduct-list-item-title" :to="`/category/${product.categoryName}`">
                  {{ product.categoryName }}
                </NuxtLink>
              </h4>
              <ul class="row subproduct-list mt-2">
                <li class="col-12 col-md-6 subproduct-list-item" v-for="(subCategory, index) in product.subCategories"
                  :key="index">

                  <NuxtLink class="subproduct-list-item-title"
                    :to="`/product_listing/' + ${subCategory.subCategoryName}`">
                    {{
                      subCategory.subCategoryName + ' (' + (
                        product.subCategories.length > 1 ? product.subCategories.length
                          +
                          ' items)' : product.subCategories.length + ' item)') }}</NuxtLink>
                </li>
              </ul>
              <br />
              <br />
            </li>
          </ul>
        </div>
        <ShopFiltersbar :showFilterBar="showFilters" v-if="filterbarPosition == 'right'"
          :filterBarClasses="filterBarClasses" :showSidebarCarousel="showSidebarCarousel" :isMobileView="isMobileView" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import ProductBox from '../../components/Section/Elements/ProductBox/ProductBox2.vue'
import ProBoxSkeletonLoader from '../../components/Section/Elements/ProductBox/ProBoxSkeletonLoader.vue'
import ShopOptions from '../../components/Section/Elements/ShopElements/ShopOptions.vue'
import TopShopBanner from '../../components/Section/Elements/ShopElements/TopShopBanner.vue'
import ShopFiltersbar from '../../components/Section/Elements/ShopElements/ShopFiltersBar.vue'
import products from "../../static/DummyData/productsResponse.json"

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
      HideFilter: 'Hide Filter',
      ShowFilter: 'Show Filter',
      showSkeletonLoad: true,
      showFilterBar: false,
      cardsLayout: 4,
      cards: [],
      pages: [],
      cardsToShow: 24,
      totalCards: 8,
      currentPage: 1,
      totalPages: 2,
      // initCards: products.data,
      // showFilters: false,
      filtersList: [],
      products: []
    }
  },
  computed: {
    ...mapGetters({
      initCards: 'filters/cardsToReturn',
      getCategories: 'products/getCategories',
      isFetchingProduct: 'products/getLoading',
    }),
    ...mapState({
      showFilters: (state) => state.clickEvents.shopFilterBar,
      // filtersList: (state) => state.filters.filtersList,
      // appliedFiltersList: (state) => state.filters.appliedFilters,
    }),
    productCategories() {
      return this.getCategories
    },
    totalProductsCount() {
      return this.products ? this.products.length : 0
    },
  },
  watch: {
    initCards: function () {
      this.cards = this.initCards //.filter((item) => item.category != 'vr')
    },
    cards: function () {
      this.totalPages = Math.ceil(this.cards.length / this.cardsToShow)
      //   this.changePage(1)
    },
  },
  async fetch() {
    await this.$store.dispatch('products/fetchProductCategories');
  },

  created() {

    // this.$store.dispatch("filters/setCategory", this.category);
    this.cards =
      this.setBreadcrumbs({
        pageParent: 'Category - Listing',
        pageName: 'Electronic Store - products',
      })

    this.products = products.data
  },
  methods: {
    ...mapActions({
      fetchProductCategories: 'products/fetchProductCategories',
    }),

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

    changeProductsPerPage(productsToShow) {
      this.cardsToShow = productsToShow
      this.totalPages = Math.ceil(this.cards.length / this.cardsToShow)
      this.calculatePages()
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
.row-cols-2>* {
  flex: 0 0 auto;
  width: 25%;
}

.product-list-item-title {
  border-bottom: 2px solid #eff2f7;
  font-weight: 500;
  color: #02a895;
}

.subproduct-list-item-title {
  color: #232323;
}

.subproduct-list-item-title:hover {
  color: #02a895;
  text-decoration: underline;
}

@media (min-width: 576px) {
  .container {
    max-width: 100%;
  }

  .row-cols-2>* {
    flex: 0 0 auto;
    width: 16.5%;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 100%;
  }

  .row-cols-md-4>* {
    flex: 0 0 auto;
    width: 16.5%;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 100%;
  }

  .row-cols-md-4>* {
    flex: 0 0 auto;
    width: 16.5%;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 100%;
  }

  .row-cols-l-4>* {
    flex: 0 0 auto;
    width: 16.5%;
  }
}

@media (min-width: 1400px) {
  .container {
    max-width: 100%;
  }

  .row-cols-xxl-4>* {
    flex: 0 0 auto;
    width: 12.5%;
  }
}

.container {
  margin: 0px;
  padding: 0 1.5rem 0 1.5rem;
}

.icons a:focus,
.icons a:active {
  background-color: #ffff !important;
}

/* .page-link a:focus {
  background-color: #b74401 !important;
  color: #ffff !important;
}
.page-link a:active {
  background-color: #772f5b !important;
  color: #ffff !important;
} */
.page-link:focus {
  background-color: #01b7a1 !important;
}

.center-items a:hover {
  background-color: #eff2f7 !important;
  color: #02a895 !important;
}

.center-items a:active {
  background-color: #02a895 !important;
  color: #ffff !important;
}
</style>
