import { Box } from '@chakra-ui/react';
import React from 'react';

export const MenuLabel = (post) => {
    return (
        <Box>
            {post.description}
        </Box>
    );
};
