export const asyncCounter = async function* (n) {
	for (let i = 0; i < n; ++i) yield i;
};

export const toArray = async (iterable) => {
	const result = [];
	for await (const x of iterable) result.push(x);
	return result;
};
