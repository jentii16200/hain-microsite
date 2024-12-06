import React, { useEffect, useState } from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,
    AlertDialogCloseButton,
    Wrap,
    Box,
    Spinner,
    Center,
    Text,
    VStack,
} from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';
const LogOutDialog = ({ isOpen, onClose, logOut }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate();
    console.log('natawag');
    const cancelRef = React.useRef();
    const loggingOut = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            navigate('/');
            setIsTransitioning(false);
            onClose();
        }, 1000);

    };
    return (
        <>
            <AlertDialog size={isTransitioning ? 'full' : 'sm'}
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay backdropFilter='blur(10px) hue-rotate(90deg)' bg='blackAlpha.300' />
                <AlertDialogContent>
                    {isTransitioning ?
                        <AlertDialogBody>
                            <Center h='90vh'>
                                <VStack>
                                    <Spinner size="xl" color="blue.500" />
                                    <Text
                                        paddingTop='10'>
                                        Logging Out
                                    </Text>
                                </VStack>
                            </Center>
                        </AlertDialogBody>
                        :
                        <>
                            <AlertDialogHeader> </AlertDialogHeader>
                            <AlertDialogCloseButton />
                            <AlertDialogBody size='full'>
                                Log out of your account?
                            </AlertDialogBody>
                            <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onClose}>
                                    CANCEL
                                </Button>
                                <Button colorScheme='red' ml={3}
                                    onClick={() => {
                                        loggingOut();
                                    }}
                                >
                                    LOG OUT
                                </Button>
                            </AlertDialogFooter>
                        </>}
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default LogOutDialog;