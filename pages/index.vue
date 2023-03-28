<template>
  <div>
    <Electronic />
  </div>
</template>

<script>
import Electronic from './Home/ElectronicStore/index.vue'
export default {
  components: {
    Electronic,
  },
  head() {
    return {
      title: 'Electronic Store',
    }
  },
}
</script>
