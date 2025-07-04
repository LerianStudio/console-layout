import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    styles: "src/styles/globals.css",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  external: [
    "react",
    "react-dom",
    "next",
    "@tanstack/react-query",
    "next-auth",
  ],
  clean: true,
  splitting: true,
  minify: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
    // Configurar loader para SVG como dataurl (inline base64)
    options.loader = {
      ".svg": "dataurl",
    };
  },
});
