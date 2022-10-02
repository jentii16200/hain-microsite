import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption,
    TableContainer, Wrap, Box, Spinner, Button } from '@chakra-ui/react';

export const CustomerAccount = (props) => {
    const [posts, setPosts] = useState([]);
    const apiDeleteEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/deleteAccount';
    const apiEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getUserAccounts';
    useEffect(() => {
        handleData();
    }, []);

    const handleData = () =>{
        axios.get(apiEndPoint).then(res => {
            setPosts(res.data);
            console.log(res);
        }).catch(err =>{
            console.log(err);
        });
    };
    const handleDelete = async (post) => {
        axios.post(apiDeleteEndPoint, { accountId: post.id }).then(res =>{
            console.log(res);
        }).catch(err =>{
            console.log(err);
        });
    };
    return (
        <div>
            <TableContainer paddingInline={20}>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>ID #</Th>
                            <Th>USERNAME</Th>
                            <Th>NAME</Th>
                            <Th>PASSWORD</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {posts.map(post =>
                            <Tr key={post.id}>
                                <Td>{post.id}</Td>
                                <Td>{post.userName}</Td>
                                <Td>{post.name}</Td>
                                <Td>{post.password}</Td>
                                <Td isNumeric>
                                    <Button
                                        onClick={() => handleDelete()}
                                        className='delete'>
                                        Delete
                                    </Button>
                                </Td>
                            </Tr>)}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};
