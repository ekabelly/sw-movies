import { List } from 'antd';
import Typography from 'antd/es/typography/Typography';
import React from 'react';
import './FilmInfo.scss'

interface FilmInfoProps {
    films: any[];
    setSelectedFilms: (filmdId: string) => any;
}

const FilmsInfo: React.FC<FilmInfoProps> = ({ films, setSelectedFilms }) => {

    return (<div className='films-info'>
        <List
            dataSource={films}
            renderItem={(film) => (
                <List.Item className='pointer film' onClick={() => setSelectedFilms(film.id)}>
                    <Typography>
                        Episode {film.episode_id}: {film.title}
                    </Typography>
                </List.Item>
            )}
        />
    </div>
    );
}

export default FilmsInfo;