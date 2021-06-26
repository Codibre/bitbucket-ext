import { client } from '../http-client/client';
import { copySettings } from './copy-settings';
import { getError } from './print-error';

export async function* createRepo(
	repositoryName: string,
	options: { private?: boolean; project?: string; settings?: string },
) {
	yield 'Creating repository';
	yield options;
	try {
		await client.post('repositories', repositoryName, {
			is_private: options.private !== undefined,
			project: {
				key: options.project,
			},
		});
	} catch (err) {
		yield `${getError(err)}!${
			options.settings ? "\n\n\nBut we'll apply settings anyway!" : ''
		}`;
	}

	if (options.settings) {
		yield* copySettings(options.settings, repositoryName);
	}
}
