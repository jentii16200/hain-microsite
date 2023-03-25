import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Table,
    Thead,
    Tbody,
    Tr, Th,
    Td,
    TableContainer,
    IconButton,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { HandleDeleteAccount } from '../../api/account-api';
import { DeleteButton } from './components/DeleteButton';

const apiEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getUserAccounts';

export const CustomerAccount = (props) => {
    const [posts, setPosts] = useState([]);
    const storedId = localStorage.getItem('userId');
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     let isCancelled = false;
    //     console.log('Fetching Data');
    //     axios.get(apiEndPoint).then(res => {
    //         if (isCancelled) return;
    //         setPosts(res.data);
    //         console.log(res.data);

    //     }).catch(err => {
    //         console.log(err);
    //     });
    //     return () => {
    //         isCancelled = true;
    //     };
    // }, [count]);
    useEffect(() => {
        fetchData();
    }, [count]);

    const fetchData = async () => {
        await axios.get(apiEndPoint).then(
            res => {
                setPosts(res.data);
            }
        ).catch(err => { console.log(err); });
    };
    const handleButtonClick = () => {
        fetchData();
        setCount(prevCount => prevCount + 1);
    };

    return (
        <>
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
                        {posts.map((post) => {
                            if (post.authToken != 'employee')
                                return (
                                    <Tr key={post.id}>
                                        <Td>{post.id}</Td>
                                        <Td>{post.userName}</Td>
                                        <Td>{post.name}</Td>
                                        <Td>{post.password}</Td>
                                        <Td isNumeric>
                                            <DeleteButton handleClick={handleButtonClick} post={post} />
                                        </Td>
                                    </Tr>
                                );
                        }
                        )}
                    </Tbody>
                </Table>
            </TableContainer>

        </>
    );
};
