import React from 'react';

const SnacksList = ({ snacks }) => {
  return (
    <div>
      <h1>Snacks List</h1>
      <ul>
        {snacks.map((snack) => (
          <li key={snack.id}>{snack.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SnacksList;
