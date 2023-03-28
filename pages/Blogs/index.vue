<template>
  <section
    id="portfolio"
    class="left-sidebar-section masonary-blog-section section-b-space"
  >
    <div class="container">
      <div class="row g-4">
        <BlogsSearch />
        <BlogsListing />
      </div>
    </div>
  </section>
</template>

<script>
import BlogsSearch from '../../components/Section/Elements/Blog/BlogsSearch.vue'
import BlogsListing from '../../components/Section/Elements/Blog/BlogsListing.vue'
export default {
  head() {
    return {
      title: 'Blog',
    }
  },
  components: { BlogsSearch, BlogsListing },
  created() {
    this.setBreadcrumbs({
      pageParent: 'Blogs',
      pageName: 'Blogs',
    })
  },
}
</script>
