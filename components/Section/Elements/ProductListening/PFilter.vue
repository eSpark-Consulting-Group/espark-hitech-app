<template>
  <div class="container-fluid accordion-body custom-container shadow mb-1">
    <div class="">
      <h5
        class="accordion-header m-2"
        id="headingOne"
        style="
          font-size: calc(12px + 2 * (100vw - 320px) / 1600) !important;
          font-weight: bold;
        "
      >
        <div style="white-space: nowrap">
          {{ title }}
        </div>
      </h5>
      <div class="line"></div>
    </div>

    <ul class="category-list mr-2 category-scroll">
      <li v-for="(item, i) in new Set(items)" :key="i">
        <div class="form-check ps-0 custome-form-check">
          <input
            class="checkbox_animated check-it"
            type="checkbox"
            v-model="localSelectedItems"
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
    selectedItems: {
      type: Array,
      default: () => [],
    },
  },
  components: { icons },
  data() {
    return {
      selected: null,
      visible: false,
      showFilters: false,
      localSelectedItems: this.selectedItems.slice(),
    }
  },
  computed: {
    selectedItemsCount() {
      // console.log(this.selectedItems.length)

      return this.localSelectedItems.length
    },
  },
  watch: {
    localSelectedItems(newValue) {
      // console.log('Selected Items:', newValue)
      this.$emit('update:selectedItems', newValue) // Emit an event to update the prop value
      this.$emit('submit', newValue)
    },
    selectedItems(newValue) {
      if (
        JSON.stringify(newValue) !== JSON.stringify(this.localSelectedItems)
      ) {
        this.localSelectedItems = newValue.slice() // Update local property when prop changes
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.custom-container {
  background: #ffffff !important;
  border-radius: 5px;
  border: 1px solid #a7a7a7;
  min-width: 10rem;
}
.category-list {
  padding: 0.7rem !important;
  padding-top: 0px !important;
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
.sticky-header {
  position: sticky;
  top: 0;
  background-color: #ffffff; /* Add your desired background color */
  z-index: 999; /* Adjust the z-index as needed */
}
</style>
