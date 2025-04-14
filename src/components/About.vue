<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
</script>

<template>
  <section class="relative w-full" id="about" data-aos="fade-up">
    <div class="w-full px-5 sm:px-8 ms:px12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
      <div class="grid lg-grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
        <div class="lg:py-4">
          <div class="text-center lg:text-center">
            <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl ">
              About
            </h1>
          </div>

          <div class="flex flex-col md:flex-row justify-center gap-10 px-14 py-2">

            <!-- Basic Info -->
            <div class="w-full md:w-1/2 md:max-w-[32rem] md:shrink-0">
              <h3>Basic Information</h3>
              <p class="text-gray-300 pt-10 text-center lg:text-left mx-auto max-w-4xl">
                <strong>Address:</strong> Trelastgata 21 <br>
                <strong>Floor:</strong> 11th <br>
                <strong>Room:</strong> 1101 <br>
                <strong>Check-in from:</strong> 15:00 <br>
                <strong>Check-out by:</strong> 11:00 <br><br>
                <strong>Pick up keys at:</strong> Joker Barcode,<br> Dronning Eufemias gate 6B<br>
              </p>
            </div>

            <!-- House Rules  -->
            <div class="w-full md:w-1/2 md:shrink-0 mx-auto">
              <h3>Building Rules</h3>
              <p class="text-gray-300 pt-10 text-left mx-auto max-w-4xl">
                1. Quiet hours between 23:00 og 07:00. <br><br>
                2. When playing music or watching TV, windows and doors to the balcony should be closed
                in order to not bother others. <br><br>
                3. Pets are not allowed on the roof terrace and must be leashed when in the hallways and other
                public areas of the building.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>

</template>