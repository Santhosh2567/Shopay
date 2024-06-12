import React, { useEffect, useState } from 'react'
import Banner from '../components/banners/Banner'
import Product from '../components/Products'
import { useLoaderData } from 'react-router-dom'


function Home() {
  const [products,setProducts]=useState([])
  const data=useLoaderData()
  useEffect((()=>{
      setProducts(data.data)
    })
  ,[data])
 
  return (
    <div>
      <Banner />
      <Product products={products}/>
    </div>
  )
}

export default Home