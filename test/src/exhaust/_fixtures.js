import test from 'ava';

import {
	asyncCounter,
} from '#module';

export const macro = test.macro({
	async exec (t, exhaust, n) {
		const generator = asyncCounter(n);
		await exhaust(generator);
		const {done} = await generator.next();
		t.true(done);
	},
	title (providedTitle, exhaust, n) {
		return providedTitle ?? `${exhaust.name}(asyncCounter(${n}))`;
	}
});
