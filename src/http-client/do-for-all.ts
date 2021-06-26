import { fluentAsync } from '@codibre/fluent-iterable';
import { atLeastYouTried } from './at-least-you-tried';
import { getAll } from './get-all';

export function doForAll<R, T>(
	resouce: string,
	path: string,
	callback: (r: R) => Promise<T>,
) {
	return fluentAsync(getAll(resouce, path))
		.flatMap((res: R[]) => atLeastYouTried(res, callback))
		.filter();
}
