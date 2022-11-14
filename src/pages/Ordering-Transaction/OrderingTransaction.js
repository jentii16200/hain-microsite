import React, { useEffect, useState } from 'react';
import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import { OrderingTransactionNav } from '../../components/OrderingTransactionNav';
import { GetOrders } from './api/HandleStatus';
import OrderlogItem from './OrderlogItem';
import axios from 'axios';
const OrderingTransaction = () => {
    const apiGetOrder = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getOrderLogs';
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get(apiGetOrder).then(res => {
            setPosts(res.data);
        }).catch(err => { console.log(err); });
    }, []);
    console.log(posts);
    return (
        <>
            <Flex flexDirection='row'
                w='100%'
                h='100%'>
                <Flex flexDirection='column' w='70%'
                    padding='3'>
                    <Flex>
                        <Heading >ORDERING TRANSACTION</Heading>
                    </Flex>
                    <Grid h='100%'
                        marginTop='1rem'
                        templateColumns='repeat(3, 1fr)' gap={0}>
                        <GridItem
                            w='100%'
                            h='100%'
                            border='1px solid black'
                            padding='2'>
                            <Flex justifyContent='center'
                                marginBottom='3'>
                                <Heading size='md'>Pending</Heading>
                            </Flex>
                            {posts?.map(post => {
                                <OrderlogItem post={post} />;
                            })}
                        </GridItem>
                        <GridItem
                            w='100%'
                            h='100%'
                            border='1px solid black'
                            padding='2'>
                            <Flex justifyContent='center'
                                marginBottom='3'>
                                <Heading size='md'>OnProcess</Heading>
                            </Flex>
                            <OrderlogItem />
                        </GridItem>
                        <GridItem
                            w='100%'
                            h='100%'
                            border='1px solid black'
                            padding='2'>
                            <Flex justifyContent='center'
                                marginBottom='3'>
                                <Heading size='md'>BillOut</Heading>
                            </Flex>
                            <OrderlogItem />

                        </GridItem>
                    </Grid>
                </Flex>
                <Flex flexDirection='column'
                    w='30%'
                    h='100%'
                    border='1px solid black'>
                    SELECTED ITEM
                </Flex>
            </Flex>
        </>
    );
};
export default OrderingTransaction;
