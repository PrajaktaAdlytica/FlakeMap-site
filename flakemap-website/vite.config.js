import { defineConfig } from "vite";
export default defineConfig({
  ssr: { noExternal: ["gsap", "lenis"] },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("/gsap/") || id.includes("/lenis/")) return "motion";
        },
      },
    },
  },
});
