import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';

export const CustomerAccount = () => {

    const [posts, setPosts] = useState([]);
    const apiEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getUserAccountss';
    useEffect(() => {
        axios.get(apiEndPoint).then(res => {
            console.log(res);
            setPosts(res.data);
        }).catch(err =>{
            console.log(err);
        });
    }, []);
    return (

        <div>
            <TableContainer className='table'>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th width={'150px'}>USERNAME</Th>
                            <Th>NAME</Th>
                            <Th>PASSWORD</Th>
                            <Th isNumeric>DELETE</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {posts.map(post =>
                            <Tr key={post.userName}>
                                <Td>{post.userName}</Td>
                                <Td>{post.name}</Td>
                                <Td>{post.password}</Td>
                            </Tr>)}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};
