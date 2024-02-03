import picture from '../components/imh.jpeg';
const Header =()=>{
    return (
        <>
    <nav className="bg-gray-400 p-3">
      <div className="container mx-auto  flex justify-between  ">
      <img
        src={picture}
        alt="Description of the image"
        className="rounded-lg shadow-lg h-auto w-16 ml-4"
      />
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-red-500">Home</a>
          <a href="#" className=" hover: ">About</a>
          <a href="#" className="text-white">Contact</a>
        </div>
      </div>
    </nav>
    <h1 className="container text-center font-bold text-black mt-12 "style={{ fontSize: '30px' }}>HELLO TOUT LE MONDE </h1>

        </>
    );
};

export default Header;