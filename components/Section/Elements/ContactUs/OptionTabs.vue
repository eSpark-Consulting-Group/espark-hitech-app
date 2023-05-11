<template>
    <div>
    <div class="h-100 form-control mb-2">
                    <div
                      class="d-flex justify-content-center align-items-center mt-2"
                    >
                      <b>Did You Know?</b>
                    </div>
                    <div style="text-align: center">
                      <span class="font-light justify-content-center">
                        Click Register Now to create your own account, you will
                        receive an email which is email address verification,
                        please click the link to activate your account. If not
                        receive an email for register verification:
                      </span>
                      <ol class="list-group list-group-numbered">
                        <li class="list-group-item font-light border-0 p-0">
                          Check the email spam folder first.
                        </li>
                        <li class="list-group-item font-light border-0 p-0">
                          If the email address verification never comes to you,
                          please contact our customer service.
                        </li>
                      </ol>
                    </div>
                  </div>
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab">
                      <button
                        class="nav-link"
                        :class="ContactUstab['Email'] ? 'active' : ''"
                        id="nav-home-tab"
                        type="button"
                        @click="ContactsetActive('Email')"
                      >
                        Email
                      </button>

                      <button
                        class="nav-link"
                        id="nav-speci-tab"
                        :class="ContactUstab['Phone'] ? 'active' : ''"
                        type="button"
                        @click="ContactsetActive('Phone')"
                      >
                        Phone
                      </button>
                    </div>
                  </nav>
                  <div
                    class="tab-pane show active"
                    id="desc"
                    v-if="ContactUstab['Email']"
                  >
                    <div class="row g-4 md-1">
                      <div class="col-9">
                        <label for="first" class="form-label">Subject</label>
                        <input
                          type="text"
                          class="form-control"
                          id="first"
                          placeholder="Enter Your Subject"
                          required
                        />
                        <label for="message" class="form-label">Message</label>
                        <textarea
                          class="form-control"
                          id="comment"
                          rows="5"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane show active"
                    id="desc"
                    v-if="ContactUstab['Phone']"
                  >
                    <div class="row g-4 md-1">
                      <div class="col-9">
                        <label for="first" class="form-label">Subject</label>
                        <input
                          type="text"
                          class="form-control"
                          id="first"
                          placeholder="Enter Your Subject"
                          required
                        />
                        <label for="message" class="form-label">Message</label>
                        <textarea
                          class="form-control"
                          id="comment"
                          rows="5"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-auto mt-2">
              <button class="btn btn-solid-default" type="submit">
                Submit
              </button>
            </div>
                </div>
</template>

<script>
    export default {
        data() {
    return {
      tabActive: { description: true },
      selectedOption: '0',
      ContactUstab: { Email: true },
    }
  },
  methods: {
    setActive(tab) {
      this.tabActive = {}
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

</style>