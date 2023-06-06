import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { UpdateBestSeller, UpdateMenu } from "../../../api/menu-api";

export const EditFoodItemButton = ({
  foodInfo,
  handleEdit,
  handleLoading,
  isBestSeller,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [foodData, setFoodData] = useState(foodInfo);

  let [bestSeller, setBestSeller] = useState(false);
  const handleSwitch = (e) => {
    setFoodData({ ...foodData, isSold: e.target.checked });
  };
  const handleChange = (e) => {
    setFoodData({ ...foodData, [e.target.name]: e.target.value });
  };
  const handlePrice = (e) => {
    setFoodData({ ...foodData, price: parseFloat(e.target.value) });
  };

  const ingredientsRef = useRef();
  const HandleIngredients = () => {
    const ing = ingredientsRef.current.value.split(",");
    setFoodData({ ...foodData, ingredients: ing });
  };

  const handleSubmit = (e) => {
    handleLoading();
    UpdateMenu(foodData)
      .then(() => {
        onClose();
      })
      .finally(() => {
        handleEdit();
      });
  };
  console.log(foodInfo);
  const handleBestSeller = (e) => {
    setBestSeller(!bestSeller);

    UpdateBestSeller(foodData.name);
    // setFoodData({ ...foodData, isBestSeller: !bestSeller });
    // setFoodData({ ...foodData, isBestSeller: e.target.checked });
  };

  return (
    <>
      <IconButton
        icon={<EditIcon boxSize="2rem" />}
        colorScheme="green"
        onClick={() => {
          setFoodData(foodInfo);
          setBestSeller(isBestSeller);
          onOpen();
          setFoodData(foodInfo);
        }}
      />
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="lg">
          <ModalHeader>
            <Flex justifyContent="space-between">
              EDITING
              <Flex flexDirection="column">
                <Flex gap="1" justifyContent="space-between">
                  <Text fontWeight="normal">Sold Out</Text>
                  <Switch
                    size="lg"
                    name="isSold"
                    isChecked={foodData.isSold}
                    onChange={handleSwitch}
                  />
                </Flex>
                <Flex justifyContent="space-between" gap="1">
                  <Text fontWeight="normal">Best Seller</Text>
                  <Switch
                    size="lg"
                    name="isBestSeller"
                    isChecked={bestSeller}
                    onChange={handleBestSeller}
                  />
                </Flex>
              </Flex>
            </Flex>
          </ModalHeader>
          <ModalBody borderTopRadius="lg" padding={"20px"}>
            <Flex flexDirection="column">
              <Flex flexDirection="row" gap="1rem">
                <Flex flexDirection="row" gap="1rem">
                  <Flex flexBasis="100rem" flexDirection="column">
                    <Text>Name:</Text>
                    <Input
                      name="name"
                      value={foodData.name}
                      onChange={handleChange}
                    />
                    <Text>Price:</Text>
                    <Input
                      name="price"
                      type="number"
                      value={foodData.price}
                      onChange={handlePrice}
                    />
                  </Flex>
                  <Flex flexBasis="100rem" flexDirection="column">
                    <Text>Type:</Text>
                    <Input
                      name="type"
                      value={foodData.type}
                      onChange={handleChange}
                    />
                    <Text>Quantity:</Text>
                    <Input
                      name="quantity"
                      type="number"
                      value={foodData.quantity}
                      onChange={handleChange}
                    />
                  </Flex>
                </Flex>
                <Image boxSize="10rem" src={foodData.imageUrl} />
              </Flex>
              <Text>Description:</Text>
              <Textarea
                name="description"
                minHeight="10rem"
                value={foodData.description}
                onChange={handleChange}
              />
              <Text>Ingredients:</Text>
              <Textarea
                ref={ingredientsRef}
                name="ingredients"
                minHeight="5rem"
                defaultValue={foodData.ingredients}
                onChange={HandleIngredients}
              />
            </Flex>
          </ModalBody>
          <ModalFooter bg="gray.200" borderBottomRadius="lg">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              isLoading={loading}
              colorScheme="teal"
              onClick={() => {
                // setLoading(true);
                handleSubmit();
              }}
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
