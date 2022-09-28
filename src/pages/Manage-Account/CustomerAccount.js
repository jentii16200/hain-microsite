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
    const apiEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getUserAccounts';
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
            <TableContainer paddingInline={20}>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>USERNAME</Th>
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
            {/* <div className='content'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>USERNAME</th>
                            <th>NAME</th>
                            <th>PASSWORD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post =>
                            <tr key={post.userName}>
                                <td>{post.userName}</td>
                                <td>{post.name}</td>
                                <td>{post.password}</td>
                            </tr>)}
                    </tbody>

                </table>
            </div> */}
        </div>
    );
};
