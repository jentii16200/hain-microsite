import { Box, Card, CardBody, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { VscGraphLine } from 'react-icons/vsc';

export const RevenueCard = ({ posts }) => {
    let totalRevenue = 0;
    posts?.map(post => {
        if (post.status == 'completed') {
            totalRevenue += parseInt(post.totalPrice);
        }
    });
    return (
        <Card minHeight="100%" minWidth="50px">
            <CardBody>
                <Text fontSize='xl' fontFamily='monospace' fontWeight='bold' color='black'>
                    Revenue
                </Text>
                <Flex >
                    <Flex flexDirection='column'
                        marginTop='10'
                        marginLeft='5'>
                        <Text fontSize='xl' fontFamily='sans-serif' fontWeight='bold' color='black'>
                            {totalRevenue}
                        </Text>
                        <Text fontSize='sm' fontFamily='monospace' fontWeight='bold' color='gray.400'>
                            Total Revenue
                        </Text>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
};
