import React, { useEffect, useState } from 'react';
import {
    Box,
    Image,
    Modal,
    ModalOverlay,
    Portal
} from '@chakra-ui/react';
import axios from 'axios';
import { HandleModal } from '../HandleModal';

import { HoverModal } from '../../testing/HoverModal';

const DropDownItems = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [modalData, setModalData] = useState();
    const apiEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getMenu';
    useEffect(() => {
        axios.post(apiEndPoint, { type: 'dish' }).then(res => {
            setPosts(res.data);
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            {posts.map(post =>
                // <Tooltip
                //     hasArrow label={MenuLabel(post)}
                //     placement='auto-start'
                //     key={post.id}>
                <Box
                    className='card'
                    bg='white'
                    maxW='sm' borderWidth='1px'
                    borderRadius='lg'
                    overflow='hidden'
                    width={'180px'}
                    height={'170px'}
                    key={post.name}
                    onClick={() => {
                        HoverModal(post, true);
                        setModalData(post);
                        setModalIsOpen(true);
                    }}>
                    {modalIsOpen &&
                        <Modal
                            size='3xl'
                            isOpen={modalIsOpen}
                            onClose={() => setModalIsOpen(false)}>
                            <ModalOverlay />
                            <Portal>
                                <HandleModal
                                    modalData={modalData}
                                    handleCloseModal={handleCloseModal} />
                            </Portal>
                        </Modal>
                    }
                    <Image className='menu-image'
                        src={post.imageUrl}
                        alt={post.imageAlt}
                        width={'180px'}
                        height={'130px'} />
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
                // </Tooltip>

            )}
        </>
    );
};
export default DropDownItems;