<script setup>

import {defineAsyncComponent} from "vue";

const Nav = defineAsyncComponent(()=>import("./components/Nav.vue"))
const About = defineAsyncComponent(()=>import("./components/About.vue"))
const Checkin = defineAsyncComponent(()=>import("./components/Checkin.vue"))
const Checkout = defineAsyncComponent(()=>import("./components/Checkout.vue"))
const HouseRules = defineAsyncComponent(()=>import("./components/HouseRules.vue"))
const Footer = defineAsyncComponent(()=>import("./components/Footer.vue"))
const BackTop = defineAsyncComponent(()=>import("./components/BackTop.vue"))

import Loading from "./components/Loading.vue";

</script>

<template>
  <div class="bg-night min-h-screen">
    <suspense>
      <template #default>
        <div>
          <Nav />
          <About />
          <Checkin />
          <Checkout />
          <HouseRules />
          <Footer />
          <BackTop />
        </div>
      </template>
      <template #fallback>
        <div class="flex justify-center items-center min-h screen">
          <Loading/>
        </div>

      </template>
    </suspense>

  </div>

</template>

