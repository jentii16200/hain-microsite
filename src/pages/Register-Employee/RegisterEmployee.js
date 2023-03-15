import React, { useState } from 'react';
import { Button, Heading } from '@chakra-ui/react';
import RegisterEmployeeForms from './RegisterEmployeeForms';
import CurrentDateTime from '../../components/CurrentDateTime';
const RegisterEmployee = () => {
    // const [dateTime, setDateTime] = useState("");
    return (
        <React.Fragment>
            <Heading className='title'>REGISTER EMPLOYEE</Heading>
            <RegisterEmployeeForms />
            {/* <Button onClick={() => setDateTime(CurrentDateTime())}> {dateTime}</Button> */}
        </React.Fragment>
    );
};
export default RegisterEmployee;
