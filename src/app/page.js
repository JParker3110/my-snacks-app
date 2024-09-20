// src/app/page.js
"use client";

import React, { useEffect, useState } from 'react';

const Home = () => {
  const [snacks, setSnacks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSnacks = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_SNACKS_API_URL, {
          next: { revalidate: 60 },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setSnacks(data);
      } catch (err) {
        console.error('Failed to fetch snacks:', err);
        setError(err.message);
      }
    };

    fetchSnacks();
  }, []);

  if (error) {
    return (
      <div>
        <h1>Failed to fetch snacks</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Snacks List</h1>
      <ul>
        {snacks.map(snack => (
          <li key={snack.id}>
            <h2>{snack.name}</h2>
            <p>{snack.description}</p>
            <p>Price: ${snack.price}</p>
            <p>Category: {snack.category}</p>
            <p>In Stock: {snack.inStock ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
