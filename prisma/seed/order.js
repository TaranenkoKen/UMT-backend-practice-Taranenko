export const orders = [
	{
		name: 'John Doe',
		phone: '+380671234567',
		address: 'Kyiv, Khreshchatyk St, 1',
		message: "Please deliver before 2 PM, it's a surprise!",
		productIndex: 0,
		quantity: 1,
	},
	{
		name: 'Anna Smith',
		phone: '+380509876543',
		address: 'Lviv, Rynok Square, 10',
		message: 'No specific instructions, thank you.',
		productIndex: 3,
		quantity: 2,
	},
	{
		name: 'Alex Jones',
		phone: '+380931112233',
		address: 'Odesa, Deribasivska St, 5',
		message: 'Call 10 minutes before arrival.',
		productIndex: null,
		quantity: 1,
	},
];

export async function seedOrders(prisma) {
	if (orders.length === 0) {
		return 0;
	}

	const products = await prisma.product.findMany({
		orderBy: { id: 'asc' },
		select: { id: true },
	});

	const data = orders.map(({ productIndex, ...order }) => ({
		...order,
		productId:
			productIndex == null ? null : (products[productIndex]?.id ?? null),
	}));

	await prisma.order.createMany({ data });
	return data.length;
}
