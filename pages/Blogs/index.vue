<template>
  <BlogsSection />
</template>

<script>
import BlogsSection from '../../components/Section/Elements/Blog/BlogsSection.vue'
export default {
  head() {
    return {
      title: 'Blog',
    }
  },
  components: { BlogsSection },
  created() {
    this.setBreadcrumbs({
      pageParent: 'Blogs',
      pageName: 'Blogs',
    })
  },
  data() {
    return {
      offerCode: 'DEF4526',
    }
  },
}
</script>
