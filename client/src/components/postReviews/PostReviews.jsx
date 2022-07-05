/** @format */

import React, { useState } from "react";
import { Box, Input, Textarea, Button } from "@chakra-ui/react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { useDispatch } from 'react-redux'
import { addReview } from "../features/addReview/addReviewSlice";

const url = "http://localhost:5500/v1/review";

const PostReviews = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(url, {name, review});
      dispatch(addReview({
        name, review
      }))
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <Box maxW={1400} margin="0 auto">
          <Box maxW={1000} margin="0 auto">
            <Box mb={50}>
              <label fontSize={24}>Name</label>
              <Input
                type="text"
                name="name"
                value={name}
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
                fontSize={16}
                mt={2}
              />
            </Box>
            <Box>
              <label fontSize={24}>Review</label>
              <Textarea
                name="review"
                placeholder="Give your review here"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                fontSize={16}
                mt={2}
              />
            </Box>
            <Button colorScheme="blue" mt={10} type="submit">
              Post Reviews
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default PostReviews;
