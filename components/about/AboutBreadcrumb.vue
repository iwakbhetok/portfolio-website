

<script setup>
 
import CountUp from 'vue-countup-v3'

const counter_data = [
  { id: 1, symble: "plus", count: 8, title: "Years Of Experience" },
  { id: 2, symble: "plus", count: 20, title: "Complete Projects" },
  { id: 3, symble: "plus", count: 15, title: "Client Satisfactions" },
  { id: 4, symble: "plus", count: 99, title: "Cup of coffee" },
];

</script>


<template>
  <ClientOnly>
  <section  class="single-page-hero-area">
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-12">
          <h2>About me</h2>
          <p>
            with over 10 years of dedicated experience, 
            I have honed my expertise in designing and implementing web products that not only meet user needs but also drive significant business outcomes. 
          </p>
        </div>
      </div>
      <div class="row"> 
        <div v-for="(item, i) in counter_data" :key="i" class="col-6 col-lg-3">
          <div class="hero-counter-area wow fadeInUp delay-0-4s">
            <div class="counter-item counter-text-wrap">
              <count-up
                :end-val="item.count"
                :class="`d-inline count-text ${item.symble}`"
              ></count-up> 
              <!-- {{ item.symble }} -->
              <span class="counter-title">{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</ClientOnly>
</template>

 