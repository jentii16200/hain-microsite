import { StarIcon } from '@chakra-ui/icons';
import { Badge, Box, Flex } from '@chakra-ui/react';
import React from 'react';

const OrderLogItem = ({ post, setItemInfo }) => {
    return (
        <Box
            contentEditable={false}
            as='button'
            minW='14.8rem'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            onClick={() => {
                setItemInfo(post);
            }}
        >
            <Box p='2'>
                <Box display='flex'
                    alignItems='center'>
                    {post.id}
                </Box>
                <Box display='flex' alignItems='baseline'>
                    {post.userDetails.name}
                </Box>
            </Box>
        </Box>
    );
};

export default OrderLogItem;