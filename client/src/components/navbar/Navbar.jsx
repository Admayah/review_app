import React from 'react'
import { Box, Button, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      w="100%"
      h={20}
      p={5}
      bg="gray.500"
      alignItems="center"
      mb={20}
      >
        <Heading>Reviews</Heading>
      <Link to="/reviews">
        <Button colorScheme="blue">All Reviews</Button>
      </Link>
    </Box>
  );
}

export default Navbar