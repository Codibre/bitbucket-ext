import { client, Methods } from './client';

export async function* getAll(
	resource: string,
	path: string,
): AsyncIterable<any[]> {
	let result = await client.get(resource, path, {
		pagelen: 100,
	});

	yield result.values;

	while (result.next) {
		result = (await client.rawReq(Methods.GET, result.next)).body;
		yield result.values;
	}
}
