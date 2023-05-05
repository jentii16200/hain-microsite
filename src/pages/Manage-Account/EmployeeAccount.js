import React, { useEffect, useState } from 'react';
import {
    Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption,
    TableContainer, Wrap, Box, Spinner, Button, IconButton, useToast
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { EMPLOYEE_DATA } from './temp/employeeAccountData';
import axios from 'axios';
import { DeleteButton } from './components/DeleteButton';
import { Loading } from '../../components/Loading';
import { EditButton } from './components/EditButton';

const apiEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getUserAccounts';

export const EmployeeAccount = () => {
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const toast = useToast();
    let q = 1;

    useEffect(() => {
        fetchData();
    }, [count]);
    const fetchData = async () => {
        await axios.get(apiEndPoint).then(res => {
            setPosts(res.data);
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
        ).catch(err => { console.log(err); });
    };
    const handleButtonClick = () => {
        setIsLoading(true);
        fetchData().then(res => {
            toast({
                title: `Account Successfully Updated`,
                status: 'success',
                position: 'top-right',
                duration: 1000,
                isClosable: true,
            });
        });
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
                                if (post.aToken == 'employee') {
                                    return (
                                        <Tr key={post.id}>
                                            <Td>{q++}</Td>
                                            <Td>{post.accountID}</Td>
                                            <Td>{post.employeeFirstName} {post.employeeLastName}</Td>
                                            <Td>{post.password}</Td>
                                            <Td isNumeric>
                                                <EditButton handleClick={handleButtonClick} post={post} />
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
