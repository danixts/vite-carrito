import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteComponent from "vite-plugin-components";

export default defineConfig({
  plugins: [vue(), ViteComponent()],
});
