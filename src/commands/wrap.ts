import { printError } from './print-error';

export function wrap(cb: (...args: any[]) => Promise<void>) {
	return async (...args: any[]) => {
		try {
			await cb(...args);
		} catch (err) {
			printError(err);
		}
	};
}
