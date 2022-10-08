import React from 'react';
import { Heading } from '@chakra-ui/react';
import { RegisterEmployeeForms } from './RegisterEmployeeForms';
export const RegisterEmployee = () => {
    return (
        <React.Fragment>
            <Heading className='title'>REGISTER EMPLOYEE</Heading>
            <RegisterEmployeeForms/>
        </React.Fragment>
    );
};
