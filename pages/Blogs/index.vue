<template>
  <layout :offer-code="offerCode">
    <Breadcrumb pageName="Blogs" parent="Blogs" />
    <!-- blogs -->
    <BlogsSection />
  </layout>
</template>

<script>
import layout from '../../layouts/layout.vue'
import Breadcrumb from '../../components/Section/Elements/HeaderElements/Breadcrumb.vue'
import BlogsSection from '../../components/Section/Elements/Blog/BlogsSection.vue'
export default {
  components: {
    layout,
    Breadcrumb,
    BlogsSection,
  },
  head() {
    return {
      title: 'Blog',
    }
  },
  data() {
    return {
      offerCode: 'DEF4526',
    }
  },
}
</script>
