import React, { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
import axios from 'axios';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption,
    TableContainer } from '@chakra-ui/react';

export const OrderLog = () => {
    // const [posts, setPosts] = useState([]);
    // const apiEndPoint = '';
    // useEffect(() => {
    //     axios.get(apiEndPoint).then(res => {
    //         console.log(res);
    //         setPosts(res.data);
    //     }).catch(err =>{
    //         console.log(err);
    //     });
    // }, []);
    const orderLogData = [
        {
            id: '1',
            name: 'SAGS',
            total: '500',
            date: '12.2.2022',

        },
        {
            id: '2',
            name: 'PASCY',
            total: '150',
            date: '12.2.2022',

        },
        {
            id: '3',
            name: 'JORGE',
            total: '503',
            date: '12.1.2022',

        },
        {
            id: '4',
            name: 'SINDINGAN',
            total: '800',
            date: '12.1.2022',

        },
        {
            id: '5',
            name: 'JM',
            total: '10',
            date: '12.1.2022',

        },
    ];
    return (
        <div>
            <Heading className='title'>ORDER LOG</Heading>
            <TableContainer className='table'>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>ORDERLOG #</Th>
                            <Th>NAME</Th>
                            <Th>TOTAL</Th>
                            <Th>DATE</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {orderLogData.map(post =>
                            <Tr key={post.id}>
                                <Td>{post.id}</Td>
                                <Td>{post.name}</Td>
                                <Td>{post.total}</Td>
                                <Td>{post.date}</Td>
                            </Tr>)}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};