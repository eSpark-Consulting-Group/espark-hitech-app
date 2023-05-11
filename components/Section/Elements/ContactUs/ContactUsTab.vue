<template>
  <div class="cloth-review">
    <nav>
      <div class="nav nav-tabs" id="nav-tab">
        <button
          class="nav-link"
          :class="tabActive['description'] ? 'active' : ''"
          id="nav-home-tab"
          type="button"
          @click="setActive('description')"
        >
          Accounts
        </button>

        <button
          class="nav-link"
          id="nav-speci-tab"
          :class="tabActive['Order'] ? 'active' : ''"
          type="button"
          @click="setActive('Order')"
        >
          Order
        </button>

        <button
          class="nav-link"
          id="nav-size-tab"
          :class="tabActive['Other'] ? 'active' : ''"
          type="button"
          @click="setActive('Other')"
        >
          Other
        </button>

        <!-- <button
            class="nav-link"
            id="nav-contact-tab"
            :class="tabActive['review'] ? 'active' : ''"
            type="button"
            @click="setActive('review')"
          >
            Review
          </button> -->
      </div>
    </nav>

    <div class="tab-content" id="nav-tabContent">
      <transition>
        <div
          class="tab-pane show active"
          id="desc"
          v-if="tabActive['description']"
        >
          <div class="row g-4 mt-md-1 mt-2">
            <div class="col-md-6">
              <label for="first" class="form-label">First Name</label>
              <input
                type="text"
                class="form-control"
                id="first"
                placeholder="Enter Your First Name"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="last" class="form-label">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="last"
                placeholder="Enter Your Last Name"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label"> Email </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter Your Email Address"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="email2" class="form-label"> Submit </label>
              <input
                type="email"
                class="form-control"
                id="email2"
                placeholder="Enter Your Confirm Email Address"
                required
              />
            </div>
            <div class="col-12">
              <label for="comment" class="form-label"> Related to: </label>
              <select
                v-model="selectedOption"
                class="form-select"
                aria-label="Default select example"
              >
                <option selected value="0">Select related issue</option>
                <option value="1">Trouble in logging</option>
                <option value="2">Register Assistance</option>
                <option value="3">Forget/Change password?</option>
                <option value="4">
                  How to place an order without registration?
                </option>
                <option value="5">
                  Change the email address or Delate account
                </option>
              </select>
              <div class="mt-2">
                <div v-if="selectedOption === '1'">
                    <OptionTabs/>
                  <!-- Form for option 1 -->
                </div>

                <div v-if="selectedOption === '2'">
                    <OptionTabs/>
                  <!-- Form for option 2 -->
                </div>

                <div v-if="selectedOption === '3'">
                    <OptionTabs/>
                  <!-- Form for option 3 -->
                </div>
                <div v-if="selectedOption === '4'">
                    <OptionTabs/>
                  <!-- Form for option 3 -->
                </div>
                <div v-if="selectedOption === '5'">
                    <OptionTabs/>
                  <!-- Form for option 3 -->
                </div>
              </div>
              <!-- <textarea
                    class="form-control"
                    id="comment"
                    rows="5"
                    required
                  ></textarea> -->
            </div>

            <!-- <div class="col-auto">
              <button class="btn btn-solid-default" type="submit">
                Submit
              </button> -->
            <!-- </div> -->
          </div>
        </div>
        <div
          class="tab-pane show active"
          id="desc"
          v-if="tabActive['Order']"
        >
          <div class="row g-4 mt-md-1 mt-2">
            <div class="col-md-6">
              <label for="first" class="form-label">First Name</label>
              <input
                type="text"
                class="form-control"
                id="first"
                placeholder="Enter Your First Name"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="last" class="form-label">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="last"
                placeholder="Enter Your Last Name"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label"> Email </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter Your Email Address"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="email2" class="form-label"> Submit </label>
              <input
                type="email"
                class="form-control"
                id="email2"
                placeholder="Enter Your Confirm Email Address"
                required
              />
            </div>
            <div class="col-12">
              <label for="comment" class="form-label"> Related to: </label>
              <select
                v-model="selectedOption"
                class="form-select"
                aria-label="Default select example"
              >
                <option selected value="0">Select related issue</option>
                <option value="1">Change/Cancel order</option>
                <option value="2">Inquiry / Handling fee</option>
                <option value="3">Payment</option>
                <option value="4">
                    Coupon
                </option>
                <option value="5">
                    Invoice/ Packing list download
                </option>
                <option value="6">
                    Shipping & Delivery
                </option>
              </select>
              <div class="mt-2">
                <div v-if="selectedOption === '1'">
                    <OptionTabs/>
                  <!-- Form for option 1 -->
                </div>

                <div v-if="selectedOption === '2'">
                    <OptionTabs/>
                  <!-- Form for option 2 -->
                </div>

                <div v-if="selectedOption === '3'">
                    <OptionTabs/>
                  <!-- Form for option 3 -->
                </div>
                <div v-if="selectedOption === '4'">
                    <OptionTabs/>
                  <!-- Form for option 3 -->
                </div>
                <div v-if="selectedOption === '5'">
                    <OptionTabs/>
                  <!-- Form for option 3 -->
                </div>
                <div v-if="selectedOption === '6'">
                    <OptionTabs/>
                  <!-- Form for option 3 -->
                </div>
              </div>
              <!-- <textarea
                    class="form-control"
                    id="comment"
                    rows="5"
                    required
                  ></textarea> -->
            </div>

            <!-- <div class="col-auto">
              <button class="btn btn-solid-default" type="submit">
                Submit
              </button>
            </div> -->
          </div>
        </div>
        <div
          class="tab-pane show active"
          id="desc"
          v-if="tabActive['Other']"
        >
          <div class="row g-4 mt-md-1 mt-2">
            <div class="col-md-6">
              <label for="first" class="form-label">First Name</label>
              <input
                type="text"
                class="form-control"
                id="first"
                placeholder="Enter Your First Name"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="last" class="form-label">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="last"
                placeholder="Enter Your Last Name"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label"> Email </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter Your Email Address"
                required
              />
            </div>
            <div class="col-md-6">
              <label for="email2" class="form-label"> Submit </label>
              <input
                type="email"
                class="form-control"
                id="email2"
                placeholder="Enter Your Confirm Email Address"
                required
              />
            </div>
            <div class="col-12">
              <label for="comment" class="form-label"> Related to: </label>
              <select
                v-model="selectedOption"
                class="form-select"
                aria-label="Default select example"
              >
                <option selected value="0">Select related issue</option>
                <option value="1">BOM Tool</option>
                <option value="2">Have ideas or suggestions</option>
                <option value="3">Warranty policy</option>
                <option value="4">
                    Others
                </option>
                
              </select>
              <div class="mt-2">
                <div v-if="selectedOption === '1'">
                    <OptionTabs/>
                  <!-- Form for option 1 -->
                </div>

                <div v-if="selectedOption === '2'">
                    <OptionTabs/>
                  <!-- Form for option 2 -->
                </div>

                <div v-if="selectedOption === '3'">
                    <OptionTabs/>
                  <!-- Form for option 3 -->
                </div>
                <div v-if="selectedOption === '4'">
                    <OptionTabs/>
                  <!-- Form for option 3 -->
                </div>
               
              </div>
              <!-- <textarea
                    class="form-control"
                    id="comment"
                    rows="5"
                    required
                  ></textarea> -->
            </div>

            
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import OptionTabs from './OptionTabs.vue'
export default {
    components:{OptionTabs},
  data() {
    return {
      tabActive: { description: true },
      selectedOption: '0',
      ContactUstab: { Email: true },
    }
  },
  methods: {
    setActive(tab) {
      this.tabActive = {},
      this.selectedOption = '0'
      this.tabActive[tab] = true
    },
    ContactsetActive(tab) {
      this.ContactUstab = {}
      this.ContactUstab[tab] = true
    },
  },
}
</script>

<style lang="scss" scoped>
select.form-select:focus {
  background-color: #eff2f7 !important;
}
</style>
