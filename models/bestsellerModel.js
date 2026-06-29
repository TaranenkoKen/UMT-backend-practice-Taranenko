import prisma from '../helpers/prisma.js';

function formatBestseller(bestseller) {
	return {
		...bestseller,
		id: String(bestseller.id),
	};
}

export async function findAll() {
	const bestsellers = await prisma.bestseller.findMany({
		orderBy: { id: 'asc' },
	});

	return bestsellers.map(formatBestseller);
}

export async function findById(id) {
	const bestseller = await prisma.bestseller.findUnique({
		where: { id },
	});

	return bestseller ? formatBestseller(bestseller) : null;
}

export async function create(data) {
	const bestseller = await prisma.bestseller.create({
		data,
	});

	return formatBestseller(bestseller);
}

export async function update(id, data) {
	const bestseller = await prisma.bestseller.update({
		where: { id },
		data,
	});

	return formatBestseller(bestseller);
}

export async function remove(id) {
	const bestseller = await prisma.bestseller.delete({
		where: { id },
	});

	return formatBestseller(bestseller);
}
