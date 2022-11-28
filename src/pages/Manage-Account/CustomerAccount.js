import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption,
    TableContainer, Wrap, Box, Spinner, Button, IconButton, Grid, GridItem
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { HandleDeleteAccount } from '../../api/account-api';
import { SearchBar } from '../../components/SearchBar';
import { GetAccount } from './api/apiManageAccount';

const apiEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getUserAccounts';

export const CustomerAccount = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(apiEndPoint).then(res => {
            setPosts(res.data);
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <Grid
                templateAreas={`"search"
                            "main"`}>

                <GridItem area={'main'}
                    marginTop={'80px'}>
                    <TableContainer className='table'>
                        <Table size='sm'>
                            <Thead>
                                <Tr>
                                    <Th>ID #</Th>
                                    <Th>USERNAME</Th>
                                    <Th>NAME</Th>
                                    <Th>PASSWORD</Th>
                                    <Th> </Th>
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
                                            <IconButton
                                                onClick={() => (HandleDeleteAccount(post.id))}
                                                variant={'unstyled'}
                                                icon={<DeleteIcon color={'red.500'} />} />
                                        </Td>
                                    </Tr>)}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </GridItem>
            </Grid>

        </>
    );
};
