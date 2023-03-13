<template>
  <layout :offer-code="offerCode">
    <Breadcrumb pageName="Electronic Components" parent="Shop Listing" />
    <section class="section-b-space">
      <div class="container">
        <div class="row">
          <ShopFiltersbar />
          <!-- :showRating="showRating"
            :showPriceRange2="showPriceRange2"
            :showSizeListInComponent="showSizeListInComponent"
            :showFilterBar="showFilters"
            v-if="filterbarPosition != 'right'"
            :filterBarClasses="filterBarClasses"
            :showSidebarCarousel="showSidebarCarousel"
            :isMobileView="isMobileView" -->
          <div
            class="col-lg-9 col-12 ratio_30"
            :class="[{ 'col-lg-12': showFilters }]"
          >
            <!-- <slot name="topBanner"></slot> -->
            <TopShopBanner />
            <div class="hide-button d-flex mb-3" v-if="filterHide">
              <button
                class="danger-button danger-center btn btn-sm filter-btn"
                @click.prevent="toggleFilterBar"
              >
                <span class="d-lg-inline-block" v-if="showFilters">{{
                  ShowFilter
                }}</span>
                <span class="d-lg-inline-block" v-else>{{ HideFilter }}</span>
              </button>
            </div>
            <div class="row g-4">
              <!-- filter button -->
              <div class="filter-button">
                <button
                  class="danger-button danger-center btn btn-sm filter-btn"
                  @click.prevent="toggleFilterBar"
                >
                  Icon
                  <!-- <vue-feather type="align-left"></vue-feather>Filter -->
                </button>
              </div>

              <!-- filter button -->

              <!-- label and featured section -->
              <div class="col-12" v-if="filtersList.length != 0">
                <ul class="short-name">
                  <li v-for="(filter, index) in filtersList" :key="index">
                    <div class="label-tag">
                      <span>{{ filter }}</span>
                      <button
                        type="button"
                        class="btn-close"
                        aria-label="Close"
                        @click="removeFilter(filter)"
                      ></button>
                    </div>
                  </li>
                  <li>
                    <div class="label-tag" v-if="filtersList.length != 0">
                      <a
                        href="javascript:void(0)"
                        @click.prevent="clearAllFilters"
                        ><span>Clear All</span></a
                      >
                    </div>
                  </li>
                </ul>
              </div>

              <ShopOptions
                :setCardsLayout="setCardsLayout"
                @changeCardLayout="changeCardLayout"
              />
              <!--   @changeProductsPerPage="changeProductsPerPage"-->
            </div>
            <!-- label and featured section -->

            <!-- Prodcut setion -->
            <div
              class="row g-sm-4 g-3 gx-sm-4 gx-3 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section"
              :class="[
                { 'row-cols-2': cardsLayout == 2 },
                { 'row-cols-md-3 row-cols-2': cardsLayout == 3 },
                { 'row-cols-xl-4 row-cols-md-3 row-cols-2': cardsLayout == 4 },
                {
                  'row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 ':
                    cardsLayout == 5,
                },
                {
                  'list-style': cardsLayout == 6,
                },
              ]"
            >
              <div
                v-for="(product, index) in cards.slice(
                  currentPage * cardsToShow - cardsToShow,
                  currentPage * cardsToShow
                )"
                :key="index"
              >
                <productBox :product="product" />
              </div>

              <!-- Prodcut setion -->
            </div>

            <nav class="page-section" v-if="cards.length != 0">
              <ul class="pagination">
                <li class="page-item">
                  <a
                    href="javascript:void(0)"
                    class="page-link"
                    @click="changePage(currentPage - 1)"
                  >
                    <i class="fas fa-chevron-left"></i>
                  </a>
                </li>
                <li
                  class="page-item"
                  v-for="i in pages"
                  :key="i"
                  :class="i === currentPage ? 'active' : ''"
                >
                  <a
                    class="page-link"
                    href="javascript:void(0)"
                    @click.prevent="changePage(i)"
                    >{{ i }}
                  </a>
                </li>

                <li class="page-item">
                  <a
                    href="javascript:void(0)"
                    class="page-link"
                    @click="changePage(currentPage + 1)"
                  >
                    <i class="fas fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <NewsSubscribe />
  </layout>
</template>

<script>
import layout from '../../layouts/layout.vue'
import Breadcrumb from '../../components/Section/Elements/HeaderElements/Breadcrumb.vue'
import NewsSubscribe from '../../components/Section/Elements/HomePageElements/Banners/NewsSubscribe.vue'
import ProductBox from '../../components/Section/Elements/ProductBox/ProductBox2.vue'
import ProBoxSkeletonLoader from '../../components/Section/Elements/ProductBox/ProBoxSkeletonLoader.vue'
import products from '../../static/DummyData/products.json'
import ShopOptions from '../../components/Section/Elements/ShopElements/ShopOptions.vue'
import TopShopBanner from '../../components/Section/Elements/ShopElements/TopShopBanner.vue'
import ShopFiltersbar from '../../components/Section/Elements/ShopElements/ShopFiltersBar.vue'
export default {
  head() {
    return {
      title: 'Shop - Category',
    }
  },
  components: {
    layout,
    Breadcrumb,
    NewsSubscribe,
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
    // 'filterBarClasses',
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
      offerCode: 'DEF4526',
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
      showFilters: false,
      filtersList: [],
    }
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
  },
  methods: {
    changeCardLayout(toLayout) {
      this.cardsLayout = toLayout
    },
  },
}
</script>

<style lang="scss" scoped></style>
