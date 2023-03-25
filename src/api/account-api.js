import { useToast } from '@chakra-ui/react';
import axios from 'axios';

const apiDeleteAccount = 'https://us-central1-hain-402aa.cloudfunctions.net/api/deleteAccount';

export const HandleDeleteAccount = async (post) => {
    return axios.post(apiDeleteAccount, { accountId: post }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
};