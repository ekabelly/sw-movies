import axios from "axios"
import {baseUrl} from '../config/config';
const starshipsUrl = `${baseUrl}/starships`

export const getStarships = async (page = 1) =>
    axios.get(`${starshipsUrl}?page=${page}`).then(result => result.data);