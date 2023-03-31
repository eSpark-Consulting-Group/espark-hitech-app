<template>
  <div>
    <section v-if="!items.OrderView" class="breadcrumb-section section-b-space">
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
                <input
                  type="search"
                  class="form-control"
                  placeholder="Search"
                />
                <button class="input-group-text" id="basic-addon3">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Order Sucess page BreadCrumb -->
    <section v-else class="pt-0">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 p-0">
            <div class="success-icon">
              <div class="main-container">
                <div class="check-container">
                  <div class="check-background">
                    <svg
                      viewBox="0 0 65 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 25L27.3077 44L58.5 7"
                        stroke="white"
                        stroke-width="13"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="check-shadow"></div>
                </div>
              </div>

              <div class="success-contain">
                <h4>{{ OrderSuccess }}</h4>
                <h5 class="font-light">
                  {{ PaymentDescription }}
                </h5>
                <h6 class="font-light">{{ TransactionID }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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
      OrderSuccess: 'Order Success',
      PaymentDescription:
        'Payment Is Successfully Processsed And Your Order Is On The Way',
      TransactionID: 'Transaction ID:267676GHERT105467',
    }
  },
  computed: {
    ...mapGetters({
      items: 'breadcrumbs/GetBreadcrumbs',
    }),
  },
}
</script>
