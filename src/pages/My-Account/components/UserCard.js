import { Box, Card, CardBody, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { MdSupervisorAccount } from 'react-icons/md';

export const UserCard = ({ userData }) => {
    let countUser = 1;
    userData?.map(post => {
        if (post.authToken == 'customer'
            && post.aToken != 'employee'
        ) {
            countUser++;
        }
    });
    return (
        <Card minHeight="100%" minWidth="50px">
            <CardBody>
                <Text fontSize='xl' fontFamily='monospace' fontWeight='bold' color='black'>
                    Customer
                </Text>
                <Flex paddingInline=''>
                    <Box boxSize='60px'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'>
                        <MdSupervisorAccount size='100%' />
                    </Box>
                    <Flex flexDirection='column'
                        marginLeft='5'>
                        <Text fontSize='xl' fontFamily='sans-serif' fontWeight='bold' color='black'>
                            {countUser}
                        </Text>
                        <Text fontSize='sm' fontFamily='monospace' fontWeight='bold' color='gray.400'>
                            Total Customer
                        </Text>
                    </Flex>
                </Flex>
            </CardBody>
        </Card>
    );
};
