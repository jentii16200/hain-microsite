import { Flex, Heading, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import MonthDropdown from './components/MonthDropdown';

export const Analytics = () => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    const [user,] = useState(storedUser);
    return (
        <Flex
            flexDirection='column'
        // padding='5'
        >
            <Tabs variant='unstyled' position='relative' paddingInline='5' paddingTop='5'>
                <TabList>
                    <Tab
                        _selected={{ fontSize: 30, fontWeight: 'bold' }}
                        as={Link} to='order-log'>
                        <Text >
                            Order Log
                        </Text>
                    </Tab>
                    {user.aToken == 'admin' &&
                        <Tab
                            _selected={{ fontSize: 30, fontWeight: 'bold' }}
                            as={Link} to='reports'>
                            <Text>
                                Reports
                            </Text>
                        </Tab>}
                </TabList>
                <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="blue.500"
                    borderRadius="1px"
                />
            </Tabs>
            <Outlet />
        </Flex>
    );
};
