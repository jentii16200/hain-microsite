import React, { useEffect, useState } from 'react';
import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import axios from 'axios';
import OrderLogItem from './OrderLogItem';
import OrderInfo from './components/OrderInfo';

const OrderingTransaction = () => {
    const apiGetOrder = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getOrderLogs';
    const [posts, setPosts] = useState([]);
    const [item, setItem] = useState();
    let [update, setUpdate] = useState(0);

    const setItemInfo = (props) => {
        setItem(props);
    };
    const setUpdateItem = (props) => {
        setUpdate(update = update + 1);
    };
    const fetchingData = () => {
        let isCancelled = false;
        let x;
        console.log("Fetching Data");
        axios.get(apiGetOrder).then(res => {
            if (isCancelled) return;
            x = res.data;
            setPosts(x);
            console.log(x);

        }).catch(err => { console.log(err); });
        return () => {
            isCancelled = true;
            setPosts(x);
        };
    };
    useEffect(() => { fetchingData(); }, [update]);
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
                    <OrderInfo item={item} setUpdateItem={setUpdateItem} fetchingData={fetchingData} />

                </Flex>
            </Flex>
        </>
    );
};
export default OrderingTransaction;
