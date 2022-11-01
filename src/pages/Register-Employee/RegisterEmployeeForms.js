import { Box, Flex, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const RegisterEmployeeForms = () => {
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

  const handleSubmit = async () => {
    //  TODO LAGAY MO API isang buwan na!
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
          handleSubmit();
        }}
      >
        Register
      </Box>
    </>
  );
};

export default RegisterEmployeeForms;
