import React, { useState, useEffect } from 'react';
import { Box, Image, Badge } from '@chakra-ui/react';
import axios from 'axios';
import BeefNachos from '../../assets/Beef nachos.jpg';
import CalamaresFritos from '../../assets/Calamares Fritos.jpg';
import CrispyPata from '../../assets/Crispy Pata.jpg';

export const Pulutan = () => {
    // const [posts, setPosts] = useState([]);
    // const apiEndPoint = '';
    // useEffect(() => {
    //     axios.get(apiEndPoint).then(res => {
    //         console.log(res);
    //         setPosts(res.data);
    //     }).catch(err =>{
    //         console.log(err);
    //     });
    // }, []);

    const pulutan = [
        {
            id: '1',
            imageUrl: BeefNachos,
            imageAlt: 'CALAMARES FRITOS',
            name: 'BEEF NACHOS'
        },
        {
            id: '2',
            imageUrl: CalamaresFritos,
            imageAlt: 'CALAMARES FRITOS',
            name: 'CALAMARES FRITOS'
        },
        {
            id: '3',
            imageUrl: CrispyPata,
            imageAlt: 'CALAMARES FRITOS',
            name: 'CRISPY PATA'
        },
    ];
    return (
        <>
            <h2>PULUTAN</h2>
            <div className='menu'>
                {pulutan.map(post =>
                    <Box className='card'
                        maxW='sm' borderWidth='1px'
                        borderRadius='lg'
                        overflow='hidden'
                        width={'180px'}
                        height ={'170px'}
                        key={post.id} >
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
                )}
            </div>
        </>
    );
};

