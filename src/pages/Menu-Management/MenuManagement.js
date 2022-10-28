import React, { useState } from 'react';
import { Button, Heading } from '@chakra-ui/react';
import { Pulutan } from './testing/Pulutan';
import menuStyle from './index.module.css'

import { Grid, GridItem } from '@chakra-ui/react';
import DropDownContainer from './components/DropDown/DropDownContainer';
import DropDownItems from './components/DropDown/DropDownItems';
import FoodInformation from './FoodInformation';

const MenuManagement = () => {

    const [menuName, setMenuName] = useState();
    const [foodInfo, setFoodInfo] = useState();

    const setFoodInformation = (props) => {
        setFoodInfo(props)
    }

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
                        <div className={menuStyle.contentButton}>
                            {buttonInfo.map(v =>
                                <div key={v.id}>
                                    <Button
                                        onClick={() => setMenuName(v.name)}>{v.name}</Button>
                                </div>
                            )}
                        </div>
                        <div className={menuStyle.contentInfo}>
                            <DropDownItems dish={menuName} setFoodInfo={setFoodInformation} />
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
