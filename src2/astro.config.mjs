import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";
import { d1 } from "@emdash-cms/cloudflare";

export default defineConfig({
	output: "server",
	adapter: cloudflare({
		platformProxy: { enabled: true },
	}),
	redirects: {
		"/admin": "/_emdash/admin/",
	},
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: d1({ binding: "DB", session: "auto" }),
			// R2 storage omitted until R2 is enabled on the account; all site
			// imagery is served from static assets via url fields.
			admin: {
				logo: "/favicon.png",
				siteName: "RAYLF CMS",
				footerLabel: "EDGD Media",
				favicon: "/favicon.png",
			},
		}),
	],
	devToolbar: { enabled: false },
});
