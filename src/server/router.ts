import express from 'express';

const router = express.Router();

router.get('/hello', async (req, res) => {
    res.send('hello')
})

export default router;