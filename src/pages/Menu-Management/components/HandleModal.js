import React, { useEffect, useReducer, useRef, useState } from 'react';
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
import { postReducer } from '../hooks/FoodInfoReducer';

export const HandleModal = ({ modalData, handleCloseModal }) => {
    console.log('na render')
    const [foodData, setFoodData] = useState(modalData);
    const handleChange = (e) => {
        setFoodData({ ...foodData, [e.target.name]: e.target.value });
    };


    const ingredientsRef = useRef();
    const handleIngredients = () => {
        const ingredients = ingredientsRef.current.value.split(',');
        ingredients.forEach((ing) => {
            setFoodData((prev) => ({ ...prev, ingredients: [...prev.ingredients, ing] }))
        })
    }

    console.log(foodData)

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
                                name='name'
                                value={foodData.name}
                                onChange={handleChange} />
                            <Text>
                                Price:
                            </Text>
                            <Input
                                name='price'
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
                        ref={ingredientsRef}
                        name='description'
                        minHeight='10rem'
                        value={foodData.description}
                        onChange={handleIngredients} />
                    <Text>
                        Ingredients:
                    </Text>
                    <Textarea
                        name='ingredients'
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
