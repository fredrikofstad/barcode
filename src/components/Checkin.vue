<script setup>
import AOS from 'aos';
import 'aos/dist/aos'
AOS.init();
</script>

<template>
  <section class="relative w-full" data-aos="zoom-in-up">
    <div class="absolute top-0 inset-x-0 h-64 flex items-start">
      <div class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"></div>
      <div class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opacity-40 blur-2xl"></div>
    </div>
    <div class="w-full px-5 sm:px-8 ms:px12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
      <div class="grid lg-grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
        <div class="lg:py-6">
          <div class="text-center lg:text-left">
            <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
              Checking in at <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
              Barcode
            </span>
            </h1>
          </div>
          <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">
            The keys to the apartment are picked up in the 24/7 convenience store “Joker Barcode” located
            roughly halfway between Oslo S and the apartment.
            On the day of your arrival you will receive a code. Just tell the cashier that you wish to pick up
            the keys and provide them with the code. You will receive this key:
          </p>
        </div>
      </div>
    </div>
  </section>
</template>