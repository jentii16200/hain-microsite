import React, { useEffect, useState } from 'react';
import {
    Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption,
    TableContainer, Wrap, Box, Spinner, Button, IconButton
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { EMPLOYEE_DATA } from './temp/employeeAccountData';
import axios from 'axios';
import { DeleteButton } from './components/DeleteButton';
import { Loading } from '../../components/Loading';

const apiEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getUserAccounts';

export const EmployeeAccount = () => {
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [count]);
    const fetchData = async () => {
        await axios.get(apiEndPoint).then(res => {
            setPosts(res.data);
            setIsLoading(false);
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
                            </Tr>
                        </Thead>
                        <Tbody>
                            {posts.map((post) => {
                                if (post.authToken == 'employee') {
                                    return (
                                        <Tr key={post.id}>
                                            <Td>{post.id}</Td>
                                            <Td>{post.accountID}</Td>
                                            <Td>{post.employeeFirstName} {post.employeeLastName}</Td>
                                            <Td>{post.password}</Td>
                                            <Td isNumeric>
                                                <DeleteButton handleClick={handleButtonClick} post={post} />

                                            </Td>
                                        </Tr>
                                    );
                                }
                            }
                            )}
                        </Tbody>
                    </Table>
                </TableContainer>
            }
        </>
    );
};
