import React, { useRef, useState } from 'react';
import {
    Button,
    Image,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Text,
    Input,
    Flex,
    Textarea,
} from '@chakra-ui/react';
import { AddMenu, UpdateMenu } from '../../../api/menu-api';

export const UpdateFoodItem = ({ modalData, handleCloseModal }) => {
    console.log('na render');
    const [foodData, setFoodData] = useState(modalData);

    const handleChange = (e) => {
        setFoodData({ ...foodData, [e.target.name]: e.target.value });
    };
    const handlePrice = (e) => {
        setFoodData({ ...foodData, price: parseFloat(e.target.value) });
    };

    const ingredientsRef = useRef();
    const HandleIngredients = () => {
        const ing = ingredientsRef.current.value.split(',');
        setFoodData({ ...foodData, ingredients: ing });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        UpdateMenu(foodData);
    };

    console.log(foodData);

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
                                type='number'
                                value={foodData.price}
                                onChange={handlePrice} />
                        </Flex>
                        <Image
                            boxSize='10rem'
                            src={foodData.imageUrl} />
                    </Flex>
                    <Text>
                        Description:
                    </Text>
                    <Textarea
                        name='description'
                        minHeight='10rem'
                        value={foodData.description}
                        onChange={handleChange} />
                    <Text>
                        Ingredients:
                    </Text>
                    <Textarea
                        ref={ingredientsRef}
                        name='ingredients'
                        minHeight='5rem'
                        defaultValue={foodData.ingredients}
                        onChange={HandleIngredients}
                    />

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
                    onClick={handleSubmit}>

                    Update
                </Button>
            </ModalFooter>
        </ModalContent>
    );
};
