import {
    Box,
    Button,
    Heading,
    Image
} from '@chakra-ui/react';
import React, { useState } from 'react';
import DropDownItems from '../components/DropDownItems';
import './DropDownContainer.css';
const DropDownContainer = ({ dish }) => {
    const [clicked, setClicked] = useState(false);

    const handleButtonClick = () => {
        setClicked(!clicked);
    };

    return (
        <>
            <div className='food_container'>
                <div className='dish_name'>
                    <button type='button' className='button'
                        onClick={handleButtonClick}>
                        <Heading as='h2' size='xl'>{dish}</Heading>
                    </button>
                </div>
                {clicked && (
                    <div className='dropdown'>
                        <DropDownItems />
                    </div>
                )}
            </div>
        </>
    );
};

export default DropDownContainer;