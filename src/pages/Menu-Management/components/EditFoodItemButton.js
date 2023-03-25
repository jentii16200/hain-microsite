import React, { useRef, useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    IconButton,
    Button,
    Flex,
    Text,
    Input,
    Image,
    Textarea,
    useToast
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { UpdateMenu } from '../../../api/menu-api';

export const EditFoodItemButton = ({ foodInfo }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const [foodData, setFoodData] = useState(foodInfo);

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
        UpdateMenu(foodData);
        // console.log(foodData);
    };

    return (
        <>
            <IconButton
                icon={<EditIcon
                    boxSize='2rem' />}
                colorScheme='green' onClick={() => {
                    onOpen();
                    setFoodData(foodInfo);
                }} />
            <Modal size='xl' isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
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
                                    <Flex
                                        flexBasis='100rem'
                                        flexDirection='column'>
                                        <Text>
                                            Type:
                                        </Text>
                                        <Input
                                            name='type'
                                            value={foodData.type}
                                            onChange={handleChange} />
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
                            onClick={onClose}
                        >

                            Close
                        </Button>
                        <Button
                            isLoading={loading}
                            colorScheme='teal'
                            onClick={() => {
                                setLoading(true);
                                handleSubmit();
                                setTimeout(() => {
                                    toast({
                                        title: 'Item Updated.',
                                        description: "We've successfully updated the item in the menu.",
                                        status: 'success',
                                        duration: 2000,
                                        isClosable: true,
                                    });
                                    setLoading(false);
                                    onClose();
                                }, 1000);
                            }}>

                            Update
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
