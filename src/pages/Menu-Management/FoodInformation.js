import React from 'react'
import {
    Flex,
    IconButton,
    Image,
    Heading,
    Text,
    Button
} from '@chakra-ui/react'
import { DragHandleIcon } from '@chakra-ui/icons'

const FoodInformation = ({ foodInfo }) => {

    if (foodInfo != null)
        return (

            <>
                <Flex
                    flexDir='column'
                    height='100%'>
                    <Flex
                        justifyContent='space-between'
                        padding='5px'
                        flexDir='row'>
                        <IconButton
                            position='sticky'
                            left='0'
                            top='0'
                            bg='none'
                            border='none'
                            w='30px' h='30px'
                            icon={<DragHandleIcon />} />
                        <Image
                            boxSize='100px'
                            borderRadius='100px'
                            src={foodInfo.imageUrl}
                            alignSelf='center' />
                    </Flex>
                    <Heading
                        margin={0}
                        alignSelf='center'
                        fontSize='40px'>
                        {foodInfo.name}
                    </Heading>
                    <Text
                        marginBottom='10'
                        marginTop='0'
                        alignSelf='center'
                        fontSize='30px'>
                        {foodInfo.price}
                    </Text>
                    <Text
                        fontSize='20'>
                        {foodInfo.description}
                    </Text>
                    <Text as='b'
                        fontSize='20px'>
                        Ingredients
                    </Text>
                    <ul>
                        <Flex flexDir='row'
                            gap='5px'
                            wrap='wrap'
                            alignContent='space-between'>
                            {foodInfo.ingredients.map(v =>
                                <li key={v}>
                                    <Text
                                        border='1px solid teal'
                                        borderRadius='20px'
                                        padding='5px'>{v}
                                    </Text>
                                </li>)}
                        </Flex>
                    </ul>

                </Flex>
            </>
        );
};

export default FoodInformation;
