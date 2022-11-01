import React, { useState } from 'react';
import { Button, Heading, Select } from '@chakra-ui/react';
import { Pulutan } from './Pulutan';
import menuStyle from './index.module.css';

import { Grid, GridItem, Flex } from '@chakra-ui/react';
import FoodInformation from './FoodInformation';
import DropDownContainer from './testing/DropDownContainer';
import DropDownItems from './components/DropDownItems';

const MenuManagement = () => {

    const [menuName, setMenuName] = useState();
    const [foodInfo, setFoodInfo] = useState();

    const setFoodInformation = (props) => {
        setFoodInfo(props);
    };

    const buttonInfo = [
        {
            id: '1',
            name: 'Pulutan'
        },
        {
            id: '2',
            name: 'Inum'
        },
        {
            id: '3',
            name: 'Inum'
        },
        {
            id: '4',
            name: 'Inum'
        },
        {
            id: '5',
            name: 'Inum'
        }
    ]
    return (
        <>
            <div className={menuStyle.container}>
                <Heading className={menuStyle.title}>MENU MANAGEMENT</Heading>
                <div className={menuStyle.context}>
                    <div className={menuStyle.content}>
                        <div className={menuStyle.contentInfo}>
                            <Select placeholder='Menu'
                                fontSize='2xl'
                                icon='none'
                                size='lg'
                                variant='flushed'
                                marginBottom='1rem'
                                maxWidth='10rem'>
                                {buttonInfo.map(v =>
                                    <option
                                        key={v.id}
                                        value={v.name}>{v.name}</option>
                                )}
                            </Select>
                            <Flex>

                                <DropDownItems dish={menuName} setFoodInfo={setFoodInformation} />

                            </Flex>
                        </div>
                    </div>
                    <div className={menuStyle.info}>
                        <FoodInformation foodInfo={foodInfo} />
                    </div>
                </div>
            </div>
        </>
    );
};
export default MenuManagement;
