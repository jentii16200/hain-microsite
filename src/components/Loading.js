import { Box, Spinner, Wrap } from '@chakra-ui/react';
import React, { useState } from 'react';

export const Loading = () => {
    return (
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
