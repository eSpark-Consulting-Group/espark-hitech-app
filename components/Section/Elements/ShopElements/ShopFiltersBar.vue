<template>
  <div class="col-xxl-2 col-lg-3 col-md-4" :class="[filterBarClasses, { show: showFilters }]">
    <!-- && !isMobileView  -->
    <div class="category-option" :class="[{ show: showFilters }]">
      <div class="button-close mb-3  ">
        <button class="btn p-0" @click.prevent="toggleFilterBar">
          <!-- <i class="fa-solid fa-arrow-left"></i> -->
          <iconsVue name="left-arrow" size="sm" />
          <span class="ms-2">Close</span>
        </button>
      </div>
      <FilterBars :items="data.map((prod) => prod.categoryName)" title="Category" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import products from '../../../../static/DummyData/productsResponse.json'
import FilterBars from './FilterBars.vue'
import iconsVue from "../../../../assets/icons.vue";
export default {
  props: [
    'filterBarClasses',
    'showFilterBar',
    'showSidebarCarousel',
    'showSizeListInComponent',
    'showRating',
    'showPriceRange2',
    'isMobileView',
  ],
  components: { FilterBars, iconsVue },
  data() {
    return {
      showSizeList: false,
      sizeListArray: [],
      selectedRatingStars: [],
      filterBoxes: {
        brand: true,
        color: true,
        price: true,
        category: true,
        discount: true,
      },
      priceRangeList: [],
      priceRange: [10],
      discounts: [0, 5, 10, 20],
      cleared: false,
      filtersList: [],
      colors: ['red', 'pink', 'green', 'orange', 'grey'],
      selectedColorsList: [],
      selectedCategory: 'all',
      selectedDiscount: 0,
      // categories: [],
      // showFilters: true,
      data: products.data,
    }
  },
  computed: {
    categories() {
      return this.initCards.map((product) => product.type)
    },
    ...mapState({
      showFilters: (state) => state.clickEvents.shopFilterBar,
      // allProducts: (state) => state.filters.allCards,
      // appliedFilters: (state) => state.filters.filtersList,
    }),
    // ...mapGetters({
    //   maxPrice: "filters/maxPrice",
    //   initCards: "filters/cardsToReturn",
    //   brandFilters: "filters/brandFilters",
    //   categoriesList: "filters/categories",
    // }),
    brandFiltersList() {
      // return this.$store.state.filters.filtersList;
    },
  },
  methods: {
    setSizeFilter(size) {
      this.$store.dispatch('filters/setSelectedSize', { selectedSize: size })
    },
    setSizeList() {
      var sizeListArray = []
      this.initCards.forEach((item) => {
        'items:', item
        if (Array.isArray(item.sizeoption))
          sizeListArray.push(...item.sizeoption)
      })
      this.sizeListArray = [...new Set(sizeListArray)]
    },
    setPriceRange(min, max) {
      var priceRange = []
      priceRange[0] = min
      priceRange[1] = max
      this.$store.dispatch('filters/priceRangeChange', priceRange)
    },
    calcPriceList(maxPrice) {
      this.priceRangeList = []
      var difference = Math.ceil(maxPrice / 6),
        i = 0
      while (i - difference < 6 * difference) {
        this.priceRangeList.push(i)
        i += difference
      }
    },
    toggleFilterBox(box) {
      this.filterBoxes[box] = !this.filterBoxes[box]
    },
    showCurrentPath() {
      this.$router.push({
        name: this.$route.name,
        params: { id: 'flower' },
      })
    },

    toggleFilterBar() {
      this.$store.dispatch('clickEvents/toggleShopFilterBar')
    },
    changePath(category) {
      this.$router.push({
        name: this.$route.name,
        params: { id: category },
      })
    },
    filterWithColor(color) {
      this.store.dispatch('filters/filterWithColor', color)
    },
  },
  // watch: {
  //   initCards: function () {
  //     if (this.showSizeListInComponent) {
  //       var toReturn = false
  //       this.initCards.every((item) => {
  //         if (Array.isArray(item.sizeoption) && item.sizeoption.length > 0) {
  //           toReturn = true
  //           return false
  //         }
  //       })
  //       if (toReturn) this.setSizeList()
  //       this.showSizeList = toReturn
  //     }
  //     var colorsList = []
  //     this.colors = []
  //     this.initCards.forEach((item) => {
  //       colorsList.push(...item.colors)
  //     })
  //     this.colors = [...new Set(colorsList)]
  //   },

  //   appliedFilters: function () {
  //     if (this.appliedFilters.length === 0 && !this.cleared) {
  //       this.filtersList = []
  //       this.cleared = true
  //     } else {
  //       this.cleared = false
  //     }
  //   },
  //   filtersList: function () {
  //     // this.$store.dispatch("filters/setFiltersList", this.filtersList);
  //     this.$router.push({
  //       path: this.$route.path,
  //       query: { ...this.$route.query, filters: this.filtersList },
  //     })
  //   },
  // },
  mounted() {
    // this.setSizeList()
    // this.selectedCategory = this.$route.params.id || 'all'
    // this.categories.push('all')
    // this.categories.push(...this.categoriesList)
    // this.$store.dispatch("filters/setCategory", this.$route.params.id);
    // var queryFilters = this.$route.query.filters
    // var queryColors = this.$route.query.colors
    // if (typeof queryFilters === 'string') this.filtersList.push(queryFilters)
    // else if (typeof queryFilters === 'object') this.filtersList = queryFilters
    // else this.filtersList = []
    // if (typeof queryColors === 'string')
    //   this.selectedColorsList.push(queryColors)
    // else if (typeof queryColors === 'object')
    //   this.selectedColorsList = queryColors
    // else this.selectedColorsList = []
    // this.selectedDiscount =
    //   this.$route.query.discount === undefined ? 0 : this.$route.query.discount
  },
  created() {
    // this.calcPriceList(this.maxPrice)
    // this.priceRange[1] = this.maxPrice - this.maxPrice / 10
  },
}
</script>

<style lang="scss" scoped>
.colorDiv {
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
}

.colorCheckbox {
  position: absolute;
  width: 30px;
  height: 30px;
  opacity: 0;
  cursor: pointer;
  margin-top: 2px;
}

.insideColorDiv {
  position: absolute;
  background-color: white;
  height: 10px;
  width: 10px;
}

input[type='checkbox']:checked~div {
  box-shadow: 0 0 0 2px rgb(0, 0, 0, 0.8);
}

.category-option .button-close button {
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #212529;
}
</style>
