import node from "@astrojs/node";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import emdash, { local } from "emdash/astro";
import { sqlite } from "emdash/db";

export default defineConfig({
	output: "server",
	adapter: node({ mode: "standalone" }),
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
			database: sqlite({ url: "file:./data.db" }),
			storage: local({
				directory: "./uploads",
				baseUrl: "/_emdash/api/media/file",
			}),
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
