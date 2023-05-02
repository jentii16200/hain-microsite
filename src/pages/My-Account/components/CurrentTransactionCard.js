import { Card, CardBody, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

export const CurrentTransactionCard = ({ posts }) => {
    let q = 0;
    return (
        <Card minHeight="100%" minWidth="50px" overflowY='auto'>
            <CardBody>
                <Text fontSize='xl' fontFamily='monospace' fontWeight='semibold' color='black'>
                    Current Transaction
                </Text>
                <TableContainer>
                    <Table size='sm' variant='simple'>
                        <Thead>
                            <Tr>
                                <Th
                                    width='10'>#
                                </Th>
                                <Th css={{ minWidth: "200px" }}>NAME</Th>
                                <Th minWidth='20px'>ORDERS</Th>
                                <Th minWidth='20px'>STATUS</Th>
                                <Th>PRICE</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {posts?.slice(0, 3).map((post) => {
                                if (post.status == 'completed' || post.status == 'rejected') {
                                    return (
                                        <Tr key={post.id}>
                                            <Td>{q = q + 1}</Td>
                                            <Td>{post.userDetails.email}</Td>
                                            <Td width='6'>{post.order?.map(ord => ord.name + ",")}</Td>
                                            <Td>{post.status}</Td>
                                            <Td>{post.totalPrice}</Td>
                                        </Tr>
                                    );
                                }
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>

            </CardBody>
        </Card>
    );
};
