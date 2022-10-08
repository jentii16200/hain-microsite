import React, { useState, useEffect } from 'react';
import { Center, Wrap, WrapItem, Box, Container, FormControl, FormLabel, Button, Input, useToast, Grid, GridItem } from '@chakra-ui/react';

export const RegisterEmployeeForms = () => {
    const [employeeName, setEmployeeName] = useState('');
    const [accountID, setAccountID] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [contactNum, setContactNumber] = useState('');
    const [password, setPassword] = useState('');
    const handleEmployeeName = (e) => setEmployeeName(e.target.value);
    const handleAccountID = (e) => setAccountID(e.target.value);
    const handleAddress = (e) => setAddress(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handleContactNumber = (e) => setContactNumber(e.target.value);
    return (
        <>
            <FormLabel>Employee Name</FormLabel>
            <Input
                type='employeeName'
                value={employeeName}
                onChange={handleEmployeeName}
            />
            <FormLabel>Account ID</FormLabel>
            <Input
                type='accountID'
                value={accountID}
                onChange={handleAccountID}
            />
            <FormLabel>Address</FormLabel>
            <Input
                type='address'
                value={address}
                onChange={handleAddress}
            />
            <FormLabel>Password</FormLabel>
            <Input
                type='password'
                value={password}
                onChange={handlePassword}
            />
            <FormLabel>Email</FormLabel>
            <Input
                type='email'
                value={email}
                onChange={handleEmail}
            />
            <FormLabel>Contact Number</FormLabel>
            <Input
                type='contactNum'
                value={contactNum}
                onChange={handleContactNumber}
            />
            <Grid templateColumns='repeat(5, 1fr)' gap={4}>
                <GridItem colSpan={2} h='10' bg='tomato' />
                <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip' />
            </Grid>
        </>
    );
};