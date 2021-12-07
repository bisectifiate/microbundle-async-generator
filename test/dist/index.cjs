require('regenerator-runtime/runtime');
const {toArray, asyncCounter} = require('../../dist/index.cjs');

asyncCounter(10).next().then(
	(result) => {
		console.debug(result);
	}
);

toArray(asyncCounter(10)).then(
	(result) => {
		console.debug(result);
	}
);
