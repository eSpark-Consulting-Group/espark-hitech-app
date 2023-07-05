<template>
  <div>
    <div class="d-block my-3">
      <div class="custom-control custom-radio">
        <input
          id="credit"
          name="paymentMethod"
          type="radio"
          class="custom-control-input"
          checked=""
          required=""
          @change="onChange($event)"
        />
        <label class="custom-control-label" for="credit">Credit card</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          id="debit"
          name="paymentMethod"
          type="radio"
          class="custom-control-input"
          required=""
          @change="onChange($event)"
        />
        <label class="custom-control-label" for="debit">Debit card</label>
      </div>
      <div class="custom-control custom-radio">
        <input
          id="paypal"
          name="paymentMethod"
          type="radio"
          class="custom-control-input"
          required=""
          @change="onChange($event)"
        />
        <label class="custom-control-label" for="paypal">PayPal</label>
      </div>
    </div>
    <div v-if="selectedPaymentMethod === 'paypal'">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="cc-name">Email</label>
          <input
            type="text"
            class="form-control"
            id="cc-name"
            placeholder=""
            required=""
          />

          <div class="invalid-feedback">email is required</div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="cc-name">Name on card</label>
          <input
            type="text"
            class="form-control"
            id="cc-name"
            placeholder=""
            required=""
          />
          <small class="text-muted">Full name as displayed on card</small>
          <div class="invalid-feedback">Name on card is required</div>
        </div>
        <div class="col-md-6 mb-3">
          <label for="cc-number">Credit card number</label>
          <input
            type="text"
            class="form-control"
            id="cc-number"
            placeholder=""
            required=""
          />
          <div class="invalid-feedback">Credit card number is required</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 mb-3">
          <label for="cc-expiration">Expiration</label>
          <input
            type="text"
            class="form-control"
            id="cc-expiration"
            placeholder=""
            required=""
          />
          <div class="invalid-feedback">Expiration date required</div>
        </div>
        <div class="col-md-3 mb-3">
          <label for="cc-cvv">CVV</label>
          <input
            type="text"
            class="form-control"
            id="cc-cvv"
            placeholder=""
            required=""
          />
          <div class="invalid-feedback">Security code required</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPaymentMethod: 'credit',
      paymentMethod: 'stripe',
      cartTotal: 1000,
      paypal: {
        sandbox: 'Your_Sendbox_Key',
      },
      environment: 'sandbox',
      button_style: {
        label: 'checkout',
        size: 'medium', // small | medium | large | responsive
        shape: 'pill', // pill | rect
        color: 'blue', // gold | blue | silver | black
      },
    }
  },
  watch: {
    paymentMethod: function () {
      this.$emit('changePaymentMethod', this.paymentMethod)
    },
  },
  methods: {
    onChange(event) {
      console.log('Payment Method: ' + event.target.id)
      this.selectedPaymentMethod = event.target.id
    },
    getamt() {
      return this.cartTotal.toString()
    },
    onPaymentComplete: function (data) {
      this.$store.dispatch('cart/createOrder', {
        product: this.cart,
        userDetail: this.user,
        token: data.orderID,
        amt: this.cartTotal,
      })
      this.$router.push('/page/order-success')
    },
  },
}
</script>
<style scoped></style>
