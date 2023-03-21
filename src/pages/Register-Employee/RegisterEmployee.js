import React, { useState } from 'react';
import { Button, Heading } from '@chakra-ui/react';
import RegisterEmployeeForms from './RegisterEmployeeForms';
const RegisterEmployee = () => {
    return (
        <React.Fragment>
            <Heading className='title'>REGISTER EMPLOYEE</Heading>
            <RegisterEmployeeForms />
        </React.Fragment>
    );
};
export default RegisterEmployee;
