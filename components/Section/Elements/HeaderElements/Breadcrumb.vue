<template>
  <section class="breadcrumb-section section-b-space">
    <ul class="circles">
      <li v-for="(item, i) in imgList" :key="i">
        <img :src="getImageUrl(item)" alt="" />
      </li>
    </ul>
    <div class="container">
      <div class="row">
        <!-- breadcrumb 1 -->
        <div v-if="items.pageParent" class="col-12 text-capitalize">
          <h3>{{ items.pageParent }}</h3>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <nuxt-link to="/">
                  <i class="fas fa-home"></i>
                </nuxt-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {{ items.pageName }}
              </li>
            </ol>
          </nav>
        </div>
        <!-- breadcrumb 2 -->
        <div v-else class="col-12 search-section">
          <h3>How can we help you?</h3>
          <div class="search-bar">
            <div class="input-group search-bar">
              <input type="search" class="form-control" placeholder="Search" />
              <button class="input-group-text" id="basic-addon3">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      imgList: [
        'breadcrumb/tester.png',
        'breadcrumb/resistor.png',
        'breadcrumb/screwdriver.png',
        'breadcrumb/soldering-iron.png',
        'breadcrumb/plier.png',
        'breadcrumb/chip.png',
        'breadcrumb/dc.png',
        'breadcrumb/diode.png',
        'breadcrumb/connector.png',
        'breadcrumb/capacitor.png',
      ],
    }
  },
  computed: {
    ...mapGetters({
      items: 'breadcrumbs/GetBreadcrumbs',
    }),
  },
}
</script>
