import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  // const handledAdd = () => {
  //   setCategories([...categories, "los Perros"]);
  // };

  return (
    <>
      <h2>Gift Expert App</h2>

      <AddCategory setCategories={setCategories} />

      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
