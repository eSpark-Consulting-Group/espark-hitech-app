<template>
  <layout :offer-code="offerCode">
    <Breadcrumb pageName="Contact Us" parent="Contact Us" />

    <section class="contact-section">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-7">
            <div class="materialContainer">
              <div class="material-details">
                <div class="title title1 title-effect mb-1 title-left">
                  <h2>Contact Us</h2>
                  <p class="ms-0 w-100">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
              </div>
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
                  <label for="comment" class="form-label"> Comment </label>
                  <textarea
                    class="form-control"
                    id="comment"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <div class="col-auto">
                  <button class="btn btn-solid-default" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <ContactUsSideSection />
        </div>
      </div>
    </section>
    <section class="contact-section">
      <div class="container-fluid">
        <div class="row gy-4">
          <div class="col-12 p-0">
            <div class="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28944.683782861935!2d67.115604!3d24.929158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33feab1c28595%3A0xa3b2a5dc2f97a82e!2seSpark%20Consulting%20Group!5e0!3m2!1sen!2sus!4v1678720700962!5m2!1sen!2sus"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </layout>
</template>

<script>
import layout from '../../layouts/layout.vue'
import Breadcrumb from '../../components/Section/Elements/HeaderElements/Breadcrumb.vue'
import ContactUsSideSection from '../../components/Section/Elements/ContactUs/ContactUsSideSection'

export default {
  components: {
    layout,
    Breadcrumb,
    ContactUsSideSection,
  },
  head() {
    return {
      title: 'Contact Us',
    }
  },
  data() {
    return {
      offerCode: 'DEF4526',
      location:
        'https://www.google.com/maps/dir//eSpark+Consulting+Group+301%2FB+3rd+Floor+%26+401%2FA+4th+Floor,+Blossom+Trade+Centre+Block+1+Gulistan-e-Johar,+Karachi,+74300/@24.929158,67.115604,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3eb33feab1c28595:0xa3b2a5dc2f97a82e',
    }
  },
}
</script>
