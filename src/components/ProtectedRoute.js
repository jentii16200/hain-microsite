import React from 'react';
import { Navigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
const ProtectedRoute = ({ isLoggedIn, children }) => {
    const toast = useToast();
    if (!isLoggedIn) {
        return (
            toast({
                title: 'Please Login',
                status: 'error',
                duration: 1000,
                isClosable: true
            })
        );
    }
    return children;
};

export default ProtectedRoute;