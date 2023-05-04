import { CheckIcon } from '@chakra-ui/icons';
import { Box, Card, CardBody, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const CompletedCard = ({ posts }) => {
    let completedStatus = 0;
    posts?.map(post => {
        if (post.status == 'completed') {
            completedStatus++;

        }
    });
    return (
        <Card minHeight="100%" minWidth="50px">
            <CardBody>
                <Text fontSize='xl' fontFamily='monospace' fontWeight='semibold' color='black'>
                    Completed
                </Text>
                <Flex paddingTop='2'>
                    <Box boxSize='60px'
                        display='flex'
                        bg='green'
                        borderRadius='full'
                        justifyContent='center'
                        alignItems='center'>
                        <CheckIcon boxSize='80%' bg='green' color='white' borderRadius='full' />
                    </Box>
                    <Flex flexDirection='column'
                        marginLeft='5'>
                        <Text fontSize='xl' fontFamily='sans-serif' fontWeight='bold' color='black'>
                            {completedStatus}
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
