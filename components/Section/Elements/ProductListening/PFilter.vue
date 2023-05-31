<template>
  <div
    class="container-fluid accordion-body category-scroll custom-container shadow mb-1"
  >
    <h5 class="accordion-header m-2" id="headingOne">
      <div>
        {{ title }}
      </div>
    </h5>
    <div class="line"></div>
    <ul class="category-list mr-2">
      <li v-for="(item, i) in new Set(items)" :key="i">
        <div class="form-check ps-0 custome-form-check">
          <input
            class="checkbox_animated check-it"
            type="checkbox"
            v-model="selectedItems"
            :value="item"
          />
          <label class="form-check-label">{{ item }}</label>
          <p class="font-light"></p>
        </div>
      </li>
      <ul class="list-group"></ul>
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
      selected: null,
      visible: false,
      showFilters: false,
      selectedItems: [],
    }
  },
  computed: {
    selectedItemsCount() {
      console.log(this.selectedItems.length)

      return this.selectedItems.length
    },
  },
  watch: {
    selectedItems: {
      handler(newValue) {
        console.log('Selected Items:', newValue)
        this.$emit('submit', newValue)
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.custom-container {
  background: #ffffff !important;
  border-radius: 5px;
  border: 1px solid #a7a7a7;
}
.category-list {
  padding: 0.7rem !important;
}
.category-list li {
  display: block;
  margin: 10px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.line {
  border: 1px solid #a7a7a7;
  padding: 0 !important;
  margin: 0;
}
</style>
