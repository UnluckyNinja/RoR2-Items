interface ItemDescription {
	id: number;
	rarity: import('./definition').Rarity;
	stringRarity: string;
	uid: string;
	name: string;
	tags: string;
	image: string;
	description: string;
	unlock?: string;
}

type RawItemDescription = [
	id: number,
	rarity: import('./definition').Rarity,
	uid: string,
	name: string,
	tags: string,
	image: string,
	description: string,
	unlock?: string
];
