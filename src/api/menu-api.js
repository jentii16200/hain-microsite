// addMenu deleteMenu getMenu

import axios from "axios";

const API_GETMENU = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getMenu';
const API_DELETEMENU = 'https://us-central1-hain-402aa.cloudfunctions.net/api/deleteMenu';
const API_ADDMENU = 'https://us-central1-hain-402aa.cloudfunctions.net/api/addMenu';
const API_UPDATEMENU = 'https://us-central1-hain-402aa.cloudfunctions.net/api/updateMenu';

export const GetMenu = async (type) => {
    console.log('FETCHING MENU', { type: type });
    await axios.post(API_GETMENU).then(res => {
        console.log(res);
    }).catch(e => console.log(e));
};
export const UpdateMenu = async (item) => {
    console.log('UPDATING MENU');
    await axios.post(API_UPDATEMENU, { id: item.id }).then(res => {
        console.log(res);
    }).catch(e => console.log(e));
};

export const DeleteMenu = async (foodInfo) => {
    console.log(foodInfo);
    console.log('DELETING MENU');
    await axios.post(API_DELETEMENU, { idMenu: foodInfo.name }).then(res => {
        console.log(res);
    }).catch(e => console.log(e));
};

export const AddMenu = async (post) => {
    console.log('ADDING MENU');
    await axios.post(API_ADDMENU, { data: post }).then(res => {
        console.log(res);
    }).catch(e => console.log(e));
};