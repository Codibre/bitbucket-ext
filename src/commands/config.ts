import { homedir } from 'os';
import { existsSync, readFileSync } from 'fs';

interface RawConfig {
	user: string;
	password: string;
	workspace: string;
  logCalls: boolean;
}

export interface Config {
	basic: string;
	workspace: string;
  logCalls: boolean;
}

let config: Config | undefined;

export function loadConfig(): Config {
	if (config) {
		return config;
	}
	for (const dir of [process.cwd(), homedir()]) {
		const current = `${dir}/bitbucket-ext.json`;
		if (existsSync(current)) {
			const { user, password, workspace, logCalls }: RawConfig = JSON.parse(
				readFileSync(current).toString(),
			);

			if (!user || typeof user !== 'string') {
				throw Error('Inform a valid user in bitbucket-ext.json!');
			}
			if (!password || typeof password !== 'string') {
				throw Error('Inform a valid password in bitbucket-ext.json!');
			}
			if (!workspace || typeof workspace !== 'string') {
				throw Error('Inform a valid workspace in bitbucket-ext.json!');
			}

			return (config = {
				workspace,
				basic: Buffer.from(`${user}:${password}`).toString('base64'),
        logCalls,
			});
		}
	}

	throw new Error(
		'Create the config file bitbucket-ext.json as explained here: https://github.com/Codibre/bitbucket-ext!',
	);
}
