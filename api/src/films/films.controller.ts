import { Router } from 'express';
import { Film } from './models';
import { getFilms, getSingleFilm } from "./films.service";


const starshipsRouter = Router();

starshipsRouter.get('/', async (req, res, next) => {
    try {
        const page = Number(req.query.page || 1);
        return res.send(await getFilms(page, req.query.search?.toString()));
    } catch (e) {
        next(e);
    }
})


starshipsRouter.get('/:id', async (req, res, next) => {
    try {
        return res.send(await getSingleFilm(req.params.id, req.query.expand?.toString()));
    } catch (e) {
        next(e);
    }
})

export default starshipsRouter;