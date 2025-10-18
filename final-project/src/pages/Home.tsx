
import Card from "../components/Card"
import { FaCartShopping } from "react-icons/fa6";import { IoMdStopwatch } from "react-icons/io";

const Home = () => {
    return (
      <>
        <div className="bg-[url('/assets/images/hero.png')] h-[100vh] bg-cover bg-no-repeat flex flex-col relative justify-center items-center after:bg-[rgba(0,0,0,0.2)] after:absolute after:inset-0">
          <p className="text-center font-bold text-white text-7xl z-10 my-5">
            Elevate every element
          </p>
          <p className="text-center font-bold text-white text-2xl z-10">
            Discover our curated collection of premium accessories
          </p>
          <button className="bg-[#D4AF37] text-black h-[48px] w-[130px] my-10 rounded-2xl  transition-all duration-300 hover:bg-[#ffc002] hover:scale-105">
            Shop Now
          </button>
        </div>
        <h2 className="text-center font-bold leading-8 text-3xl my-20">
          Hot Offers
        </h2>
        <div className="flex gap-3 justify-center">
          {[1, 2, 3].map((_, index) => (
            <Card key={index} />
          ))}
        </div>

        <div className="flex flex-col bg-gradient-to-r from-red-800 to-black  mx-auto w-[1070px] h-[230px] my-30 text-white text-center rounded-3xl shadow-2xl shadow-black/50">
          <h2 className="text-3xl  py-9 font-black">Don't Miss Out!</h2>
          <h2>
            Limited time offer ends soon. Use code ELEGANCE20 for 20% off your
            entire order!
          </h2>
          <div className="flex self-center justify-center gap-9">
            <button className="bg-[#D4AF37] text-black text-xl h-[60px] w-[280px] rounded-xl my-3 text-center  transition-all duration-300 hover:bg-[#b8962d] hover:scale-105">
              <div className="flex items-center justify-center">
                <FaCartShopping className="mx-3"/> Shop All Accessories
              </div>
            </button>
            <div className="flex items-center justify-center gap-1">
              <h2>
                {" "}
                <IoMdStopwatch />
              </h2>
              <h2>Ends in 2 days</h2>
            </div>{" "}
          </div>
        </div>

        <div className='flex flex-col my-10 items-center justify-center'>
          <h1 className="text-3xl font-bold">Featured</h1>
          <h1 className="text-3xl font-bold">Collcections</h1>
        </div>

        <div className='flex justify-evenly items-center mx-30 gap-30'>
         { [1,2,3].map((_, index) => (
          <div  key={index}>
            <img className='h-[400px] w-[384px]  my-10 rounded-2xl' src="/assets/images/jewel.png" alt="image" />
          </div>
          ))
        }
        </div>

       <div className='flex flex-col my-10 items-center justify-center'>
          <h1 className="text-3xl font-bold">Best</h1>
          <h1 className="text-3xl font-bold">Sellers</h1>
        </div>

 <div className='flex justify-evenly items-start gap-10 mx-10 my-10'>
  {[1, 2, 3, 4].map((_, index) => (
    <div key={index} className='flex flex-col '>
   

      <div className='flex flex-col gap-3 shadow-lg shadow-gray-300 '>
           <img
        className='h-[400px] w-[384px] rounded-t-3xl  '
        src='/assets/images/jewel.png'
        alt='image'
      />
        <h2 className='px-3 text-lg font-bold'>Classic gold watch</h2>
        <h2 className='px-3 text-amber-300'>$2,450</h2>
        <button className='bg-[#861B30] text-white w-[230px] h-[40px] rounded-2xl mx-auto mb-4  transition-all duration-300 hover:bg-[#b8962d] hover:scale-105'>Add to cart</button>

      </div>
    </div>
  ))}
</div>



<div className='h-[300px] w-[100vw] bg-[#797979] flex flex-col items-center justify-center text-center text-white'>
  <h1 className=' text-[48px] font-bold'>Summer Collection</h1>
  <h1>20% Off All Items</h1>
  <button className='bg-[#D4AF37] text-black h-[48px] w-[130px] my-10 rounded-2xl  transition-all duration-300 hover:bg-[#b8962d] hover:scale-105'>Shop Now</button>
</div>

      </>
    );
}

export default Home