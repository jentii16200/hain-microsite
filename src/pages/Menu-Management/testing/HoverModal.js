import React, { useEffect, useState } from 'react';
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

export const HoverModal = (modalDataSet, modalIsOpenSet) => {
    const open = { modalIsOpenSet };
    return (
        <>
            <Modal isOpen={open}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>TA
                        {modalDataSet.name}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        WALA
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );

};
