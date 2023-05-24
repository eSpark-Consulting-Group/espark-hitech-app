<template>
  <section class="masonary-blog-section">
    <div class="container">
      <div class="row g-4 mb-4">
        <BlogsSearch />
        <BlogDetail />
      </div>
    </div>
  </section>
</template>

<script>
import BlogsSearch from '../../components/Section/Elements/Blog/BlogsSearch.vue'
import BlogDetail from '../../components/Section/Elements/Blog/BlogDetail.vue'
export default {
  head() {
    return {
      title: 'Blog Details',
    }
  },
  components: { BlogsSearch, BlogDetail },
  created() {
    console.log('blog created')
    this.setBreadcrumbs({
      pageParent: 'Blog Details',
      pageName: 'Blog Details',
    })
  },
}
</script>
