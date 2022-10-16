import React, { useState, useEffect } from 'react';
import { Box, Image, Badge, Tooltip } from '@chakra-ui/react';
import axios from 'axios';
import BeefNachos from '../../assets/Beef nachos.jpg';
import CalamaresFritos from '../../assets/Calamares Fritos.jpg';
import CrispyPata from '../../assets/Crispy Pata.jpg';
import { MenuLabel } from './MenuLabel';

export const Pulutan = () => {
    const [posts, setPosts] = useState([]);
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
                        <Box className='card'
                            maxW='sm' borderWidth='1px'
                            borderRadius='lg'
                            overflow='hidden'
                            width={'180px'}
                            height ={'170px'}>
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

