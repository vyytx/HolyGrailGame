import path from 'path'

import { __dirname, LowExp } from './databases.js';

const dbPath = path.join(__dirname, 'storage', 'map.json');

export type TMapTile = {
	// TODO: fill up here
}

interface IMapDB {
	width: number,
	height: number,
	data: TMapTile[][]
}

class MapData implements IMapDB {
	private rawData: TMapTile[][] = []

	get height() {
		return this.rawData.length
	}

	get width() {
		if(this.height == 0)
			return 0;
		else
			return this.rawData[0].length;
	}

	get data() {
		return [...this.rawData]
	}
}

 export const MapDB = new LowExp<IMapDB>(dbPath, {
	width: 0,
	height: 0,
	data: []
 });

MapDB.write();