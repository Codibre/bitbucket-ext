import { fluentAsync } from '@codibre/fluent-iterable';
import { printError } from './print-error';

export function wrap(cb: (...args: any[]) => AsyncIterable<string>) {
	return async (...args: any[]) => {
		try {
			await fluentAsync(cb(...args)).forEach(console.log);
		} catch (err) {
			printError(err);
		}
	};
}
