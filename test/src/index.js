import {toArray, asyncCounter} from '../../src/index.js';

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
