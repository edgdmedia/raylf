// Navigation menus. `primary` is the header, `footer` the Important Links list.
import type { MenuItem } from "./types";

export const menus: Record<"primary" | "footer", MenuItem[]> = {
	"primary": [
		{
			"label": "Home",
			"url": "/"
		},
		{
			"label": "About",
			"url": "/about"
		},
		{
			"label": "Programmes",
			"url": "/programmes"
		},
		{
			"label": "Awards",
			"url": "/awards"
		},
		{
			"label": "Gallery",
			"url": "/gallery"
		}
	],
	"footer": [
		{
			"label": "Royal African Foundation",
			"url": "#"
		},
		{
			"label": "Ooni of Ife Global Outreach",
			"url": "#"
		},
		{
			"label": "About Ooni of Ife",
			"url": "#"
		}
	]
};
