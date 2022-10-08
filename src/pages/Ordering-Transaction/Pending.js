import React, { useEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
export const Pending = () => {
    const [posts, setPosts] = useState([]);
    const apiEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getOrderLogs';
    useEffect(() => {
        axios.get(apiEndPoint).then(res => {
            setPosts(res.data);
            console.log(res);
        }).catch(err =>{
            console.log(err);
        });
    }, []);

    return (
        <>
            <Grid templateColumns='repeat(4, 2fr)' gap={.5}
                templateRows='repeat(2, 1fr)'
                bg='black'
                h='84vh'>
                {posts.map(post =>
                    <GridItem w='100%' bg='grey' h='300px' key={post.id}>
                        <h1>{post.id}</h1>
                        <h1>{post.orders.map(order =>
                            <h1 key={order.name}>
                                <h1>{order.name}</h1>
                                <h1>{order.quantity}</h1>
                                <h1>{order.price}</h1>
                            </h1>)}
                        </h1>
                        <h1>{post.status}</h1>
                        <h1>{post.totalAmount}</h1>
                        <Button>Accept</Button>
                    </GridItem>
                )}
                {/* <GridItem w='100%' bg='grey' />
                <GridItem w='100%' bg='grey' />
                <GridItem w='100%' bg='grey' />
                <GridItem w='100%' bg='grey' />
                <GridItem w='100%' bg='grey' />
                <GridItem w='100%' bg='grey' />
                <GridItem w='100%' bg='grey' />
                <GridItem w='100%' bg='grey' />
                <GridItem w='100%' bg='grey' /> */}
            </Grid>
        </>
    );
};
