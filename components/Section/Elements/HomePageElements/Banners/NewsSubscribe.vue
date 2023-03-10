<template>
  <section class="subscribe-section section-b-space">
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-6">
            <div class="subscribe-details">
              <h2 class="mb-3">{{ SubscribeOurNews }}</h2>
              <h6>
                {{ SubscribeDescription }}
              </h6>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mt-md-0 mt-3">
            <div class="subsribe-input">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control subscribe-input"
                  placeholder="Your Email Address"
                />
                <button class="btn btn-solid-default" type="button">
                  {{ Submit }}
                </button>
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
      SubscribeOurNews: 'Subscribe Our News',
      SubscribeDescription:
        'Subscribe and receive our newsletters to follow the news about our up coming Products.',
      Submit: 'Submit',
    }
  },
}
</script>
