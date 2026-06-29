export const feedbacks = [
	{
		id: 1,
		text: 'Flora made my anniversary unforgettable with their beautiful arrangement!',
		author: 'Emma T.',
	},
	{
		id: 2,
		text: 'Absolutely stunning bouquet! It looked even better than the photo and arrived right on time.',
		author: 'Daniel R.',
	},
	{
		id: 3,
		text: 'The service was exceptional, and the flowers were fresh!',
		author: 'Olivia M.',
	},
	{
		id: 4,
		text: 'The flowers were gorgeous and lasted much longer than I expected.',
		author: 'Sophia W.',
	},
	{
		id: 5,
		text: 'Excellent quality and fast delivery. I will definitely order again.',
		author: 'James K.',
	},
	{
		id: 6,
		text: "The bouquet was beautifully arranged and brought a huge smile to my mother's face.",
		author: 'Charlotte P.',
	},
	{
		id: 7,
		text: 'Ordering was easy, and the flowers arrived fresh and vibrant.',
		author: 'Michael B.',
	},
	{
		id: 8,
		text: 'Amazing customer service and a truly stunning floral arrangement.',
		author: 'Ava L.',
	},
	{
		id: 9,
		text: 'The bouquet exceeded my expectations in every way.',
		author: 'Ethan S.',
	},
	{
		id: 10,
		text: 'Beautiful flowers, elegant packaging, and prompt delivery.',
		author: 'Mia C.',
	},
	{
		id: 11,
		text: 'I ordered flowers for a birthday, and they were absolutely perfect.',
		author: 'Noah J.',
	},
	{
		id: 12,
		text: 'The arrangement looked fresh, colorful, and professionally designed.',
		author: 'Isabella F.',
	},
	{
		id: 13,
		text: 'Reliable service and beautiful flowers every time.',
		author: 'Liam D.',
	},
	{
		id: 14,
		text: "The recipient loved the bouquet and couldn't stop talking about it.",
		author: 'Amelia H.',
	},
	{
		id: 15,
		text: 'Fantastic experience from start to finish. Highly recommended!',
		author: 'Benjamin G.',
	},
	{
		id: 16,
		text: 'Fresh flowers, lovely presentation, and excellent communication.',
		author: 'Harper N.',
	},
	{
		id: 17,
		text: 'The bouquet arrived exactly as pictured and smelled wonderful.',
		author: 'Lucas V.',
	},
	{
		id: 18,
		text: 'Great selection of flowers and very reasonable prices.',
		author: 'Evelyn Y.',
	},
	{
		id: 19,
		text: 'Every detail of the arrangement was carefully crafted.',
		author: 'Henry A.',
	},
	{
		id: 20,
		text: 'The flowers added a special touch to our celebration.',
		author: 'Ella R.',
	},
	{
		id: 21,
		text: 'Quick delivery and flowers that stayed fresh for over a week.',
		author: 'Alexander M.',
	},
	{
		id: 22,
		text: 'The colors and fragrance of the bouquet were absolutely amazing.',
		author: 'Scarlett T.',
	},
	{
		id: 23,
		text: 'I was impressed by the quality and attention to detail.',
		author: 'Matthew E.',
	},
	{
		id: 24,
		text: "A perfect gift that made someone's day extra special.",
		author: 'Grace O.',
	},
	{
		id: 25,
		text: 'The flowers arrived fresh, beautifully arranged, and right on schedule.',
		author: 'Jack P.',
	},
	{
		id: 26,
		text: "Wonderful experience and stunning flowers. I couldn't be happier.",
		author: 'Chloe I.',
	},
	{
		id: 27,
		text: 'The bouquet was elegant, fresh, and exactly what I was looking for.',
		author: 'Samuel L.',
	},
];

export async function seedFeedbacks(prisma) {
	await prisma.feedback.createMany({ data: feedbacks });
	return feedbacks.length;
}
