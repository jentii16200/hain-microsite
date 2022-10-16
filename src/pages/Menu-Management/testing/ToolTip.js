import { Box } from '@chakra-ui/react';
import React from 'react';

export const MenuLabel = (post) => {
    return (
        <Box>
            <Box>
                {post.price}
            </Box>
            <Box>
                <h1>Description</h1>
                {post.description}
            </Box>
        </Box>
    );
};
