<template>
  <div class="login-section">
    <div class="materialContainer">
      <div class="uper">
        <img
          src="~assets/images/logo2.png"
          width="160"
          height="88"
          class="img-fluid"
          alt="logo"
        />
      </div>
      <div class="box">
        <h2 class="text-center mb-3">Register</h2>
        <div v-if="currentStep === 1">
          <ValidationObserver v-slot="{ invalid, handleSubmit }" class="w-100">
            <form
              class="row g-2 mt-md-1 mt-2"
              @submit.prevent="handleSubmit(signup)"
            >
              <div class="col-md-6">
                <ValidationProvider
                  mode="lazy"
                  rules="min:1|max:50|alpha_spaces|required"
                  v-slot="{ errors }"
                  name="First Name"
                  class="d-block"
                >
                  <label for="fname" class="form-label">First Name</label>
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
                  mode="lazy"
                  rules="min:1|max:50|alpha_spaces|required"
                  v-slot="{ errors }"
                  name="Last Name"
                  class="d-block"
                >
                  <label for="lname" class="form-label">Last Name</label>
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
              <div class="col-12">
                <ValidationProvider
                  mode="lazy"
                  :rules="{
                    regex:
                      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                  }"
                  v-slot="{ errors }"
                  name="Email"
                  class="d-block"
                >
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="values.email"
                    id="email"
                    required
                    placeholder="Enter Email"
                    autocomplete="email"
                  />
                  <span class="validate-error text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </div>
              <div class="col-12">
                <ValidationProvider
                  mode="lazy"
                  :rules="{
                    regex:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,128}$/,
                  }"
                  v-slot="{ errors }"
                  name="Password"
                  class="d-block"
                >
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter Your Password"
                    required
                    autocomplete="new-password"
                    v-model="values.password"
                  />

                  <span class="validate-error text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </div>

              <div class="col-12">
                <ValidationProvider
                  mode="lazy"
                  rules="required"
                  v-slot="{ errors }"
                  name="Phone Number"
                  class="d-block"
                >
                  <label for="phone" class="form-label"> Phone Number </label>
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

              <div class="col-md-6">
                <label for="country" class="form-label"> Country </label>
                <select
                  class="form-select form-control"
                  aria-label="Select Country"
                  disabled
                >
                  <option disabled selected>Select Country</option>
                  <option value="pakistan" selected>Pakistan</option>
                </select>
              </div>

              <div class="col-md-6">
                <ValidationProvider
                  mode="lazy"
                  rules="required"
                  v-slot="{ errors }"
                  name="City"
                  class="d-block"
                >
                  <label for="city" class="form-label">City</label>
                  <select
                    class="form-select form-control"
                    aria-label="Select City"
                    id="city"
                    v-model="values.city"
                  >
                    <option value="" disabled selected>Select The City</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="" disabled>Punjab Cities</option>
                    <option value="Ahmed Nager Chatha">
                      Ahmed Nager Chatha
                    </option>
                    <option value="Ahmadpur East">Ahmadpur East</option>
                    <option value="Ali Khan Abad">Ali Khan Abad</option>
                    <option value="Alipur">Alipur</option>
                    <option value="Arifwala">Arifwala</option>
                    <option value="Attock">Attock</option>
                    <option value="Bhera">Bhera</option>
                    <option value="Bhalwal">Bhalwal</option>
                    <option value="Bahawalnagar">Bahawalnagar</option>
                    <option value="Bahawalpur">Bahawalpur</option>
                    <option value="Bhakkar">Bhakkar</option>
                    <option value="Burewala">Burewala</option>
                    <option value="Chillianwala">Chillianwala</option>
                    <option value="Chakwal">Chakwal</option>
                    <option value="Chichawatni">Chichawatni</option>
                    <option value="Chiniot">Chiniot</option>
                    <option value="Chishtian">Chishtian</option>
                    <option value="Daska">Daska</option>
                    <option value="Darya Khan">Darya Khan</option>
                    <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
                    <option value="Dhaular">Dhaular</option>
                    <option value="Dina">Dina</option>
                    <option value="Dinga">Dinga</option>
                    <option value="Dipalpur">Dipalpur</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Ferozewala">Ferozewala</option>
                    <option value="Fateh Jhang">Fateh Jang</option>
                    <option value="Ghakhar Mandi">Ghakhar Mandi</option>
                    <option value="Gojra">Gojra</option>
                    <option value="Gujranwala">Gujranwala</option>
                    <option value="Gujrat">Gujrat</option>
                    <option value="Gujar Khan">Gujar Khan</option>
                    <option value="Hafizabad">Hafizabad</option>
                    <option value="Haroonabad">Haroonabad</option>
                    <option value="Hasilpur">Hasilpur</option>
                    <option value="Haveli Lakha">Haveli Lakha</option>
                    <option value="Jatoi">Jatoi</option>
                    <option value="Jalalpur">Jalalpur</option>
                    <option value="Jattan">Jattan</option>
                    <option value="Jampur">Jampur</option>
                    <option value="Jaranwala">Jaranwala</option>
                    <option value="Jhang">Jhang</option>
                    <option value="Jhelum">Jhelum</option>
                    <option value="Kalabagh">Kalabagh</option>
                    <option value="Karor Lal Esan">Karor Lal Esan</option>
                    <option value="Kasur">Kasur</option>
                    <option value="Kamalia">Kamalia</option>
                    <option value="Kamoke">Kamoke</option>
                    <option value="Khanewal">Khanewal</option>
                    <option value="Khanpur">Khanpur</option>
                    <option value="Kharian">Kharian</option>
                    <option value="Khushab">Khushab</option>
                    <option value="Kot Addu">Kot Addu</option>
                    <option value="Jauharabad">Jauharabad</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Lalamusa">Lalamusa</option>
                    <option value="Layyah">Layyah</option>
                    <option value="Liaquat Pur">Liaquat Pur</option>
                    <option value="Lodhran">Lodhran</option>
                    <option value="Malakwal">Malakwal</option>
                    <option value="Mamoori">Mamoori</option>
                    <option value="Mailsi">Mailsi</option>
                    <option value="Mandi Bahauddin">Mandi Bahauddin</option>
                    <option value="Mian Channu">Mian Channu</option>
                    <option value="Mianwali">Mianwali</option>
                    <option value="Multan">Multan</option>
                    <option value="Murree">Murree</option>
                    <option value="Muridke">Muridke</option>
                    <option value="Mianwali Bangla">Mianwali Bangla</option>
                    <option value="Muzaffargarh">Muzaffargarh</option>
                    <option value="Narowal">Narowal</option>
                    <option value="Nankana Sahib">Nankana Sahib</option>
                    <option value="Okara">Okara</option>
                    <option value="Renala Khurd">Renala Khurd</option>
                    <option value="Pakpattan">Pakpattan</option>
                    <option value="Pattoki">Pattoki</option>
                    <option value="Pir Mahal">Pir Mahal</option>
                    <option value="Qaimpur">Qaimpur</option>
                    <option value="Qila Didar Singh">Qila Didar Singh</option>
                    <option value="Rabwah">Rabwah</option>
                    <option value="Raiwind">Raiwind</option>
                    <option value="Rajanpur">Rajanpur</option>
                    <option value="Rahim Yar Khan">Rahim Yar Khan</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Sadiqabad">Sadiqabad</option>
                    <option value="Safdarabad">Safdarabad</option>
                    <option value="Sahiwal">Sahiwal</option>
                    <option value="Sangla Hill">Sangla Hill</option>
                    <option value="Sarai Alamgir">Sarai Alamgir</option>
                    <option value="Sargodha">Sargodha</option>
                    <option value="Shakargarh">Shakargarh</option>
                    <option value="Sheikhupura">Sheikhupura</option>
                    <option value="Sialkot">Sialkot</option>
                    <option value="Sohawa">Sohawa</option>
                    <option value="Soianwala">Soianwala</option>
                    <option value="Siranwali">Siranwali</option>
                    <option value="Talagang">Talagang</option>
                    <option value="Taxila">Taxila</option>
                    <option value="Toba Tek Singh">Toba Tek Singh</option>
                    <option value="Vehari">Vehari</option>
                    <option value="Wah Cantonment">Wah Cantonment</option>
                    <option value="Wazirabad">Wazirabad</option>
                    <option value="" disabled>Sindh Cities</option>
                    <option value="Badin">Badin</option>
                    <option value="Bhirkan">Bhirkan</option>
                    <option value="Rajo Khanani">Rajo Khanani</option>
                    <option value="Chak">Chak</option>
                    <option value="Dadu">Dadu</option>
                    <option value="Digri">Digri</option>
                    <option value="Diplo">Diplo</option>
                    <option value="Dokri">Dokri</option>
                    <option value="Ghotki">Ghotki</option>
                    <option value="Haala">Haala</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Islamkot">Islamkot</option>
                    <option value="Jacobabad">Jacobabad</option>
                    <option value="Jamshoro">Jamshoro</option>
                    <option value="Jungshahi">Jungshahi</option>
                    <option value="Kandhkot">Kandhkot</option>
                    <option value="Kandiaro">Kandiaro</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Kashmore">Kashmore</option>
                    <option value="Keti Bandar">Keti Bandar</option>
                    <option value="Khairpur">Khairpur</option>
                    <option value="Kotri">Kotri</option>
                    <option value="Larkana">Larkana</option>
                    <option value="Matiari">Matiari</option>
                    <option value="Mehar">Mehar</option>
                    <option value="Mirpur Khas">Mirpur Khas</option>
                    <option value="Mithani">Mithani</option>
                    <option value="Mithi">Mithi</option>
                    <option value="Mehrabpur">Mehrabpur</option>
                    <option value="Moro">Moro</option>
                    <option value="Nagarparkar">Nagarparkar</option>
                    <option value="Naudero">Naudero</option>
                    <option value="Naushahro Feroze">Naushahro Feroze</option>
                    <option value="Naushara">Naushara</option>
                    <option value="Nawabshah">Nawabshah</option>
                    <option value="Nazimabad">Nazimabad</option>
                    <option value="Qambar">Qambar</option>
                    <option value="Qasimabad">Qasimabad</option>
                    <option value="Ranipur">Ranipur</option>
                    <option value="Ratodero">Ratodero</option>
                    <option value="Rohri">Rohri</option>
                    <option value="Sakrand">Sakrand</option>
                    <option value="Sanghar">Sanghar</option>
                    <option value="Shahbandar">Shahbandar</option>
                    <option value="Shahdadkot">Shahdadkot</option>
                    <option value="Shahdadpur">Shahdadpur</option>
                    <option value="Shahpur Chakar">Shahpur Chakar</option>
                    <option value="Shikarpaur">Shikarpaur</option>
                    <option value="Sukkur">Sukkur</option>
                    <option value="Tangwani">Tangwani</option>
                    <option value="Tando Adam Khan">Tando Adam Khan</option>
                    <option value="Tando Allahyar">Tando Allahyar</option>
                    <option value="Tando Muhammad Khan">
                      Tando Muhammad Khan
                    </option>
                    <option value="Thatta">Thatta</option>
                    <option value="Umerkot">Umerkot</option>
                    <option value="Warah">Warah</option>
                    <option value="" disabled>Khyber Cities</option>
                    <option value="Abbottabad">Abbottabad</option>
                    <option value="Adezai">Adezai</option>
                    <option value="Alpuri">Alpuri</option>
                    <option value="Akora Khattak">Akora Khattak</option>
                    <option value="Ayubia">Ayubia</option>
                    <option value="Banda Daud Shah">Banda Daud Shah</option>
                    <option value="Bannu">Bannu</option>
                    <option value="Batkhela">Batkhela</option>
                    <option value="Battagram">Battagram</option>
                    <option value="Birote">Birote</option>
                    <option value="Chakdara">Chakdara</option>
                    <option value="Charsadda">Charsadda</option>
                    <option value="Chitral">Chitral</option>
                    <option value="Daggar">Daggar</option>
                    <option value="Dargai">Dargai</option>
                    <option value="Darya Khan">Darya Khan</option>
                    <option value="Dera Ismail Khan">Dera Ismail Khan</option>
                    <option value="Doaba">Doaba</option>
                    <option value="Dir">Dir</option>
                    <option value="Drosh">Drosh</option>
                    <option value="Hangu">Hangu</option>
                    <option value="Haripur">Haripur</option>
                    <option value="Karak">Karak</option>
                    <option value="Kohat">Kohat</option>
                    <option value="Kulachi">Kulachi</option>
                    <option value="Lakki Marwat">Lakki Marwat</option>
                    <option value="Latamber">Latamber</option>
                    <option value="Madyan">Madyan</option>
                    <option value="Mansehra">Mansehra</option>
                    <option value="Mardan">Mardan</option>
                    <option value="Mastuj">Mastuj</option>
                    <option value="Mingora">Mingora</option>
                    <option value="Nowshera">Nowshera</option>
                    <option value="Paharpur">Paharpur</option>
                    <option value="Pabbi">Pabbi</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Saidu Sharif">Saidu Sharif</option>
                    <option value="Shorkot">Shorkot</option>
                    <option value="Shewa Adda">Shewa Adda</option>
                    <option value="Swabi">Swabi</option>
                    <option value="Swat">Swat</option>
                    <option value="Tangi">Tangi</option>
                    <option value="Tank">Tank</option>
                    <option value="Thall">Thall</option>
                    <option value="Timergara">Timergara</option>
                    <option value="Tordher">Tordher</option>
                    <option value="" disabled>Balochistan Cities</option>
                    <option value="Awaran">Awaran</option>
                    <option value="Barkhan">Barkhan</option>
                    <option value="Chagai">Chagai</option>
                    <option value="Dera Bugti">Dera Bugti</option>
                    <option value="Gwadar">Gwadar</option>
                    <option value="Harnai">Harnai</option>
                    <option value="Jafarabad">Jafarabad</option>
                    <option value="Jhal Magsi">Jhal Magsi</option>
                    <option value="Kacchi">Kacchi</option>
                    <option value="Kalat">Kalat</option>
                    <option value="Kech">Kech</option>
                    <option value="Kharan">Kharan</option>
                    <option value="Khuzdar">Khuzdar</option>
                    <option value="Killa Abdullah">Killa Abdullah</option>
                    <option value="Killa Saifullah">Killa Saifullah</option>
                    <option value="Kohlu">Kohlu</option>
                    <option value="Lasbela">Lasbela</option>
                    <option value="Lehri">Lehri</option>
                    <option value="Loralai">Loralai</option>
                    <option value="Mastung">Mastung</option>
                    <option value="Musakhel">Musakhel</option>
                    <option value="Nasirabad">Nasirabad</option>
                    <option value="Nushki">Nushki</option>
                    <option value="Panjgur">Panjgur</option>
                    <option value="Pishin Valley">Pishin Valley</option>
                    <option value="Quetta">Quetta</option>
                    <option value="Sherani">Sherani</option>
                    <option value="Sibi">Sibi</option>
                    <option value="Sohbatpur">Sohbatpur</option>
                    <option value="Washuk">Washuk</option>
                    <option value="Zhob">Zhob</option>
                    <option value="Ziarat">Ziarat</option>
                  </select>
                  <span class="validate-error text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </div>

              <div class="col-12">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Address"
                  class="d-block"
                >
                  <label for="address" class="form-label">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="values.address"
                    id="address"
                    placeholder="Enter Address"
                  />
                  <span class="validate-error text-danger" v-if="errors[0]">{{
                    errors[0]
                  }}</span>
                </ValidationProvider>
              </div>

              <div class="col-12 d-flex align-items-center">
                <button
                  class="btn btn-solid-default btn fw-bold w-100 mt-2"
                  type="submit"
                  :disabled="invalid"
                >
                  Register
                </button>
              </div>
            </form>
          </ValidationObserver>
        </div>

        <div v-if="currentStep === 2">
          <div
            class="row d-flex justify-content-start align-items-center h-100"
          >
            <div class="mt-4">
              <span class="title mb-0"
                >A verification code has been sent. Please enter the code below
                to continue.</span
              >
            </div>
            <div class="mt-2">
              <h6 class="mb-1">abc@gmail.com</h6>
            </div>
            <div class="col-md-10 pe-5">
              <input
                type="text"
                name="name"
                id="emailname"
                placeholder="name@example.com"
                class="email input-register"
                v-model="values.email"
                @focus.prevent="select('email')"
                v-on:blur="handleFocusOut('email')"
              />
            </div>
            <div class="mt-4 flex d-flex">
              <span class="resend-text title"
                >Didn't Receive Code? <strong>Resend</strong></span
              >
            </div>
          </div>
        </div>

        <div v-if="currentStep !== 2">
          <hr
            size="1"
            width="100%"
            color="black"
            style="margin-top: 2rem; position: relative"
          />
          <div class="text-center">
            <span>Or sign up with</span>
          </div>

          <div class="row gy-2 g-md-0 gx-md-2 my-3">
            <div class="col-md-6">
              <a href="www.facebook.com">
                <div class="social-media fb-media">
                  <img
                    src="~assets/images/inner-page/facebook.png"
                    class="img-fluid"
                    alt=""
                  />
                  <h6>Facebook</h6>
                </div>
              </a>
            </div>
            <div class="col-md-6">
              <a href="www.gmail.com">
                <div class="social-media google-media bg-white">
                  <img
                    src="~assets/images/inner-page/google.png"
                    class="img-fluid"
                    alt=""
                  />
                  <h6>Google</h6>
                </div>
              </a>
            </div>
          </div>

          <div class="text-center">
            Already have an account?
            <nuxt-link to="/auth/login">Log In</nuxt-link>
          </div>
        </div>

        <div v-else class="flex d-flex justify-content-center">
          <div class="flex d-flex justify-content-center gap-2">
            <button
              class="btn btn-solid-default btn fw-bold"
              href="javascript:void(0)"
              @click="BackStep"
            >
              <span>Back</span>
            </button>
            <button
              class="btn btn-solid-default btn fw-bold"
              href="javascript:void(0)"
            >
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full.esm';

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  layout: 'authLayout',
  asyncData() {
    return {
      Alreadyhaveanaccount: 'Already have an account?',
    };
  },
  data() {
    return {
      currentStep: 1,
      themeCss: '/demo2.css',
      values: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        country: '',
        city: '',
      },
      selected: {
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
      },
    };
  },
  head() {
    return {
      title: 'Register',
    };
  },
  methods: {
    nextStep() {
      this.currentStep = 1 + this.currentStep;
      if (this.currentStep === 3) {
        this.currentStep = 3;
      }
    },
    BackStep() {
      this.currentStep = this.currentStep - 1;
      if (this.currentStep <= 1) {
        this.currentStep = 1;
      }
    },
    handleFocusOut(field) {
      this.auth[field] === '' && (this.selected[field] = false);
    },
    select(textbox) {
      this.selected[textbox] = true;
    },
    signup() {
      this.nextStep();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/demo1.scss';
.form-label {
  font-weight: 500;
  color: black;

  sup {
    top: 0;
    font-size: 18px;
  }
}

.login-section {
  background: url('../../assets/images/electronics/slider/banner2.jpg');
  background-size: cover;
}

.uper {
  display: flex;
  justify-content: center;
  border-radius: 32px 32px 0px 0px;
  background: #e6f4f4;
  padding-bottom: 1rem;
  padding-top: 1rem;
}

.box {
  border-radius: 0px 0px 32px 32px !important;
}
.sign-category span {
  color: black;
}

.materialContainer {
  max-width: 37.5rem !important;
}

.title {
  color: #000;
  text-align: start;
  font-size: 16px;

  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.login {
  button {
    padding-right: 2.5rem !important;
    padding-left: 2.5rem !important;
    border-radius: 50px !important;
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
.resend-text strong {
  font-weight: bold;
}
</style>
