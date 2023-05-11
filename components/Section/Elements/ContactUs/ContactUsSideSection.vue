<template>
  
  <div >
    <div class="contact-details ">
      <div style="text-align: center">
        <h2 class="justify-content-center">{{ AboutUS }}</h2>
        <img
        src="~assets/images/logo2.png"
        
        class="img-fluid justify-content-center w-25"
        alt="logo"
      />
        <h5 class="font-light justify-content-center">
          {{ Detail }}
        </h5>
        <button class="btn btn-solid-default" type="submit">
                Submit
              </button>
        <!-- <div class="contact-box">
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
        </div> -->
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

      AboutUS: "About Us",
      Detail: "eSpark has always believed our employees are the greatest reason for our company's continued success and exceptional service.  Our employees are hardworking, talented, motivated, dedicated, agile, generous, and humble.",
      SuggestionDesc: "We're open for any suggestion or just to have a chat",
    }
  },
}
</script>
