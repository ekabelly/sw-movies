import axios, { AxiosResponse } from "axios"
import { baseUrl } from '../config/config';
import { Starship, StarshipExpandablePropery } from "./models";
const starshipsUrl = `${baseUrl}/starships`;

interface StarshipsResponse {
    results: Starship[];
}

const swApiResHandler = (result: AxiosResponse): AxiosResponse['data'] => {
    if (!result?.data) {
        throw { message: 'Unknown error', status: 500 };
    }
    return result.data;
}

export const getStarships = async (page = 1, search = null): Promise<Starship[]> => {
    const searchQueryString = search ? `search=${search}` : '';
    return axios.get(`${starshipsUrl}?page=${page}&${searchQueryString}`).then(swApiResHandler).then((data: StarshipsResponse) => {
        if (!data.results) {
            throw { message: 'Unknown error', status: 500 };
        }
        return data.results;
    });
}

const expandSingleStarship = async (starship: Starship, expand: StarshipExpandablePropery) => {
    const expandedProperyPromises: Promise<unknown>[] = starship[expand].map(expandUrl => axios.get(expandUrl).then(data => data))
    const expandedPropery = await Promise.all(expandedProperyPromises);
    return {
        ...starship,
        [expand]: expandedPropery
    }
}


export const getSingleStarship = async (id: string, expand: string): Promise<Starship> =>
    axios.get(`${starshipsUrl}/${id}`).then(swApiResHandler).then((starship: Starship) => {
        if (expand) {
            const allowedPropertyToExpand: boolean = expand in StarshipExpandablePropery && expand in starship;
            if (!allowedPropertyToExpand) {
                throw { message: 'Bad request', status: 400 };
            }
            return expandSingleStarship(starship, expand as unknown as StarshipExpandablePropery);
        }
        return starship;
    })