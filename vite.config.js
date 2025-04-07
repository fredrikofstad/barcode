import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
      vue(),
      tailwindcss(),
    ],
    optimizeDeps: {
        include: [
            "@fawmi/vue-google-maps",
            "fast-deep-equal",
        ],
    },
    base: "./"
})
