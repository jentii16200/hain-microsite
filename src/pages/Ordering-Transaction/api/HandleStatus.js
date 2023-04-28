import axios from 'axios';

const apiAccept = 'https://us-central1-hain-402aa.cloudfunctions.net/api/acceptOrder';
const apiOnGoing = 'https://us-central1-hain-402aa.cloudfunctions.net/api/onGoingOrder';
const apiDone = 'https://us-central1-hain-402aa.cloudfunctions.net/api/doneOrder';
const apiReject = 'https://us-central1-hain-402aa.cloudfunctions.net/api/rejectOrder';

const apiGetOrder = 'https://us-central1-hain-402aa.cloudfunctions.net/api/getOrderLogs';

const apiHandleOrders = 'https://us-central1-hain-402aa.cloudfunctions.net/api/newOrderStatus';

export const GetOrders = () => {
    console.log('Fetching Data');
    axios.get(apiGetOrder).then(res => {
        console.log(res.data);
    }).catch(err => console.error(err));
};

export const handleOrders = async ({ updateItem }) => {
    console.log("napasa");
    console.log(updateItem);
    await axios.post(apiHandleOrders, {
        userId: updateItem.userDetails.id,
        status: updateItem.status,
        orderId: updateItem.id,
        data: updateItem
    }).then(res => {
        console.log(res.data);
    }).catch(err => { console.error(err); console.log('di gumana'); });
};

export const handleRejectOrder = async (post) => {
    await axios.post(apiReject, { id: post }).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    });
};

export const handleAcceptOrder = async (post) => {
    await axios.post(apiAccept, { id: post }).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    });
};

export const handleOnProcessOrder = async (post) => {
    await axios.post(apiOnGoing, { id: post }).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    });
};

export const handleDoneOrder = async (post) => {
    await axios.post(apiDone, { id: post }).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    });
};
