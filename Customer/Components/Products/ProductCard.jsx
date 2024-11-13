import React from 'react';
import './ProductCard.css';

const ProductCard = ({ products }) => {
  return (
    <div className="productCardContainer flex flex-wrap">
      {products.map((product, index) => {
        const { description, mrp, discountPrice, actualPrice, discount, imageSrc, imageAlt } = product;
        
        return (
          <div key={index} className='rounded-xl productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
              <img className="rounded-xl h-full w-full object-cover object-left-top" src={imageSrc} alt={imageAlt} />
            </div>
            
            <div className='textPart'>
              <div className='bg-white transform'>
                <p className='text-lg text-gray-700'>{description}</p>
              </div>
              
              <div className="">
                {/* MRP and Discounted Price */}
                <div className="flex items-center space-x-4">
                  <p className="text-xl font-semibold text-green-600">₹{discountPrice}</p>
                  <p className="text-xl font-semibold text-red-600">
                    <span className="line-through text-gray-500">₹{mrp}</span>
                  </p>
                  <p className='text-red-600 font-semibold'>{discount} off</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
