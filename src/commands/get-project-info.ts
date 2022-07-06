import { client } from '../http-client/client';

export async function* getProjectInfo(repositoryName: string, _options: {}) {
	const repo = await client.get('repositories', repositoryName);
	const project = repo.project.key;
	yield JSON.stringify(await client.get('workspaces', `projects/${project}`));
}
