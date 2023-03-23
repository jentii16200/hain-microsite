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
    Card,
    Tooltip,
    Text
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { handleAcceptOrder, handleRejectOrder, handleOnProcessOrder, handleDoneOrder } from './api/HandleStatus';

const OrderInfo = ({ item, fetchingData }) => {
    const [updateItem, setUpdateItem] = useState();
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    const [user,] = useState(storedUser);
    var currentDateTime = new Date();
    var year = currentDateTime.getFullYear();
    var month = currentDateTime.getMonth() + 1;
    var day = currentDateTime.getDate();
    var hours = currentDateTime.getHours();
    var minutes = currentDateTime.getMinutes();
    var seconds = currentDateTime.getSeconds();

    const handleUpdate = () => {
        setUpdateItem({
            ...item,
            currentTime: `${hours}:${minutes}:${seconds}`,
            currentDate: `${day}/${month}/${year}`,
            handledBy: user.employeeFirstName + ' ' + user.employeeLastName
        });
    };
    console.log(updateItem);

    let button = null;
    const i = false;
    if (item?.status == 'pending') {
        button =
            <Button colorScheme='green'
                fontSize='20px'
                onClick={
                    () => {

                        handleAcceptOrder(item.id);
                        fetchingData();

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
                    fetchingData();
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

                    handleDoneOrder(item.id);
                    fetchingData();
                }
                }
            >
                Complete
            </Button >;
    }
    if (item == null) return;
    return (
        <>
            <Card
                height='100%'>
                <Flex
                    flexDirection='column'
                    p='2'
                >
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
                    <>
                        <Flex
                            marginTop='10'
                            justifyContent='end'
                            gap='2'>
                            {button}
                            <Button colorScheme='red'
                                fontSize='20px'
                                onClick={() => { handleRejectOrder(item.id); }}

                            >Cancel
                            </Button>
                            <Button colorScheme='red'
                                fontSize='20px'
                                onClick={() => {
                                    handleUpdate();
                                }}

                            >UPDATE
                            </Button>
                        </Flex>
                    </>
                </Flex>
            </Card>
        </>
    );
};

export default OrderInfo;