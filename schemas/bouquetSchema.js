import Joi from 'joi';

import { commonJoiMessages } from '../constants/messages.js';

export const getBouquetQuerySchema = Joi.object({
	page: Joi.number().integer().min(1).default(1).label('Page'),
	'per-page': Joi.number()
		.integer()
		.min(1)
		.max(100)
		.default(8)
		.label('Quantity per page'),
}).messages(commonJoiMessages);

const bouquetTextFields = {
	title: Joi.string().trim().min(2).max(200).required().label('Title'),
	desc: Joi.string().trim().min(10).max(1000).required().label('Description'),
	price: Joi.string().trim().min(1).max(20).required().label('Price'),
};

export const createBouquetSchema =
	Joi.object(bouquetTextFields).messages(commonJoiMessages);

export const updateBouquetSchema = Joi.object({
	title: bouquetTextFields.title.optional(),
	desc: bouquetTextFields.desc.optional(),
	price: bouquetTextFields.price.optional(),
})
	.min(1)
	.messages(commonJoiMessages);
