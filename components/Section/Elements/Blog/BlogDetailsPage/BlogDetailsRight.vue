<template>
  <div class="col-xl-9 col-lg-8 order-lg-1 ratio_square">
    <div class="row g-4">
      <div class="col-12">
        <div class="blog-details">
          <div class="blog-image-box">
            <img
              src="~assets/images/inner-page/product/10.jpg"
              alt=""
              class="card-img-top"
            />
            <div class="blog-title">
              <div>
                <div class="social-media media-center">
                  <a href="https://www.facebook.com/" target="new">
                    <div class="social-icon-box social-color">
                      <i class="fab fa-facebook-f"></i>
                    </div>
                  </a>
                  <a href="https://twitter.com/" target="new">
                    <div class="social-icon-box social-color">
                      <i class="fab fa-twitter"></i>
                    </div>
                  </a>
                  <a href="https://in.pinterest.com/" target="new">
                    <div class="social-icon-box social-color">
                      <i class="fab fa-pinterest-p"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="blog-detail-contain">
            <span class="font-light">August 15 2021</span>
            <h2 class="card-title">{{ Blogtitle }}</h2>
            <p class="font-light firt-latter">
              {{ BlogDesp1 }}
            </p>

            <p class="font-light">
              {{ BlogDesp2 }}
            </p>

            <p class="font-light">
              {{ BlogDesp3 }}
            </p>
          </div>
        </div>
        <div class="blog-profile box-center mb-lg-5 mb-4">
          <div class="image-profile">
            <img
              src="~assets/images/inner-page/review-image/2.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="image-name text-weight">
            <h3>{{ Johnwick }}</h3>
            <h6>{{ date }}</h6>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-12">
            <div class="minus-spacing mb-2">
              <h3>{{ LeaveComments }}</h3>
            </div>
          </div>
          <div class="col-lg-4">
            <label for="fname" class="form-label">{{ FirstName }}</label>
            <input
              type="text"
              class="form-control"
              id="fname"
              placeholder="Enter First Name"
              required
            />
          </div>
          <div class="col-lg-4">
            <label for="lname" class="form-label">{{ LastName }}</label>
            <input
              type="text"
              class="form-control"
              id="lname"
              placeholder="Enter Last Name"
              required
            />
          </div>

          <div class="col-lg-4">
            <label for="email" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="example@example.com"
              required
            />
          </div>

          <div class="col-12">
            <label for="textarea" class="form-label">{{ Comments }}</label>
            <textarea
              rows="3"
              class="form-control"
              id="textarea"
              placeholder="Leave a comment here"
              required
            ></textarea>
          </div>

          <div class="col-12">
            <button
              type="submit"
              class="btn btn-solid-default btn-spacing mt-2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Johnwick: 'John wick',
      FirstName: 'First Name',
      LastName: 'Last Name',
      date: '15 Aug 2021',
      LeaveComments: 'Leave Comments',
      Comments: 'Comments',
      Blogtitle: 'Just a Standard Format Post.',
      BlogDesp1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s.looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.",
      BlogDesp2:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latinprofessor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classicalliterature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproducedin their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      BlogDesp3:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normaldistribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum astheir default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes onpurpose injected humour and the like.",
    }
  },
  computed: {
    // blogData() {
    //   return this.$store.state.blogData.data;
    // },
  },
}
</script>
