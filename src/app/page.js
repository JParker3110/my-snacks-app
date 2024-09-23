// Add this line at the top of your file
"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SnacksList from '../app/components/snacksList';

const Page = () => {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    const fetchSnacks = async () => {
      try {
        const response = await axios.get('/api/snacks');
        setSnacks(response.data);
      } catch (error) {
        console.error('Error fetching snacks:', error);
      }
    };

    fetchSnacks();
  }, []);

  return <SnacksList snacks={snacks} />;
};



export default Page;
