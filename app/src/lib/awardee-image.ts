// Placeholder imagery for awardees without a photo: brand-violet SVG initials.
const HONORIFICS = /^(dr|prof|hon|mr|mrs|ms)\.?$/i;

export function initialsOf(name: string): string {
	const parts = name.split(/\s+/).filter((p) => p && !HONORIFICS.test(p));
	if (parts.length === 0) return name.slice(0, 2).toUpperCase();
	const first = parts[0][0];
	const last = parts.length > 1 ? parts[parts.length - 1][0] : (parts[0][1] ?? first);
	return (first + last).toUpperCase();
}

export function placeholderImage(name: string): string {
	const initials = initialsOf(name);
	const svg =
		`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="750" viewBox="0 0 600 750">` +
		`<rect width="600" height="750" fill="#240145"/>` +
		`<circle cx="300" cy="375" r="170" fill="rgba(180,73,220,0.10)"/>` +
		`<circle cx="300" cy="375" r="170" fill="none" stroke="rgba(243,201,105,0.28)" stroke-width="2"/>` +
		`<text x="300" y="379" text-anchor="middle" dominant-baseline="central" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="150" letter-spacing="8" fill="#f3c969">${initials}</text>` +
		`</svg>`;
	const encoded = encodeURIComponent(svg).replace(/['()!*]/g, (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase());
	return `data:image/svg+xml;charset=utf-8,${encoded}`;
}
