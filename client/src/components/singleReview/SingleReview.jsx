
import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const SingleReview = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  useEffect(() => {
    const getReview = async () => {
      try {
        const { data } = await axios(`http://localhost:5500/v1/review/${id}`);
        const {name, review} = data.messages;
        setName(name);
        setReview(review)
      } catch (error) {
        console.log(error);
      }
    };
    getReview();
  }, [])
console.log(review);
  return (
    <>
    <Navbar />
    <Box p={5} shadow="md" borderWidth="1px" maxW={500} maxH='auto' margin="auto" borderRadius={5}>
      <Heading fontSize="xl">{name}</Heading>
      <Text mt={4}>{review}</Text>
    </Box>
    </>

  );
};

export default SingleReview;
