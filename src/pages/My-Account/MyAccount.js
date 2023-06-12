import {
  Button,
  Card,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import UpdateAlertDialog from "./components/UpdateAlertDialog";
import { db } from '../../util/firebase';

const MyAccount = () => {
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  const [user, setUser] = useState(storedUser);
  const HandleUpdate = (e) => {
    setUser((currentValue) => ({
      ...currentValue,
      [e.target.name]: e.target.value,
    }));
  };

  const [show, setShow] = React.useState(false);
  const handleShowPassword = () => setShow(!show);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = db.collection('Order');
        const snapshot = await collectionRef.get();
        const data = snapshot.docs.map(doc => doc.data());
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  // useEffect(() => {
  //   // Use Firebase here
  //   const fetchData = async () => {
  //     const data = await db.collection('Order').get();
  //     // Do something with the data
  //     console.log(data.docs.map(doc => doc.data()));
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <Heading className="title">MY ACCOUNT</Heading>
      <Flex backgroundColor="gray.50" flexDirection="column" padding="10">
        <Flex justifyContent="space-between">
          <Flex flexDirection="column">
            <Text fontSize="20px" as="b">
              Account Settings
            </Text>
            <Text textColor="gray">
              Change your profile and account settings
            </Text>
          </Flex>
          <UpdateAlertDialog userInfo={user} />
        </Flex>
        <Card
          variant="elevated"
          backgroundColor="white"
          borderRadius="xl"
          marginTop="5"
          marginInline="10"
          padding="5"
        >
          <Flex justifyContent="space-between">
            <Text>Account ID</Text>
            <Text fontSize="20px">{user.accountID}</Text>
          </Flex>
          <Divider colorScheme="teal" />
          <Text fontSize="15px" as="b" marginBlock="2.5">
            General Information
          </Text>
          <Flex gap="5">
            <FormControl mb={4}>
              <FormLabel fontSize="15">First Name</FormLabel>
              <Input
                name="employeeFirstName"
                value={user.employeeFirstName}
                placeholder="Enter your first name"
                onChange={HandleUpdate}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel fontSize="15">Last Name</FormLabel>
              <Input
                name="employeeLastName"
                value={user.employeeLastName}
                placeholder="Enter your last name"
                onChange={HandleUpdate}
              />
            </FormControl>
          </Flex>
          <FormControl mb={4}>
            <FormLabel fontSize="15">Address</FormLabel>
            <Input
              name="homeAddress"
              value={user.homeAddress}
              placeholder="Enter your address"
              onChange={HandleUpdate}
            />
          </FormControl>
          <Flex gap="5">
            <FormControl mb={4}>
              <FormLabel fontSize="15">E-Mail</FormLabel>
              <Input
                name="email"
                value={user.email}
                placeholder="Enter your email"
                onChange={HandleUpdate}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel fontSize="15">Contact #</FormLabel>
              <Input
                type='number'
                name="contactNum"
                value={user.contactNum}
                placeholder="Enter your number"
                onChange={HandleUpdate}
              />
            </FormControl>
          </Flex>
          <FormControl mb={4}>
            <FormLabel fontSize="15">Password</FormLabel>
            <InputGroup>
              <Input
                name="password"
                maxLength={11}
                type={show ? "text" : "password"}
                value={user.password}
                placeholder="Enter your password"
                onChange={HandleUpdate}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Card>
      </Flex>
    </>
  );
};
export default MyAccount;

//updateWebAccount
