import React, { useState, useEffect } from 'react';
import { Box, Image, Badge } from '@chakra-ui/react';
import axios from 'axios';
import MyImage from '../../assets/cute.jpg';

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

    const property = {
        imageAlt: 'Rear view of modern home with pool',
        title: 'CLEO' };
    return (
        <div className='menu'>
            {/* {posts.map(post => */}
            <Box className='card' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' key={property.foodNumber} width={'100px'}>
                <Image src={MyImage} alt={property.imageAlt} width={'100px'} height={'100px'}/>
                <Box p='6'>
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                    >
                        {property.title}
                    </Box>
                </Box>
            </Box>
            {/* )} */}

        </div>
    );
};

