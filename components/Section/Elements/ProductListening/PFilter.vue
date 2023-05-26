<template>
  <div class="m-2">
    <!-- <ul class="category-list list-inline text-center align-items-center">
      <li v-for="(item, i) in new Set(items)" :key="i">
        <div class="form-check ps-0 custome-form-check">
          <input class="checkbox_animated check-it" type="checkbox" />
          <label class="form-check-label">{{ item }}</label>
          <p class="font-light">
            ({{ items.filter((r) => r == item).length }})
          </p>
        </div>
      </li>
    </ul> -->
    <ul class="list-group">
      <li class="list-group-item">
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          aria-label="..."
        />
        First checkbox
      </li>
      <li class="list-group-item">
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          aria-label="..."
        />
        Second checkbox
      </li>
      <li class="list-group-item">
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          aria-label="..."
        />
        Third checkbox
      </li>
      <li class="list-group-item">
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          aria-label="..."
        />
        Fourth checkbox
      </li>
      <li class="list-group-item">
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          aria-label="..."
        />
        Fifth checkbox
      </li>
    </ul>
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
.category-list {
  display: block;
}
</style>
