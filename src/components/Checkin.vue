<script setup>
import AOS from 'aos';
import 'aos/dist/aos'
AOS.init();
</script>

<template>
  <section class="relative w-full" data-aos="zoom-in-up">
    <div class="absolute top-0 inset-x-0 h-64 flex items-start">
      <div class="h-24 w-2/3 bg-gradient-to-br from-[#1f2970] blur-2xl invisible opacity-40"></div>
      <div class="h-20 w-3/5 bg-gradient-to-r from-[#0f174d] opacity-40 blur-2xl"></div>
    </div>
    <div class="w-full px-5 sm:px-8 ms:px12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
      <div class="grid lg-grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
        <div class="lg:py-4">
          <div class="text-center lg:text-center">
            <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl ">
              Self Check-in
            </h1>
          </div>
          <p class="text-gray-300 pt-10 text-left lg:text-left mx-auto max-w-4xl">
            The keys to the apartment are picked up in the 24/7 convenience store “Joker Barcode” located
            roughly halfway between Oslo S and the apartment.
            On the day of your arrival you will receive a code. Just tell the cashier that you wish to pick up
            the keys and provide them with the code. You will receive this key:
          </p>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-center gap-3 px-8 py-2">
          <!-- Map  -->
          <div class="w-full md:w-1/2">
            <GMapMap
                :center="{ lat: 59.9095, lng: 10.75778 }"
                :zoom="15.5"
                map-type-id="roadmap"
                style="width: 100%; height: 26rem"
                :options="{
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: true,
          rotateControl: true,
          fullscreenControl: true,
          clickableIcons: false
        }"
            />
          </div>

          <!-- Image (60% width on md and up) -->
          <div class="w-full md:w-1/2 md:shrink-0 flex justify-center">
            <img
                src="/res/checkin/joker.jpg"
                alt="Joker Store"
                class="h-full w-full object-cover md:h-full md:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>