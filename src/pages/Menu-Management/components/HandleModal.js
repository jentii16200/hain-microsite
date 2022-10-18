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
    Text,
} from '@chakra-ui/react';

export const HandleModal = ({ modalData, handleCloseModal }) => {
    return (
        <ModalContent
            borderRadius='lg'>
            <ModalBody
                borderTopRadius='lg'
                bg='teal'
                padding={'20px'}>
                <Grid
                    key={modalData.name}
                    templateRows={'repeat(5, 1fr)'}
                    templateColumns={'repeat(5, 1fr)'}
                    gap={'3'}
                    h='500px'>
                    <GridItem rowSpan={2} colSpan={3}
                        bg='gray.200'
                        borderRadius='lg'
                        padding={'0px 10px'}>
                        <Text
                            as='b'
                            paddingTop='40px'
                            display='flex'
                            alignItems={'center'}
                            justifyContent={'center'}
                            fontSize='5xl'>

                            {modalData.name}
                        </Text>
                        <Text
                            display='flex'
                            alignItems={'center'}
                            justifyContent={'center'}>

                            {modalData.price}
                        </Text>
                    </GridItem>
                    <GridItem
                        borderRadius='lg'
                        rowSpan={2} colSpan={2}
                        bg='gray'>
                        <Image src={modalData.imageUrl}
                            borderRadius='lg'
                            width='100%'
                            height='100%'
                            objectFit='cover' />
                    </GridItem>
                    <GridItem
                        borderRadius='lg'
                        rowSpan={3} colSpan={5}
                        bg='gray.200'>
                        <Text
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            fontSize='xl'
                            padding='10px 15px'>
                            {modalData.description}
                        </Text>
                    </GridItem>
                </Grid>
            </ModalBody>
            <ModalFooter
                bg='gray.200'
                borderBottomRadius='lg'>
                <Button
                    colorScheme='blue'
                    mr={3}
                    onClick={handleCloseModal}>

                    Close
                </Button>
                <Button
                    colorScheme='teal'
                    onClick={handleCloseModal}>

                    Update
                </Button>
            </ModalFooter>
        </ModalContent>
    );
};
