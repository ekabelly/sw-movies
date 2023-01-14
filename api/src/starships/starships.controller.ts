import { Router } from 'express';
import { Starship } from './models';
import { getStarships, getSingleStarship } from "./starships.service";


const starshipsRouter = Router();

starshipsRouter.get('/', async (req, res, next) => {
    try {
        const page = Number(req.query.page || 1);
        return res.send(await getStarships(page, req.query.search?.toString()));
    } catch (e) {
        next(e);
    }
})


starshipsRouter.get('/:id', async (req, res, next) => {
    try {
        return res.send(await getSingleStarship(req.params.id, req.query.expand?.toString()));
    } catch (e) {
        next(e);
    }
})

export default starshipsRouter;