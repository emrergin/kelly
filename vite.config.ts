// @ts-nocheck

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/kelly/",
  plugins: [
    react(),
    Unocss({
      shortcuts: {
        btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
      },
      rules: [
        [/^wp-(\d+)$/, ([, d]) => ({ width: `${d}%` })],
        [/^hp-(\d+)$/, ([, d]) => ({ height: `${d}%` })],
        [/^leftp-(\d+)$/, ([, d]) => ({ left: `${d}%` })],
        ["wmax-ch60", { "max-width": "60ch" }],
        ["chart", { width: "min(80ch,98vw)" }],
        ["main-container", { "max-width": "150ch" }],
      ],
      safelist: [
        ...Array.from({ length: 100 }, (_, i) => `wp-${i + 1}`),
        ...Array.from({ length: 100 }, (_, i) => `hp-${i + 1}`),
        ...Array.from({ length: 100 }, (_, i) => `leftp-${i + 1}`),
      ],
    }),
  ],
});
