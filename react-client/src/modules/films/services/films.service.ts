import axios from "axios"

export const searchFilms = (searchTerm: string): Promise<any> =>
    axios.get(`http://localhost:5000/api/v1/films?search=${searchTerm}`).then(res => res.data);

export const getFilm = (filmId: string): Promise<any> =>
    axios.get(`http://localhost:5000/api/v1/films/${filmId}?expand=characters`).then(res => res.data);