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
import { Loading } from '../../components/Loading';
import { GetAccounts } from './api/apiManageAccount';
import { EditButton } from './components/EditButton';

const apiEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getUserAccounts';

export const CustomerAccount = (props) => {
    const [posts, setPosts] = useState([]);
    const storedId = localStorage.getItem('userId');
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => { fetchData(); }, [count]);

    const fetchData = async () => {
        await axios.get(apiEndPoint).then(
            res => {
                setPosts(res.data);
                setIsLoading(false);
                console.log(res.data);
            }
        ).catch(err => { console.log(err); });
    };
    const handleButtonClick = () => {
        setIsLoading(true);
        fetchData();
        setCount(prevCount => prevCount + 1);
    };

    return (
        <>
            {isLoading ? <Loading /> :
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
                                                <EditButton handleClick={handleButtonClick} post={post} />
                                                <DeleteButton handleClick={handleButtonClick} post={post} />
                                            </Td>
                                        </Tr>
                                    );
                            }
                            )}
                        </Tbody>
                    </Table>
                </TableContainer>
            }
        </>
    );
};
