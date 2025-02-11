// vite.config.ts
import { defineConfig } from "vite";

import tailwindcss from "@tailwindcss/vite"; // Tailwind CSS 플러그인
import react from "react";

export default defineConfig({
  plugins: [react(), tailwindcss()], // 리액트와 Tailwind CSS 플러그인 적용
});
