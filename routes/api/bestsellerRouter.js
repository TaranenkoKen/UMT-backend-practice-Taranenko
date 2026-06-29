import { bestseller as c } from '../../controllers/index.js';
import { createRouter } from '../../helpers/createRouter.js';
import { validateBody } from '../../helpers/validateBody.js';
import { validateParams } from '../../helpers/validateParams.js';
import {
	createBestsellerSchema,
	updateBestsellerSchema,
} from '../../schemas/bestsellerSchema.js';
import { idParamSchema } from '../../schemas/idParamSchema.js';

const bestsellerRouterOptions = [
	{
		method: 'get',
		route: '/',
		middlewares: [],
		controller: c.getBestsellerList,
	},
	{
		method: 'get',
		route: '/:id',
		middlewares: [validateParams(idParamSchema)],
		controller: c.getBestsellerById,
	},
	{
		method: 'post',
		route: '/',
		middlewares: [validateBody(createBestsellerSchema)],
		controller: c.createBestseller,
	},
	{
		method: 'patch',
		route: '/:id',
		middlewares: [
			validateParams(idParamSchema),
			validateBody(updateBestsellerSchema),
		],
		controller: c.updateBestseller,
	},
	{
		method: 'delete',
		route: '/:id',
		middlewares: [validateParams(idParamSchema)],
		controller: c.deleteBestseller,
	},
];

const bestsellerRouter = createRouter({ options: bestsellerRouterOptions });

bestsellerRouter.setRouter();

export default bestsellerRouter.router;
