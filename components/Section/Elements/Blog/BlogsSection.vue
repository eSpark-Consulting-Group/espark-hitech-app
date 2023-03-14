<template>
  <section
    id="portfolio"
    class="left-sidebar-section masonary-blog-section section-b-space"
  >
    <div class="container">
      <div class="row g-4">
        <BlogsLeftSection />
        <BlogsRightSection />
      </div>
    </div>
  </section>
</template>

<script>
// import blogLeft from "~/layout/common/blogComponents/blogLeftSection1.vue";
import BlogsRightSection from './BlogsRightSection.vue'
import BlogsLeftSection from './BlogsLeftSection.vue'
export default {
  components: {
    // blogLeft,
    BlogsRightSection,
    BlogsLeftSection,
  },
}
</script>
