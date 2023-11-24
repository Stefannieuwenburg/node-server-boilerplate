"use client";

import React, { useEffect, useState } from 'react';
import Navbar from "../Navbar/page";
import Banner from "../Banner/page";
function Newpost() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Log the data to see its structure

        if (data.status === 'success' && Array.isArray(data.data)) {
          setUsers(data.data);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-gray-800 font-bold">Users</h1>
      <ul>
        {users.map((user) => (
          <div key={user.id} className="text-gray-800">
            <p>id: {user.id}</p>
            <p>name: {user.name}</p>
            <p>Age: {user.age}</p>
            </div>
        ))}
    </ul>
     </div>
    </div>
  );
}

export default Newpost;