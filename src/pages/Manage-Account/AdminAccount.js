import { Heading } from "@chakra-ui/react";
import React from "react";

export const AdminAccount = () => {
  // useEffect(() => {
  //     let isCancelled = false;
  //     console.log('Fetching Data');
  //     axios.get(apiEndPoint).then(res => {
  //         if (isCancelled) return;
  //         const x = res.data;
  //         setPosts(x);
  //         console.log(x);
  //     }).catch(err => {
  //         console.log(err);
  //     });
  //     return () => {
  //         isCancelled = true;
  //     };
  // }, []);

  return (
    <div>
      <Heading as="h2" size="xl">
        AdminAccount
      </Heading>
    </div>
  );
};
