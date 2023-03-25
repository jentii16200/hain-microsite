import React, { useState } from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    IconButton,
    Button,
    useToast
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { HandleDeleteAccount } from '../../../api/account-api';

export const DeleteButton = ({ post, handleClick }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();
    const toast = useToast();
    const [loading, setLoading] = useState(false);

    return (
        <>
            <IconButton
                icon={<DeleteIcon color={'red.500'} />}
                variant={'unstyled'}
                onClick={onOpen}>
                Delete Customer
            </IconButton>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete User
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button
                                isLoading={loading}
                                colorScheme='red' onClick={
                                    () => {
                                        setLoading(true);
                                        (HandleDeleteAccount(post.id));

                                        handleClick();
                                        setTimeout(() => {
                                            toast({
                                                title: 'Account Deleted.',
                                                description: "We've successfully deleted the account.",
                                                status: 'success',
                                                duration: 2000,
                                                isClosable: true,
                                            });
                                            onClose();
                                        }, 1000);
                                    }} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};
