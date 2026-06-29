export const feedbacks = [
	{
		text: 'Flora made my anniversary unforgettable with their beautiful arrangement!',
		author: 'Emma T.',
	},
	{
		text: 'Absolutely stunning bouquet! It looked even better than the photo and arrived right on time.',
		author: 'Daniel R.',
	},
	{
		text: 'The service was exceptional, and the flowers were fresh!',
		author: 'Olivia M.',
	},
	{
		text: 'The flowers were gorgeous and lasted much longer than I expected.',
		author: 'Sophia W.',
	},
	{
		text: 'Excellent quality and fast delivery. I will definitely order again.',
		author: 'James K.',
	},
	{
		text: "The bouquet was beautifully arranged and brought a huge smile to my mother's face.",
		author: 'Charlotte P.',
	},
	{
		text: 'Ordering was easy, and the flowers arrived fresh and vibrant.',
		author: 'Michael B.',
	},
	{
		text: 'Amazing customer service and a truly stunning floral arrangement.',
		author: 'Ava L.',
	},
	{
		text: 'The bouquet exceeded my expectations in every way.',
		author: 'Ethan S.',
	},
	{
		text: 'Beautiful flowers, elegant packaging, and prompt delivery.',
		author: 'Mia C.',
	},
	{
		text: 'I ordered flowers for a birthday, and they were absolutely perfect.',
		author: 'Noah J.',
	},
	{
		text: 'The arrangement looked fresh, colorful, and professionally designed.',
		author: 'Isabella F.',
	},
	{
		text: 'Reliable service and beautiful flowers every time.',
		author: 'Liam D.',
	},
	{
		text: "The recipient loved the bouquet and couldn't stop talking about it.",
		author: 'Amelia H.',
	},
	{
		text: 'Fantastic experience from start to finish. Highly recommended!',
		author: 'Benjamin G.',
	},
	{
		text: 'Fresh flowers, lovely presentation, and excellent communication.',
		author: 'Harper N.',
	},
	{
		text: 'The bouquet arrived exactly as pictured and smelled wonderful.',
		author: 'Lucas V.',
	},
	{
		text: 'Great selection of flowers and very reasonable prices.',
		author: 'Evelyn Y.',
	},
	{
		text: 'Every detail of the arrangement was carefully crafted.',
		author: 'Henry A.',
	},
	{
		text: 'The flowers added a special touch to our celebration.',
		author: 'Ella R.',
	},
	{
		text: 'Quick delivery and flowers that stayed fresh for over a week.',
		author: 'Alexander M.',
	},
	{
		text: 'The colors and fragrance of the bouquet were absolutely amazing.',
		author: 'Scarlett T.',
	},
	{
		text: 'I was impressed by the quality and attention to detail.',
		author: 'Matthew E.',
	},
	{
		text: "A perfect gift that made someone's day extra special.",
		author: 'Grace O.',
	},
	{
		text: 'The flowers arrived fresh, beautifully arranged, and right on schedule.',
		author: 'Jack P.',
	},
	{
		text: "Wonderful experience and stunning flowers. I couldn't be happier.",
		author: 'Chloe I.',
	},
	{
		text: 'The bouquet was elegant, fresh, and exactly what I was looking for.',
		author: 'Samuel L.',
	},
];

export async function seedFeedbacks(prisma) {
	await prisma.feedback.createMany({ data: feedbacks });
	return feedbacks.length;
}
