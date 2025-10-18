import React from 'react'

const Card = () => {
  return (
    <>
      <div className="flex flex-col  mx-9 my-9 rounded-2xl shadow-2xl shadow-black/50 bg-white w-[400px] h-[160px+192px]">
        <img
          className="h-[190px] w-[400px] rounded-t-2xl "
          src="./assets/images/jewel.png"
          alt="jewel"
        />
        <div className="p-4">
          <h2 className="font-bold text-lg">Diamond Jewelry</h2>
          <h3 className="text-gray-600">Sparkling beauty that captivates</h3>
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <p className="font-semibold text-[#6B7280] mt-2 line-through">
                $1,200
              </p>
              <p className=" text-green-400 mt-2 font-black text-2xl">$599</p>
            </div>
            <button className='bg-purple-500 w-[46px] h-[40px] rounded-xl text-white text-2xl'>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card