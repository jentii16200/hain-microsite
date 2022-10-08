import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { SimpleGrid, Box } from '@chakra-ui/react';

export const Pending = () => {
    const employeesData = [
        {
            id: '1',
            username: 'SAGS',
            name: 'SAGUIT',
            password: 'secret',

        },
        {
            id: '2',
            username: 'PASCY',
            name: 'PASCUAL',
            password: 'pascy',

        },
        {
            id: '3',
            username: 'SINDZ',
            name: 'SINDINGAN',
            password: 'cleo',

        },
        {
            id: '4',
            username: 'JM',
            name: 'ENTEREZO',
            password: 'entz',

        },
        {
            id: '5',
            username: 'JORGS',
            name: 'JORGE',
            password: 'hehe',

        }
    ];
    return (

        <>

            <Grid templateColumns='repeat(4, 2fr)' gap={.5}
                templateRows='repeat(2, 1fr)'
                bg='black'
                h='84vh'>
                {employeesData.map(post =>
                    <GridItem w='100%' bg='grey' key={post.id}>
                        <h1>{post.id}</h1>
                        <h1>{post.username}</h1>
                        <h1>{post.password}</h1>
                    </GridItem>
                )}
                <GridItem w='100%' bg='grey' />
                <GridItem w='100%' bg='grey' />
                <GridItem w='100%' bg='grey' />
                <GridItem w='100%' bg='grey' />
                <GridItem w='100%' bg='grey' />
                <GridItem w='100%' bg='grey' />
                <GridItem w='100%' bg='grey' />
                <GridItem w='100%' bg='grey' />
                <GridItem w='100%' bg='grey' />
            </Grid>
        </>
    );
};
