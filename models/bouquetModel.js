import {
	buildPaginatedResponse,
	getPaginationBounds,
} from '../helpers/pagination.js';
import prisma from '../helpers/prisma.js';

function formatBouquet(product) {
	return {
		...product,
		id: String(product.id),
	};
}

export async function findPagination({ page, perPage }) {
	const totalItems = await prisma.product.count();
	const { skip, take } = getPaginationBounds({ page, perPage, totalItems });

	const products = await prisma.product.findMany({
		orderBy: { id: 'asc' },
		skip,
		take,
	});

	return buildPaginatedResponse(products, { page, perPage, totalItems });
}

export async function findById(id) {
	const product = await prisma.product.findUnique({
		where: { id },
	});

	return product ? formatBouquet(product) : null;
}

export async function create(data) {
	const product = await prisma.product.create({
		data,
	});

	return formatBouquet(product);
}

export async function update(id, data) {
	const product = await prisma.product.update({
		where: { id },
		data,
	});

	return formatBouquet(product);
}

export async function remove(id) {
	const product = await prisma.product.delete({
		where: { id },
	});

	return formatBouquet(product);
}
