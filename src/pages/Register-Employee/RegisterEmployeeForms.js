import { Box, Flex, FormLabel, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

import axios from "axios";

const RegisterEmployeeForms = () => {
  let isClick = true;
  const toast = useToast();
  const [employeeFirstName, setEmployeeFirstName] = useState("");
  const [employeeLastName, setEmployeeLastName] = useState("");
  const [accountID, setAccountID] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactNum, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const handleEmployeeFirstName = (e) => setEmployeeFirstName(e.target.value);
  const handleEmployeeLastName = (e) => setEmployeeLastName(e.target.value);
  const handleAccountID = (e) => setAccountID(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleContactNumber = (e) => setContactNumber(e.target.value);

  function clearFormState() {
    setEmployeeFirstName("");
    setEmployeeLastName("");
    setAccountID("");
    setAddress("");
    setEmail("");
    setContactNumber("");
    setPassword("");
  }
  let data = {
    employeeFirstName: employeeFirstName,
    employeeLastName: employeeLastName,
    accountID: accountID,
    address: address,
    email: email,
    contactNum: contactNum,
    password: password,
  };
  const handleSubmit = async () => {
    isClick = false;
    await axios
      .post(
        "https://us-central1-hain-402aa.cloudfunctions.net/api/register",
        {
          data: data,
        },
        {
          "Content-Type": "text/plain",
        }
      )
      .then((res) => {
        console.log(res);
        clearFormState();
        toast({
          title: "Successfully putang ina ka",
          description: "tang ina mo",
          status: "success",
          duration: 1000,
          isClosable: false,
          position: "top-right",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Flex>
        <FormLabel>Employee Name</FormLabel>
        <Input
          type="employeeFirstName"
          value={employeeFirstName}
          onChange={handleEmployeeFirstName}
        />
        <Input
          type="employeeLastName"
          value={employeeLastName}
          onChange={handleEmployeeLastName}
        />
        <FormLabel>Account ID</FormLabel>
        <Input type="accountID" value={accountID} onChange={handleAccountID} />
      </Flex>
      <Flex>
        <FormLabel>Address</FormLabel>
        <Input type="address" value={address} onChange={handleAddress} />
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={handlePassword} />
      </Flex>
      <Flex>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={handleEmail} />
        <FormLabel>Contact Number</FormLabel>
        <Input
          type="contactNum"
          value={contactNum}
          onChange={handleContactNumber}
        />
      </Flex>
      <Box
        as="button"
        borderRadius="md"
        bg="pink"
        color="black"
        px={4}
        h={8}
        onClick={() => {
          isClick ? handleSubmit() : null;
        }}
      >
        Register
      </Box>
    </>
  );
};

export default RegisterEmployeeForms;
