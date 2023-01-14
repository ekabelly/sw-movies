import React, { useState } from 'react';
import FilmCharactersTable from './FilmCharactersTable';
import FilmInfo from './FilmInfo';
import './Films.scss';
import Searchbar from './Searchbar';

const Films: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false)

    const searchClick = () => {
        setIsLoading(true);
        setTimeout(async () => {
            await Promise.resolve();
            setIsLoading(false);
        }, 1000);
        return;
    }

    return (<div className='films'>
        <div className="search-bar">
            <Searchbar searchPlaceholderText='Insert Film name' searchClick={searchClick} isLoading={isLoading}></Searchbar>
        </div>
        <FilmInfo />
        <FilmCharactersTable />
    </div>
    );
}

export default Films;