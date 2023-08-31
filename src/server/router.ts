import express from 'express';
import bodyParser from 'body-parser';

import { loadAllApi } from './api/api.js';

const router = express.Router();

router.use(bodyParser.json())

router.post('/login', async (req, res) => {
	console.log("req.body:", req.body)
});

router.post('/register',async (req, res) => {
	
});

loadAllApi(router);

export default router;