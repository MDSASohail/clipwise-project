import { useMemo, useState } from 'react';
import ProductIMG from '../Images/Product.png'
import { products } from '../Data/items';
function ProductGrid() {

  const [condition,setCondition]=useState("lowest")
  

  const sortedProducts=useMemo(()=>{
    let items=[...products];
    if(condition=="lowest")
    {
         items=items.sort((a,b)=>a.price-b.price)
    }
    else
    {
      items=items.sort((a,b)=>b.price-a.price)
    }
    return items;
  },[condition])


  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-bold mb-8">All Products</h2>
      <div className='flex px-5'>
         <div className='mx-4'>
           <span className='text-slate-400'>Filter : </span>
            <select name="" id="" className='outline-none text-blue-950 font-bold'>
              <option value="">All Products</option>
              <option value="">Upcoming</option>
            </select>
            
         </div>
         <div>
           <span className='text-slate-400'>Sort : </span>
            <select name="" id="" onChange={(e)=>{setCondition(e.target.value)}} className='outline-none text-blue-950 font-bold'>
              
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
              
            </select>
            
         </div>
      </div>
      <div className="flex my-6 flex-wrap justify-around px-8">
        {sortedProducts.map((product) => (
          <div key={product.id} className=" w-72 my-2 productItems bg-white text-center p-4 rounded-3xl border-2 ">
            <img src={ProductIMG} alt={product.name} className="w-full h-40 " />
            <h3 className="text-gray-400  mt-4">{product.name}</h3>
            <p className="font-bold  text-green-900">{product.price}$</p>
            <button className=" border-2 border-blue-300 text-blue-300 py-2 px-4 rounded-lg mt-4 hover:shadow-lg shadow-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500">
              Buy Now
            </button>
          </div>
        ))}
      </div>
      <div className='text-center'>
      <button className=" border-2 border-blue-300 text-blue-300 py-2 px-4 rounded-lg mt-4 hover:shadow-lg shadow-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-500">
              View All
            </button>
      </div>
    </section>
  );
}

export default ProductGrid;
