import React, { useEffect } from 'react';
import axios from 'axios';

export const EditStatus = () => {
    return;
};
const apiOnProcess = 'https://us-central1-hain-402aa.cloudfunctions.net/api/onGoingOrder';

export const handleAccept = async (post) => {
    axios.post(apiOnProcess, { id: post }).then(res =>{
        console.log(res);
    }).catch(err =>{
        console.log(err);
    });

};
