import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { DeleteFoodItemButton } from "./components/DeleteFoodItemButton";
import { EditFoodItemButton } from "./components/EditFoodItemButton";
const FoodInformation = ({
  foodInfo,
  handleEdit,
  handleDelete,
  handleLoading,
  isBestSeller,
}) => {
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  const [user] = useState(storedUser);
  console.log(foodInfo);
  if (foodInfo != null)
    return (
      <>
        <Flex flexDir="column" height="100%">
          <Flex padding="5px" flexDir="row">
            <Flex gap="3">
              {user.aToken == "admin" && (
                <DeleteFoodItemButton
                  foodInfo={foodInfo}
                  handleDelete={handleDelete}
                  handleLoading={handleLoading}
                />
              )}
              <EditFoodItemButton
                foodInfo={foodInfo}
                handleEdit={handleEdit}
                handleLoading={handleLoading}
                isBestSeller={isBestSeller}
              />
            </Flex>
            <Image
              marginLeft="3rem"
              boxSize="100px"
              borderRadius="100px"
              src={foodInfo.imageUrl}
              alignSelf="center"
            />
          </Flex>
          <Heading margin={0} alignSelf="center" fontSize="35px">
            {foodInfo.name}
          </Heading>
          <Text marginTop="0" alignSelf="start" fontSize="20px">
            Price (₱): {foodInfo.price}
          </Text>
          <Text marginTop="0" alignSelf="flex-start" fontSize="20px">
            Stock: {foodInfo.quantity}
          </Text>
          <Text
            marginBottom="5"
            marginTop="0"
            alignSelf="flex-start"
            fontSize="20px"
          >
            Sold Out: {foodInfo.isSold ? "Yes" : "No"}
          </Text>
          <Text fontSize="18    ">{foodInfo.description}</Text>
          <Text as="b" fontSize="20px" marginTop="5">
            Ingredients
          </Text>
          <ul>
            <Flex
              flexDir="row"
              gap="5px"
              wrap="wrap"
              alignContent="space-between"
            >
              {foodInfo.ingredients?.map((v, i) => (
                <Text
                  key={i}
                  border="1px solid teal"
                  borderRadius="20px"
                  padding="5px"
                >
                  {v}
                </Text>
              ))}
            </Flex>
          </ul>
        </Flex>
      </>
    );
};

export default FoodInformation;
