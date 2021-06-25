import { client } from '../http-client/client';
import { copySettings } from './copy-settings';

export async function createRepo(
	repositoryName: string,
	options: { private?: boolean; project?: string; settings?: string },
) {
  console.log('Creating repository');
  console.log(options);
  try {
    await client.post('repositories', repositoryName, {
      is_private: options.private !== undefined,
      project: {
        key: options.project,
      },
    });
  } catch (err) {
    console.log(`${err.response?.text || err.message}!${options.settings ? "\n\n\nBut we'll apply settings anyway!" : ''}`);
  }

  if (options.settings) {
    await copySettings(options.settings, repositoryName);
  }
}
