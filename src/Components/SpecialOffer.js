import ProductIMG from '../Images/Product.png';

function SpecialOffer() {
  return (
    <>
    <section
  style={{
    backgroundImage: 'url(./BottomIMG.png), linear-gradient(to top, var(--tw-gradient-stops))',  
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'top',
  }}
  className="bg-gradient-to-t from-second to-first py-6 h-screen specialOfferMainDiv w-full text-center size700 flex justify-center overflow-x-hidden"
>
      
      
      <div className=' flex flex-col justify-end border-blue-500  text-end pb-28 flexItem'>
        <h1 className='text-2xl'>BEST PRICE</h1>
        <h1 className='text-6xl headingSO font-bold'>Agate Phone Grip</h1>
        <p className="text-xl mt-6 text-gray-700 mb-4">
        <span className="line-through text-green-400 text-sm">44.50$</span>{' '}
        <span className="text-red-700   font-bold text-4xl">19.50$</span>
      </p>
      <div className='flex justify-end '>
      <p className='w-[400px] '>These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
      </p>
      </div>
      <div>
      <button className="text-white mt-6  py-2 px-4 rounded-lg bg-blue-400 hover:bg-blue-600 transition">
          <strong>BUY NOW</strong>
        </button>
      </div>
      </div>
      <div className='  flexItem2 '>
      <div className="w-[530px] bigCircle  translate-x-20 trans  flex justify-center items-center h-[530px] bg-white rounded-full">
        <div className="w-[400px] shadowBG bg-white flex justify-center items-center h-[400px]  rounded-full">
          <div className="w-[300px] shadowBG flex justify-center items-center h-[300px] rounded-full bg-white">
            <img src={ProductIMG} alt="" />
          </div>
        </div>
      </div>
      </div>
      
    </section>
    <div className='h-[269px] bg-bottomColor '>

    </div>
    </>
  );
}

export default SpecialOffer;
