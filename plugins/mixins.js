import Vue from 'vue'
import { mapActions } from 'vuex'

Vue.mixin({
  methods: {
    ...mapActions({
      setBreadcrumbs: 'breadcrumbs/setBreadcrumbs',
    }),
    redirect(path) {
      this.$router.push(path)
    },
    getImageUrl(path) {
      return require('@/assets/images/' + path)
    },
  },
})
