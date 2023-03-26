import {
    Box,
    Flex,
    Heading,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tooltip,
    Tr
} from '@chakra-ui/react';
import React from 'react';

export const OrderInfoCard = ({ item }) => {
    return (
        <>
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
                            <Tooltip key={orders.name}
                                padding='1'
                                minW='100px'
                                size='xl'
                                hasArrow
                                defaultIsOpen
                                label={
                                    orders.remarks ?
                                        <Text
                                            padding='1.5'
                                            border='1px solid white'
                                        >
                                            {orders.remarks}
                                        </Text> : ''}
                                placement='left-start'
                                bg='teal.500'>
                                <Tr
                                    cursor='pointer'
                                    bgColor={orders.remarks ? 'teal.500' : 'white'}
                                    color={orders.remarks ? 'white' : 'black'}
                                >
                                    <Td w='160px'>{orders.name}</Td>
                                    <Td textAlign='center'>{orders.quantity}</Td>
                                    <Td isNumeric>{orders.price}</Td>
                                </Tr>
                            </Tooltip>
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

        </>
    );
};
