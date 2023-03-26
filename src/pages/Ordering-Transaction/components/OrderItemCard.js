import { StarIcon } from '@chakra-ui/icons';
import { Badge, Box, Flex, Card } from '@chakra-ui/react';
import React, { useState } from 'react';

const OrderItemCard = ({ post, setItemInfo }) => {
    let found = false;
    post.order.map(p => {
        p.remarks ? found = true : '';
    });

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

                    {found ?
                        <Box bg='yellow'
                            h='15px' w='50%' /> : ''}
                    <Box display='flex'
                        alignItems='center'
                        pt='2'
                        paddingInline='2'>
                        {post.userDetails.email}
                    </Box>
                    <Box p='2' display='flex' alignItems='baseline'>
                        {post.userDetails.name}
                    </Box>
                </Box>
            </Box>
        </Card >
    );
};

export default OrderItemCard;