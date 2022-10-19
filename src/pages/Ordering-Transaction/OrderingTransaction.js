import React from 'react';
import { Heading } from '@chakra-ui/react';
import { OrderingTransactionNav } from '../../components/OrderingTransactionNav';
const OrderingTransaction = () => {
    return (
        <div>
            <Heading className='title'>ORDERING TRANSACTION</Heading>
            <OrderingTransactionNav />
        </div>
    );
};
export default OrderingTransaction;
