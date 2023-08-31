import { dirname } from 'path';
import { fileURLToPath } from 'url';

import _ from 'lodash';
import { Low, Adapter } from 'lowdb';
import { JSONFile } from 'lowdb/node'

export const __dirname = dirname(fileURLToPath(import.meta.url));

export class LowWithLodash<T> extends Low<T> {
	chain: _.ExpChain<this['data']> = _.chain(this).get('data')

	constructor(filePath: string, defaultData: T) {
		const adapter: Adapter<T> = new JSONFile(filePath);
		super(adapter, defaultData);
	}
}