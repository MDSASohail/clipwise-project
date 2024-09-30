import ProductIMG from '../Images/Product.png'
import scrollIMG from '../Images/pagi.png'
import Header from './Header';

function HeroSection() {
  return (
    <section style={{ backgroundImage: 'url(./Vector2.png), url(./BG.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }} className=" size700  justify-between px-10  relative  h-[750px] paddingTOp  flex pt-32">
      <Header />
      <div className=' '>
        <div className='text-white '>
          <h1 className='text-3xl '>Welcome to</h1>
          <strong className='text-6xl font-bold '>Pop Rock Crystal Shop!</strong>
        </div>
        <p className=" mt-10 w-[400px]  mb-6">
          Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!

        </p>
        <button className="bg-white text-green-900 py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition">
          <strong>Shop Now</strong>
        </button>
        <button className='ml-10'>About us</button>
      </div>
      <div className='HeroSectionIMG'>
      <div className="bg-white relative  rounded-3xl w-96 h-96 flex justify-center flex-col items-center p-4  shadow-md">
        <p className='absolute top-16 text-white left-0 rounded-r-lg w-20  text-center py-1 bg-tagColor px-3'>New lot</p>
        <img src={ProductIMG} alt={"Logo"} className=" h-48 mb-4 " />

        <p className="text-gray-700">CRYSTAL AGATE PHONE GRIP - <strong className='text-green-900'>18.99$</strong></p>

      </div>
      <img className='w-60 mt-4 ml-14' src={scrollIMG} alt="" />
      
      </div>
      
      <div className='flex absolute scrollDown bottom-10 left-1/2 -translate-x-1/2'>
         <img src="./Vector.png" alt="" />
         <h1 className=' text-black mx-2'>Scroll down</h1>
      </div>
    </section>
  );
}

export default HeroSection;
