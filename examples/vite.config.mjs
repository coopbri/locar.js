import { defineConfig } from "vite";
import { resolve } from "path";
import mkcert from "vite-plugin-mkcert";

const entries = { main: "index.html" };
[
  "01-helloworld",
  "02-gps-and-sensors",
  "03-api-communication",
  "04-aframe",
  "05-aframe-js",
  "06-aframe-api-comm",
  "devorient",
].forEach((example) => {
  entries[example] = resolve(__dirname, `${example}/index.html`);
});

export default defineConfig({
  base: "/locar.js",
  plugins: [mkcert()],
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  build: {
    outDir: "../docs",
    rollupOptions: {
      input: entries,
    },
  },
});
