import {
    Box, Flex, Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Card,
    Tooltip,
    Text
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { handleOrders } from './api/HandleStatus';
import { OrderInfoCard } from './components/OrderInfoCard';

const OrderInfoButton = ({ item, fetchingData, setIsLoadingTrue }) => {
    const [updateItem, setUpdateItem] = useState();
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    const [user,] = useState(storedUser);
    var currentDateTime = new Date();
    var year = currentDateTime.getFullYear();
    var month = currentDateTime.getMonth() + 1;
    var day = currentDateTime.getDate();
    var hours = currentDateTime.getHours();
    var minutes = currentDateTime.getMinutes();
    var seconds = currentDateTime.getSeconds();
    let order = item;

    const handleUpdate = () => {
        setUpdateItem({
            ...order,
            currentTime: `${hours}:${minutes}:${seconds}`,
            currentDate: `${day}/${month}/${year}`,
            handledBy: user.employeeFirstName + ' ' + user.employeeLastName
        });
    };
    useEffect(() => {
        handleOrders({ updateItem }).then(() => { fetchingData(); });
    }, [updateItem]);
    let button = null;
    const i = false;
    if (item?.status == 'pending') {
        order = { ...order, status: 'onProcess' };
        button =
            <Button colorScheme='green'
                fontSize='20px'
                onClick={
                    () => {
                        setIsLoadingTrue();
                        handleUpdate();
                        // handleOrders({ order, updateItem });
                        // fetchingData();
                        // console.log(updateItem);

                    }

                }
            >
                Confirm
            </Button>;
    } else if (item?.status == 'onProcess') {
        order = { ...order, status: 'toServer' };

        button =
            <Button colorScheme='green'
                fontSize='20px'
                onClick={() => {
                    setIsLoadingTrue();
                    handleUpdate();
                    // handleOrders({ order }).then(() => { fetchingData(); });
                }
                }
            >
                Serve
            </Button>;
    } else if (item?.status == 'toServer') {
        order = { ...order, status: 'completed' };

        button =
            <Button colorScheme='green'
                fontSize='20px'
                onClick={() => {
                    setIsLoadingTrue();
                    handleUpdate();
                    // handleOrders({ order }).then(() => { fetchingData(); });
                }
                }
            >
                Complete
            </Button >;
    }
    if (item == null) return;
    return (
        <>
            <Card
                height='100%'>
                <Flex
                    flexDirection='column'
                    p='2'
                >
                    <OrderInfoCard
                        item={item}
                        setIsLoading={setIsLoadingTrue}
                        fetchingData={fetchingData} />
                    <Flex
                        marginTop='10'
                        justifyContent='end'
                        gap='2'>
                        {button}
                        <Button colorScheme='red'
                            fontSize='20px'
                            onClick={() => {
                                order = { ...order, status: 'rejected' };
                                setIsLoadingTrue();
                                handleUpdate();
                                // handleOrders({ updateItem }).then(() => { fetchingData(); });
                            }}

                        >Cancel
                        </Button>
                    </Flex>
                </Flex>
            </Card>
        </>
    );
};

export default OrderInfoButton;