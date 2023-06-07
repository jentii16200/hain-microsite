import React from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,
    useToast,
} from '@chakra-ui/react';
import { HandleUpdateAccount } from '../../../api/account-api';

const UpdateAlertDialog = ({ userInfo }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();
    const toast = useToast();

    const HandleAccept = () => {
        console.log(userInfo);
        HandleUpdateAccount(userInfo);
        localStorage.setItem("email", userInfo.accountID);
        localStorage.setItem("password", userInfo.password);
        localStorage.setItem('currentUser', JSON.stringify(userInfo));
    };
    return (
        <>
            <Button colorScheme='green' onClick={onOpen}>
                Update
            </Button>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Update Information
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            Are you sure you will update your information?
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='green'
                                onClick={() => {
                                    toast({
                                        title: 'Account Updated.',
                                        description: "We've successfully updated your account.",
                                        position: 'top-right',
                                        status: 'success',
                                        duration: 2000,
                                        isClosable: true,
                                    });
                                    onClose();
                                    HandleAccept();
                                }} ml={3}>
                                Update
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default UpdateAlertDialog;