import React, { useEffect, useState } from 'react';
import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import axios from 'axios';
import OrderLogItem from './OrderLogItem';
import OrderInfo from './components/OrderInfo';

const OrderingTransaction = () => {
    const apiGetOrder = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getOrderLogs';
    const [posts, setPosts] = useState([]);
    const [item, setItem] = useState();
    const [update, setUpdate] = useState();

    const setUpdateItem = (props) => {
        setUpdate(props);
    };
    const setItemInfo = (props) => {
        setItem(props);
    };
    useEffect(() => {
        axios.get(apiGetOrder).then(res => {
            setPosts(res.data);
            console.log(res.data);
        }).catch(err => { console.log(err); });
    }, [update]);
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
                        paddingTop='1rem'
                        templateColumns='repeat(3, 1fr)' gap={0}>
                        <GridItem
                            maxW='100%'
                            h='100%'
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
                            borderInline='1px solid rgba(0, 0, 0, 0.1);'
                            w='100%'
                            h='100%'
                            padding='2'>
                            <Flex justifyContent='center'
                                marginBottom='3'
                            >
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
                            padding='2'>
                            <Flex justifyContent='center'
                                marginBottom='3'>
                                <Heading size='md'>BillOut</Heading>
                            </Flex>
                            <Flex
                                flexDirection='column'
                                gap='3'>
                                {posts.map((post) => {
                                    if (post.status == 'toServer') {
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
                    minW='30%'
                    h='100%'
                    p='2'>
                    <OrderInfo item={item} setUpdateItem={setUpdateItem} />

                </Flex>
            </Flex>
        </>
    );
};
export default OrderingTransaction;
