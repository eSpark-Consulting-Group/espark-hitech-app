<template>
  <div class="row" style="padding: 0 !important">
    <div class="col-lg-8 cart">
      <div class="title">
        <div class="row">
          <div class="col">
            <h2 class="flex justify-content-center">Shopping Cart</h2>
          </div>
        </div>
      </div>
      <div class="row table-head">
        <div class="flex d-flex justify-content-start align-items-center mb-2">
          <div class="col-md-2 col-lg-2 col-xl-2 justify-content-start">
            <div class="row text-muted"><h3>Picture</h3></div>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-3">
            <div class="row text-muted"><h3>Product</h3></div>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2">
            <div class="row text-muted"><h3>Price</h3></div>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2">
            <div class="qty-box">
              <div class="input-group">
                <div class="row text-muted"><h3>Quantity</h3></div>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2">
            <div class="row text-muted"><h3>Total</h3></div>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-1">
            <div class="row text-muted"><h3></h3></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="main row d-flex justify-content-between align-items-center border-top border-bottom"
          v-for="(item, index) in cartItems"
          :key="index"
        >
          <div
            class="flex d-flex justify-content-center align-items-center col-md-2 col-lg-2 col-xl-2"
          >
            <img class="img-fluid rounded-3" :src="item.image" alt="" />
          </div>
          <div class="flex justify-content-start col-md-2 col-lg-2 col-xl-3">
            <div class="mobile-view">
              <div class="row table-row text-muted mb-2"><h3>Product</h3></div>
              <div>
                <div class="row text-muted">
                  <h3>{{ item.brand }}</h3>
                </div>
                <div class="row text-muted">
                  <h4>{{ item.itemName }}</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2">
            <div class="mobile-view">
              <div class="row table-row text-muted mb-2"><h3>Price</h3></div>
              <div class="text-muted theme-color">
                <h4>&euro; {{ (item.price * item.quantity).toFixed(2) }}</h4>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2">
            <div class="mobile-view">
              <div class="row table-row text-muted mb-2"><h3>Quantity</h3></div>
              <div class="qty-box">
                <div class="input-group">
                  <input
                    type="number"
                    name="quantity"
                    class="form-control input-number"
                    :value="item.quantity"
                    min="1"
                    :max="item.inStock"
                    style="margin-bottom: 0"
                  />
                  <!-- @blur.prevent="changeItemQuantity($event, item.id)" -->
                  <!-- @change="changeItemQuantity($event, item.id)" -->
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2">
            <div class="mobile-view">
              <div class="row table-row text-muted mb-2"><h3>Total</h3></div>
              <div class="text-muted theme-color">
                <h4>&euro; {{ (item.price * item.quantity).toFixed(2) }}</h4>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-1">
            <div class="mobile-view">
              <div class="row table-row text-muted mb-2"><h3>Action</h3></div>
              <div class="mobile-icon">
                <!-- <span class="close text-danger">&#10005;</span> -->

                <icons
                  name="trash"
                  size="sm"
                  color=""
                  class="close text-danger"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="back-to-shop">
        <div class="row">
          <div class="col">
            <nuxt-link to="/"
              ><span class="text-muted theme-color"
                >&leftarrow; Back to shop</span
              ></nuxt-link
            >
          </div>

          <div
            class="col flex d-flex justify-content-end text-right align-item-end"
          >
            <!-- @click.prevent="clearCartItems" -->
            <a class="text-decoration-underline text-muted theme-color">
              <!-- {{ $const.clearallitems }} -->
              Clear Cart Items
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-4 summary">
      <div class="mb-5">
        <h3><b>Summary</b></h3>
      </div>

      <div class="row">
        <div class="col" style="padding-left: 0"><h4>ITEMS</h4></div>
        <div class="col text-right"><h4>&euro; Price</h4></div>
      </div>
      <hr />
      <div v-for="(item, index) in items" :key="index" class="row mb-1">
        <div class="col" style="padding-left: 0">
          <h5 class="font-light">{{ item.quantity }}</h5>
        </div>
        <div class="col text-right">
          <h5 class="font-light">&euro; {{ item.unitPrice }}</h5>
        </div>
      </div>
      <!-- <form>
        <p>SHIPPING</p>
        <select>
          <option class="text-muted">Standard-Delivery- &euro;5.00</option>
        </select>
      </form> -->
      <div
        class="row"
        style="border-top: 1px solid rgba(0, 0, 0, 0.1); padding: 2vh 0"
      >
        <div class="col" style="padding-left: 0">
          <h4 class="theme-color fw-bold">TOTAL PRICE</h4>
        </div>
        <div class="col text-right">
          <h4 class="theme-color fw-bold">&euro; 137.00</h4>
        </div>
      </div>
      <nuxt-link to="/checkout">
        <Button class="btn">Checkout </Button>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CartTable from './CartTable'
import icons from '../../../../assets/icons.vue'
export default {
  components: { CartTable, icons },
  data() {
    return {
      items: [
        { quantity: 'p1', unitPrice: 10, extendedPrice: 20 },
        { quantity: 'p2', unitPrice: 15, extendedPrice: 45 },
        { quantity: 'p3', unitPrice: 8, extendedPrice: 8 },
        // Add more dummy data items as needed
      ],
    }
  },
  computed: {
    ...mapGetters({
      cartItems: 'cart/getCartItems',
    }),
  },
}
</script>

<style lang="scss" scoped>
.mobile-icon :hover {
  cursor: pointer;
}

.text-danger :hover {
  fill: #332d2d !important;
}
.text-muted {
  text-align: left;
}

.table-head {
  white-space: nowrap;
}
@media (min-width: 767px) and (max-width: 1200px) {
  h3 {
    font-size: 1rem !important;
    white-space: nowrap;
  }
  h4 {
    font-size: 0.8rem !important;
  }
  .mobile-view .row > * {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
}
@media (max-width: 767px) {
  img {
    width: 14rem !important;
  }
  .row {
    --bs-gutter-x: 0.5rem;
  }
  .text-muted {
    text-align: right;
  }
  .mobile-view {
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    margin-top: 2rem;
  }
}
@media screen and (max-width: 767px) {
  .table-head {
    display: none;
  }
}
@media screen and (min-width: 767px) {
  .table-row {
    display: none;
  }
}
.cart-section .cart-checkout-section {
  margin-top: 22px !important;
}

.cart-box {
  background: #ffff !important;
}

/* .input-group {
  width: 20% !important;
} */

.img {
  padding: calc(2px + 6 * (100vw - 320px) / 1600);
}

.title {
  margin-bottom: 5vh;
}
.card {
  margin: auto;
  max-width: 950px;
  width: 90%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 1rem;
  border: transparent;
}
@media (max-width: 767px) {
  .card {
    margin: 3vh auto;
  }
}
.cart {
  background-color: #fff;
  padding: 4vh 5vh;
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 1rem;
}
@media (max-width: 768px) {
  .cart {
    padding: 4vh;
    border-bottom-left-radius: unset;
    border-top-right-radius: 1rem;
  }
}
.summary {
  background-color: #eff2f7;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 4vh;
  color: rgb(65, 65, 65);
}
@media (max-width: 767px) {
  .summary {
    border-top-right-radius: unset;
    border-bottom-left-radius: 1rem;
  }
}
.summary .col-2 {
  padding: 0;
}
.summary .col-10 {
  padding: 0;
}
.row {
  margin: 0;
  /* padding: 0 !important; */
}
.title b {
  font-size: 1.5rem;
}
.main {
  margin: 0;
  padding: 2vh 0;
  width: 100%;
}
.col-2,
.col {
  padding: 0 1vh;
}
a {
  padding: 0 1vh;
}
.close {
  margin-left: auto;
  font-size: 1.5rem;
}
img {
  width: 3.5rem;
}
.back-to-shop {
  margin-top: 4.5rem;
}
h5 {
  margin-top: 0.2rem;
}
hr {
  margin-top: 1.25rem;
}
form {
  padding: 2vh 0;
}
select {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1.5vh 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}
input {
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
}
input:focus::-webkit-input-placeholder {
  color: transparent;
}
.btn {
  background-color: #01b7a1;
  border-color: #01bea8;
  color: white;
  width: 100%;
  font-size: 0.7rem;
  margin-top: 4vh;
  padding: 1vh;
  border-radius: 0;
}
.btn :focus {
  box-shadow: none;
  outline: none;
  box-shadow: none;
  color: white;
  -webkit-box-shadow: none;
  -webkit-user-select: none;
  transition: none;
  background-color: #008d7d;
}
.btn :hover {
  color: white;
  background-color: #008d7d;
}
a {
  color: black;
}
a:hover {
  color: black;
  text-decoration: none;
}
#code {
  background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.253),
      rgba(255, 255, 255, 0.185)
    ),
    url('https://img.icons8.com/small/16/000000/long-arrow-right.png');
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: center;
}
</style>
