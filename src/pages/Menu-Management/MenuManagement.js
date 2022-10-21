import React from 'react';
import { Heading } from '@chakra-ui/react';
import { Pulutan } from './testing/Pulutan';

import { Grid, GridItem } from '@chakra-ui/react';
import DropDownContainer from './components/DropDown/DropDownContainer';

const MenuManagement = () => {
    return (
        <div>
            <Heading className='title'>MENU MANAGEMENT</Heading>
            <Grid>
                <GridItem>
                    <DropDownContainer dish='Pulutan' />
                </GridItem>
            </Grid>
            {/* <Pulutan /> */}
        </div>
    );
};
export default MenuManagement;
