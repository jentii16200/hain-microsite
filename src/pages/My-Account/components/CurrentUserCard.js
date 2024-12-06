import { Box, Card, CardBody, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

export const CurrentUserCard = ({ userData }) => {
    let countEmployee = 0;
    userData?.map(post => {
        if (post.aToken === 'employee') {
            countEmployee++;
        }
    });
    return (
        <Card minHeight="100%" minWidth="50px">
            <CardBody>
                <Text fontSize='xl' fontFamily='monospace' fontWeight='semibold' color='black'>
                    Employee
                </Text>
                <Flex>
                    <Box boxSize='60px'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'>
                        <FaUser size='70%' />
                    </Box>
                    <Flex flexDirection='column'
                        marginLeft='5'>
                        <Text fontSize='xl' fontFamily='sans-serif' fontWeight='bold' color='black'>
                            {countEmployee}
                        </Text>
                        <Text fontSize='sm' fontFamily='monospace' fontWeight='bold' color='gray.400'>
                            Total Employee
                        </Text>
                    </Flex>
                </Flex>
            </CardBody>
        </Card >
    );
};
