import { fluentAsync } from '@codibre/fluent-iterable';
import { atLeastYouTried } from '../http-client/at-least-you-tried';
import { client } from '../http-client/client';
import { getAll } from '../http-client/get-all';

const REPOSITORIES = 'repositories';
export async function copySettings(source: string, destination: string) {
	console.log('Copying default reviewers...');
	await fluentAsync(
		getAll(REPOSITORIES, `${source}/default-reviewers`),
	).forEach((users: { account_id: string }[]) =>
		atLeastYouTried(users, (x) =>
			client.put(
				REPOSITORIES,
				`${destination}/default-reviewers/${x.account_id}`,
			),
		),
	);

	console.log('Copying branch restrictions...');
	await fluentAsync(
		getAll(REPOSITORIES, `${source}/branch-restrictions`),
	).forEach((payloads) =>
		atLeastYouTried(payloads, (payload) =>
			client.post(REPOSITORIES, `${destination}/branch-restrictions`, payload),
		),
	);

	console.log('Copying branching model...');
	const model = await client.get(
		REPOSITORIES,
		`${source}/branching-model/settings`,
	);
	await client.put(
		REPOSITORIES,
		`${destination}/branching-model/settings`,
		model,
	);

	console.log('Copying pipeline config...');
	const pipeConfig = await client.get(
		REPOSITORIES,
		`${source}/pipelines_config`,
	);
	await client.put(REPOSITORIES, `${destination}/pipelines_config`, {
		enabled: pipeConfig.enabled,
	});
}
