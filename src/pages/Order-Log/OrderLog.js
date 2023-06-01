import React, { useState, useEffect } from 'react';
import { Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import {
    Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption,
    TableContainer
} from '@chakra-ui/react';

const API_ORDERS = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getOrderLogs';

const OrderLog = () => {
    let q = 0;
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let isCancelled = false;
        let x;
        axios.get(API_ORDERS).then(res => {
            if (isCancelled) return;
            const sortedPosts = res.data
                .filter(post => post.status === 'completed' || post.status === 'rejected')
                .sort((a, b) => {
                    const aDate = new Date(`${b.currentDate} ${b.currentTime}`);
                    const bDate = new Date(`${a.currentDate} ${a.currentTime}`);
                    return bDate - aDate;

                });
            console.log(sortedPosts);
            setPosts(sortedPosts);

            // x = res.data;

            // setPosts(x);
            // console.log(x);

        }).catch(err => {
            console.log(err);
        });
        return () => {
            isCancelled = true;
            // setPosts(x);
        };
    }, []);
    return (
        <>
            <TableContainer
                padding='10'>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th
                                width='10'>#
                            </Th>
                            <Th>NAME</Th>
                            <Th>ORDERS</Th>
                            <Th>STATUS</Th>
                            <Th>TIME</Th>
                            <Th>DATE</Th>
                            <Th>HANDLED BY</Th>
                            <Th>PRICE</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {posts?.map((post) => {
                            if (post.status == 'completed' || post.status == 'rejected') {
                                return (
                                    <Tr key={post.id}>
                                        <Td>{q = q + 1}</Td>
                                        <Td>{post.fullName ? post.fullName : post.userDetails.email}</Td>
                                        <Td width='6'>{post.order?.map(ord => ord.name + ",")}</Td>
                                        <Td>{post.status}</Td>
                                        <Td>{post.currentTime}</Td>
                                        <Td>{post.currentDate}</Td>
                                        <Td>{post.handledBy}</Td>
                                        <Td>{post.totalPrice}</Td>
                                    </Tr>
                                );
                            }
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
};
export default OrderLog;