<script setup>

</script>

<template>
  <div class="flex flex-col md:flex-row items-center justify-center gap-3 px-2 py-8">
    <!-- Map (40% width on md and up) -->
    <div class="w-full md:w-1/2">
      <GMapMap
          :center="{ lat: 59.9095, lng: 10.75778 }"
          :zoom="16"
          map-type-id="roadmap"
          style="width: 100%; height: 33rem"
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
    <div class="h-full md:w-1/2 flex justify-center">
      <img
          src="/res/checkin/joker.jpg"
          alt="Banner Image"
          class="w-full h-auto object-contain"
      />
    </div>
  </div>
</template>

<style scoped>

</style>