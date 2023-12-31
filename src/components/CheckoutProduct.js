import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutProduct({
    id,
    title, 
    price, 
    description, 
    category, 
    image, 
    hasPrime, 
    rating
}) {
    const dispatch =  useDispatch();
    const addItemToBasket = () =>{
        const product = {
            id,
            title, 
            price, 
            description, 
            category, 
            image, 
            hasPrime, 
            rating
        };

        //push items into redux
        dispatch(addToBasket(product));
    };

    const removeItemFromBasket = () =>{
        //remove the item from redux
        dispatch(removeFromBasket({id}))
    };



    return (
        <div className='grid grid-cols-5'>
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* Middle */}
            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className="flex">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>

                <p className="text-xs mt-2 mb-2 line-clamp-3">
                    {description}
                </p>
                
                <Currency quantity={price*110} currency='INR' />
                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img
                            loading='lazy'
                            className='w-12'
                            src="http://web.archive.org/web/20220121123437if_/https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png"
                            alt=""
                        />
                        <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
                    </div>
                )}
            </div>
            {/* right add/remove button */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={addItemToBasket}>Add To Basket</button>
                <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>
                

        </div>
    );
}

export default CheckoutProduct;
