
import React, { useState, useRef } from 'react';

import {
    Drawer, DrawerOverlay,
    DrawerContent,
    DrawerHeader, DrawerBody, Input,
    Button, DrawerFooter, useDisclosure,
    Flex, Text, Image, Textarea, IconButton, Switch, Box, Select
} from '@chakra-ui/react';

import { AddIcon } from '@chakra-ui/icons';
import { AddMenu, UpdateBestSeller } from '../../../api/menu-api';
import { checkTargetForNewValues } from 'framer-motion';
import { FOOD_TYPE } from '../api/foodType';

const AddFoodItemButton = ({ handleClick, handleLoading }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [foodData, setFoodData] = useState({
        name: '',
        price: 1,
        description: '',
        ingredients: [],
        imageUrl: '',
        type: '',
        quantity: 1,
        isSold: false,
        isBestSeller: false
    });
    const [foodImage, setFoodImage] = useState();
    const handleImageUrl = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function () {
            const base64String = reader.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
            setFoodImage(base64String);
            setFoodData({ ...foodData, imageUrl: base64String });
            console.log(base64String);
        };
        reader.readAsDataURL(file);

    };
    const handleSwitch = (e) => {
        setFoodData({ ...foodData, isSold: e.target.checked });
    };

    const handleChange = (e) => {
        setFoodData({ ...foodData, [e.target.name]: e.target.value });
    };
    const handlePrice = (e) => {
        setFoodData({ ...foodData, price: parseFloat(e.target.value) });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLoading();
        // if(foodData.isBestSeller != )
        // UpdateBestSeller(foodData.name);
        AddMenu({ foodData, foodImage }).then(() => { handleClose(); }).finally(() => { handleClick(); });
        // handleClose();
    };

    const ingredientsRef = useRef();
    const HandleIngredients = () => {
        const ing = ingredientsRef.current.value.split(',');
        setFoodData({ ...foodData, ingredients: ing });
    };

    const handleClose = () => {
        // setFoodData(INITIAL_STATE);
        setFoodImage(null);
        onClose();
    };
    const btnRef = useRef();

    const uploadFile = () => {
        document.getElementById('imageUrl').click();
    };
    const handleFoodType = (e) => {
        // setIsLoading(true);
        setFoodData({ ...foodData, type: e.target.value });
    };
    return (
        <>
            <IconButton
                icon={<AddIcon />}
                ref={btnRef}
                colorScheme='teal'
                onClick={onOpen}
            />
            <Drawer
                size='md'
                isOpen={isOpen}
                placement='right'
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        <Flex justifyContent='space-between'>
                            Adding Item
                            <Box flex='1' />
                            <Flex direction='column'>
                                <Flex justifyContent='space-between' gap='1'>
                                    <Text
                                        fontWeight='normal'
                                    >Sold Out
                                    </Text>
                                    <Switch
                                        size="lg"
                                        name='isSold'
                                        isChecked={foodData.isSold}
                                        onChange={handleSwitch} />
                                </Flex>
                            </Flex>
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody>
                        <Flex
                            flexDirection='column'>
                            <Flex
                                flexDirection='row'
                                gap='1rem'>
                                <Flex
                                    flex='1'
                                    flexDirection='column'
                                >
                                    <Text>
                                        Name:
                                    </Text>
                                    <Input
                                        name='name'
                                        value={foodData.name}
                                        onChange={handleChange} />
                                    <Text>
                                        (₱) Price:
                                    </Text>
                                    <Input
                                        name='price'
                                        type='number'
                                        value={foodData.price}
                                        onChange={handlePrice}
                                    />
                                </Flex>
                                <Image
                                    onClick={uploadFile}
                                    boxSize='10rem'
                                    src={foodImage ? `data:image/png;base64,${foodImage}` : ''} />
                                <Input
                                    id='imageUrl'
                                    type='file'
                                    onChange={handleImageUrl}
                                    display='none'
                                />

                            </Flex>
                            <Text>
                                Description:
                            </Text>
                            <Textarea
                                name='description'
                                minHeight='10rem'
                                value={foodData.description}
                                onChange={handleChange} />
                            <Flex
                                gap='20px'>
                                <Flex
                                    flexDirection='column'
                                    width='70%'>
                                    <Text>
                                        Ingredients:
                                    </Text>
                                    <Textarea
                                        ref={ingredientsRef}
                                        name='ingredients'
                                        minHeight='5rem'
                                        value={foodData.ingredients}
                                        onChange={HandleIngredients} />
                                </Flex>
                                <Flex
                                    flexDirection='column'>
                                    <Text>
                                        Category:
                                    </Text>
                                    <Select
                                        placeholder='select category'
                                        isRequired={true}
                                        // fontSize="2xl"
                                        // icon="none"
                                        // size="lg"
                                        // variant="flushed"
                                        // marginBottom="1rem"
                                        // maxWidth="10rem"
                                        // value={menuName}
                                        onChange={handleFoodType}
                                    >
                                        {FOOD_TYPE.map((v) => (
                                            <option key={v.id} value={v.name}>
                                                {v.name}
                                            </option>
                                        ))}
                                    </Select>
                                    {/* <Input
                                        name='type'
                                        value={foodData.type}
                                        onChange={handleChange} /> */}
                                    <Text>
                                        Quantity:
                                    </Text>
                                    <Input
                                        name='quantity'
                                        type='number'
                                        value={foodData.quantity}
                                        onChange={handleChange} />
                                </Flex>
                            </Flex>

                        </Flex>

                    </DrawerBody>
                    <DrawerFooter>
                        <Button
                            variant='outline'
                            mr={3}
                            onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button
                            colorScheme='blue'
                            onClick={handleSubmit}>
                            Save
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default AddFoodItemButton;
