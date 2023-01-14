import axios, { AxiosResponse } from "axios"
import { response } from "express";
import { baseUrl } from '../config/config';
import { Film as Film, FilmExpandablePropery as FilmExpandablePropery } from "./models";
const filmsUrl = `${baseUrl}/films`;

interface FilmsResponse {
    results: Film[];
}

const getFilmId = url => {
    try {
        const t = url.split('/').filter(value => !!value);
        return t[t.length - 1];
    } catch (e) {
        console.error(e);
        return null;
    }
}

const swApiResHandler = (result: AxiosResponse): AxiosResponse['data'] => {
    if (!result?.data) {
        throw { message: 'Unknown error', status: 500 };
    }
    return result.data;
}

export const getFilms = async (page = 1, search = null): Promise<Film[]> => {
    const searchQueryString = search ? `search=${search}` : '';
    return axios.get(`${filmsUrl}?page=${page}&${searchQueryString}`).then(swApiResHandler).then((data: FilmsResponse) => {
        if (!data.results) {
            throw { message: 'Unknown error', status: 500 };
        }
        return data.results.map(film => ({
            ...film,
            id: getFilmId(film.url),
        }));
    });
}

const expandSingleFilm = async (starship: Film, expand: FilmExpandablePropery) => {
    const expandedProperyPromises: Promise<unknown>[] = starship[expand].map(expandUrl => axios.get(expandUrl).then(result => result.data))
    const expandedPropery = (await Promise.allSettled(expandedProperyPromises))
        .filter(response => response.status === 'fulfilled')
        .map((response: PromiseFulfilledResult<unknown>) => response.value);
    return {
        ...starship,
        [expand]: expandedPropery
    }
}


export const getSingleFilm = async (id: string, expand: string): Promise<Film> =>
    axios.get(`${filmsUrl}/${id}`).then(swApiResHandler).then((film: Film) => {
        if (expand) {
            const allowedPropertyToExpand: boolean = expand in FilmExpandablePropery && expand in film;
            if (!allowedPropertyToExpand) {
                throw { message: 'Bad request', status: 400 };
            }
            return expandSingleFilm(film, expand as unknown as FilmExpandablePropery);
        }
        return film;
    })