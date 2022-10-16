import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react';

export const HoverModal = (post) => {
    return (
        <Modal isOpen={true} onClose={false}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    WALA
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={false}>
                        Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );

};
