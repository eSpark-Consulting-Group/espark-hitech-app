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
                  <a v-for="(question, index) in faqList" :key="index">
                    <h4>{{ index + 1 }}</h4>
                    <h5>{{ question.question }}</h5>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-7 col-md-8">
            <div class="faq-heading" v-for="faq in faqList" :key="faq.id">
              <icons name="info" size="sm" color="theme-color" />
              <div class="faq-option">
                <h3>{{ faq.question }}</h3>
                <h6 class="font-light">
                  {{ faq.answer }}
                </h6>
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
      faqList: [
        {
          id: 1,
          question: 'How does it work?',
          answer:
            'When choosing a static caravan you will probably look for the holiday park which meets your requirements and the move onto the caravan selection the right holiday park is vital to ensure a long term ownership.',
        },
        {
          id: 2,
          question: 'Another very important question in FAQ?',
          answer:
            'Now for yhe caravan and looking for the right caravan to suit your needs. Most of the parks will deal with majority of the manufactures. If buying directly from the park you will probably deal with a salesperson instead of direct with the manufactures. You Can collect brochures direct from the manufactures. you can collect brochures direct from the manufactures to research all the models and specifications which will not only ensure you choose the correct model but also help you to understand what to look for and choice of different modals. To see the caravan you can vixit them at key caravan exhibitions as most top manufactures will display there, see events.',
        },
        {
          id: 3,
          question: 'Another important quesstion in FAQ?',
          answer:
            'The static holiday caravan has been designed for holiday use instead of full time living. With its modern construction and use of high quality materials the static caravan should be built to British and European standard: BS EN 1647 but some luxury caravans are built to BS 3632 confirming to residential standards.',
        },
        {
          id: 4,
          question: 'Another  quesstion in FAQ?',
          answer:
            'Normal static caravan can come in either one or two sectiond with width up to 22ft and 60ft long. If you have a one piece model this is a single unit and the two piece is known as a twin and usually assembled on site.',
        },
        {
          id: 5,
          question: 'Another very important quesstion in FAQ?',
          answer:
            'Decide on how many bedrooms you require as most caravans can be from 2 to 4 bedrooms but up to eight berths. manufactures will normally have their own layout but will offer but will a number of ranges depending on your budget.',
        },
        {
          id: 6,
          question: 'Another question in FAQ?',
          answer:
            'The static holiday caravan has been designed for holiday use instead of full time living. With its modern construction and use of high quality materials the static caravan should be built to British and European standard: BS EN 1647 but some luxury caravans are built to BS 3632 confirming to residential standards.',
        },
      ],
    }
  },
}
</script>
