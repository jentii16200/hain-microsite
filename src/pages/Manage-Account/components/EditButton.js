import { EditIcon } from '@chakra-ui/icons';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    useDisclosure,
    ModalCloseButton,
    ModalFooter,
    ModalBody,
    IconButton,
    FormControl,
    FormLabel,
    Input,
    Flex,
    InputGroup,
    InputRightElement,
    Divider,
    Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { HandleUpdateAccount } from '../../../api/account-api';

export const EditButton = ({ post, handleClick }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [updateAccount, setUpdateAccount] = useState(post);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setUpdateAccount({ ...updateAccount, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        console.log(updateAccount);
        HandleUpdateAccount(updateAccount);
        handleClick();
    };
    console.log('nagrerender');
    return (
        <>
            <IconButton
                icon={<EditIcon color='green' />}
                variant='unstyled'
                onClick={onOpen} />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form>
                            <Flex
                                flexDirection='column'>
                                <Flex gap='5'>
                                    <FormControl>
                                        <FormLabel>Username</FormLabel>
                                        <Input
                                            name='userName'
                                            defaultValue={post.userName}
                                            onChange={handleChange}
                                            placeholder='Enter Username' />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Password</FormLabel>
                                        <InputGroup size='md'>
                                            <Input
                                                name='password'
                                                type={showPassword ? 'password' : 'text'}
                                                defaultValue={post.password}
                                                onChange={handleChange}
                                                placeholder='Enter password'
                                            />
                                            <InputRightElement width='4.5rem'>
                                                <Button
                                                    variant='unstyled'
                                                    h='1.75rem'
                                                    size='sm'
                                                    onClick={() => setShowPassword(!showPassword)}>
                                                    {showPassword ? 'Show' : 'Hide'}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                    </FormControl>
                                </Flex>
                                {/* <Divider marginTop='5' marginBottom='2' /> */}
                            </Flex>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} onClick={onClose} variant='outline'>
                            Close
                        </Button>
                        <Button
                            mr='3'
                            colorScheme='green'
                            onClick={() => {
                                handleSubmit();
                                onClose();
                            }}>Update
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
