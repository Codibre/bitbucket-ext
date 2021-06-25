export function printError(err: any) {
	console.error(err.response?.text || err.message);
	return undefined;
}
