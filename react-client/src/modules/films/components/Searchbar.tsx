import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

interface SearchbarProps {
    searchPlaceholderText?: string;
    searchButtonText?: string;
    isLoading?: boolean;
    searchClick: (searchTerm: string) => any
}

const Searchbar: React.FC<SearchbarProps> = ({ searchPlaceholderText = 'Input search text', searchButtonText = 'Search', isLoading = false, searchClick }) => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
            <Search
                placeholder={searchPlaceholderText}
                enterButton={searchButtonText}
                loading={isLoading}
                onSearch={() => searchClick(searchTerm)}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </>
    );
}

export default Searchbar;