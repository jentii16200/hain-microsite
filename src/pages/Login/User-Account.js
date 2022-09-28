import React, { useEffect, useState } from 'react';
import { Center, Wrap, WrapItem, Box, Container, FormControl, FormLabel, Button, Input, useToast, } from '@chakra-ui/react';
import '../../assets/index.css';
import { Navigate } from 'react-router-dom';

export const UserAccount = (props) => {
    const toast = useToast();
    const [goToContact, setGoToContact] = useState(false);
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [password, setPassword] = useState('');
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const isErrorEmail = email === '';
    const isErrorPass = password === '';
    function isAccountExist(){

        if(email != '' && password != ''){
            new Promise(resolve => {
                setIsLoading(false);
                setTimeout(resolve, 1000);
            }).then(()=>{
                setGoToContact(true);
                toast({
                    title: 'Successfully login',
                    description: 'Welcome user!',
                    status: 'success',
                    duration: 1000,
                    isClosable: false,
                    position: 'top-right'
                });
            });

        }else{
            new Promise(resolve => {
                setIsLoading(false);
                setTimeout(resolve, 1000);
            }).then(()=>{
                setIsLoading(true);
                toast({
                    title: 'Incorrect username/password',
                    description: 'Please put the right information',
                    status: 'error',
                    duration: 1000,
                    isClosable: false,
                    position: 'top-right'
                });
            });

        }
    }
    if (goToContact) {

        return <Navigate to="/h/manage-account/admin" />;

    }
    return(
        isLoading ?
            <div className='bg'>
                <Box h='calc(25vh)' />
                <Wrap justify='center'>
                    <WrapItem>
                        <Box w='calc(50vw)' pl = "10" pr = "10">
                            <Center bg="rgba(0,0,0,0.1)" w='300' h='300' color='white' >
                                <Container color='white'>
                                    <FormControl isInvalid={isErrorEmail}>
                                        <FormLabel>Email</FormLabel>
                                        <Input
                                            type='email'
                                            value={email}
                                            onChange={handleEmail}
                                        />
                                    </FormControl>
                                    <FormControl isInvalid={isErrorPass}>
                                        <FormLabel>Password</FormLabel>
                                        <Input
                                            type='password'
                                            value={password}
                                            onChange={handlePassword}
                                        />
                                    </FormControl>
                                    <Center>
                                        <Button colorScheme='teal' variant='solid' size='lg' mt='4' pl="20" pr="20" onClick={isAccountExist}>
                                            Login
                                        </Button>
                                    </Center>
                                </Container>
                            </Center>
                        </Box>
                    </WrapItem>
                </Wrap>
                <Box h='calc(33vh)'/>
            </div>
            :
            <Wrap justify='Center'>
                <Box pt='20%'>
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </Box>
            </Wrap>

    );
};