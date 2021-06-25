import { printError } from '../commands/print-error';

export async function atLeastYouTried<P, T>(
	items: P[],
	cb: (x: P) => Promise<T>,
): Promise<(T | undefined)[]> {
	return Promise.all(items.map(async (x) => cb(x).catch(printError)));
}
