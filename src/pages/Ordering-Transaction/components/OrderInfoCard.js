import {
    Box,
    Button,
    Divider,
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
import { handlePayment } from '../../../api/ordering-transaction-api';

export const OrderInfoCard = ({ item, setIsLoading, fetchingData }) => {
    let stat = "";
    if (item.status == 'toServer') {
        stat = 'Serve';
    }
    if (item.status == 'onProcess') {
        stat = 'onProcess';
    }
    if (item.status == 'pending') {
        stat = 'Pending';
    }
    let billingStatus = '';
    let confirmPaymentButton = false;
    if (item.isBillOut == true) {
        if (item.isPaid == true) {
            confirmPaymentButton = false;
            billingStatus = 'Paid';
        } else {
            confirmPaymentButton = true;
            billingStatus = 'Requested for Payment';
        }
    } else {
        confirmPaymentButton = true;
        billingStatus = 'Not Yet Paid';
    }
    return (
        <>
            <Flex className='top-part'
                marginTop='2rem'
                flexDir='column'
                gap='10px'>
                <Text fontSize='25'
                    fontWeight='semibold'>
                    {item.fullName ? item.fullName : 'No Name'}
                </Text>
                <Flex
                    flex='1'
                    gap='5px'>
                    {/* <Box w='100%' borderWidth='1px' borderRadius='lg' overflow='hidden'
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
                    </Box> */}
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
                            {item.tableNumber ? item.tableNumber : 25}
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
                            {/* {item.status} */} {stat}
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
                                label={
                                    orders.options?.map((opt, i) =>
                                        <Text
                                            key={opt}
                                            padding='1.5'
                                            border='1px solid white'
                                            textColor='black'

                                        >
                                            {i == 0 ?
                                                <Text
                                                    borderBottom='1px'
                                                    // bg='blue'
                                                    fontWeight='bold'
                                                    fontSize='25'>
                                                    {opt}
                                                </Text>
                                                : i + ". " + opt}
                                        </Text>
                                    )
                                    // > : ''}
                                }
                                placement='left-start'
                                bg='white'
                            >
                                <Tr
                                    cursor='pointer'
                                    bgColor={orders.options?.length > 0 && orders.options ? 'teal.500' : 'white'}
                                    color={orders.options?.length > 0 && orders.options ? 'white' : 'black'}
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
            <Divider borderColor='gray' marginBlock='2' />
            {item.status == 'pending' ? null : item.currentTime == null ? null :
                <>
                    <Box marginLeft='2'>
                        <Flex>
                            <Text
                                fontSize='15'
                                fontWeight='semibold'
                                color='black'>Time:
                            </Text>
                            <Text
                                marginInline='1.5'
                                fontSize='15'
                                color='black'>{item.currentTime}
                            </Text>
                            <Text
                                fontSize='15'
                                fontWeight='semibold'
                                color='black'>Date:
                            </Text>
                            <Text
                                marginInline='1.5'
                                fontSize='15'
                                color='black'>{item.currentDate}
                            </Text>
                        </Flex>
                        <Flex>
                            <Text
                                fontSize='15'
                                fontWeight='semibold'
                                color='black'>Handled By:
                            </Text>
                            <Text
                                marginInline='1.5'
                                fontSize='15'
                                color='black'>{item.handledBy}
                            </Text>
                        </Flex>
                    </Box>
                    <Divider borderColor='gray' marginBlock='2' />
                </>}
            {/* {item.requestBillOut ? */}
            <>
                <Flex marginLeft='2' justifyContent='space-between'>
                    <Flex
                        // bg='blue'
                        // h='20'
                        align='center'
                        // marginTop='2'
                        justifyItems='center'
                    >
                        <Text
                            fontSize='15'
                            fontWeight='semibold'
                            color='black'>Billing:
                        </Text>
                        <Text marginLeft='1.5'>
                            {billingStatus}
                        </Text>
                    </Flex>
                    {confirmPaymentButton ?
                        <Button colorScheme='blue' size='sm'
                            onClick={() => {
                                setIsLoading();
                                handlePayment(item.id).then(() => { fetchingData(); });
                            }}>
                            Confirm
                        </Button> : null}
                </Flex>
                <Divider borderColor='gray' marginBlock='2' />
            </>
            {/* : ''} */}
        </>
    );
};
