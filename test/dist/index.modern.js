import {toArray, asyncCounter} from '../../dist/index.modern.js';

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
