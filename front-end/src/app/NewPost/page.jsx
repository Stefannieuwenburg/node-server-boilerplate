"use client";

import { useState, useEffect } from "react";
import Navbar from "../Navbar/page";
import Banner from "../Banner/page";
export default function NewPost() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/users", { mode: "no-cors" })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <Navbar />
      <Banner />
      <p>{data}</p>
    </div>
  );
}
