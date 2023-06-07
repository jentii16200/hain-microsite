import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Tabs, TabList, Tab } from '@chakra-ui/react';

export const OrderingTransactionNav = () => {
    return (
        <>
            <Tabs isFitted>
                <TabList mb='1em'>
                    <Tab as={Link} to='pending'>PENDING</Tab>
                    <Tab as={Link} to='onprocess'>ONPROCESS</Tab>
                    <Tab as={Link} to='billout'>BILLOUT</Tab>
                </TabList>
            </Tabs>
            <Outlet />
        </>
    );
};
