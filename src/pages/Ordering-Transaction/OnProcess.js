import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

export const OnProcess = () => {
    return (
        <Grid templateColumns='repeat(4, 2fr)' gap={1}
            h='84vh'>
            <GridItem w='100%' bg='grey' />
            <GridItem w='100%' bg='grey' />
            <GridItem w='100%' bg='grey' />
            <GridItem w='100%' bg='grey' />
            <GridItem w='100%' bg='grey' />
            <GridItem w='100%' bg='grey' />
            <GridItem w='100%' bg='grey' />
            <GridItem w='100%' bg='grey' />
        </Grid>
    );
};
