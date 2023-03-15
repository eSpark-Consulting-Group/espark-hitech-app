<template>
  <div>
    <Electronic />
  </div>
</template>

<script>
// import Fashion from "./home/fashion_demo/index.vue";
import Electronic from './Home/ElectronicStore/index.vue'
export default {
  components: {
    // Fashion,
    Electronic,
  },
  head() {
    return {
      title: 'Electronic Store',
    }
  },
}
</script>
