import { fluent } from '@codibre/fluent-iterable';
import { client } from '../http-client/client';
import { REPOSITORIES } from './copy-settings';

export async function createFaultingBranches(model: any, destination: string) {
	await fluent([model.development?.name, model.production?.name])
		.mapAsync<string | undefined>(async (x) => {
			if (x) {
				try {
					await client.get(REPOSITORIES, `${destination}/refs/branches/${x}`);
				} catch {
					return x;
				}
			}

			return undefined;
		})
		.filter()
		.partition(2)
		.flatMap(async (x) => {
			const response = await client.get(REPOSITORIES, `${destination}`);
			const hash = response.mainbranch?.name;
			return hash
				? x
						.map((name) => ({
							hash,
							name,
						}))
						.toArray()
				: [];
		})
		.waitAll(({ hash, name }) =>
			client.post(REPOSITORIES, `${destination}/refs/branches`, {
				name,
				target: {
					hash,
				},
			}),
		);
}
