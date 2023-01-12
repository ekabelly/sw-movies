import { Router } from 'express';
import { getStarships as getStarhsips } from "./starships.service";


const starshipsRouter = Router();

starshipsRouter.get('/', async (req, res, next) => {
    try {
        const page = Number(req.query.page || 1);
        return res.send(await getStarhsips(page));
    } catch (e) {
        next(e);
    }
})

export default starshipsRouter;