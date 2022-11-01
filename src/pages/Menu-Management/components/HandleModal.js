import React, { useEffect, useReducer, useState } from 'react';
import {
    Grid,
    GridItem,
    Button,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Input,
    Flex,
    Textarea,
} from '@chakra-ui/react';
import { INITIAL_STATE, postReducer } from '../hooks/FoodInfoReducer';

export const HandleModal = ({ modalData, handleCloseModal }) => {
    console.log('na render')
    const [foodData, setFoodData] = useState(modalData);
    const handleChange = (e) => {
        setFoodData({ ...foodData, name: e.target.value });
    };


    return (
        <ModalContent
            borderRadius='lg'>
            <ModalHeader>
                EDITING
            </ModalHeader>
            <ModalBody
                borderTopRadius='lg'
                padding={'20px'}>
                <Flex
                    flexDirection='column'>
                    <Flex
                        flexDirection='row'
                        gap='1rem'>
                        <Flex
                            flexBasis='100rem'
                            flexDirection='column'>
                            <Text>
                                Name:
                            </Text>
                            <Input
                                value={foodData.name}
                                onChange={handleChange} />
                            <Text>
                                Price:
                            </Text>
                            <Input
                                value={foodData.price}
                                onChange={handleChange} />
                        </Flex>
                        <Image
                            boxSize='10rem'
                            src={foodData.imageUrl} />
                    </Flex>
                    <Text>
                        Description:
                    </Text>
                    <Textarea
                        minHeight='10rem'
                        value={foodData.description}
                        onChange={handleChange} />
                    <Text>
                        Ingredients:
                    </Text>
                    <Textarea
                        minHeight='5rem'
                        value={foodData.ingredients}
                        onChange={handleChange} />

                </Flex>
            </ModalBody>
            <ModalFooter
                bg='gray.200'
                borderBottomRadius='lg'>
                <Button
                    colorScheme='blue'
                    mr={3}
                    onClick={handleCloseModal}>

                    Close
                </Button>
                <Button
                    colorScheme='teal'
                    onClick={handleCloseModal}>

                    Update
                </Button>
            </ModalFooter>
        </ModalContent>
    );
};
