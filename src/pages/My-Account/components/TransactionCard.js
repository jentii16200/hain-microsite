import { Box, Card, CardBody, Flex, Text } from '@chakra-ui/react';
import { GiCycle } from 'react-icons/gi';
import React from 'react';

export const TransactionCard = () => {
    return (
        <Card minHeight="100%" minWidth="50px">
            <CardBody>
                <Text fontSize='xl' fontFamily='monospace' fontWeight='semibold' color='black'>
                    Transaction
                </Text>
                <Flex >
                    <Box boxSize='60px'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'>
                        <GiCycle size='80%' />
                    </Box>
                    <Flex flexDirection='column'
                        marginLeft='5'>
                        <Text fontSize='xl' fontFamily='sans-serif' fontWeight='bold' color='black'>
                            10,000
                        </Text>
                        <Text fontSize='sm' fontFamily='monospace' fontWeight='bold' color='gray.400'>
                            Total Transaction
                        </Text>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>

    );
};
