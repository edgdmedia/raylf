// Site-wide metadata used in the document head.
export const siteSettings = {
	title: "RAYLF — Royal African Young Leadership Forum",
	description: "A place for Africa's young leaders.",
	// Google Analytics 4 Measurement ID (looks like "G-1Z2ABC3DEF").
	// Find it in GA Admin → Property → Data Streams → your stream.
	// Leave empty ("") to disable analytics entirely.
	googleAnalyticsId: "",
	// Cloudflare Web Analytics site token (raylf.org site, auto-install does
	// not inject into Workers-served pages, so the snippet is added manually
	// in Base.astro). Reports: dash.cloudflare.com → Web Analytics.
	cloudflareWebAnalyticsToken: "7250bee57a2346feac09cb71a2e6e97f",
};
