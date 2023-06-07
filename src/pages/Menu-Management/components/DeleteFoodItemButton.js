import React, { useState } from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,
    IconButton,
    useToast
} from '@chakra-ui/react';
import { DeleteIcon, DragHandleIcon, EditIcon } from '@chakra-ui/icons';

import { DeleteMenu } from '../../../api/menu-api';
export const DeleteFoodItemButton = ({ foodInfo, handleDelete, handleLoading }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();
    const toast = useToast();
    const [loading, setLoading] = useState(false);

    const handleConfirmDelete = () => {
        handleLoading();
        DeleteMenu(foodInfo).then(() => { onClose(); }).finally(() => { handleDelete(); });
    };
    return (
        <>
            <IconButton colorScheme='red' icon={<DeleteIcon
                boxSize='2rem' />} onClick={onOpen} />
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Food Item
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
                                colorScheme='red' onClick={() => {
                                    handleConfirmDelete();
                                    // setLoading(true);
                                    // DeleteMenu(foodInfo).then(() => {
                                    //     setLoading(false);
                                    //     onClose();
                                    // }).finally(() => {
                                    //     handleDelete();
                                    // });
                                    // setTimeout(() => {
                                    //     toast({
                                    //         title: 'Item Deleted.',
                                    //         description: "We've successfully deleted the item in the menu.",
                                    //         status: 'success',
                                    //         duration: 2000,
                                    //         isClosable: true,
                                    //     });
                                    //     setLoading(false);
                                    //     onClose();
                                    // }, 1000);
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
