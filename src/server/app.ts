import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { AddressInfo } from 'net'

import express from 'express';

import router from './router.js'
import settings from './settings.js';


const __dirname = dirname(fileURLToPath(import.meta.url));

const isProduction = false;

const app = express();

// TODO add this
// app.use(cors());

app.use(settings['CLIENT_BASE_URL'], express.static(path.join(__dirname, '..', '..', 'public')));
app.use(settings['SERVER_BASE_URL'], router);
app.use('/game/assets', express.static(path.join(__dirname, '..', 'client', 'assets')))

// if(!isProduction)
//     app.use(errorHandler()) // TODO: Make this work

app.use(settings['CLIENT_BASE_URL'], (req, res, next) => {
	res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

const server = app.listen(settings['SERVER_PORT'], () => {
	const { port } = server.address() as AddressInfo

	console.log('Server listening on port ' + port);
	console.log('Client exposed on ' + settings['EXTERNAL_URL'] + settings.CLIENT_BASE_URL);
	console.log('Server exposed on ' + settings['EXTERNAL_URL'] + settings.SERVER_BASE_URL);
})