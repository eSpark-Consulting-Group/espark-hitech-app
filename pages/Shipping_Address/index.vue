<template>
  <section class="section-b-space">
    <div class="container">
      <div class="row g-4">
        <div class="col-12">
          <span> All fields marked with (*) are required </span>
        </div>
        <div class="col-12 col-md-8">
          <ValidationObserver v-slot="{ invalid }" class="w-100">
            <div class="row">
              <div class="col-md-6">
                <ValidationProvider
                  rules="required|email"
                  v-slot="{ errors }"
                  name="Email"
                  class="d-block"
                >
                  <label for="email" class="form-label"
                    >Email <sup>*</sup></label
                  >
                  <input
                    type="email"
                    class="form-control"
                    v-model="values.email"
                    id="email"
                    placeholder="Enter Email"
                  />
                  <span class="validate-error text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <ValidationProvider
                  rules="required"
                  v-slot="{ errors }"
                  name="Phone Number"
                  class="d-block"
                >
                  <label for="phone" class="form-label">
                    Phone Number <sup>*</sup>
                  </label>
                  <no-ssr>
                    <vue-tel-input
                      v-model="values.phone"
                      placeholder="Enter Phone Number"
                      validCharactersOnly
                    ></vue-tel-input>
                  </no-ssr>
                  <span class="validate-error text-danger" v-if="errors[0]">
                    {{ errors[0] }}
                  </span>
                </ValidationProvider>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label for="country" class="form-label">
                  Country/Region <sup>*</sup>
                </label>
                <select
                  class="form-select form-control"
                  aria-label="Select Country"
                  disabled
                >
                  <option disabled selected>Select Country</option>
                  <option value="pakistan" selected>Pakistan</option>
                </select>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <ValidationProvider
                  rules="required|oneOf:Company,Personal"
                  v-slot="{ errors }"
                  name="Order Type"
                  class="d-block"
                >
                  <label for="orderType" class="form-label"
                    >Order Type <sup>*</sup></label
                  >

                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      class="custom-control-input"
                      v-model="values.orderType"
                      id="orderType1"
                      name="orderType"
                      value="Company"
                    />
                    <label for="orderType1">Company </label>
                    <input
                      type="radio"
                      class="custom-control-input ml-3"
                      v-model="values.orderType"
                      id="orderType2"
                      name="orderType"
                      value="Personal"
                    />
                    <label for="orderType2">Personal </label>
                  </div>
                  <span class="validate-error text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <ValidationProvider
                  rules="required"
                  v-slot="{ errors }"
                  name="First Name"
                  class="d-block"
                >
                  <label for="fname" class="form-label"
                    >First Name <sup>*</sup></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="values.firstName"
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
                  name="Last Name"
                  class="d-block"
                >
                  <label for="lname" class="form-label"
                    >Last Name <sup>*</sup></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="values.lastName"
                    id="lname"
                    placeholder="Enter Last Name"
                  />
                  <span class="validate-error text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <ValidationProvider
                  rules="required"
                  v-slot="{ errors }"
                  name="Company Name"
                  class="d-block"
                >
                  <label for="cname" class="form-label"
                    >Company Name <sup>*</sup></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="values.companyName"
                    id="cname"
                    placeholder="Enter Company Name"
                  />
                  <span class="validate-error text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <ValidationProvider
                  rules="required"
                  v-slot="{ errors }"
                  name="Mail Stop"
                  class="d-block"
                >
                  <label for="mailStop" class="form-label"
                    >Mail Stop <sup>*</sup></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="values.mailStop"
                    id="mailStop"
                    placeholder="Enter Mail Stop"
                  />
                  <span class="validate-error text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <ValidationProvider
                  rules="required"
                  v-slot="{ errors }"
                  name="Address Line 1"
                  class="d-block"
                >
                  <label for="address1" class="form-label"
                    >Address Line 1 <sup>*</sup></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="values.address1"
                    id="address1"
                    placeholder="Enter Address Line 1"
                  />
                  <span class="validate-error text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </div>
              <div class="col-md-6">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Address Line 2"
                  class="d-block"
                >
                  <label for="address2" class="form-label"
                    >Address Line 2
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="values.address2"
                    id="address2"
                    placeholder="Enter Address Line 2"
                  />
                  <span class="validate-error text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <ValidationProvider
                  rules="required"
                  v-slot="{ errors }"
                  name="State"
                  class="d-block"
                >
                  <label for="state" class="form-label"
                    >State <sup>*</sup></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="values.state"
                    id="state"
                    placeholder="Enter State"
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
                  name="City"
                  class="d-block"
                >
                  <label for="city" class="form-label">City<sup>*</sup></label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="values.city"
                    id="city"
                    placeholder="Enter City"
                  />
                  <span class="validate-error text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <ValidationProvider
                  rules="required"
                  v-slot="{ errors }"
                  name="Postal Code"
                  class="d-block"
                >
                  <label for="postalCode" class="form-label"
                    >Postal Code <sup>*</sup></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="values.postalCode"
                    id="postalCode"
                    placeholder="Enter Postal Code"
                  />
                  <span class="validate-error text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Bill Address As Shipping"
                  class="d-block"
                >
                  <div class="form-check ps-0 mt-3 custome-form-check">
                    <input
                      class="checkbox_animated check-it"
                      type="checkbox"
                      id="checkboxBillAddress"
                      value="saveInfo"
                      v-model="values.billAddressAsShipping"
                    />
                    <label
                      class="form-check-label checkout-label"
                      for="checkboxBillAddress"
                      >My bill address is same as shipping.</label
                    >
                  </div>
                  <span class="validate-error text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</span>

                  <button
                    class="btn btn-solid-default btn fw-bold mt-2"
                    type="submit"
                    :disabled="invalid"
                    @click.prevent="submit"
                  >
                    Register
                  </button>
                </ValidationProvider>
              </div>
            </div>
          </ValidationObserver>
        </div>
        <div class="col-12 col-md-4"></div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full.esm';

export default {
  head() {
    return {
      title: 'Shipping Address',
    };
  },

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  watch: {
    values: {
      handler() {
        console.log(this.values);
      },
      deep: true,
    },
  },

  data() {
    return {
      values: {
        email: '',
        phone: '',
        country: 'Pakistan',
        orderType: '',
        firstName: '',
        lastName: '',
        companyName: '',
        mailStop: '',
        address1: '',
        address2: '',
        state: '',
        city: '',
        postalCode: '',
        billAddressAsShipping: false,
      },
    };
  },

  created() {
    this.setBreadcrumbs({
      pageParent: 'Shipping Address',
      pageName: 'Shipping Address',
    });
  },

  methods: {
    submit() {
      if (this.$refs.observer.validate()) {
        console.log(this.values);
      } else {
        console.log('error', this.$refs.observer.errors);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.form-label {
  font-weight: 500;
  color: black;
  sup {
    font-size: 18px;
    top: 0;
  }
}

::v-deep .vue-tel-input {
  font-size: 14px;
  padding: calc(7px + 6 * (100vw - 320px) / 1600)
    calc(15px + 15 * (100vw - 320px) / 1600);
  background-color: #fff;
}

::v-deep .vti__dropdown {
  padding: 0;
}

::v-deep .vti__dropdown-item {
  display: block;
}

::v-deep .vue-tel-input input {
  background-color: inherit;
}

::v-deep .vue-tel-input:focus,
::v-deep .vue-tel-input:focus-within,
::v-deep .vue-tel-input input:focus,
::v-deep .vue-tel-input input:focus-within {
  background-color: #eff2f7;
  border-color: #ced4da;
  box-shadow: none;
  color: #212529;
}
</style>
