import React from 'react';
import {
    Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption,
    TableContainer, Wrap, Box, Spinner, Button, IconButton
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export const EmployeeAccount = () => {
    const employeesData = [
        {
            id: '1',
            username: 'SAGS',
            name: 'SAGUIT',
            password: 'secret',

        },
        {
            id: '2',
            username: 'PASCY',
            name: 'PASCUAL',
            password: 'pascy',

        },
        {
            id: '3',
            username: 'SINDZ',
            name: 'SINDINGAN',
            password: 'cleo',

        },
        {
            id: '4',
            username: 'JM',
            name: 'ENTEREZO',
            password: 'entz',

        },
        {
            id: '5',
            username: 'JORGS',
            name: 'JORGE',
            password: 'hehe',

        }
    ];
    return (
        <div>
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
                        {employeesData.map(post =>
                            <Tr key={post.id}>
                                <Td>{post.id}</Td>
                                <Td>{post.username}</Td>
                                <Td>{post.name}</Td>
                                <Td>{post.password}</Td>
                                <Td isNumeric>
                                    <IconButton
                                        variant={'unstyled'}
                                        icon={<DeleteIcon color={'red.500'} />} />
                                </Td>
                            </Tr>)}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};
