import React, { useState } from 'react';
import { Box, Button, Grid, GridItem, Table, TableContainer, Thead, Th, Tr, Tbody, Td } from '@chakra-ui/react';
import { handleOnProcessOrder } from '../api/HandleStatus';
import { useEffect } from 'react';
import axios from 'axios';

export const OnProcess = () => {
    const apiEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getOrderLogs';

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        handleData();
        return () => {
            handleData();
        };
    }, []);

    const handleData = () => {
        axios.get(apiEndPoint).then(res => {
            setPosts(res.data);
        }).catch(err => { console.log(err); });
    };

    return (
        <>
            <Grid templateColumns='repeat(4, 2fr)' gap={.5}
                templateRows='repeat(2, 1fr)'
                bg='black'
                h='84vh'>
                {posts.map(post => {
                    if (post.status === 'onProcess') {
                        return (
                            <GridItem w='100%' bg='white' key={post.id}>
                                <h1>{post.id}</h1>
                                <TableContainer>
                                    <Table variant={'simple'}>
                                        <Thead>
                                            <Tr>
                                                <Th>Name</Th>
                                                <Th>Quantity</Th>
                                                <Th>Priceame</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {post.order.map(orders =>
                                                <Tr key={orders.name}>
                                                    <Td>{orders.name}</Td>
                                                    <Td>{orders.quantity}</Td>
                                                    <Td>{orders.price}</Td>
                                                </Tr>
                                            )}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                                <Box display={'flex'}>
                                    Total Amount
                                    <Box marginLeft={'163'}>{post.totalAmount}</Box>
                                </Box>
                                <h1>{post.status}</h1>
                                <Button
                                    onClick={() => { handleOnProcessOrder(post.id); }}>Accept
                                </Button>
                            </GridItem>
                        );
                    }
                }

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
