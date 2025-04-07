<template>
  <section class="relative w-full" id="checkin" >
    <div class="absolute top-0 inset-x-0 h-64 flex items-start">
      <div class="h-24 w-2/3 bg-gradient-to-br from-[#1f2970] blur-2xl invisible opacity-40"></div>
      <div class="h-20 w-3/5 bg-gradient-to-r from-[#0f174d] opacity-40 blur-2xl"></div>
    </div>
    <div class="w-full px-5 sm:px-8 ms:px12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
      <div class="grid lg-grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
        <div class="lg:py-4">
          <div class="text-center lg:text-center">
            <h1>
              Check-in
            </h1>
          </div>

          <h2>
            Collecting the keys
          </h2>

          <p class="text-gray-300 pt-10 text-left lg:text-left mx-auto max-w-4xl">
            The keys to the apartment are picked up in the 24/7 convenience store “Joker Barcode” located
            roughly halfway between Oslo S and the apartment.
            On the day of your arrival you will receive a code. Just tell the cashier that you wish to pick up
            the keys and provide them with the code.
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
          <div class="w-full md:w-1/2 md:h-[26rem] md:shrink-0 flex justify-center items-center">
            <img
                src="/res/checkin/joker.jpg"
                alt="Joker Store"
                class="w-full h-full object-cover object-left rounded-lg"
            />
          </div>
        </div>

        <p class="text-gray-300 pt-10 text-left lg:text-left mx-auto max-w-4xl">
          You will receive this key:
        </p>

        <div class="flex flex-col md:flex-row items-center justify-center gap-6 px-14 py-2">

          <!-- Image - Keys -->
          <div class="w-full md:w-1/2 md:max-w-[32rem] md:shrink-0 flex justify-center">
            <img
                src="/res/checkin/keys.jpg"
                alt="Keys"
                class="h-full w-full object-cover md:h-full md:w-full rounded-lg"
            />
          </div>

          <!-- Description - Keys  -->
          <div class="w-full md:w-1/2 md:shrink-0 flex justify-center">
            <p class="text-gray-300 pt-10 text-left lg:text-left mx-auto max-w-4xl">
              <strong>The physical key</strong> is the room key for the 11th floor (apartment H1101).<br><br>
              <span class="text-yellow-500 font-semibold">The Yellow Chip</span> is for opening all other doors and using the elevator.<br><br>
              The Black chip is for Joker Barcode and can be ignored.<br>
            </p>
          </div>

        </div>


        <div data-aos="fade-right">

          <h2>
            Entering the Building
          </h2>

          <div class="flex flex-col md:flex-row items-center justify-center gap-6 px-26 py-2">

            <div class="w-full md:w-1/2 md:h-[24rem] md:max-w-[34rem] md:shrink-0 flex justify-center">
              <img
                  src="/res/checkin/main_entrance.png"
                  alt="Main entrance"
                  class="h-full w-full object-cover rounded-lg"
              />
            </div>

            <div class="w-full md:w-1/2 md:h-[24rem] md:max-w-[34rem] md:shrink-0 flex justify-center">
              <img
                  src="/res/checkin/main_door.jpg"
                  alt="Scanner"
                  class="w-full h-full object-cover object-left rounded-lg"
              />
            </div>

          </div>

          <p class="text-gray-300 pt-10 text-left lg:text-left mx-auto max-w-4xl">
            To enter the apartment place the chip to the sensor and hold it there
            for a couple of seconds until the indicator turns green. The door will then open.
          </p>

        </div>

        <div data-aos="fade-right">

          <h2>
            Using the Elevator
          </h2>

          <div class="flex flex-col md:flex-row items-center justify-center gap-6 px-14 py-2">

            <!-- Image - Elevator -->
            <div class="w-full md:w-1/2 md:max-w-[32rem] md:shrink-0 flex justify-center">
              <img
                  src="/res/checkin/elevator.jpg"
                  alt="Elevator"
                  class="h-full w-full object-cover md:h-full md:w-full rounded-lg"
              />
            </div>

            <!-- Description  -->
            <div class="w-full md:w-1/2 md:shrink-0 flex justify-center">
              <p class="text-gray-300 pt-10 text-left lg:text-left mx-auto max-w-4xl">
                To use the elevator place the chip on the sensor pictured above, and then press the 11th floor.
                (The chip does not need to be used when returning to the first floor)
              </p>
            </div>

          </div>


        </div>

        <div data-aos="fade-right">

          <h2>
            Entering the Apartment
          </h2>

          <div class="flex flex-col md:flex-row items-center justify-center gap-6 px-26 py-2">

            <div class="w-full md:w-1/2 md:h-[24rem] md:max-w-[34rem] md:shrink-0 flex justify-center">
              <img
                  src="/res/checkin/hallway.jpg"
                  alt="Hallway"
                  class="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div class="w-full md:w-1/2 md:h-[24rem] md:max-w-[34rem] md:shrink-0 flex justify-center">
              <img
                  src="/res/checkin/doorbell.jpg"
                  alt="Apartment Door"
                  class="h-full w-full object-cover rounded-lg"
              />
            </div>

        </div>

          <p class="text-gray-300 pt-10 text-left lg:text-left mx-auto max-w-4xl">
            The apartment is located at the end of the hallway to the left. The doorbell is labelled: <br>
            “ <br>
            Trelastgata 21 <br>
            H1101<br>
            ”<br>

            Use the physical key to unlock this door. Inside the apartment you will find additional keys
            on the table as well as the wifi password.

          </p>

        </div>


      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>