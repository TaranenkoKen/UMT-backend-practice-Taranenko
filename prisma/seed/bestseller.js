export const bestsellers = [
	{
		title: 'Spring Elegance',
		price: '35',
		img: 'images/spring-elegance@1x.png',
		desc: 'A delicate blend of peonies, tulips, and roses — perfect for springtime gifting and bright smiles.',
	},
	{
		title: 'Berry Chic',
		price: '40',
		img: 'images/berry-chic@1x.png',
		desc: 'A stylish composition of roses, seasonal greenery, and vibrant berries — a bold and elegant floral statement.',
	},
	{
		title: 'Lavender Dream',
		price: '55',
		img: 'images/lavender-dream@1x.png',
		desc: 'A rich bouquet with lavender, lisianthus, and roses — ideal for those who love deep hues and gentle fragrance.',
	},
	{
		title: 'Midnight Garden',
		price: '98',
		img: 'https://ftp.goit.study/img/flowers/68498236a1003120786.png',
		desc: 'A spellbinding bouquet of indigo delphiniums, silvery moonlit eucalyptus, and deep violet lisianthus. This enchanting arrangement evokes the mysterious beauty of a midnight garden under starlit skies.',
	},
	{
		title: 'Sunlit Italian Meadow',
		price: '62',
		img: 'https://ftp.goit.study/img/flowers/68498236a1003120787.png',
		desc: 'Capture the golden warmth of Tuscany with a radiant bouquet of sunny chamomile, vivid wild poppies, blue cornflowers, and fragrant sprigs of Italian greenery. A breath of countryside bliss.',
	},
	{
		title: 'Velvet Twilight',
		price: '98',
		img: 'https://ftp.goit.study/img/flowers/68498236a1003120788.png',
		desc: 'A sumptuous nocturne of velvety burgundy peonies, plum dahlias, and soft blue thistle, artfully woven with dusky foliage. This bouquet evokes the allure and mystery of evening’s embrace.',
	},
	{
		title: 'Retro Mod Bouquet',
		price: '88',
		img: 'https://ftp.goit.study/img/flowers/68498236a1003120802.png',
		desc: 'A bold celebration of pop-art style, this bouquet features vibrant dahlias, striking graphic mums, and playful accents in electric pink, citrus orange, and lemon yellow. The ultimate statement piece.',
	},
	{
		title: 'Firelight Embrace',
		price: '102',
		img: 'https://ftp.goit.study/img/flowers/68498236a1003120803.png',
		desc: 'Rich wine-hued peonies and smoldering copper foliage unite in this luxurious bouquet, echoing the golden glow and warmth of a firelit evening. Bold, romantic, utterly captivating.',
	},
	{
		title: 'Stained Glass Spectrum',
		price: '110',
		img: 'https://ftp.goit.study/img/flowers/68498236a1003120809.png',
		desc: 'A dazzling display of vivid color blocks featuring radiant tulips, electric blue delphiniums, golden ranunculus, and bold magenta orchids—this bouquet evokes the mesmerizing artistry of stained glass windows.',
	},
	{
		title: "Painter's Muse",
		price: '92',
		img: 'https://ftp.goit.study/img/flowers/68498236a1003120810.png',
		desc: 'A vivid masterpiece of lush coral peonies, striking teal-tinted hydrangeas, and golden yellow ranunculus. Designed to ignite creativity, this bouquet brings the artist’s palette to life.',
	},
];

export async function seedBestsellers(prisma) {
	await prisma.bestseller.createMany({ data: bestsellers });
	return bestsellers.length;
}
