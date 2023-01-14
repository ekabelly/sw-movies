import { Skeleton, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import './FilmCharactersTable.scss';

interface Character { }

const characterPropertiesToRender = ['name', 'height', 'gender', 'homeworld', 'birth_year'];
const columns: ColumnsType<Character> = characterPropertiesToRender.map(key => ({
    title: key.replaceAll('_', ' '),
    dataIndex: key,
    key,
}))
interface FilmCharactersTableProps {
    data?: Character[];
    isFetching: boolean;
}


const FilmCharactersTable: React.FC<FilmCharactersTableProps> = ({ data = [], isFetching }) => {

    if (isFetching) {
        return <Skeleton active style={{ margin: '20px' }} />
    }

    if (!!data[0]) {
        const dataSource = data.map((item, index) => ({
            ...item,
            key: index,
        }))
        return (<div className='films-characters-table' style={{ display: 'flex', overflow: 'auto' }}>
            <Table columns={columns} dataSource={dataSource} pagination={{ pageSize: 10 }} />
        </div>
        );
    }
    return <></>
}

export default FilmCharactersTable;