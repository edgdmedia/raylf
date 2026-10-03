// Shared content types. `id` is the URL slug used by dynamic pages.

export type PortableTextBlock = {
	_type: "block";
	style?: string;
	children: { _type: "span"; text: string; marks?: string[] }[];
};

export type Entry<T> = { id: string; data: T };

export type Programme = Entry<{
	title: string;
	number: string | null;
	label: string | null;
	excerpt: string | null;
	image_url: string | null;
	link: string | null;
	overview: PortableTextBlock[];
	details: { key: string; value: string }[];
	offers: { icon: string; title: string; body: string }[];
	moments: { image_url: string }[];
}>;

export type Edition = Entry<{
	title: string;
	year: string;
	tag: string | null;
	location: string | null;
	venue: string | null;
	date: string | null;
	intro: string | null;
	image_url: string | null;
	summary: PortableTextBlock[];
	upcoming: boolean;
	stats: { v: string; l: string }[];
	team: { role: string; name: string }[];
}>;

export type Awardee = Entry<{
	title: string;
	category: string | null;
	role: string | null;
	country: string | null;
	year: string | null;
	photo_url: string | null;
	photo_position: string | null;
	citation: string | null;
}>;

export type GalleryPhoto = Entry<{
	title: string;
	image_url: string;
	album: string | null;
	span: boolean;
}>;

export type MenuItem = { label: string; url: string };
