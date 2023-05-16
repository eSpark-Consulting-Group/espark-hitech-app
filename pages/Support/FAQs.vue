<template>
  <div>
    <FAQTop />
    <section class="faq-details section-b-space">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <div class="faq-link-box">
              <ul>
                <li>
                  <!-- :href="'#' + question.id" -->
                  <a
                    v-for="(question, index) in faqList"
                    :key="index"
                    @click="selectedQuestion(index)"
                    class="link"
                  >
                    <!-- <h4>{{ index + 1 }}</h4> -->
                    <h5>{{ question.type }}</h5>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-7 col-md-8">
            <!-- <div class="faq-heading" v-for="faq in faq" :key="faq.id">
              <icons name="info" size="sm" color="theme-color" />
              <div class="faq-option">
                <h3>{{ faq.question }}</h3>
                <h6 class="font-light">
                  {{ faq.answer }}
                </h6>
              </div>
            </div> -->
            <div
              class="faq-heading d-flex justify-content-center"
              v-for="faq in faq.faq"
              :key="faq.id"
            >
              <icons name="arrow-down" size="sm" color="theme-color" />
              <div class="faq-option">
                <h3 class="link question m-0" @click="toggleAnswer(faq)">
                  {{ faq.question }}
                </h3>
                <h6 v-if="faq.clicked" class="font-light">{{ faq.answer }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import FAQTop from '../../components/Section/Elements/Support/FAQTop.vue'
import icons from '../../assets/icons.vue'
import faq from '../../static/DummyData/faq.json'
export default {
  head() {
    return { title: 'FAQ' }
  },
  components: { FAQTop, icons },
  created() {
    this.setBreadcrumbs({ pageParent: null, pageName: null })
  },
  data() {
    return {
      // selectedQuestion: 1,
      faqList: faq.faqList,
      faq: [],
      index: 0,
    }
  },
  created() {
    this.faq = this.faqList.filter((item) => item.indexOf == this.index)[0]
  },
  methods: {
    selectedQuestion(index) {
      console.log('selection', index)
      this.faq = this.faqList.filter((item) => item.indexOf == index)[0]
      console.log(this.faq)
    },
    toggleAnswer(faq) {
      faq.clicked = !faq.clicked // toggle clicked property
    },
  },
}
</script>

<style scoped>
/* .tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
} */

.link {
  cursor: pointer;
}
faq-heading .faq-option h3 {
  margin-top: 0px !important;
}
</style>
