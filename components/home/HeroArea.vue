
<template>
  <section id="home" class="main-hero-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4">
          <div class="glitch">
            <img src="/assets/images/about/me.webp" alt="About Me" />
            <div class="glitch__layers">
              <div class="glitch__layer"></div>
              <div class="glitch__layer"></div>
              <div class="glitch__layer"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <!-- START HERO DESIGN AREA -->
          <div class="hero-content wow fadeInUp delay-0-2s">
            <h1>
              I am Web Development Manager, Freelancer and digital nomad living in
              internet.
            </h1>
            <h2>
              Hi, {{ "i'm" }} Abdul {{ "i'm" }} an Developer
              with 10+ years of experience focusing on Web development and Software development.
            </h2>
            <div class="hero-btns">
              <NuxtLink to="/contact" class="theme-btn" @click="trackEvent"
                >Download CV
                <i class="ri-download-line"></i>
              </NuxtLink>
            </div>
          </div>
          <!-- / END HERO DESIGN AREA -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
function trackEvent() {
  window.gtag('event', 'button_click', {
    event_category: 'interaction',
    event_label: 'Download CV',
    value: 1,
  })
}

</script>
