import { HTTP_STATUS } from '../constants/httpStatus.js';
import { asyncHandler } from '../helpers/asyncHandler.js';
import { apiMessages } from '../constants/messages.js';
import { HttpError } from '../helpers/error.js';
import * as bestsellerModel from '../models/bestsellerModel.js';

export const getBestsellerList = asyncHandler(async (_req, res) => {
	const bestsellers = await bestsellerModel.findAll();
	res.status(HTTP_STATUS.OK).json(bestsellers);
});

export const getBestsellerById = asyncHandler(async (req, res) => {
	const { id } = req.validatedParams;
	const item = await bestsellerModel.findById(id);

	if (!item) {
		throw new HttpError(HTTP_STATUS.NOT_FOUND, apiMessages.bestsellerNotFound);
	}

	res.status(HTTP_STATUS.OK).json(item);
});

export const createBestseller = asyncHandler(async (req, res) => {
	const bestseller = await bestsellerModel.create(req.validatedBody);

	res.status(HTTP_STATUS.CREATED).json({
		message: apiMessages.bestsellerCreated,
		bestseller,
	});
});

export const updateBestseller = asyncHandler(async (req, res) => {
	const { id } = req.validatedParams;
	const existingBestseller = await bestsellerModel.findById(id);

	if (!existingBestseller) {
		throw new HttpError(HTTP_STATUS.NOT_FOUND, apiMessages.bestsellerNotFound);
	}

	const bestseller = await bestsellerModel.update(id, req.validatedBody);

	res.status(HTTP_STATUS.OK).json({
		message: apiMessages.bestsellerUpdated,
		bestseller,
	});
});

export const deleteBestseller = asyncHandler(async (req, res) => {
	const { id } = req.validatedParams;

	const existing = await bestsellerModel.findById(id);

	if (!existing) {
		throw new HttpError(HTTP_STATUS.NOT_FOUND, apiMessages.bestsellerNotFound);
	}

	const bestseller = await bestsellerModel.remove(id);

	res.status(HTTP_STATUS.OK).json({
		message: apiMessages.bestsellerDeleted,
		bestseller,
	});
});
