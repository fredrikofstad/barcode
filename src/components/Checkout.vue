
<template>
  <section class="relative w-full" id="checkout" data-aos="fade-right">

    <div class="w-full px-5 sm:px-8 ms:px12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
      <div class="grid lg-grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
        <div class="lg:py-4">
          <div class="text-center lg:text-center">
            <h1>
              Check-out
            </h1>
          </div>
          <p class="text-gray-300 pt-10 text-left lg:text-left mx-auto max-w-4xl">
            To check out please leave all the keys in the apartment except the blue key. Lock the door
            and on the first floor slip the blue key into the mailbox labeled “Fredrik Ofstad  H1101” (bottom left).
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row items-center justify-center gap-6 px-30 py-2">

      <!-- Image -Mailboxes -->
      <div class="w-full md:w-1/2 md:h-[24rem] md:max-w-[32rem] md:shrink-0 flex justify-center">
        <img
            src="/res/checkout/mailboxes.jpg"
            alt="Mailboxes"
            class="h-full w-full object-cover rounded-lg"
        />
      </div>

      <!-- Image - Mailbox -->
      <div class="w-full md:w-1/2 md:h-[24rem] md:max-w-[32rem] md:shrink-0 flex justify-center">
        <img
            src="/res/checkout/mailbox.jpg"
            alt="Mailbox"
            class="h-full w-full object-cover rounded-lg"
        />
      </div>

    </div>
  </section>
</template>
<script setup lang="ts">
</script>