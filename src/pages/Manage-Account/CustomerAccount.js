import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption,
    TableContainer, Wrap, Box, Spinner, Button } from '@chakra-ui/react';

export const CustomerAccount = (props) => {
    const [posts, setPosts] = useState([]);
    const apiEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getUserAccounts';
    useEffect(() => {
        axios.get(apiEndPoint).then(res => {
            setPosts(res.data);
        }).catch(err =>{
            console.log(err);
        });
    }, []);

    const handleDelete = async (post) =>{

        axios.delete(apiEndPoint + '/' + post.userName);
        setPosts(posts.filter((f) => f.userName !== post.userName));
    };
    return (
        <div>
            <TableContainer paddingInline={20}>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>USERNAME</Th>
                            <Th>NAME</Th>
                            <Th>PASSWORD</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {posts.map(post =>
                            <Tr key={post.userName}>
                                <Td>{post.userName}</Td>
                                <Td>{post.name}</Td>
                                <Td>{post.password}</Td>
                                <Td isNumeric>
                                    <Button
                                        onClick={() => handleDelete(post)}
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
