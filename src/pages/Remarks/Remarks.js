import React, { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
import axios from 'axios';
import {
    Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption,
    TableContainer
} from '@chakra-ui/react';

export const Remarks = () => {
    const [posts, setPosts] = useState([]);
    const apiEndPoint = '';
    useEffect(() => {
        axios.get(apiEndPoint).then(res => {
            console.log(res);
            setPosts(res.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);
    return (
        <div>
            <Heading className='title'>REMARKS</Heading>
            <TableContainer className='table'>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>INQUIRY #</Th>
                            <Th>REMARKS</Th>
                            <Th isNumeric>DELETE</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {posts.map(post =>
                            <Tr key={post.id}>
                                <Td>{post.id}</Td>
                                <Td>{post.remark}</Td>
                            </Tr>)}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};