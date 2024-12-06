import { Heading } from "@chakra-ui/react";
import React from "react";
import { ManageAccountNav } from "../../components/ManageAccountNav";

const ManageAccount = () => {
  return (
    <div>
      <Heading className="title">MANAGE ACCOUNT</Heading>
      <ManageAccountNav />
    </div>
  );
};
export default ManageAccount;
