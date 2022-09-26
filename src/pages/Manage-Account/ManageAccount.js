import React from 'react';
import { ManageAccountNav } from './ManageAccountNav';
import { Heading } from '@chakra-ui/react';

export const ManageAccount = () => {
    return (
        <div>
            <Heading className='title'>MANAGE ACCOUNT</Heading>
            <ManageAccountNav/>

        </div>
    );
};
