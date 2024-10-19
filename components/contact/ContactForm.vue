
<template>
  <section id="contact" class="contact-area">
    <div class="container">
      <div class="container-inner">
        <div class="row">
          <!-- START CONTACT FORM DESIGN AREA -->
          <div class="col-lg-12">
            <ul class="extra-skills wow fadeInUp delay-0-2s pb-30">
              <li>
                <i class="ri-building-2-line"></i>Dom: Tangerang, Indonesia
              </li>
              <li>
                <i class="ri-mail-open-line"></i>Email:abdul[dot]createit[at]gmail[dot]com
              </li>
            </ul>
            <div class="contact-form contact-form-area wow fadeInUp delay-0-4s">
              <form
                id="contactForm"
                class="contactForm"
                name="contactForm"
                @submit.prevent="submitForm" data-formtrack
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="form-control"
                        v-model="full_name"
                        placeholder="Your Name" 
                        data-error="Please enter your Name"
                        required
                      />
                      <label for="name" class="for-icon"
                        ><i class="far fa-user"></i
                      ></label>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="form-control"
                        v-model="email"
                        placeholder="hello@websitename.com" 
                        data-error="Please enter your Email"
                        required
                      />
                      <label for="email" class="for-icon"
                        ><i class="far fa-envelope"></i
                      ></label>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="message">Your Message</label>
                      <textarea
                        name="message"
                        id="message"
                        class="form-control"
                        v-model="message"
                        rows="4"
                        placeholder="Write Your message" 
                        data-error="Please Write your Message"
                        required
                      ></textarea>
                      <div class="help-block with-errors"></div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group mb-0">
                      <button type="submit" class="theme-btn">
                        Send Me Message <i class="ri-mail-line"></i>
                      </button>
                      <div id="msgSubmit" class="hidden"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- / END CONTACT FORM DESIGN AREA -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
const FORMSPARK_ACTION_URL = "https://submit-form.com/NlXXISRs9";

export default {
  name: "contact-me",
  data() {
    return {
      date: new Date(),
      isCardModalActive: false,
      full_name: "",
      email: "",
      message: "",
      _email: {
        subject: 'You have a new leads from Abdul Website',
        from: 'Abdul Gofur\'s Portfolio Website',
        template: {
          title: 'You have a new leads from Abdul Website',
          footer: 'false',
        }
      }  
    };
  },
  props: ["data"],
  head() {
    return {
      title:"Abdul Gofur | Web Development Manager & Software Engineer",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Explore Abdul Gofur's portfolio showcasing innovative web solutions, project management expertise, and software engineering skills. Discover how I drive digital transformation and enhance user experiences through cutting-edge technologies.",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Abdul Gofur | Web Development Manager & Software Engineer",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "Abdul Gofur's Portfolio",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "Explore Abdul Gofur's portfolio showcasing innovative web solutions, project management expertise, and software engineering skills. Discover how I drive digital transformation and enhance user experiences through cutting-edge technologies.",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://abdulgofur.vercel.app/contact",
        },
      ],
    };
  },
  methods: {
    async submitForm() {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
          body: JSON.stringify({
          full_name: this.full_name,
          email: this.email,
          message: this.message,
        }),
        _email: {
        subject: 'You have a new leads on Abdul Website',
        from: 'Abdul Gofur\'s Portfolio Website',
        template: {
          title: 'You have a new leads on Abdul Website',
          footer: 'false',
        }
      }
      });
      this.$router.push("/thank-you");
    },
  },
};
</script>
 