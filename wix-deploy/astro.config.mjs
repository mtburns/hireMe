import { defineConfig } from "astro/config";
import wix from "@wix/astro";
import wixPages from "@wix/astro-pages";
import react from "@astrojs/react";
import wixHostingAdapter from "@wix/astro-wix-hosting-adapter";

// The frontend is already compiled by Next.js and is copied into public/.
// Wix's original Astro integrations provide its deployment metadata and hosting.
export default defineConfig({
  integrations: [wix(), wixPages(), react()],
  security: { checkOrigin: false },
  adapter: wixHostingAdapter(),
  image: { domains: ["static.wixstatic.com"] },
  output: "server",
});
