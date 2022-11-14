import { Box, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';

const SelectedOrder = ({ item }) => {

    if (item != null) {
        return (
            <>
                <Flex flexDir='column'
                    alignSelf='center'>
                    <Box alignSelf='center'>
                        {item.id}
                    </Box>
                    <Box
                        alignSelf='center'>
                        {item.userDetails?.name}
                    </Box>
                    <Flex width='20rem' border='1px solid black'>
                        <TableContainer>
                            <Table variant={'simple'} size='sm' >
                                <Thead>
                                    <Tr>
                                        <Th>Name</Th>
                                        <Th>Quantity</Th>
                                        <Th>Priceame</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {item.order.map(orders =>
                                        <Tr key={orders.name}>
                                            <Td>{orders.name}</Td>
                                            <Td>{orders.quantity}</Td>
                                            <Td>{orders.price}</Td>
                                        </Tr>
                                    )}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Flex>
                </Flex>
            </>
        );
    }
};

export default SelectedOrder;