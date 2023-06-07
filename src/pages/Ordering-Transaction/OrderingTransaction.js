import React, { useEffect, useState } from 'react';
import { Box, Flex, Grid, GridItem, Heading, Spinner, Text, Wrap } from '@chakra-ui/react';
import axios from 'axios';
import OrderItemCard from './components/OrderItemCard';
import OrderInfoButton from './OrderInfoButton';
const apiGetOrder = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getOrderLogs';

const OrderingTransaction = () => {
    const [posts, setPosts] = useState([]);
    const [item, setItem] = useState();
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const setItemInfo = (props) => {
        setItem(props);
    };
    const setIsLoadingTrue = () => {
        setIsLoading(true);
        setCount(prevCount => prevCount + 1);
    };

    useEffect(() => { fetchingData(); }, [count]);
    const fetchingData = () => {
        axios.get(apiGetOrder).then(res => {
            setPosts(res.data);
            setIsLoading(false);
            console.log(res.data);
        }).catch(err => { console.log(err); });
    };

    return (
        <>
            <Heading padding='2'>ORDERING TRANSACTION</Heading>
            <Flex flexDirection='row'
                w='100%'
                h='100%'>

                <Flex flexDirection='column' w='70%'
                    padding='3'>
                    {isLoading ?
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
                        :
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
                                                    <OrderItemCard post={post} setItemInfo={setItemInfo} />
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
                                                    <OrderItemCard post={post} setItemInfo={setItemInfo} />
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
                                                    <OrderItemCard post={post} setItemInfo={setItemInfo} />
                                                </div>
                                            );
                                        }
                                    }
                                    )}
                                </Flex>

                            </GridItem>
                        </Grid>
                    }
                </Flex>
                <Flex flexDirection='column'>
                    <Flex flexDirection='column'
                        minW='30%'
                        h='100%'
                        p='2'>
                        <OrderInfoButton
                            setIsLoadingTrue={setIsLoadingTrue}
                            item={item} fetchingData={fetchingData} />
                    </Flex>
                </Flex>
            </Flex>

        </>
    );
};
export default OrderingTransaction;
