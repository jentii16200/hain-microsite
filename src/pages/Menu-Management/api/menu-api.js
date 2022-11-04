// addMenu deleteMenu getMenu

import axios from "axios";

const API_GETMENU = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getMenu';
const API_DELETEMENU = 'https://us-central1-hain-402aa.cloudfunctions.net/api/deleteMenu';
const API_ADDMENU = 'https://us-central1-hain-402aa.cloudfunctions.net/api/addMenu';

export const GetMenu = () => {
    console.log('FETCHING MENU');
    return fetch(API_GETMENU).then(res => {
        console.log(res);
    }).catch(e => console.log(e));
};

export const DeleteMenu = async (id) => {
    console.log('DELETING MENU');
    await axios.post(API_DELETEMENU, { idMenu: id }).then(res => {
        console.log(res);
    }).catch(e => console.log(e));
};

export const AddMenu = async (post) => {
    console.log('ADDING MENU');
    await axios.post(API_ADDMENU, { data: post }).then(res => {
        console.log(res);
    }).catch(e => console.log(e));
};