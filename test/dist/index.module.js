import 'regenerator-runtime/runtime.js';
import {toArray, asyncCounter} from '../../dist/index.module.js';

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
