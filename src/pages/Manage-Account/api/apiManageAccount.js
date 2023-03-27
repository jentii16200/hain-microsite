import axios from 'axios';
import React, { useState } from 'react';

const apiEndPoint = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getUserAccounts';

export const GetAccounts = async () => {
    const x = await axios.get(apiEndPoint);
    // .then(
    //     res => {
    //     }
    // );
    return x;
};