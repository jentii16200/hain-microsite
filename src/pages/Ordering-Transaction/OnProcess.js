import React, { useState } from 'react';
import { Box, Button, Grid, GridItem, Table, TableContainer, Thead, Th, Tr, Tbody, Td } from '@chakra-ui/react';
import { handleOnProcessOrder } from '../../components/HandleStatus';
import { useEffect } from 'react';
import axios from 'axios';

export const OnProcess = () => {
    const apiEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getOrderLogs';

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        handleData();
    }, []);
    const handleData = () =>{
        axios.get(apiEndPoint).then(res => {
            setPosts(res.data);
        }).catch(err =>{console.log(err);});
    };

    return (
        <>
            <Grid templateColumns='repeat(4, 2fr)' gap={.5}
                templateRows='repeat(2, 1fr)'
                bg='black'
                h='84vh'>
                {posts.map(post =>
                {if(post.status === 'onGoing'){
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
                                        {post.orders.map(order =>
                                            <Tr key={order.name}>
                                                <Td>{order.name}</Td>
                                                <Td>{order.quantity}</Td>
                                                <Td>{order.price}</Td>
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
                                onClick={() => {handleOnProcessOrder(post.id);}}>Accept
                            </Button>
                        </GridItem>
                    );
                }}

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
