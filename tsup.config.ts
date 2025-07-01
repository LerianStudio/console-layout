import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    styles: "src/styles/globals.css",
    svg: "src/public/svg/lerian-logo.svg",
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
  loader: {
    ".svg": "file",
  },
  esbuildOptions(options) {
    options.assetNames = "assets/[name][ext]";
    options.banner = {
      js: '"use client"',
    };
  },
});
