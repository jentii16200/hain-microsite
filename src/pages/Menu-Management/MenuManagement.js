import React, { useEffect, useState } from 'react';
import { Heading, Select } from '@chakra-ui/react';
import menuStyle from './index.module.css';
import { Flex } from '@chakra-ui/react';
import FoodInformation from './FoodInformation';

import CreateFoodItem from './components/CreateFoodItem';
import FoodItems from './components/FoodItems';
import { FOOD_TYPE } from './api/foodType';

const MenuManagement = () => {
    const [menuName, setMenuName] = useState(FOOD_TYPE[0].name);
    const [foodInfo, setFoodInfo] = useState();

    const setFoodInformation = (props) => {
        setFoodInfo(props);
    };

    const handleChange = (e) => {
        setMenuName(e.target.value);

    };
    return (
        <>
            <div className={menuStyle.container}>
                <Heading className={menuStyle.title}>MENU MANAGEMENT</Heading>
                <div className={menuStyle.context}>
                    <div className={menuStyle.content}>
                        <div className={menuStyle.contentInfo}>
                            <Flex
                                justifyContent='space-between'
                            >
                                <Select
                                    fontSize='2xl'
                                    icon='none'
                                    size='lg'
                                    variant='flushed'
                                    marginBottom='1rem'
                                    maxWidth='10rem'
                                    value={menuName}
                                    onChange={handleChange}
                                >
                                    {FOOD_TYPE.map(v =>
                                        <option
                                            key={v.id}
                                            value={v.name}

                                        >{v.name}
                                        </option>
                                    )}
                                </Select>
                                <CreateFoodItem />
                            </Flex>
                            <Flex
                                gap='5px'
                                wrap='wrap'>
                                <FoodItems menuType={menuName} setFoodInfo={setFoodInformation} />
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
