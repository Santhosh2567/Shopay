import React from 'react'
import {MdOutlineClose} from 'react-icons/md'
import {HiOutlineArrowLeft} from 'react-icons/hi'
import {useSelector,useDispatch} from 'react-redux'
import { decrementQuantity,deleteItem,incrementQuantity, resetCart } from '../redux/ShopaySlice'
import {ToastContainer,toast} from 'react-toastify'
import {Link} from 'react-router-dom'

const CartItem = () => {
  const productData=useSelector((state)=>state.Shopay.productData)
  const dispatch = useDispatch()
  return (
    <div className='w-full lg:w-2/3 lg:pr-10'>
  <div className='w-full'>
    <h2 className='font-titleFont text-xl lg:text-2xl '>Shopping Cart</h2>
  </div>
  <div>
    {
      productData.map((item) => (
        <div 
          key={item._id}
          className='flex flex-col lg:flex-row items-center justify-between gap-6 mt-6'>
          <div className='flex items-center gap-2'>
            <MdOutlineClose 
              onClick={() =>
                dispatch(deleteItem(item._id)) & toast.error(` ${item.title} is removed from cart`)
              }
              className='text-xl text-gray-600 hover:text-red-600
              cursor-pointer duration-300'/>
            <img src={item.image} alt={item.title}
              className='w-24 h-24 lg:w-32 lg:h-32 object-cover' />
          </div>
          <h2 className='w-full lg:w-52 text-center lg:text-left'>{item.title}</h2>
          <p className='w-full lg:w-10 text-center lg:text-left'>${item.price}</p>
          <div className="flex gap-4 font-semibold text-sm items-center border px-4 py-2">
            <p className='text-gray-500 font-normal'>
              Quantity</p>
            <span 
              onClick={() => dispatch(
                decrementQuantity({
                  _id: item._id,
                  title: item.title,
                  image: item.image,
                  price: item.price,
                  quantity: 1,
                  description: item.description,
                })
              )} 
              className="border h-5 font-normal text-lg flex items-center justify-center
              px-2 hover:bg-gray-500 hover:text-white cursor-pointer duration-300 active:bg-black
              ">-</span>
            <span>{item.quantity}</span>
            <span
              onClick={() => dispatch(
                incrementQuantity({
                  _id: item._id,
                  title: item.title,
                  image: item.image,
                  price: item.price,
                  quantity: 1,
                  description: item.description,
                })
              )}
              className="border h-5 font-normal text-lg flex items-center justify-center
              px-2 hover:bg-gray-500 hover:text-white cursor-pointer duration-300 active:bg-black
              ">+</span>
          </div>
          <p className='w-full lg:w-14 text-center lg:text-left'>${item.quantity * item.price}</p>
        </div>
      ))
    }  
  </div>{productData.length >0 &&
  <button onClick={() => dispatch(resetCart()) & toast.error("Your Cart is empty")}
    className='bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-500'
  >Reset Cart</button>}  

  <Link to='/'>
    <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400
    hover:text-black duration-300' >
      <span><HiOutlineArrowLeft/></span> go Shopping
    </button>
  </Link>
  <ToastContainer
    position="top-left"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
</div>
  )
}

export default CartItem