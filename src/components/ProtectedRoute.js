import React, { useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
const ProtectedRoute = ({ children, isLoggedIn }) => {
    const toast = useToast();
    useEffect(() => {
        !isLoggedIn ?
            toast({
                title: 'Login Required',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-right'
            }) : null;
    });

    return (
        !isLoggedIn ?
            <>
                <Navigate to='/' />
            </>
            :
            children
    );

};
export default ProtectedRoute;