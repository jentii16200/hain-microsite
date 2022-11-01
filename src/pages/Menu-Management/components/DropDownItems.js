import React, { useEffect, useState } from 'react';
import {
    Box,
    Image,
    Modal,
    ModalOverlay,
    Portal,
    Tooltip,
} from '@chakra-ui/react';
import axios from 'axios';
import { HandleModal } from './HandleModal';
import { MenuLabel } from './ToolTip';
import { HoverModal } from '../testing/HoverModal';
import FoodInformation from '../FoodInformation';

const DropDownItems = ({ dish, setFoodInfo }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [modalData, setModalData] = useState();

    const apiEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getMenu';
    useEffect(() => {
        console.log('FETCHING DATA');
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
                <Tooltip
                    hasArrow label={post.description}
                    placement='auto-start'
                    key={post.name}>
                    <Box
                        className='card'
                        bg='white'
                        maxW='sm' borderWidth='1px'
                        borderRadius='lg'
                        overflow='hidden'
                        width={'180px'}
                        height={'170px'}
                        onClick={() => {

                            setFoodInfo(post);
                            HoverModal(post, true);
                            setModalData(post);
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
                </Tooltip>

            )}
        </>
    );
};
export default DropDownItems;