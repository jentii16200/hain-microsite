import React, { useState, useEffect } from 'react';
import { Button, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption,
    TableContainer } from '@chakra-ui/react';

export const Remarks = () => {
    const [posts, setPosts] = useState([]);
    const apiEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getRemarks';
    useEffect(() => {
        axios.get(apiEndPoint).then(res => {
            console.log(res);
            setPosts(res.data);
        }).catch(err =>{
            console.log(err);
        });
    }, []);

    const remarkData = [
        {
            id: '1',
            remark: 'baho'
        },
        {
            id: '2',
            remark: 'panget'
        },
        {
            id: '3',
            remark: 'awit'
        },
        {
            id: '4',
            remark: 'weeeee'
        },
        {
            id: '5',
            remark: 'wala lang'
        },
    ];
    return (
        <div>
            <Heading className='title'>REMARKS</Heading>
            <TableContainer className='table'>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>INQUIRY #</Th>
                            <Th>REMARKS</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {remarkData.map(post =>
                            <Tr key={post.id}>
                                <Td>{post.id}</Td>
                                <Td>{post.remark}</Td>
                                <Td isNumeric><Button>Delete</Button></Td>
                            </Tr>)}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};