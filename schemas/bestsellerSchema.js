import Joi from 'joi';

import { commonJoiMessages } from '../constants/messages.js';

const bestsellerFields = {
	img: Joi.string().trim().uri().required().label('Image'),
	title: Joi.string().trim().min(2).max(200).required().label('Title'),
	desc: Joi.string().trim().min(10).max(1000).required().label('Description'),
	price: Joi.string().trim().min(1).max(20).required().label('Price'),
};

export const createBestsellerSchema =
	Joi.object(bestsellerFields).messages(commonJoiMessages);

export const updateBestsellerSchema = Joi.object({
	img: bestsellerFields.img.optional(),
	title: bestsellerFields.title.optional(),
	desc: bestsellerFields.desc.optional(),
	price: bestsellerFields.price.optional(),
})
	.min(1)
	.messages(commonJoiMessages);
