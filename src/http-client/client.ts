import request = require('superagent');
import { loadConfig } from '../commands/config';

export enum Methods {
	DELETE = 'delete',
	GET = 'get',
	PATCH = 'patch',
	POST = 'post',
	PUT = 'put',
}

/**
 * A base http client with request logging capabilities and standardized entry config
 */
class Client {
	rawReq(method: Methods, uri: string) {
		const config = loadConfig();
		let result = request[method](uri)
			.set('content-type', 'application/json')
			.set('Authorization', `Basic ${config.basic}`);

		if (config.logCalls) {
			result = result.use(
				require('superdebug')((x: string) => console.info(`${x}\n\n\n`)),
			);
		}

		return result;
	}
	req(method: Methods, resource: string, path: string) {
		const config = loadConfig();
		return this.rawReq(
			method,
			`https://api.bitbucket.org/2.0/${resource}/${config.workspace}/${path}`,
		);
	}

	async post(resource: string, path: string, payload: object) {
		return (await this.req(Methods.POST, resource, path).send(payload)).body;
	}

	async get(resource: string, path: string, queryParams?: object) {
		const req = this.req(Methods.GET, resource, path);
		return (await (queryParams ? req.query(queryParams) : req)).body;
	}

	async put(resource: string, path: string, payload?: object) {
		let req = this.req(Methods.PUT, resource, path);
		if (payload) {
			req = req.send(payload);
		}
		return (await req).body;
	}

	async patch(resource: string, path: string, payload: object) {
		return (await this.req(Methods.PATCH, resource, path).send(payload)).body;
	}

	async delete(resource: string, path: string) {
		return (await this.req(Methods.DELETE, resource, path)).body;
	}
}

export const client = new Client();
