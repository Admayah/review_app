import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {Box, Button} from "@chakra-ui/react"
import axios from "axios";
import { useState, useEffect } from "react";
import './style.css'

const url = "http://localhost:5500/v1/reviews";

const ViewReviews = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { data } = await axios.get(url);
        setReviews(data.messages);
      } catch (err) {
        console.error(err);
      }
    };
    getReviews();
  }, []);

  const getReview = (id) => {
    navigate(`/review/${id}`);
  };

  return (
    <Box padding="5">
      <Link to='/'><Button display='flex' justifyContent='flex-start' mb={5} colorScheme="blue">Back</Button></Link>
 <table style={{ width: "100%", maxWidth: "1440px", margin: "0 auto" }}>
      <thead>
      <tr style={{ backgroundColor: "gray", borderRadius: "10px"}}>
        <th>Name</th>
        <th>Reviews</th>
        <th>Action</th>
      </tr>
      </thead>

      {reviews.map((item, index) => {
        return (
          <tr key={index} style={{ marginBottom: "10px" }} className='content-wrapper'>
            <td>{item.name}</td>
            <td>{item.review}</td>
            <td>
            <Button colorScheme="blue" onClick={() => getReview(item.id)}>
            View Review
            </Button>
            </td>
          </tr>
        );
      })}
    </table>
    </Box>
   
  );
};

export default ViewReviews;
