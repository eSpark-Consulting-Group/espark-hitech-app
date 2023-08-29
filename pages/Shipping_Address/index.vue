<template>
  <section class="section-b-space">
    <div class="container">
      <div class="row g-4 justify-content-between">
        <div class="col-12">
          <span> All fields marked with (*) are required </span>
        </div>
        <div class="col-12 col-md-8">
          <ValidationObserver v-slot="{ invalid, handleSubmit }" class="w-100">
            <form
              class="row g-2 mt-md-1 mt-2"
              @submit.prevent="handleSubmit(submit)"
            >
              <div class="col-12">
                <div class="row">
                  <div class="col-md-6 col-md-8">
                    <ValidationProvider
                      :rules="{
                        regex:
                          /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                      }"
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
                        required
                        placeholder="Enter Email"
                      />
                      <span
                        class="validate-error text-danger"
                        v-if="errors[0]"
                        >{{ errors[0] }}</span
                      >
                    </ValidationProvider>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6 col-md-8">
                    <ValidationProvider
                      rules="required|min:8|max:25"
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
                          mode="international"
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
                      <span
                        class="validate-error text-danger"
                        v-if="errors[0]"
                        >{{ errors[0] }}</span
                      >
                    </ValidationProvider>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <ValidationProvider
                      rules="min:1|max:50|alpha_spaces|required"
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
                      <span
                        class="validate-error text-danger"
                        v-if="errors[0]"
                        >{{ errors[0] }}</span
                      >
                    </ValidationProvider>
                  </div>
                  <div class="col-md-6">
                    <ValidationProvider
                      rules="min:1|max:50|alpha_spaces|required"
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
                      <span
                        class="validate-error text-danger"
                        v-if="errors[0]"
                        >{{ errors[0] }}</span
                      >
                    </ValidationProvider>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <ValidationProvider
                      rules="min:1|max:255|alpha_spaces|required"
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
                      <span
                        class="validate-error text-danger"
                        v-if="errors[0]"
                        >{{ errors[0] }}</span
                      >
                    </ValidationProvider>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <ValidationProvider
                      rules="required|min:1|max:50"
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
                      <span
                        class="validate-error text-danger"
                        v-if="errors[0]"
                        >{{ errors[0] }}</span
                      >
                    </ValidationProvider>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <ValidationProvider
                      rules="required|min:10|max:255"
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
                      <span
                        class="validate-error text-danger"
                        v-if="errors[0]"
                        >{{ errors[0] }}</span
                      >
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
                      <span
                        class="validate-error text-danger"
                        v-if="errors[0]"
                        >{{ errors[0] }}</span
                      >
                    </ValidationProvider>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <ValidationProvider
                      rules="required|min:2|max:200|alpha_spaces"
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
                      <span
                        class="validate-error text-danger"
                        v-if="errors[0]"
                        >{{ errors[0] }}</span
                      >
                    </ValidationProvider>
                  </div>
                  <div class="col-md-6">
                    <ValidationProvider
                      rules="required|min:2|max:255|alpha_spaces"
                      v-slot="{ errors }"
                      name="City"
                      class="d-block"
                    >
                      <label for="city" class="form-label"
                        >City<sup>*</sup></label
                      >
                      <input
                        type="text"
                        class="form-control"
                        v-model="values.city"
                        id="city"
                        placeholder="Enter City"
                      />
                      <span
                        class="validate-error text-danger"
                        v-if="errors[0]"
                        >{{ errors[0] }}</span
                      >
                    </ValidationProvider>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <ValidationProvider
                      rules="min:4|max:15|numeric|required"
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
                      <span
                        class="validate-error text-danger"
                        v-if="errors[0]"
                        >{{ errors[0] }}</span
                      >
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
                      <span
                        class="validate-error text-danger"
                        v-if="errors[0]"
                        >{{ errors[0] }}</span
                      >

                      <button
                        class="btn btn-solid-default btn fw-bold mt-2"
                        type="submit"
                        :disabled="invalid"
                      >
                        Register
                      </button>
                    </ValidationProvider>
                  </div>
                </div>
              </div>
            </form>
          </ValidationObserver>
        </div>
        <div class="col-12 col-md-4 col-xl-3">
          <div class="p-3 summary">
            <h4 class="fw-bold">Summary</h4>
            <hr />

            <div class="row gy-2">
              <div class="col-12 summary-item">
                <strong>Web ID:</strong> 1213123
              </div>
              <div class="col-12 summary-item">
                <strong>Items in Cart:</strong> 2
              </div>
              <div class="col-12 summary-item">
                <strong>Subtotal:</strong> 1000
              </div>
            </div>
          </div>

          <div class="p-3 summary mt-3">
            <div class="row">
              <div class="col-12 summary-item d-flex align-items-center">
                <img
                  class="me-3"
                  :src="require('@/assets/svg/encrypted-solid.svg')"
                  alt="encrypted icon"
                />

                <span class="text-center">
                  Your data will be encrypted & transmitted securely.
                </span>
              </div>
            </div>
          </div>
        </div>
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
      console.log(this.values, 'values');
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

.summary {
  background-color: #fbfbfb;
}

.summary-item {
  display: flex;
  justify-content: space-between;
}
</style>
