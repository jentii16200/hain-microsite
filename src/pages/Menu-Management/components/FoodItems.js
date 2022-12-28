import React, { useEffect, useState } from 'react';
import {
    Box,
    Card,
    Image,
    Modal,
    ModalOverlay,
    Portal,
    Tooltip,
} from '@chakra-ui/react';
import axios from 'axios';
import { UpdateFoodItem } from './UpdateFoodItem';

const API_END_POINT = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getMenu';

const FoodItems = ({ menuType, setFoodInfo }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [modalData, setModalData] = useState();

    useEffect(() => {
        let isCancelled = false;
        console.log('FETCHING DATA');
        axios.post(API_END_POINT, { type: menuType }).then(res => {
            if (isCancelled) return;
            const x = res.data;
            setPosts(x);
            console.log(x);
        }).catch(err => {
            console.log(err);
        });
        return () => {
            isCancelled = true;
        };
    }, [menuType]);

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            {posts.map(post =>
                <Card key={post.name} >
                    <Tooltip
                        hasArrow label={post.description}
                        placement='auto-start'
                    >
                        <Box
                            onClick={() => {
                                setFoodInfo(post);
                                setModalData(post);
                            }}>
                            {modalIsOpen &&
                                <Modal
                                    size='3xl'
                                    isOpen={modalIsOpen}
                                    onClose={() => setModalIsOpen(false)}>
                                    <ModalOverlay />
                                    <Portal>
                                        <UpdateFoodItem
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
                </Card>

            )}
        </>
    );
};
export default FoodItems;