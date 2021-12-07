import test from 'ava';

import {
	asyncCounter,
} from '#module';

const expected = (n) => {
	const result = [];
	for (let i = 0; i < n; ++i) result.push(i);
	return result;
};

export const macro = test.macro({
	async exec (t, toArray, n) {
		const generator = asyncCounter(n);
		const actual = await toArray(generator);
		t.deepEqual(actual, expected(n));
	},
	title (providedTitle, toArray, n) {
		return providedTitle ?? `${toArray.name}(asyncCounter(${n}))`;
	}
});
