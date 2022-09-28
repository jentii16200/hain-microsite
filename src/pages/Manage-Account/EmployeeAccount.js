import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption,
    TableContainer } from '@chakra-ui/react';

export const EmployeeAccount = () => {
    const [posts, setPosts] = useState([]);
    const apiEndPoint = '';
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
            <TableContainer className='table' >
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th width={'150px'}>EMPLOYEE #</Th>
                            <Th>NAME</Th>
                            <Th>PASSWORD</Th>
                            <Th isNumeric>DELETE</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {posts.map(post =>
                            <Tr key={post.employeeNumber}>
                                <Td>{post.employeeNumber}</Td>
                                <Td>{post.name}</Td>
                                <Td>{post.password}</Td>
                            </Tr>)}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};
