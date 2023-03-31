<template>
  <section class="section-b-space">
    <div class="container">
      <div class="row">
        <orderTrackingTop />
        <orderTrackingBottom />
      </div>
    </div>
  </section>
</template>

<script>
import orderTrackingTop from '../../components/Section/Elements/OrderTracking/orderTrackingTop.vue'
import orderTrackingBottom from '../../components/Section/Elements/OrderTracking/orderTrackingBottom.vue'

export default {
  components: {
    orderTrackingTop,
    orderTrackingBottom,
  },
  head() {
    return {
      title: 'Order Tracking',
    }
  },
  created() {
    this.setBreadcrumbs({
      pageParent: 'Order Tracking',
      pageName: 'Order Tracking',
    })
  },
}
</script>
