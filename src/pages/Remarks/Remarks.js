import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Remarks = () => {
  const [posts, setPosts] = useState([]);
  const apiEndPoint =
    "https://us-central1-hain-402aa.cloudfunctions.net/api/getRemarks";

  useEffect(() => {
    axios
      .get(apiEndPoint)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Heading className="title">REMARKS</Heading>
      <TableContainer className="table">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>INQUIRY #</Th>
              <Th>REMARKS</Th>
              <Th isNumeric>DELETE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {posts.map((post) => (
              <Tr key={post.id}>
                <Td>{post.id}</Td>
                <Td>{post.remark}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Remarks;
