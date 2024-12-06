import { StarIcon } from '@chakra-ui/icons';
import { Badge, Box, Flex, Card, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const OrderItemCard = ({ post, setItemInfo }) => {
    let found = false;
    post.order.map(p => {
        if (p.options?.length > 0) {
            found = true;

        }
    });
    // let requestBillOut = post.requestBillOut;
    if (post.isBillOut == true && post.isPaid == false) {
        <Box bg='blue' h='15px' w='50%' />;
    } else if (post.isBillOut && post.isPaid) {
        <Box bg='green' h='15px' w='50%' />;
    }
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
                    {post.isBillOut == true && post.isPaid == false ?
                        <Box bg='blue.300' h='15px' w='50%' /> : post.isBillOut && post.isPaid ?
                            <Box bg='green.300' h='15px' w='50%' /> : null
                    }
                    {found ?
                        <Box bg='yellow.300'
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