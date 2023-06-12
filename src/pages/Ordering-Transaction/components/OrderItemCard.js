import { StarIcon } from '@chakra-ui/icons';
import { Badge, Box, Flex, Card, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const OrderItemCard = ({ post, setItemInfo }) => {
    let found = false;
    post.order.map(p => {
        if (p.options > 0) {
            p.options ? found = true : false;

        }
    });
    // let requestBillOut = post.requestBillOut;
    return (
        <Card>
            <Box
                as='button'
                onClick={() => {
                    setItemInfo(post);
                }}
            >
                <Box bg='teal.100'
                    borderRadius='md'>
                    {post.billing == 'call' ?
                        <Box bg='blue' h='15px' w='50%' />
                        : post.billing == 'paid' ?
                            <Box bgColor='green.400' h='15px' w='50%' /> :
                            ''}
                    {found ?
                        <Box bg='yellow'
                            h='15px' w='25%' /> : ''}
                    <Box display='flex' paddingLeft='2' paddingTop='2'>
                        <Text fontSize='xl' fontFamily='monospace' fontWeight='semibold' color='black'>
                            Table #
                        </Text>
                        <Text fontSize='xl' color='black'> {post.tableNumber ? post.tableNumber : 25}</Text>
                    </Box>
                    <Box display='flex'
                        alignItems='center'
                        paddingInline='2'>
                        <Text fontSize='xl' fontFamily='monospace'
                            // fontWeight='semibold'
                            color='black'>
                            Name:
                        </Text>
                        <Text fontSize='xl' color='black'> {post.fullName ? post.fullName : "No Name"}</Text>
                    </Box>
                </Box>
            </Box>
        </Card >
    );
};

export default OrderItemCard;