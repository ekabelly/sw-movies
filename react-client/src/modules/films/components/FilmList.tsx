import { List } from 'antd';
import Typography from 'antd/es/typography/Typography';
import React from 'react';
import './FilmList.scss'

interface FilmsListProps {
    films: any[];
    setSelectedFilms: (filmdId: string) => any;
    selectedFilmId?: string;
}

const FilmsList: React.FC<FilmsListProps> = ({ films, setSelectedFilms, selectedFilmId }) => {

    return (<div className='films-list'>
        <List
            dataSource={films}
            renderItem={(film) => (
                <List.Item className={'pointer film' + (selectedFilmId === film.id ? ' selected' : '')} onClick={() => setSelectedFilms(film.id)}>
                    <Typography>
                        Episode {film.episode_id}: {film.title}
                    </Typography>
                </List.Item>
            )}
        />
    </div>
    );
}

export default FilmsList;