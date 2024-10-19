

<template>
  <section class="call-to-action-area">
    <div class="container">
      <div class="row">
        <!-- START ABOUT TEXT DESIGN AREA -->
        <div class="col-lg-12">
          <div class="call-to-action-part wow fadeInUp delay-0-2s text-center">
            <h2>Are You Ready to kickstart your project?</h2>
            <p>
              Reach out and {{"let's"}} make it happen ✨. {{"I'm"}} also available for
              full-time or Part-time opportunities to push the boundaries of
              design and deliver exceptional work.
            </p>
            <div class="hero-btns">
              <NuxtLink to="/contact" class="theme-btn call-to-action-button" @click="trackEvent"
                >{{"Let's"}} Talk <i class="ri-download-line"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
        <!-- / END ABOUT TEXT DESIGN AREA -->
      </div>
    </div>
  </section>
</template>
 
<script setup>
function trackEvent() {
  window.gtag('event', 'button_click', {
    event_category: 'interaction',
    event_label: 'Lets Talk',
    value: 1,
  })
}
</script>