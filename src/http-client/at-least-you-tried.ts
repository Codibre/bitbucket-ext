import { getError } from '../commands/print-error';

export async function atLeastYouTried<P, T>(
	items: P[],
	cb: (x: P) => Promise<T>,
): Promise<(T | string)[]> {
	return Promise.all(items.map(async (x) => cb(x).catch(getError)));
}
