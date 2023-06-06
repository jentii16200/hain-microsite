import {
  Box,
  Card,
  Flex,
  Heading,
  Image,
  Select,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GetBestSeller } from "../../api/menu-api";
import { Loading } from "../../components/Loading";
import FoodInformation from "./FoodInformation";
import { FOOD_TYPE } from "./api/foodType";
import AddFoodItemButton from "./components/AddFoodItemButton";
import menuStyle from "./index.module.css";

const API_END_POINT =
  "https://us-central1-hain-402aa.cloudfunctions.net/api/getMenu";

const MenuManagement = () => {
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  const [user] = useState(storedUser);

  const [menuName, setMenuName] = useState(FOOD_TYPE[0].name);
  const [foodInfo, setFoodInfo] = useState();
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  const [listBestSeller, setListBestSeller] = useState();
  useEffect(() => {
    fetchData().then(() => {
      setIsLoading(false);
    });
    GetBestSeller().then((res) => {
      setListBestSeller(res?.data?.result?.bestSellerList);
    });
  }, [menuName]);

  const handleLoading = () => {
    setIsLoading(true);
  };

  const fetchData = async () => {
    let result;
    await axios
      .post(API_END_POINT, { type: menuName })
      .then((res) => {
        setPosts(res.data);
        setFoodInfo(posts);
        console.log(res.data);
        result = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };
  const handleButtonClick = () => {
    setIsLoading(true);
    fetchData().then((res) => {
      setIsLoading(false);
      toast({
        title: `Menu Successfully Added`,
        status: "success",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
    });
  };

  const handleEditButtonClick = () => {
    setIsLoading(true);

    GetBestSeller().then(async (res) => {
      setListBestSeller(res?.data?.result?.bestSellerList);
      fetchData().then(async (fetchRes) => {
        console.log(fetchRes);
        setPosts(fetchRes);
        console.log(fetchRes[2]);

        toast({
          title: `Menu Successfully Updated`,
          status: "success",
          position: "top-right",
          duration: 5000,
          isClosable: true,
        });
        setIsLoading(false);
      });
    });
  };
  const handleDeleteButtonClick = () => {
    setIsLoading(true);
    fetchData().then((res) => {
      setIsLoading(false);
      toast({
        title: `Menu Successfully Deleted`,
        status: "success",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
    });
  };
  const handleChange = (e) => {
    setIsLoading(true);
    setMenuName(e.target.value);
  };
  console.log(posts);
  return (
    <>
      <div className={menuStyle.container}>
        <Heading className={menuStyle.title}>MENU MANAGEMENT</Heading>
        {isLoading ? (
          <Loading />
        ) : (
          <div className={menuStyle.context}>
            <div className={menuStyle.content}>
              <div className={menuStyle.contentInfo}>
                <Flex justifyContent="space-between">
                  <Select
                    fontSize="2xl"
                    icon="none"
                    size="lg"
                    variant="flushed"
                    marginBottom="1rem"
                    maxWidth="10rem"
                    value={menuName}
                    onChange={handleChange}
                  >
                    {FOOD_TYPE.map((v) => (
                      <option key={v.id} value={v.name}>
                        {v.name}
                      </option>
                    ))}
                  </Select>
                  {user.aToken == "admin" && (
                    <AddFoodItemButton
                      handleClick={handleButtonClick}
                      handleLoading={handleLoading}
                    />
                  )}
                </Flex>
                <Flex justifyContent="center" gap="15px" wrap="wrap">
                  {posts?.map((post) => (
                    <Card key={post.name}>
                      <Tooltip
                        hasArrow
                        label={post.description}
                        placement="auto-start"
                      >
                        <Box
                          onClick={() => {
                            setFoodInfo(post);
                          }}
                        >
                          <Image
                            className="menu-image"
                            src={post.imageUrl}
                            alt={post.imageAlt}
                            width={"180px"}
                            height={"130px"}
                          />
                          <Box className="menu-name">
                            <Box
                              mt="1"
                              fontWeight="semibold"
                              as="h2"
                              noOfLines={2}
                            >
                              {post.name}
                            </Box>
                          </Box>
                        </Box>
                      </Tooltip>
                    </Card>
                  ))}
                </Flex>
              </div>
            </div>
            <div className={menuStyle.info}>
              <FoodInformation
                foodInfo={foodInfo}
                handleEdit={handleEditButtonClick}
                handleDelete={handleDeleteButtonClick}
                handleLoading={handleLoading}
                isBestSeller={listBestSeller?.includes(foodInfo?.name)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default MenuManagement;
