<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
</script>

<template>
  <section class="relative w-full" id="about" data-aos="fade-right">
    <div class="w-full px-5 sm:px-8 ms:px12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
      <div class="grid lg-grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
        <div class="lg:py-4">
          <div class="text-center lg:text-center">
            <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl ">
              About
            </h1>
          </div>
          <p class="text-gray-300 pt-10 text-center lg:text-left mx-auto max-w-4xl">
            <strong>Address:</strong> Trelastgata 21 <br>
            <strong>Floor:</strong> 11th <br>
            <strong>Room:</strong> 1101 <br>
            <strong>Check-in from:</strong> 15:00 <br>
              <strong>Check-out by:</strong> 11:00 <br>
          </p>
        </div>
      </div>
    </div>
  </section>

</template>