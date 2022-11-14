import React, { useEffect, useState } from 'react';
import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import { OrderingTransactionNav } from '../../components/OrderingTransactionNav';
import { GetOrders } from './api/HandleStatus';
import axios from 'axios';
import OrderLogItem from './OrderLogItem';
import SelectedOrder from './components/SelectedOrder';
const OrderingTransaction = () => {
    const apiGetOrder = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getOrderLogs';
    const [posts, setPosts] = useState([]);
    const [item, setItem] = useState([]);

    const setItemInfo = (props) => {
        setItem(props);
    };
    useEffect(() => {
        axios.get(apiGetOrder).then(res => {
            setPosts(res.data);
            console.log(res.data);
        }).catch(err => { console.log(err); });
    }, []);
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
                            maxW='100%'
                            h='100%'
                            border='1px solid black'
                            padding='2'>
                            <Flex justifyContent='center'
                                marginBottom='3'>
                                <Heading size='md'>Pending</Heading>
                            </Flex>
                            <Flex
                                flexDirection='column'
                                gap='3'>
                                {posts.map((post) => {
                                    if (post.status == 'pending') {
                                        return (
                                            <div key={post.id}>
                                                <OrderLogItem post={post} setItemInfo={setItemInfo} />
                                            </div>
                                        );
                                    }
                                }
                                )}
                            </Flex>
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
                            <Flex
                                flexDirection='column'
                                gap='3'>
                                {posts.map((post) => {
                                    if (post.status == 'onProcess') {
                                        return (
                                            <div key={post.id}>
                                                <OrderLogItem post={post} setItemInfo={setItemInfo} />
                                            </div>
                                        );
                                    }
                                }
                                )}
                            </Flex>
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
                            <Flex
                                flexDirection='column'
                                gap='3'>
                                {posts.map((post) => {
                                    if (post.status == 'completed') {
                                        return (
                                            <div key={post.id}>
                                                <OrderLogItem post={post} setItemInfo={setItemInfo} />
                                            </div>
                                        );
                                    }
                                }
                                )}
                            </Flex>

                        </GridItem>
                    </Grid>
                </Flex>
                <Flex flexDirection='column'
                    w='30%'
                    h='100%'
                    border='1px solid black'>
                    <SelectedOrder item={item} />
                </Flex>
            </Flex>
        </>
    );
};
export default OrderingTransaction;
