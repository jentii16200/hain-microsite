import { Box, Flex, Icon, IconButton, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiBorderRadius, BiLogOut } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoMdPersonAdd } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdAccountCircle, MdMenu, MdSupervisorAccount } from "react-icons/md";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Analytics } from "../../pages/Order-Log/Analytics";
import {
  CustomerAccount,
  EmployeeAccount,
  ManageAccount,
  MenuManagement,
  MyAccount,
  OrderLog,
  OrderingTransaction,
  RegisterEmployee,
  Remarks,
  Reports,
  UserAccount,
} from "../../pages/index.js";
import { apoy } from "../../util/firebase";
import LogOutDialog from "../LogOutDialog";
import "./SideNav.css";
const SideNav = ({ logOut }) => {
  const [showToast, setShowToast] = useState(false);
  const toast = useToast();



  useEffect(() => {
    // retrieveDocuments();

    const unsubscribe = apoy.collection('Order').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const doc = change.doc;
        const data = doc.data();
        if (change.type === 'modified' && data.isBillOut === true) {
          // Display toast notification
          toast({
            title: 'Notification',
            description: `Table# ${data.tableNumber} named ${data.fullName} is billing out.`,
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top-right',
            render: () => (
              <Box color="white" p={3} bg="green.400" borderRadius="md" display="flex" alignItems="center">
                <Text>{`Document with ID ${doc.id} has isBillOut set to true.`}</Text>
              </Box>
            ),
          });
        }
      });
    });

    return () => unsubscribe();
  }, []);
  // useEffect(() => {
  //   // const firestore = apoy.firestore();
  //   const orderRef = apoy.collection("Order").doc("ID");

  //   const unsubscribe = orderRef.onSnapshot((doc) => {
  //     const orderData = doc.data();
  //     console.log(orderData);
  //     const showToast = orderData?.isBillOut;

  //     if (showToast) {
  //       toast({
  //         title: "Notification",
  //         description: "This is a toast notification!",
  //         status: "info",
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //     }
  //   });
  //   // Clean up the listener on component unmount
  //   return () => {
  //     unsubscribe();
  //   };
  // }, [toast]);

  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  const [user] = useState(storedUser);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const [isOpen, setIsOpen] = useState(true);
  let cName = isOpen ? "" : "small";

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <div className='container'> */}
      <Flex>
        {/* <div
                    className={`navigation ${cName}`}> */}
        <Flex
          position="sticky"
          top="0"
          left="0"
          height="100vh"
          shadow="0 4px 12px 0 rgb(0,0,0,.05)"
          flexDirection="column"
          bgColor="rgb(85, 169, 149)"
        >
          <div className="navTopSection">
            <div className={`navText ${cName}`}>Welcome</div>
            <IconButton
              background="none"
              _hover={{ background: "none" }}
              icon={<MdMenu />}
              onClick={toggle}
            />
          </div>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="manage-account/customer"
              >
                <div className={`navIcon ${cName}`}>
                  <MdSupervisorAccount />
                </div>
                <div className={`navText ${cName}`}>Manage Account</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="menu-management"
              >
                <div className={`navIcon ${cName}`}>
                  <IoFastFoodOutline />
                </div>
                <div className={`navText ${cName}`}>Menu Management</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="analytics/order-log"
              >
                <div className={`navIcon ${cName}`}>
                  <HiOutlineDocumentText />
                </div>
                <div className={`navText ${cName}`}>Order Log</div>
              </NavLink>
            </li>
            {user.aToken == "admin" && (
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="register-employee"
                >
                  <div className={`navIcon ${cName}`}>
                    <IoMdPersonAdd />
                  </div>
                  <div className={`navText ${cName}`}>Register Employee</div>
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="ordering-transaction"
              >
                <div className={`navIcon ${cName}`}>
                  <BiBorderRadius />
                </div>
                <div className={`navText ${cName}`}>Ordering Transaction</div>
              </NavLink>
            </li>
            {/* <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                to='remarks'>
                                <div className={`navIcon ${cName}`} >
                                    <MdOutlineNotificationImportant />
                                </div>
                                <div className={`navText ${cName}`}>
                                    Remarks
                                </div>
                            </NavLink>
                        </li> */}
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="my-account"
              >
                <div className={`navIcon ${cName}`}>
                  <MdAccountCircle />
                </div>
                <div className={`navText ${cName}`}>My Account</div>
              </NavLink>
            </li>
            <li>
              <Link
                // className={({ isActive }) => (isActive ? 'active' : '')}
                // to="login"
                onClick={() => {
                  handleOpenDialog();
                  // logOut();
                }}
              >
                <div className={`navIcon ${cName}`}>
                  <BiLogOut />
                </div>
                <div className={`navText ${cName}`}>Log Out</div>
              </Link>
            </li>
          </ul>
        </Flex>
        {/* </div> */}
        {/* <div className='main'> */}
        <Flex flexDirection="column" flex={1}>
          <React.Suspense fallback="Loading">
            <Routes>
              <Route exact path="manage-account" element={<ManageAccount />}>
                <Route exact path="customer" element={<CustomerAccount />} />
                <Route exact path="employee" element={<EmployeeAccount />} />
              </Route>
              <Route
                exact
                path="menu-management"
                element={<MenuManagement />}
              />
              <Route exact path="analytics" element={<Analytics />}>
                <Route exact path="order-log" element={<OrderLog />} />
                <Route exact path="reports" element={<Reports />} />
              </Route>
              <Route
                exact
                path="register-employee"
                element={<RegisterEmployee />}
              />
              <Route
                exact
                path="ordering-transaction"
                element={<OrderingTransaction />}
              />
              <Route exact path="remarks" element={<Remarks />} />
              <Route exact path="my-account" element={<MyAccount />} />
              <Route exact path="login" element={<UserAccount />} />
            </Routes>
          </React.Suspense>
        </Flex>
        {/* </div> */}
      </Flex>
      {/* </div > */}
      {isDialogOpen && (
        <LogOutDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          logOut={logOut}
        />
      )}
    </>
  );
};
export default SideNav;
