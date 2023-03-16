<template>
  <div>
    <CartTable />
    <div class="col-12 mt-md-5 mt-4">
      <div class="row">
        <div class="col-sm-7 col-5 order-1">
          <div
            class="left-side-button text-end d-flex d-block justify-content-end"
          >
            <!-- @click.prevent="clearCartItems" -->
            <a
              class="text-decoration-underline theme-color d-block text-capitalize"
            >
              <!-- {{ $const.clearallitems }} -->
              Clear Cart Items
            </a>
          </div>
        </div>
        <div class="col-sm-5 col-7">
          <div class="left-side-button float-start">
            <nuxt-link
              to="/"
              class="btn btn-solid-default btn fw-bold mb-0 ms-0"
            >
              <i class="fas fa-arrow-left"></i>
              Continue Shopping
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="cart-checkout-section" v-if="cartItems.length != 0"> -->
    <div class="cart-checkout-section">
      <div class="row g-4">
        <div class="col-lg-4 col-sm-6">
          <div class="promo-section">
            <form class="row g-3">
              <div class="col-7">
                <input
                  type="text"
                  class="form-control"
                  id="number"
                  placeholder="Coupon Code"
                />
              </div>
              <div class="col-5">
                <button class="btn btn-solid-default rounded btn">
                  ApplyCoupon
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- <div class="col-lg-4 col-sm-6" v-if="cartItems.length != 0"> -->
        <div class="col-lg-4 col-sm-6">
          <div class="checkout-button">
            <!-- @click.prevent="$router.push('/page/checkout')" -->
            <a class="btn btn-solid-default btn fw-bold">
              <!-- {{ $const.CheckOut }}  -->
              Cheeeek
              <i class="fas fa-arrow-right ms-1"></i>
            </a>
          </div>
        </div>

        <!-- <div class="col-lg-4" v-if="cartItems.length != 0"> -->
        <div class="col-lg-4">
          <div class="cart-box">
            <div class="cart-box-details">
              <div class="total-details">
                <div class="top-details">
                  <!-- <h3>{{ $const.CartTotals }}</h3> -->
                  <h3>tootl</h3>
                  <h6>
                    <!-- {{ $const.TotalMRP }} -->
                    Total MRP:
                    <!-- <span>{{ selectedCurrencySymbol }}{{ cartTotal }}</span> -->
                  </h6>
                  <h6>
                    <!-- {{ $const.CouponDiscount }} -->
                    disscount
                    <!-- <span>-{{ selectedCurrencySymbol }}25.00</span> -->
                  </h6>
                  <h6>
                    <!-- {{ $const.ConvenienceFee }} -->
                    ConvenienceFee
                    <span>
                      <!-- <del>{{ selectedCurrencySymbol }}25.00</del> -->
                      <del>25.00</del>
                    </span>
                  </h6>
                </div>
                <div class="bottom-details">
                  <nuxt-link to="/page/checkout">
                    <!-- {{ $const.ProcessCheckout }} -->
                    ProcessCheckout
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartTable from './CartTable'
export default {
  components: { CartTable },
}
</script>
