import React from 'react'
import ProductCard from './ProductCard'

function Products({products}) {
  return (
    <div className='p-6'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 w-full md:w-80 text-center'
            >Shop Everyday</h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'>
            Whoever said money can't buy happiness simply didn't know where to go shopping and you are in right place my friend
            {/* Some people find joy in shopping, and if you’re one of them, you’re in the right place! */}
            </p>
        </div>
        <div className='mx-auto py-10 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
            {
              products.map((item)=>
              <ProductCard key={item._id} product={item} />
              )
            }
        </div>
    </div>
  )
}

export default Products