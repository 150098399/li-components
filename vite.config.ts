import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/li-components/',
  plugins: [vue(), vueJsx()],
  server: {
    port: 8080,
  },
});
