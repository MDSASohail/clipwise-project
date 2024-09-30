import logo from '../Images/Logo.png'
import logo2 from '../Images/Logo2.png'
function Header() {
  return (
    <header className="flex left-0 size700 absolute top-0 w-full justify-between items-center py-4 px-8  ">
      <div className="borderr-2 text-[20px] font-normal flex items-center ">
        <img src={logo} alt="" />
        <h1 className='text-white ml-3'>Pop Rock Crystal</h1>
      </div>
      <div className=' flex m-4'>
      <nav className="space-x-8 mx-14 ">
        <a href="#" className="text-white hover:text-black">Home</a>
        <a href="#" className="text-white hover:text-black">Shop</a>
        <a href="#" className="text-white hover:text-black">About Us</a>
        <a href="#" className="text-white hover:text-black">Help</a>
      </nav>
      <div className="text-xl">
        <img src={logo2} alt="" />
      </div>
      </div>
    </header>
  );
}

export default Header;
