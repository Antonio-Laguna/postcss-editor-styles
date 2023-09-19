import { postcssTape } from '@csstools/postcss-tape';
import plugin from './dist/index.mjs';

postcssTape(plugin)({
	basic: {
		message: "supports basic usage",
		plugins: [
			plugin(),
		],
	},
	remove: {
		message: "supports remove usage",
		plugins: [
			plugin(),
		],
	},
	replace: {
		message: "supports replace usage",
		plugins: [
			plugin(),
		],
	},
	ignore: {
		message: "supports ignore usage",
		plugins: [
			plugin(),
		],
	},
	tags: {
		message: "supports tags usage",
		plugins: [
			plugin(),
		],
	},
});
