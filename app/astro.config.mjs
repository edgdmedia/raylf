import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";

export default defineConfig({
	// Fully static: every page is built here and served as an asset.
	// Content lives in src/data/ — edit a file, push, deploy.
	adapter: cloudflare(),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	devToolbar: { enabled: false },
});
