<template>
  <div class="row g-4">
    <div class="col-md-6">
      <ValidationProvider
        rules="required"
        v-slot="{ errors }"
        name="First name"
        class="d-block"
      >
        <label for="fname" class="form-label">First Name</label>
        <input
          type="text"
          class="form-control"
          v-model="information.firstName"
          id="fname"
          placeholder="Enter First Name"
        />
        <span class="validate-error text-danger" v-if="errors[0]">{{
          errors[0]
        }}</span>
      </ValidationProvider>
    </div>
    <div class="col-md-6">
      <ValidationProvider
        rules="required"
        v-slot="{ errors }"
        name="Last name"
        class="d-block"
      >
        <label for="lname" class="form-label">Last Name</label>
        <input
          type="text"
          class="form-control"
          v-model="information.lastName"
          id="lname"
          placeholder="Enter Last Name"
        />
        <span class="validate-error text-danger" v-if="errors[0]">{{
          errors[0]
        }}</span>
      </ValidationProvider>
    </div>
    <div class="col-md-6">
      <ValidationProvider
        class="d-block"
        rules="required"
        v-slot="{ errors }"
        name="username"
      >
        <label for="lname" class="form-label">Username</label>
        <div class="input-group">
          <span class="input-group-text" id="basic-addon1">@</span>
          <input
            type="text"
            class="form-control"
            v-model="information.userName"
            placeholder="Username"
            required
          />
        </div>
        <span class="validate-error text-danger" v-if="errors[0]">{{
          errors[0]
        }}</span>
      </ValidationProvider>
    </div>

    <div class="col-md-6">
      <ValidationProvider
        rules="required|email"
        v-slot="{ errors }"
        name="Email"
        class="d-block"
      >
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          v-model="information.emailAddress"
          id="email"
          placeholder="example@example.com"
          required
        />
        <span class="validate-error text-danger" v-if="errors[0]">{{
          errors[0]
        }}</span>
      </ValidationProvider>
    </div>

    <div class="col-md-6">
      <ValidationProvider
        class="d-block"
        rules="required"
        v-slot="{ errors }"
        name="Address"
      >
        <label for="address" class="form-label">Address</label>
        <input
          type="text"
          class="form-control"
          v-model="information.address1"
          id="address"
          aria-describedby="emailHelp"
          placeholder="1234 Main St"
          required
        />
        <span class="validate-error text-danger" v-if="errors[0]">{{
          errors[0]
        }}</span>
      </ValidationProvider>
      <div class="invalid-feedback">
        Please enter a valid email address for shipping updates.
      </div>
    </div>

    <div class="col-md-6">
      <label for="address2" class="form-label">Address 2</label>
      <input
        type="text"
        class="form-control"
        v-model="information.address2"
        id="address2"
        aria-describedby="emailHelp"
        placeholder="1234 Main St"
        required
      />
    </div>

    <div class="col-md-5">
      <label for="validationCustom04" class="form-label">Country</label>
      <select
        class="form-select custome-form-select"
        id="validationCustom04"
        required
        v-model="information.country"
      >
        <option selected disabled value="">{{ Choose }}</option>
        <option v-for="(country, index) in CountryArr" :key="index">
          {{ country }}
        </option>
      </select>
      <div class="invalid-feedback">Please select a valid country.</div>
    </div>
    <div class="col-md-4">
      <label for="validationCustom04" class="form-label">{{ State }}</label>
      <select
        required
        class="form-select custome-form-select"
        v-model="information.state"
        id="validationCustom05"
      >
        <option selected disabled value="">{{ Choose }}</option>
        <option v-for="(state, index) in StateArr" :key="'a' + index">
          {{ state }}
        </option>
      </select>
      <div class="invalid-feedback">Please provide a valid state.</div>
    </div>
    <div class="col-md-3">
      <ValidationProvider
        rules="required"
        class="d-block"
        v-slot="{ errors }"
        name="Postal Code"
      >
        <label for="zip" class="form-label">Zip</label>
        <input
          type="text"
          class="form-control"
          v-model="information.zipCode"
          id="zip"
          aria-describedby="emailHelp"
          placeholder="1234 Main St"
        />
        <span class="validate-error text-danger" v-if="errors[0]">{{
          errors[0]
        }}</span>
      </ValidationProvider>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full.esm'
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  computed: {
    // ...mapState({
    //   savedUserInfo: (state) => state.cart.userInfo,
    // }),
  },
  data() {
    return {
      information: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        address1: '',
        address2: '',
        country: '',
        state: '',
        zipCode: '',
        userName: '',
      },
      infoValid: false,
      Country: 'Country',
      CountryArr: [
        'United States',
        'India',
        'America',
        'South America',
        'Dubai',
        'Hong Kong',
        'Indonesia',
        'Pakistan',
        'Saudi Arabia',
        'China',
      ],
      Choose: 'Choose...',
      State: 'State',
      StateArr: [
        'Gujarat',
        'Maharashtra',
        'Goa',
        'Dehli',
        'Madya Pradesh',
        'Uttar Pradesh',
        'Himacal Pradesh',
        'Rajesthan',
      ],
    }
  },
  watch: {
    information: {
      handler() {
        if (
          this.information.firstName.length != 0 &&
          this.information.lastName.length != 0 &&
          this.information.emailAddress.length != 0 &&
          this.information.address1.length != 0 &&
          this.information.country.length != 0 &&
          this.information.state.length != 0 &&
          this.information.zipCode.length != 0 &&
          this.information.userName.length != 0
        )
          this.infoValid = true
        else this.infoValid = false
      },
      deep: true,
    },
    infoValid: function () {
      var customerInformation = {
        userInfo: this.information,
        infoValid: this.infoValid,
      }
      this.$emit('isFormValid', customerInformation)
    },
    savedUserInfo: {
      handler() {
        if (this.$store.state.cart.userInfo)
          this.information = this.$store.state.cart.userInfo
      },
      deep: true,
    },
  },
  mounted() {
    // if (this.$store.state.cart.userInfo.length === 0)
    //   this.information = this.$store.state.cart.userInfo;
  },
  updated() {
    // if (this.$store.state.cart.userInfo.length === 0)
    //   this.information = this.$store.state.cart.userInfo;
  },
  created() {
    if (this.$store.state.cart.cartItems.length === 0)
      this.$router.push('/cart')
  },
}
</script>
