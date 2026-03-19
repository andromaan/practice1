import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // Закоментуйте або видаліть рядок нижче, якщо деплоїте на сайтах, які працюють від кореня домену (наприклад, Vercel)
  // base: "/practice1/",
  plugins: [react()],
});
