import { client } from '../http-client/client';
import { doForAll } from '../http-client/do-for-all';
import { createFaultingBranches } from './create-faulting-branches';
import { getError } from './print-error';

export const REPOSITORIES = 'repositories';
export async function* copySettings(source: string, destination: string) {
	yield 'Copying default reviewers...';
	yield* doForAll(
		REPOSITORIES,
		`${source}/default-reviewers`,
		(x: { account_id: string }) =>
			client.put(
				REPOSITORIES,
				`${destination}/default-reviewers/${x.account_id}`,
			),
	);

	yield 'Deleting current branch restrictions...';
	yield* doForAll(
		REPOSITORIES,
		`${destination}/branch-restrictions`,
		(x: { id: number }) => {
			return client.delete(
				REPOSITORIES,
				`${destination}/branch-restrictions/${x.id}`,
			);
		},
	);

	yield 'Copying branching model...';
	try {
		const model = await client.get(
			REPOSITORIES,
			`${source}/branching-model/settings`,
		);
		await createFaultingBranches(model, destination);
		await client.put(
			REPOSITORIES,
			`${destination}/branching-model/settings`,
			model,
		);
	} catch (err) {
		yield getError(err);
	}

	yield 'Copying branch restrictions...';
	yield* doForAll(
		REPOSITORIES,
		`${source}/branch-restrictions`,
		(payload: object) =>
			client.post(REPOSITORIES, `${destination}/branch-restrictions`, payload),
	);

	yield 'Copying pipeline config...';
	try {
		const pipeConfig = await client.get(
			REPOSITORIES,
			`${source}/pipelines_config`,
		);
		await client.put(REPOSITORIES, `${destination}/pipelines_config`, {
			enabled: pipeConfig.enabled,
		});
	} catch (err) {
		yield getError(err);
	}
}
