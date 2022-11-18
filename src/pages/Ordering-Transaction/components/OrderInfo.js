import {
    Box, Flex, Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
} from '@chakra-ui/react';
import React from 'react';

const OrderInfo = ({ item }) => {

    if (item == null) return;
    return (
        <>
            <Flex className='table-container'
                flexDirection='column'
                height='100%'>
                <top>
                    <Flex className='top-part'
                        marginTop='2rem'
                        flexDir='column'
                        gap='10px'>
                        <Heading>{item.userDetails.name}</Heading>
                        <Flex
                            flex='1'
                            gap='5px'>
                            <Box w='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'
                                bgColor='teal.200'
                                display='flex'
                                flexDir='column'
                                alignItems='center'
                                p='2'
                                paddingInline='5'>
                                <Box
                                    fontWeight='bold'
                                    fontSize='2xl'>
                                    1
                                </Box>
                                <Box>
                                    Order #
                                </Box>
                            </Box>
                            <Box w='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'
                                bgColor='teal.200'
                                display='flex'
                                flexDir='column'
                                alignItems='center'
                                p='2'
                                paddingInline='5'>
                                <Box
                                    fontWeight='bold'
                                    fontSize='2xl'>
                                    15
                                </Box>
                                <Box>
                                    Table #
                                </Box>
                            </Box>
                            <Box w='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'
                                bgColor='teal.200'
                                display='flex'
                                flexDir='column'
                                alignItems='center'
                                paddingTop='2'
                                paddingInline='5'
                                gap='1'>
                                <Box
                                    fontWeight='bold'
                                    fontSize='large'>
                                    {item.status}
                                </Box>
                                <Box
                                    paddingTop='1'>
                                    Status
                                </Box>
                            </Box>
                        </Flex>
                    </Flex>
                </top>
                <mid>
                    <TableContainer
                        overflow='hidden'
                        marginTop='5'
                        maxW='100%'>
                        <Table
                            colorScheme='gray'
                            size='sm'>
                            <Thead>
                                <Tr>
                                    <Th
                                        height='10'
                                        fontSize='15'
                                        fontWeight='bold'
                                        color='black'>
                                        Order
                                    </Th>
                                    <Th
                                        height='10'
                                        textAlign='center'
                                        fontSize='15'
                                        color='black'
                                        fontWeight='bold'>
                                        Quantity
                                    </Th>
                                    <Th isNumeric
                                        height='10'
                                        fontSize='15'
                                        color='black'
                                        fontWeight='bold'>
                                        Price
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {item.order.map(orders =>
                                    <Tr key={orders.name}>
                                        <Td>{orders.name}</Td>
                                        <Td textAlign='center'>{orders.quantity}</Td>
                                        <Td isNumeric>{orders.price}</Td>
                                    </Tr>
                                )}
                            </Tbody>
                        </Table>
                    </TableContainer>
                    <Flex
                        borderTop='1px solid black'
                        justifyContent='space-between'
                        marginInline='3.5'
                        paddingTop='2'
                        fontSize='15'
                        fontWeight='bold'
                        color='black'>
                        <Box>TOTAL PRICE</Box>
                        <Box>{item.totalPrice}</Box>
                    </Flex>
                </mid>
                <foot>
                    <Flex
                        marginTop='10'
                        justifyContent='end'
                        gap='2'>
                        <Button colorScheme='green'
                            fontSize='20px'
                        >Confirm
                        </Button>
                        <Button colorScheme='red'
                            fontSize='20px'
                        >Cancel
                        </Button>
                    </Flex>
                </foot>
            </Flex>

        </>
    );
};

export default OrderInfo;