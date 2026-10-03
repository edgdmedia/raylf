// RAYLF programmes. Add or edit entries here.
import type { Programme } from "./types";

export const programmes: Programme[] = [
	{
		"id": "raylf-awards",
		"data": {
			"title": "RAYLF Awards",
			"number": "01",
			"label": "Recognition",
			"excerpt": "Recognising young African leaders whose success stories are shaping the continent.",
			"image_url": "/photos/award-presentation-01.jpg",
			"link": "/awards",
			"overview": [
				{
					"_type": "block",
					"style": "normal",
					"children": [
						{
							"_type": "span",
							"text": "The RAYLF Award is one of the world's leading organic and sustainable mechanisms for African young leadership achievement — harnessing, shaping and recognising the ambitions, energies and success stories of millions of 20 to 39-year olds across the globe."
						}
					]
				}
			],
			"details": [],
			"offers": [],
			"moments": []
		}
	},
	{
		"id": "g2g-millionaires",
		"data": {
			"title": "G2G Millionaires",
			"number": "02",
			"label": "Enterprise",
			"excerpt": "A programme equipping young founders to build enduring wealth and enterprise.",
			"image_url": "/photos/award-presentation-02.jpg",
			"link": "/programmes/g2g-millionaires",
			"overview": [
				{
					"_type": "block",
					"style": "normal",
					"children": [
						{
							"_type": "span",
							"text": "G2G Millionaires equips young African founders to build enterprises that last — connecting ambition to capital, mentorship and royal patronage."
						}
					]
				},
				{
					"_type": "block",
					"style": "normal",
					"children": [
						{
							"_type": "span",
							"text": "Participants join a cohort of vetted founders aged 20 to 39, gaining access to structured programmes, networks and convenings under the banner of the Royal African Foundation."
						}
					]
				}
			],
			"details": [
				{
					"key": "For",
					"value": "Founders aged 20–39"
				},
				{
					"key": "Focus",
					"value": "Enterprise & wealth creation"
				},
				{
					"key": "Patronage",
					"value": "The 51st Ooni of Ife"
				}
			],
			"offers": [
				{
					"icon": "fa-solid fa-chalkboard-user",
					"title": "Structured Learning",
					"body": "Workshops and masterclasses on building enduring, continent-scale enterprises."
				},
				{
					"icon": "fa-solid fa-people-group",
					"title": "Cohort & Network",
					"body": "A vetted peer network of young founders, mentors and patrons across the diaspora."
				},
				{
					"icon": "fa-solid fa-crown",
					"title": "Royal Patronage",
					"body": "Recognition and convening under the lineage of the Royal African Foundation."
				}
			],
			"moments": [
				{
					"image_url": "/photos/award-presentation-02.jpg"
				},
				{
					"image_url": "/photos/award-presentation-04.jpg"
				},
				{
					"image_url": "/photos/award-certificate-03.jpg"
				}
			]
		}
	},
	{
		"id": "leadership-forum",
		"data": {
			"title": "Leadership Forum",
			"number": "03",
			"label": "Convening",
			"excerpt": "Convening young leaders under royal patronage to exchange ideas and build networks.",
			"image_url": "/photos/speaker-portrait.jpg",
			"link": "/programmes",
			"overview": [
				{
					"_type": "block",
					"style": "normal",
					"children": [
						{
							"_type": "span",
							"text": "The Leadership Forum convenes young African leaders under royal patronage to exchange ideas, build networks and shape the continent's future."
						}
					]
				}
			],
			"details": [],
			"offers": [],
			"moments": []
		}
	}
];
