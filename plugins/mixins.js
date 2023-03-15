import Vue from 'vue'
import { mapActions } from 'vuex'

Vue.mixin({
  methods: {
    ...mapActions({
      setBreadcrumbs: 'breadcrumbs/setBreadcrumbs',
    }),
  },
})
