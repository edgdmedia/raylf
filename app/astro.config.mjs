import cloudflare from "@astrojs/cloudflare";
import { defineConfig } from "astro/config";

export default defineConfig({
	// Fully static: every page is built here and served as an asset.
	// Content lives in src/data/ — edit a file, push, deploy.
	adapter: cloudflare({ imageService: "compile" }),
	// Static site: no sessions, no runtime image binding — keeps the
	// deployed worker free of SESSION KV and IMAGES bindings.
	session: false,
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	devToolbar: { enabled: false },
});
