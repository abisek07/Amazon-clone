import React, { useState, useEffect } from "react"; // Don't forget to import React and useEffect

import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter"; 

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState(0); // Initialize rating with 0 initially
  const [hasPrime, setHasPrime] = useState(false); // Initialize hasPrime with false initially

  useEffect(() => {
    // This will run only on the client side after the initial render
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setHasPrime(Math.random() < 0.5);
  }, []); // Empty dependency array ensures it runs only once after initial render

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p> 

      <div className="mb-5">
        <Currency quantity={price*110} currency="INR"/>
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="http://web.archive.org/web/20220121123437if_/https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
