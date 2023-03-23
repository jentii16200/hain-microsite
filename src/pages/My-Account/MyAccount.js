import { Heading } from '@chakra-ui/react';
import React from 'react';

const MyAccount = () => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(storedUser);
    return (
        <div>
            <Heading className='title'>MY ACCOUNT</Heading>
        </div>
    );
};
export default MyAccount;
