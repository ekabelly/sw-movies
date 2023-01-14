import React, { useState } from 'react';
import { getFilm, searchFilms } from '../services/films.service';
import FilmCharactersTable from './FilmCharactersTable';
import FilmsInfo from './FilmInfo';
import './Films.scss';
import Searchbar from './Searchbar';

const Films: React.FC = () => {

    const [isSearchLoading, setIsSearchLoading] = useState(false)
    const [films, setFilms] = useState([])
    const [selectedfilm, setSelectedFilm] = useState({ characters: [] });
    const [isSelectedFilmLoading, setIsSelectedFilmLoading] = useState(false)

    const searchClick = async (searchTerm: string) => {
        setIsSearchLoading(true);
        const foundFilms = await searchFilms(searchTerm).finally(() => setIsSearchLoading(false))
        setFilms(foundFilms);
    }

    const getSelectedFilm = async (filmdId: string) => {
        if (!isSelectedFilmLoading) {
            setIsSelectedFilmLoading(true);
            const foundFilms = await getFilm(filmdId).finally(() => setIsSelectedFilmLoading(false));
            setSelectedFilm(foundFilms);
        }
    }

    return (<div className='films'>
        <div className="search-bar">
            <Searchbar searchPlaceholderText='Insert Film name' searchClick={searchClick} isLoading={isSearchLoading}></Searchbar>
        </div>
        <div className="films-section">
            <div className="films-info">
                <FilmsInfo films={films} setSelectedFilms={getSelectedFilm} />
            </div>
            <FilmCharactersTable data={selectedfilm.characters} isFetching={isSelectedFilmLoading} />
        </div>
    </div>
    );
}

export default Films;