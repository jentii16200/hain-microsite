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

import { handleAcceptOrder, handleRejectOrder, handleOnProcessOrder } from '../api/HandleStatus';

import Style from '../index.module.css';
const OrderInfo = ({ item, setUpdateItem }) => {
    let button = null;
    if (item?.status == 'pending') {
        button =
            <Button colorScheme='green'
                fontSize='20px'
                onClick={
                    () => {
                        handleAcceptOrder(item.id);
                    }
                }
            >
                Confirm
            </Button>;
    } else if (item?.status == 'onProcess') {
        button =
            <Button colorScheme='green'
                fontSize='20px'
                onClick={() => {
                    handleOnProcessOrder(item.id);
                }
                }
            >
                Serve
            </Button>;
    } else if (item?.status == 'toServer') {
        button =
            <Button colorScheme='green'
                fontSize='20px'
                onClick={() => {
                    handleOnProcessOrder(item.id);
                }
                }
            >
                Complete
            </Button>;
    }
    if (item == null) return;
    return (
        <>
            <Flex className={Style.tableContainer}
                flexDirection='column'
                height='100%'>
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
                </>
                <>
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
                </>
                <>
                    <Flex
                        marginTop='10'
                        justifyContent='end'
                        gap='2'>
                        {button}
                        {/* <Button colorScheme='green'
                            fontSize='20px'
                            onClick={
                                () => {
                                    if (item.status == 'pending') {
                                        handleAcceptOrder(item.id);
                                        setUpdateItem(item);
                                    }
                                    else if (item.status == 'onProcess') {
                                        handleOnProcessOrder(item.id);
                                    }
                                }
                            }
                        >
                            Confirm
                        </Button> */}
                        <Button colorScheme='red'
                            fontSize='20px'
                            onClick={() => { handleRejectOrder(item.id); }}

                        >Cancel
                        </Button>
                    </Flex>
                </>
            </Flex>

        </>
    );
};

export default OrderInfo;