import test from 'ava';

export const macro = test.macro({
	async exec (t, f, condition, a, b, expected) {
		const actual = await f(condition, a, b);
		t.is(actual, expected);
	},
	title (providedTitle, f, condition, a, b, expected) {
		return providedTitle ?? `${f.name}(${condition}, ${a}, ${b}, ${expected})`;
	}
});
