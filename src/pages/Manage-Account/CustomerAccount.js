import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { DeleteButton } from "./components/DeleteButton";
import { EditButton } from "./components/EditButton";

const apiEndPoint =
  "https://us-central1-hain-402aa.cloudfunctions.net/api/getUserAccounts";

export const CustomerAccount = (props) => {
  const [posts, setPosts] = useState([]);
  const storedId = localStorage.getItem("userId");
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  let q = 1;
  useEffect(() => {
    fetchData();
  }, [count]);

  const fetchData = async () => {
    await axios
      .get(apiEndPoint)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleButtonClick = () => {
    setIsLoading(true);
    fetchData().then((res) => {
      toast({
        title: `Account Successfully Updated`,
        status: "success",
        position: "top-right",
        duration: 1000,
        isClosable: true,
      });
    });

    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Flex>
          <TableContainer className="table" w="100%">
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>ID #</Th>
                  <Th>NAME</Th>
                  <Th>USERNAME</Th>
                  <Th>PASSWORD</Th>
                  <Th> </Th>
                </Tr>
              </Thead>
              <Tbody>
                {posts.map((post) => {
                  if (post.aToken != "employee" && post.aToken != "admin")
                    return (
                      <Tr key={post.id}>
                        <Td>{q++}</Td>
                        <Td>
                          {post.firstName} {post.lastName}
                        </Td>
                        <Td>{post.userName}</Td>
                        <Td>{post.password}</Td>
                        <Td isNumeric>
                          <EditButton
                            handleClick={handleButtonClick}
                            post={post}
                          />
                          <DeleteButton
                            handleClick={handleButtonClick}
                            post={post}
                          />
                        </Td>
                      </Tr>
                    );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      )}
    </>
  );
};
