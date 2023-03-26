import React, { useEffect, useState } from 'react';
import { Box, Card, Heading, Image, Select, Tooltip } from '@chakra-ui/react';
import menuStyle from './index.module.css';
import { Flex } from '@chakra-ui/react';
import FoodInformation from './FoodInformation';
import AddFoodItemButton from './components/AddFoodItemButton';
import { FOOD_TYPE } from './api/foodType';
import axios from 'axios';
import { Loading } from '../../components/Loading';

const API_END_POINT = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getMenu';

const MenuManagement = () => {
    const [menuName, setMenuName] = useState(FOOD_TYPE[0].name);
    const [foodInfo, setFoodInfo] = useState();
    const [posts, setPosts] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [menuName]);

    const fetchData = () => {
        axios.post(API_END_POINT, { type: menuName }).then(res => {
            setPosts(res.data);
            setIsLoading(false);
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    };

    const handleChange = (e) => {
        setIsLoading(true);
        setMenuName(e.target.value);

    };
    return (
        <>
            <div className={menuStyle.container}>
                <Heading className={menuStyle.title}>
                    MENU MANAGEMENT
                </Heading>
                {isLoading ? <Loading />
                    :
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
                                    <AddFoodItemButton />
                                </Flex>
                                <Flex
                                    justifyContent='center'
                                    gap='15px'
                                    wrap='wrap'>
                                    {posts?.map(post =>
                                        <Card key={post.name} >
                                            <Tooltip
                                                hasArrow label={post.description}
                                                placement='auto-start'
                                            >
                                                <Box
                                                    onClick={() => {
                                                        setFoodInfo(post);
                                                    }}>
                                                    <Image className='menu-image'
                                                        src={post.imageUrl}
                                                        alt={post.imageAlt}
                                                        width={'180px'}
                                                        height={'130px'} />
                                                    <Box className='menu-name'>
                                                        <Box
                                                            mt='1'
                                                            fontWeight='semibold'
                                                            as='h2'
                                                            noOfLines={2}
                                                        >
                                                            {post.name}
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Tooltip>
                                        </Card>

                                    )}
                                </Flex>
                            </div>
                        </div>
                        <div className={menuStyle.info}>
                            <FoodInformation foodInfo={foodInfo} />
                        </div>
                    </div>
                }
            </div>
        </>
    );
};
export default MenuManagement;
