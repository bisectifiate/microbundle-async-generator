export const asyncCounter = async function* (n) {
	for (let i = 0; i < n; ++i) yield i;
};

export const toArrayForAwait = async (iterable) => {
	const result = [];
	for await (const x of iterable) result.push(x);
	return result;
};

export const toArrayAwaitNext = async (iterable) => {
	const result = [];
	const it = iterable[Symbol.asyncIterator]();
	for (;;) {
		const {done, value} = await it.next();
		if (done) break;
		result.push(value);
	}
	return result;
};

export const exhaustOneLiner = async (iterator) => {
	while (!(await iterator.next()).done);
};

export const exhaustVerbose = async (iterator) => {
	for (;;) {
		const {done} = await iterator.next();
		if (done) break;
	}
};
