import React, { useState } from 'react';
import { getFilm, searchFilms } from '../services/films.service';
import FilmCharactersTable from './FilmCharactersTable';
import FilmsList from './FilmList';
import './Films.scss';
import Searchbar from './Searchbar';

const Films: React.FC = () => {

    const [isSearchLoading, setIsSearchLoading] = useState(false)
    const [films, setFilms] = useState([])
    const [selectedfilm, setSelectedFilm] = useState({ characters: [], id: '' });
    const [isSelectedFilmLoading, setIsSelectedFilmLoading] = useState(false)

    const searchClick = async (searchTerm: string) => {
        setIsSearchLoading(true);
        const foundFilms = await searchFilms(searchTerm).finally(() => setIsSearchLoading(false))
        setFilms(foundFilms);
    }

    const getSelectedFilm = async (filmdId: string) => {
        if (!isSelectedFilmLoading) {
            setSelectedFilm({ characters: [], id: filmdId });
            setIsSelectedFilmLoading(true);
            const foundFilm = await getFilm(filmdId).finally(() => setIsSelectedFilmLoading(false));
            setSelectedFilm({ ...foundFilm, id: filmdId });
        }
    }

    return (<div className='films'>
        <div className="search-bar">
            <Searchbar searchPlaceholderText='Insert Film name' searchClick={searchClick} isLoading={isSearchLoading}></Searchbar>
        </div>
        <div className="films-section">
            <div className="films-info">
                <FilmsList films={films} setSelectedFilms={getSelectedFilm} selectedFilmId={selectedfilm.id} />
            </div>
            <FilmCharactersTable data={selectedfilm.characters} isFetching={isSelectedFilmLoading} />
        </div>
    </div>
    );
}

export default Films;