<template>
  <div class="category-name mb-3">
    <div class="accordion-item category-rating">
      <h2 class="accordion-header" id="headingOne">
        <b-button
          v-b-toggle="`${title}-filter`"
          variant="primary"
          class="accordion-button"
          :class="visible ? null : 'collapsed'"
          :aria-expanded="visible ? 'true' : 'false'"
          :aria-controls="`${title}-filter`"
        >
          <div>
            <span>{{ title }}</span>
            <span>
              <transition name="fade">
                <i v-if="visible" class="fa fa-minus"></i>
                <i v-else class="fa fa-plus"></i>
              </transition>
            </span>
          </div>
        </b-button>
      </h2>
      <b-collapse
        :id="`${title}-filter`"
        v-model="visible"
        class="accordion-collapse"
      >
        <b-card class="accordion-body category-scroll">
          <ul class="category-list">
            <li v-for="(item, i) in new Set(items)" :key="i">
              <div class="form-check ps-0 custome-form-check">
                <input class="checkbox_animated check-it" type="checkbox" />
                <label class="form-check-label">{{ item }}</label>
                <p class="font-light">
                  ({{ items.filter((r) => r == item).length }})
                </p>
              </div>
            </li>
          </ul>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>
<script>
import icons from '../../../../assets/icons.vue'
export default {
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    items: {
      type: Array,
      default: [],
    },
  },
  components: { icons },
  data() {
    return {
      visible: false,
      showFilters: false,
    }
  },
  methods: {
    // toggleFilterBar() {
    //   console.log(this.showFilters, 'hello filter')
    //   this.showFilters = !this.showFilters
    // },
  },
}
</script>
<style lang="scss" scoped>
.accordion-button {
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
