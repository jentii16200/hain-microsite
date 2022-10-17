import React from 'react';
import {
    Grid,
    GridItem,
    Button,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

export const HandleModal = ({ modalData, handleCloseModal }) => {
    return (
        <ModalContent>
            <ModalBody>
                <Grid
                    templateRows={'repeat(5, 1fr)'}
                    templateColumns={'repeat(5, 1fr)'}
                    gap={'1'}
                    h='500px'>
                    <GridItem rowSpan={2} colSpan={3}
                        bg='gray'>
                        {modalData.name}
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={2}
                        bg='gray'>
                        <Image src={modalData.imageUrl}
                            width='100%'
                            height='100%'
                            objectFit='cover' />
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={1}
                        bg='gray'>
                        TESTING
                    </GridItem>
                    <GridItem rowSpan={3} colSpan={4}
                        bg='gray'>
                        {modalData.description}
                    </GridItem>
                </Grid>
            </ModalBody>
            <ModalFooter>
                <Button
                    colorScheme='blue'
                    mr={3}
                    onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
        </ModalContent>
    );
};
