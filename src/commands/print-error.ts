export function getError(err: any): string {
	return err.response?.text || err.message || err;
}

export function printError(err: any) {
	console.error(getError(err));
	return undefined;
}
