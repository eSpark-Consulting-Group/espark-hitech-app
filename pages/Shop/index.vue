<template>
  <section class="section-b-space">
    <div class="container">
      <div class="row">
        <ShopFiltersbar :showFilterBar="showFilters"
          v-if="filterbarPosition != 'right'"
          :filterBarClasses="filterBarClasses"
          :showSidebarCarousel="showSidebarCarousel"
          :isMobileView="isMobileView"
        />
        <!-- :showRating="showRating"
            :showPriceRange2="showPriceRange2"
            :showSizeListInComponent="showSizeListInComponent"
            :showFilterBar="showFilters"
            v-if="filterbarPosition != 'right'"
            :filterBarClasses="filterBarClasses"
            :showSidebarCarousel="showSidebarCarousel"
            :isMobileView="isMobileView" -->
        <div
          class="col-xxl-10 col-lg-9 col-12 ratio_30"
          :class="[{ 'col-lg-12': showFilters }]"
        >
          <!-- <slot name="topBanner"></slot> -->
          <!-- <TopShopBanner /> -->
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
              {
                'row-cols-xxl-4 row-cols-xl-4 row-cols-md-4 row-cols-2':
                  cardsLayout == 4,
              },
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
        <ShopFiltersbar :showFilterBar="showFilters"
          v-if="filterbarPosition == 'right'"
          :filterBarClasses="filterBarClasses"
          :showSidebarCarousel="showSidebarCarousel"
          :isMobileView="isMobileView"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState} from "vuex";
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
      cardsToShow: 12,
      totalCards: 8,
      currentPage: 1,
      totalPages: 2,
      initCards: products.data,
      // showFilters: false,
      filtersList: [],
    }
  },
  computed: {
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
      pageParent: 'Shop - Listing',
      pageName: 'Electronic Store',
    })
  },
  methods: {
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
        this.$store.dispatch("clickEvents/toggleShopFilterBarNoOverlay");
      else this.$store.dispatch("clickEvents/toggleShopFilterBar");
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
@media (min-width: 576px) {
  .container {
    max-width: 100%;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 100%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 100%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 100%;
  }
  .row-cols-l-4 > * {
    flex: 0 0 auto;
    width: 20%;
  }
}
@media (min-width: 1400px) {
  .container {
    max-width: 100%;
  }
  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 16.5%;
  }
}

.container {
  margin: 0px;
  padding: 0 1.5rem 0 1.5rem;
}
</style>
