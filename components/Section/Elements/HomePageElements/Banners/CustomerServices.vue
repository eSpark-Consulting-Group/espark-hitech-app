<template>
  <section class="service-section" :class="serviceClasses">
    <div class="container">
      <div class="row g-4 g-sm-3">
        <div
          class="col-xl-3 col-sm-6"
          v-for="(service, index) in services"
          :key="index"
        >
          <div class="service-wrap">
            <div class="service-icon">
              <svg>
                <use
                  :xlink:href="require('@/assets/svg/icons.svg') + service.svg"
                ></use>
              </svg>
            </div>
            <div class="service-content">
              <h3 class="mb-2">{{ $t(service.service) }}</h3>
              <span class="font-light">{{ $t(service.description) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['serviceClasses'],
  data() {
    return {
      customerSvg: '#customer',
      customerServices: [
        {
          type: 'customerServices',
          children: [
            {
              service: 'PCB Design',
              description: 'Manufacturing Fabrication.',
              svg: '#customer',
            },
            {
              service: 'Electronics Projects',
              description: 'Product Designing.',
              svg: '#shop',
            },
            {
              service: 'Secured Payments',
              description: 'Shop Online - COD Available.',
              svg: '#secure-payment',
            },
            {
              service: 'Customized Projects',
              description: 'R & D Based Customized Projects.',
              svg: '#return',
            },
          ],
        },
      ],
    }
  },
  computed: {
    services() {
      // return this.$store.state.customerServices.filter(
      return this.customerServices.filter(
        (item) => item.type === 'customerServices'
      )[0].children
    },
  },
}
</script>
