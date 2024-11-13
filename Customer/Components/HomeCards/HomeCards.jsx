
  
  export default function HomeCards({ product }) {
    return (
      
      <div className="cursor-pointer flex flex-col items-center rounded-lg overflow-hidden shadow-lg bg-white w-[15rem] h-[15rem] mx-3">
        {/* Loop through the products and render each one */}
      
          <>
          <div className="border">
           
          </div>
          <div key={product.id} className="w-[13rem] mb-4">
                <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-top w-full h-full rounded-lg" />
            </div><div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{product.color}</p>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                    <p>{product.discountPrice}</p>
                </div></>
       
      </div>
    );
  }
  