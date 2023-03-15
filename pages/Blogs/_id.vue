<template>
  <BlogDetails />
</template>

<script>
import BlogDetails from '../../components/Section/Elements/Blog/BlogDetailsPage/BlogDetails.vue'
export default {
  head() {
    return {
      title: 'Blog Details',
    }
  },
  components: { BlogDetails },
  created() {
    this.setBreadcrumbs({
      pageParent: 'Blog Details',
      pageName: 'Blog Details',
    })
  },
  data() {
    return {
      offerCode: 'DEF4526',
    }
  },
}
</script>
