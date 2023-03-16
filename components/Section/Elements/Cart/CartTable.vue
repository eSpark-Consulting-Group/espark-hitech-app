<template>
  <div class="col-sm-12">
    <div class="table-responsive mt-4">
      <table class="table cart-table">
        <thead>
          <tr class="table-head">
            <th scope="col">image</th>
            <th scope="col">product name</th>
            <th scope="col">price</th>
            <th scope="col">quantity</th>
            <th scope="col">total</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody v-if="cartItems">
          <tr v-for="(item, index) in cartItems" :key="index">
            <td>
              <a>
                <!-- <img :src="getImageUrl(item.images[0].src)" alt="" /> -->
                <img :src="item.image" alt="" />
              </a>
            </td>
            <td>
              <nuxt-link :to="'/' + item.id">{{ item.itemName }}</nuxt-link>
              <div class="mobile-cart-content row">
                <div class="col">
                  <div class="qty-box">
                    <div class="input-group">
                      <input
                        type="number"
                        name="quantity"
                        class="form-control input-number"
                        :value="item.quantity"
                        min="1"
                        :max="item.inStock"
                      />
                      <!-- @blur.prevent="changeItemQuantity($event, item.id)" -->
                      <!-- @change="changeItemQuantity($event, item.id)" -->
                    </div>
                  </div>
                </div>
                <div class="col">
                  <h2>
                    <!-- {{ selectedCurrencySymbol
                    }}{{ (item.price * item.quantity).toFixed(2) }} -->
                    {{ (item.price * item.quantity).toFixed(2) }}
                  </h2>
                </div>
                <div class="col">
                  <h2 class="td-color">
                    <!-- @click.prevent="removeItem(item.id)" -->
                    <a href="javascript:void(0)">
                      <i class="fas fa-times"></i>
                    </a>
                  </h2>
                </div>
              </div>
            </td>
            <td>
              <h2>{{ item.price }}</h2>
            </td>
            <td>
              <div class="qty-box">
                <div class="input-group">
                  <input
                    type="number"
                    name="quantity"
                    class="form-control input-number"
                    min="1"
                    :max="item.inStock"
                    :value="item.quantity"
                  />
                  <!-- @change="changeItemQuantity($event, item.id)" -->
                </div>
              </div>
            </td>
            <td>
              <h2 class="td-color">
                <!-- {{ selectedCurrencySymbol}} -->
                {{ (item.price * item.quantity).toFixed(2) }}
              </h2>
            </td>
            <td>
              <!-- @click.prevent="removeItem(item.id)" -->
              <a href="javascript:void(0)">
                <i class="fas fa-times"></i>
              </a>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="6">Cart is Empty</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  ssr: false,
  computed: {
    ...mapGetters({
      cartItems: 'cart/getCartItems',
    }),
  },
}
</script>
