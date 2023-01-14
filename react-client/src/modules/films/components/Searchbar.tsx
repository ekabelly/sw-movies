import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

interface SearchbarProps {
    searchPlaceholderText?: string;
    searchButtonText?: string;
    isLoading?: boolean;
    searchClick: () => any
}

const Searchbar: React.FC<SearchbarProps> = ({ searchPlaceholderText = 'Input search text', searchButtonText = 'Search', isLoading = false, searchClick }) => (
    <>
        <Search placeholder={searchPlaceholderText} enterButton={searchButtonText} loading={isLoading} onSearch={searchClick} />
    </>
);

export default Searchbar;