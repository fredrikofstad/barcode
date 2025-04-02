<script setup>

import {defineAsyncComponent} from "vue";

const Nav = defineAsyncComponent(()=>import("./components/Nav.vue"))
const Checkin = defineAsyncComponent(()=>import("./components/Checkin.vue"))
const Footer = defineAsyncComponent(()=>import("./components/Footer.vue"))
const BackTop = defineAsyncComponent(()=>import("./components/BackTop.vue"))

import Loading from "./components/Loading.vue";

</script>

<template>
  <div class="bg-[#111827] min-h-screen">
    <suspense>
      <template #default>
        <div>
          <Nav />
          <Checkin />
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

