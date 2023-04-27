import { Box, Flex, FormLabel, Input, useToast, InputGroup, InputLeftElement, FormControl, HStack, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const RegisterEmployeeForms = () => {
  const [loading, setLoading] = useState(false);
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
    authToken: 'employee'
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
          title: "Successfully Created",
          description: "Account Created",
          status: "success",
          duration: 1000,
          isClosable: false,
          position: "top-right",
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Flex
      gap='5'
      paddingInline='10'
      flexDirection='column'>
      <Flex gap='2'>
        <FormControl>
          <FormLabel>Employee Name</FormLabel>
          <HStack>
            <Input
              htmlSize={30} width='auto'
              placeholder="First Name"
              type="employeeFirstName"
              value={employeeFirstName}
              onChange={handleEmployeeFirstName}
            />
            <Input
              htmlSize={30} width='auto'
              placeholder="Last Name"
              type="employeeLastName"
              value={employeeLastName}
              onChange={handleEmployeeLastName}
            />
          </HStack>
        </FormControl>
        <FormControl marginLeft='5'>
          <FormLabel>Account ID</FormLabel>
          <Input
            placeholder="Account ID"
            type="accountID" value={accountID} onChange={handleAccountID} />
        </FormControl>
      </Flex>
      <Flex>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input
            placeholder="Address"
            type="address" value={address} onChange={handleAddress} />
        </FormControl>
        <FormControl marginLeft='6'>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Password"
            type="password" value={password} onChange={handlePassword} />
        </FormControl>
      </Flex>
      <Flex
        gap='5'>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Email Address"
            type="email" value={email} onChange={handleEmail} />
        </FormControl>
        <FormControl>
          <FormLabel>Contact Number</FormLabel>
          <Input
            placeholder="Contact #"
            type="contactNum"
            value={contactNum}
            onChange={handleContactNumber}
          />
        </FormControl>
      </Flex>
      <Button
        isLoading={loading}
        marginTop='10'
        width='200px'
        size='lg'
        colorScheme='green'
        onClick={() => {
          setLoading(true);
          isClick ? handleSubmit() : null;
        }}>
        Register
      </Button>
    </Flex>
  );
};

export default RegisterEmployeeForms;
