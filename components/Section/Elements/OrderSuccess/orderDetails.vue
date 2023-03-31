<template>
  <section class="section-b-space cart-section order-details-table">
    <div class="container">
      <div class="title title1 title-effect mb-1 title-left">
        <h2 class="mb-3">{{ OrderDetail }}</h2>
      </div>
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="table-responsive">
            <table class="table cart-table table-borderless">
              <tbody>
                <tr class="table-order">
                  <td>
                    <a href="javascript:void(0)">
                      <img
                        src="~assets/images/fashion/instagram/1.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </td>
                  <td>
                    <p>Product Name</p>
                    <h5>Outwear & Coats</h5>
                  </td>
                  <td>
                    <p>Quantity</p>
                    <h5>1</h5>
                  </td>
                  <td>
                    <p>Price</p>
                    <h5>$63.54</h5>
                  </td>
                </tr>

                <tr class="table-order">
                  <td>
                    <a href="javascript:void(0)">
                      <img
                        src="~assets/images/fashion/instagram/2.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </td>
                  <td>
                    <p class="font-light">Product Name</p>
                    <h5>Jacket & Cap</h5>
                  </td>
                  <td>
                    <p class="font-light">Quantity</p>
                    <h5>5</h5>
                  </td>
                  <td>
                    <p class="font-light">Price</p>
                    <h5>$57.10</h5>
                  </td>
                </tr>

                <tr class="table-order">
                  <td>
                    <a href="javascript:void(0)">
                      <img
                        src="~assets/images/fashion/instagram/3.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                  </td>
                  <td>
                    <p class="font-light">Product Name</p>
                    <h5>New Fashion</h5>
                  </td>
                  <td>
                    <p class="font-light">Quantity</p>
                    <h5>1</h5>
                  </td>
                  <td>
                    <p class="font-light">Price</p>
                    <h5>$63.25</h5>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr class="table-order">
                  <td colspan="3">
                    <h5 class="font-light">Subtotal :</h5>
                  </td>
                  <td>
                    <h4>$55.00</h4>
                  </td>
                </tr>

                <tr class="table-order">
                  <td colspan="3">
                    <h5 class="font-light">Shipping :</h5>
                  </td>
                  <td>
                    <h4>$12.00</h4>
                  </td>
                </tr>

                <tr class="table-order">
                  <td colspan="3">
                    <h5 class="font-light">Tax(GST) :</h5>
                  </td>
                  <td>
                    <h4>$10.00</h4>
                  </td>
                </tr>

                <tr class="table-order">
                  <td colspan="3">
                    <h4 class="theme-color fw-bold">Total Price :</h4>
                  </td>
                  <td>
                    <h4 class="theme-color fw-bold">$6935.00</h4>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="order-success">
            <div class="row g-4">
              <div class="col-sm-6">
                <h4>{{ summery }}</h4>
                <ul class="order-details">
                  <li>{{ OrderID }}</li>
                  <li>{{ OrderDate }}</li>
                  <li>{{ OrderTotal }}</li>
                </ul>
              </div>

              <div class="col-sm-6">
                <h4>{{ shippingaddress }}</h4>
                <ul class="order-details">
                  <li>{{ Add1 }}</li>
                  <li>{{ Add2 }}</li>
                  <li>{{ Add3 }}</li>
                </ul>
              </div>

              <div class="col-12">
                <div class="payment-mode">
                  <h4>{{ paymentmethod }}</h4>
                  <p>
                    {{ PayonDelivery }}
                  </p>
                </div>
              </div>

              <div class="col-md-12">
                <div class="delivery-sec">
                  <h3>
                    {{ expecteddate }} <span>{{ fulldate }}</span>
                  </h3>
                  <nuxt-link to="/order_tracking">{{ trackorder }}</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      OrderDetail: 'Order Details',
      summery: 'summery',
      OrderID: 'Order ID: 5563853658932',
      OrderDate: 'Order Date: October 22, 2018',
      OrderTotal: 'Order Total: $907.28',
      shippingaddress: 'shipping address',
      Add1: 'Gerg Harvell',
      Add2: '568, Suite Ave.',
      Add3: 'Austrlia, 235153 Contact No. 48465465465',
      paymentmethod: 'payment method',
      PayonDelivery:
        'Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net banking acceptance subject to device availability.',
      expecteddate: 'expected date of delivery:',
      fulldate: 'october 22, 2018',
      trackorder: 'track order',
    }
  },
}
</script>
