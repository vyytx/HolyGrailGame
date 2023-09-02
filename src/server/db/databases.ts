import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { Low, Adapter } from 'lowdb';
import { JSONFile } from 'lowdb/node';

export const __dirname = dirname(fileURLToPath(import.meta.url));

export class LowExp<T> extends Low<T> {
	constructor(filePath: string, defaultData: T) {
		const adapter: Adapter<T> = new JSONFile(filePath);
		super(adapter, defaultData);
	}
}