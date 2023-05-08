<template>
  <div class="col-lg-5">
    <div class="contact-details">
      <div>
        <h2>{{ LetTouch }}</h2>
        <h5 class="font-light">
          {{ SuggestionDesc }}
        </h5>
        <div class="contact-box">
          <div class="contact-icon">
            <icons name="heart" />
          </div>
          <div class="contact-title">
            <h4>{{ Address }}</h4>
            <p>
              {{ ActualAddress }}
            </p>
          </div>
        </div>

        <div class="contact-box">
          <div class="contact-icon">
            <icons name="heart" />
          </div>
          <div class="contact-title">
            <h4>{{ PhoneNumber }}</h4>
            <p>{{ num1 }}</p>
          </div>
        </div>

        <div class="contact-box">
          <div class="contact-icon">
            <icons name="heart" />
          </div>
          <div class="contact-title">
            <h4>Email Address :</h4>
            <p>{{ ThemeEmail }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icons from '../../../../assets/icons.vue'

export default {
  components: { icons },
  data() {
    return {
      Address: 'Address :',
      ActualAddress:
        ' 401/B 4th Floor, Blossom Trade Centre, Block 1 Gulistan-e-Johar, Karachi, 74300',
      PhoneNumber: 'Phone Number :',
      num1: '+923232788259',

      ThemeEmail: 'support@espark-hitech.com',

      LetTouch: "Let's get in touch",
      SuggestionDesc: "We're open for any suggestion or just to have a chat",
    }
  },
}
</script>
