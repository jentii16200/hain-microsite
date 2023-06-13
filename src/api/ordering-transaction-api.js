import { apoy, db } from '../util/firebase';

export const handlePayment = async (id) => {
    // const id = req.body.id;
    await apoy
        .collection("Order")
        .doc(id)
        .set({ isPaid: true }, { merge: true })
        .then((val) => {
            console.log({ result: "success", status: 200 });
        });
};