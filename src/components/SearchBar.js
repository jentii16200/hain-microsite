import { Input,
    InputGroup,
    InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import React from 'react';

export const SearchBar = () => {
    return (
        <>
            <InputGroup
                width={'300px'}
                borderColor={'black'}>
                <InputLeftElement
                    pointerEvents='none'
                >
                    <SearchIcon color='gray.300' />
                </InputLeftElement>
                <Input variant='outline' placeholder='Search' />
            </InputGroup>

        </>
    );
};
