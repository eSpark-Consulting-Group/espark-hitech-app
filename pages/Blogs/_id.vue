<template>
  <layout :offer-code="offerCode">
    <Breadcrumb pageName="Blog" parent="Blog" />
    <!-- blogs -->
    <BlogDetails />
  </layout>
</template>

<script>
import layout from '../../layouts/layout.vue'

import Breadcrumb from '../../components/Section/Elements/HeaderElements/Breadcrumb.vue'
import BlogDetails from '../../components/Section/Elements/Blog/BlogDetailsPage/BlogDetails.vue'
export default {
  components: {
    layout,
    Breadcrumb,
    BlogDetails,
  },
  head() {
    return {
      title: 'Blog Details',
    }
  },
  data() {
    return {
      offerCode: 'DEF4526',
    }
  },
}
</script>
