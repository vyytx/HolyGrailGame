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
	width: number;
	height: number;
	private rawData: TMapTile[][] = []
	
	get data(): TMapTile[][] {
	
	}
}

// export const MapDB = new LowExp<IMapDB>(dbPath, );

MapDB.write();