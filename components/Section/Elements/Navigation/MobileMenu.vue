<template>
  <div class="mobile-menu d-sm-none">
    <ul>
      <li v-for="(row, i) in menuList" :key="i">
        <nuxt-link
          :to="row.path"
          :class="$route.path === row.path ? 'active' : ''"
        >
          <icons :name="row.icon" color="gray" size="sm" />
          <span>{{ row.name }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import icons from '../../../../assets/icons.vue'
export default {
  components: {
    icons,
  },
  data() {
    return {
      menuList: [
        {
          path: '/',
          name: 'Home',
          icon: 'home',
        },
        {
          path: '/shop',
          name: 'Category',
          icon: 'bars',
        },
        {
          path: '/cart',
          name: 'Cart',
          icon: 'shopping-bag',
        },
        {
          path: '/wishlist',
          name: 'Wishlist',
          icon: 'heart-solid',
        },
        {
          path: '/account',
          name: 'Account',
          icon: 'user-solid',
        },
      ],
    }
  },
  methods: {
    openCategory() {
      //   this.$store.dispatch('clickEvents/toggleCategoryMobileMenu')
    },
  },
}
</script>
<style lang="scss" scoped>
.mobile-menu {
  ul {
    li {
      a {
        display: flex;
        flex-direction: column;
        color: gray;
      }
      :deep .active {
        color: var(--theme-color);
        svg {
          fill: var(--theme-color);
        }
      }
    }
  }
}
</style>
