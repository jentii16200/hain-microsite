import React, { useState } from 'react';
import {
    Flex,
    IconButton,
    Image,
    Heading,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Modal,
    ModalOverlay,
    Portal
} from '@chakra-ui/react';
import { DeleteFoodItemButton } from './components/DeleteFoodItemButton';
import { EditFoodItemButton } from './components/EditFoodItemButton';
const FoodInformation = ({ foodInfo }) => {
    if (foodInfo != null)
        return (

            <>
                <Flex
                    flexDir='column'
                    height='100%'>
                    <Flex
                        padding='5px'
                        flexDir='row'>
                        <Flex gap='3'>
                            <DeleteFoodItemButton foodInfo={foodInfo} />
                            <EditFoodItemButton foodInfo={foodInfo} />
                        </Flex>
                        <Image
                            marginLeft='3rem'
                            boxSize='100px'
                            borderRadius='100px'
                            src={foodInfo.imageUrl}
                            alignSelf='center' />
                    </Flex>
                    <Heading
                        margin={0}
                        alignSelf='center'
                        fontSize='35px'>
                        {foodInfo.name}
                    </Heading>
                    <Text
                        marginTop='0'
                        alignSelf='start'
                        fontSize='25px'>
                        Price (₱): {foodInfo.price}
                    </Text>
                    <Text
                        marginBottom='10'
                        marginTop='0'
                        alignSelf='flex-start'
                        fontSize='25px'>
                        Stock: {foodInfo.quantity}
                    </Text>
                    <Text
                        fontSize='18    '>
                        {foodInfo.description}
                    </Text>
                    <Text as='b'
                        fontSize='20px'>
                        Ingredients
                    </Text>
                    <ul>
                        <Flex flexDir='row'
                            gap='5px'
                            wrap='wrap'
                            alignContent='space-between'>
                            {foodInfo.ingredients?.map((v, i) =>
                                <Text key={i}
                                    border='1px solid teal'
                                    borderRadius='20px'
                                    padding='5px'>{v}
                                </Text>
                            )}
                        </Flex>
                    </ul>

                </Flex>
            </>
        );
};

export default FoodInformation;
