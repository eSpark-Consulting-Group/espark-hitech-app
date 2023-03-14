<template>
  <section class="masonary-blog-section">
    <div class="container">
      <div class="row g-4">
        <!-- <blogRight />
        <blog-left /> -->
        <BlogDetailsRight />
        <BlogsLeftSection />
      </div>
    </div>
  </section>
</template>

<script>
// import blogRight from "./blogRight.vue";
// import blogLeft from "~/layout/common/blogComponents/blogLeftSection1.vue";
import BlogDetailsRight from './BlogDetailsRight.vue'
import BlogsLeftSection from '../BlogsLeftSection.vue'
export default {
  components: { BlogDetailsRight, BlogsLeftSection },
}
</script>

<style lang="scss" scoped></style>
