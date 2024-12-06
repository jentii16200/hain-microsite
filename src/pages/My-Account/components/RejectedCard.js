import { CloseIcon } from '@chakra-ui/icons';
import { Box, Card, CardBody, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const RejectedCard = ({ posts }) => {
    let rejectedStatus = 0;
    posts?.map(post => {
        if (post.status == 'rejected') {
            rejectedStatus++;
        }
    });
    return (
        <Card minHeight="100%" minWidth="50px">
            <CardBody>
                <Text fontSize='xl' fontFamily='monospace' fontWeight='semibold' color='black'>
                    Rejected
                </Text>
                <Flex paddingTop='2'>
                    <Box boxSize='60px'
                        display='flex'
                        bg='red'
                        borderRadius='full'
                        justifyContent='center'
                        alignItems='center'>
                        <CloseIcon boxSize='80%' bg='red' color='white' borderRadius='full' />
                    </Box>
                    <Flex flexDirection='column'
                        marginLeft='5'>
                        <Text fontSize='xl' fontFamily='sans-serif' fontWeight='bold' color='black'>
                            {rejectedStatus}
                        </Text>
                        <Text fontSize='sm' fontFamily='monospace' fontWeight='bold' color='gray.400'>
                            Orders
                        </Text>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
};
