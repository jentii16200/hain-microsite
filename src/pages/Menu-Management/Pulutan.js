import React, { useState, useEffect } from 'react';
import { Box, Image, Badge, Tooltip, useDisclosure, Button } from '@chakra-ui/react';
import axios from 'axios';
import { MenuLabel } from './testing/ToolTip';
import { HoverModal } from './testing/HoverModal';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';

export const Pulutan = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [posts, setPosts] = useState([]);
    const [items, setItems] = useState({});
    const apiEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getMenu';
    useEffect(() => {
        axios.post(apiEndPoint, { type: 'dish' }).then(res => {
            setPosts(res.data);
            console.log(res);
        }).catch(err =>{
            console.log(err);
        });
    }, []);

    return (
        <>
            <h2>PULUTAN</h2>
            <div className='menu'>

                {posts.map(post =>
                    <Tooltip
                        hasArrow label={MenuLabel(post)}
                        placement='auto-start'
                        key={post.id}>
                        <Box
                            className='card'
                            maxW='sm' borderWidth='1px'
                            borderRadius='lg'
                            overflow='hidden'
                            width={'180px'}
                            height ={'170px'}
                            key={post.id}
                            onClick= {onOpen}>
                            <Modal isOpen={isOpen} onClose={onClose} key={post.id}>
                                <ModalOverlay />
                                <ModalContent>

                                    <ModalHeader>{post.name}</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        {post.description}
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                                            Close
                                        </Button>
                                        <Button variant='ghost'>Secondary Action</Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                            <Image className='menu-image'
                                src={post.imageUrl}
                                alt={post.imageAlt}
                                width={'180px'}
                                height={'130px'}/>
                            <Box className='menu-name'>
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h2'
                                    noOfLines={2}
                                >
                                    {post.name}
                                </Box>
                            </Box>
                        </Box>
                    </Tooltip>

                )}
            </div>
        </>
    );
};

