import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Grid } from '@chakra-ui/react';

export const ManageAccountNav = () => {
    return (
        <div>
            {/* <ul className='manav'>
                <li><Link className='ma-link' to='admin'>ADMIN</Link></li>
                <li><Link className='ma-link' to='customer'>CUSTOMER</Link></li>
                <li><Link className='ma-link' to='employee'>EMPLOYEE</Link></li>
            </ul> */}
            <Tabs isFitted>
                <TabList mb='1em'>
                    <Tab as={Link} to='admin'>ADMIN</Tab>
                    <Tab as={Link} to='customer'>CUSTOMER</Tab>
                    <Tab as={Link} to='employee'>EMPLOYEE</Tab>

                </TabList>
                <TabPanels>
                    <TabPanel />
                    <TabPanel />
                    <TabPanel />
                </TabPanels>
            </Tabs>
            <Outlet />
        </div>
    );
};
