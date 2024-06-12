import React, { useState, useEffect } from "react";
import { cartBannerImg } from "../assets/index";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Cart() {
  const productData = useSelector((state) => state.Shopay.productData);
  const userInfo = useSelector((state) => state.Shopay.userInfo);
  const [total, setTotal] = useState(0);
  const [payNow, setPayNow] = useState(false);
  useEffect(() => {
    let price = productData.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(price.toFixed(2));
  }, [productData]);
  const handleCheckout =async () => {
    if (!userInfo) {
      setPayNow(false)
      toast.error("Log in first to Checkout");
    }
    else{
      setPayNow(true)
      toast.success("payment Successful")
    }
  };

  return (
    <div className="w-full">
    <img
      className="w-full h-60 object-cover sm:h-72 md:h-96"
      src={cartBannerImg}
      alt="cartBannerImg"
    />
  
    <div className="max-w-screen-xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
      <CartItem className="w-full md:w-2/3" />
      <div className="w-full md:w-1/3 bg-[#fafafa] py-6 px-4 mt-6 md:mt-0">
        <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
          <h2 className="text-2xl font-medium">Cart Total</h2>
          <p className="flex items-center gap-4 text-base">
            Subtotal{" "}
            <span className="font-titleFont font-bold text-lg">
              $ {total}
            </span>
          </p>
          <p className="flex items-start gap-4 text-base">
            Shipping{" "}
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua.
              Ut enim ad minim veniam
            </span>
          </p>
        </div>
        <p className="font-titleFont font-semibold flex justify-between mt-6">
          Total <span className="text-xl font-bold">$ {total}</span>
        </p>
        <button
          onClick={handleCheckout}
          className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-600
         duration-500"
        >
          Proceed to Checkout
        </button>
        {payNow && (
          <div>
            <button>
                Pay ${total}
              </button>
          </div>
        )}
      </div>
    </div>
  </div>
  );
}

export default Cart;