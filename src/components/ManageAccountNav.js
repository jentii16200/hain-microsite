import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Tabs, TabList, Tab } from '@chakra-ui/react';

export const ManageAccountNav = () => {
    return (
        <div>
            <Tabs isFitted>
                <TabList mb='1em'>
                    {/* <Tab as={Link} to='admin'>ADMIN</Tab> */}
                    <Tab as={Link} to='customer'>CUSTOMER</Tab>
                    <Tab as={Link} to='employee'>EMPLOYEE</Tab>

                </TabList>
            </Tabs>
            <Outlet />
        </div>
    );
};
