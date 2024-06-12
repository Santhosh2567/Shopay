import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {MdOutlineStar} from 'react-icons/md'
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/ShopaySlice";
import {ToastContainer,toast} from 'react-toastify'

const Product = () => {
  const dispatch=useDispatch()
  let [baseQuantity,setBaseQuantity]=useState(1);
  const [details, setDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, [location]);

  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < details.rating; i++) {
      stars.push(i);
    }
    return (stars.map((item)=>{
     return  < MdOutlineStar key={item} />
    }))
  }
  return (
    <div className="max-w-screen-xl mx-auto my-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="w-full sm:w-1/2 relative">
        <img
          className="w-full h-auto object-cover"
          src={details.image}
          alt={details.title}
        />
        {details.isNew && (
          <p className="absolute top-4 right-0 bg-black font-semibold text-white font-titleFont px-8 py-1">
            Sale
          </p>
        )}
      </div>
      <div className="w-full sm:w-1/2 flex flex-col justify-center gap-6">
        <h2 className="text-2xl sm:text-4xl font-semibold">{details.title}</h2>
        <div className="flex items-center gap-4">
          <p className="line-through font-base text-gray-500">${details.oldPrice}</p>
          <p className="text-xl sm:text-2xl font-medium text-gray-900">${Math.ceil(details.price)}</p>
        </div>
        <div className="flex items-center gap-2 text-base">
          <div className="flex">{renderStars()}</div>
          <p>(Based on {details._id * 73 + Math.ceil(details.price)} reviews)</p>
        </div>
        <p className="text-base text-gray-500">{details.description}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center justify-between text-gray-500 gap-4 border p-3">
            <p className="text-sm">Quantity</p>
            <div className="flex gap-4 font-semibold text-sm items-center">
              <button onClick={() => setBaseQuantity(baseQuantity === 1 ? 1 : baseQuantity - 1)} className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">-</button>
              <span>{baseQuantity}</span>
              <button onClick={() => setBaseQuantity(baseQuantity + 1)} className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">+</button>
            </div>
          </div>
          <button
            onClick={() => {
              dispatch(
                addToCart({
                  _id: details._id,
                  title: details.title,
                  image: details.image,
                  price: details.price,
                  quantity: baseQuantity,
                  description: details.description,
                })
              );
              toast.success(`${details.title} is added`);
            }}
            className="bg-black text-white active:bg-gray-800 py-3 px-6 sm:px-6"
          >
            Add to Cart
          </button>
        </div>
        <p className="text-base text-gray-500">Category : <span className="text-medium capitalize text-gray-700">{details.category}</span></p>
      </div>
    </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgessBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Product;