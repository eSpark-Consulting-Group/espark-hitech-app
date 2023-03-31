<template>
  <div>
    <orderDetails />
  </div>
</template>

<script>
import orderDetails from '../../components/Section/Elements/OrderSuccess/orderDetails.vue'

export default {
  components: {
    orderDetails,
  },
  head() {
    return {
      title: 'Order Success',
    }
  },
  created() {
    this.setOrderView({
      OrderView: true,
    })
  },
}
</script>
