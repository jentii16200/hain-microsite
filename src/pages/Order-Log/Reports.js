import { Card, CardBody, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { UserCard } from '../My-Account/components/UserCard';
import { TransactionCard } from '../My-Account/components/TransactionCard';
import { CurrentUserCard } from '../My-Account/components/CurrentUserCard';
import { RevenueCard } from '../My-Account/components/RevenueCard';
import { CompletedCard } from '../My-Account/components/CompletedCard';
import { RejectedCard } from '../My-Account/components/RejectedCard';
import { CurrentTransactionCard } from '../My-Account/components/CurrentTransactionCard';
import axios from 'axios';
const API_ORDERS = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getOrderLogs';

export const Reports = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let isCancelled = false;
        let x;
        axios.get(API_ORDERS).then(res => {
            if (isCancelled) return;
            x = res.data;
            setPosts(x);
            console.log(x);

        }).catch(err => {
            console.log(err);
        });
        return () => {
            isCancelled = true;
            setPosts(x);
        };
    }, []);
    return (
        <Flex
            minWidth='500px'
            bg='gray.200'>
            <Grid
                minHeight="100%"
                width="100%"
                padding="10"
                templateRows="repeat(9, 1fr)"
                templateColumns="repeat(6, 1fr)"
                gap={5}
            >
                <GridItem rowSpan={2} colSpan={2} minW='200px'> <CurrentUserCard /> </GridItem>
                <GridItem rowSpan={2} colSpan={2} minW='200px'> <UserCard /> </GridItem>
                <GridItem rowSpan={2} colSpan={2} minW='200px'> <TransactionCard /> </GridItem>
                <GridItem rowSpan={4} colSpan={5}> <RevenueCard /> </GridItem>
                <GridItem rowSpan={2} colSpan={1} minW='200px'> <CompletedCard /> </GridItem>
                <GridItem rowSpan={2} colSpan={1}> <RejectedCard /> </GridItem>
                <GridItem rowSpan={3} colSpan={6}> <CurrentTransactionCard posts={posts} /> </GridItem>
            </Grid>
        </Flex>
    );
};
