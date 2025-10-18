import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black justify-evenly h-[413px] width-[1440px] flex-col">
        <div className="flex justify-evenly">
          <div className="flex flex-col text-white ">
            <h2 className="my-5 font-bold text-base leading-6">Aurene</h2>
            <h2 className="text-[#9CA3AF] font-normal text-base leading-6 break-words">
              Crafting luxury accessories that define <br/> elegance and
              sophistication.
            </h2>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white my-5 font-bold text-base leading-6">
              Shop
            </h2>
            <h2 className="text-[#9CA3AF] font-normal text-base leading-6">
              Watches
            </h2>
            <h2 className="text-[#9CA3AF] font-normal text-base leading-6">
              Bags
            </h2>
            <h2 className="text-[#9CA3AF] font-normal text-base leading-6">
              Bracelets
            </h2>
            <h2 className="text-[#9CA3AF] font-normal text-base leading-6">
              New Arrivals
            </h2>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white my-5 font-bold text-base leading-6">
              Support
            </h2>
            <h2 className="text-[#9CA3AF] font-normal text-base leading-6">
              Contact us
            </h2>
            <h2 className="text-[#9CA3AF] font-normal text-base leading-6">
              Size Guide
            </h2>
            <h2 className="text-[#9CA3AF] font-normal text-base leading-6">
              Returns
            </h2>
            <h2 className="text-[#9CA3AF] font-normal text-base leading-6">
              Shipping
            </h2>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white my-5 font-bold text-base leading-6">
              Newsletter
            </h2>
            <h2 className="text-[#9CA3AF] font-normal text-base leading-6">
              Subscribe for exclusive offers and updates
            </h2>
            <div className="flex">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="text-[#9CA3AF] bg-[#1F2937] border-1 w-230px h-40px border-[#374151] rounded-s p-2 font-normal text-base leading-6"
              />
              <button className="w-[119.75px] h-[42px] rounded-r bg-[#CA8A04] font-normal text-base leading-6 text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="m-auto bg-[#1F2937] h-0.5 my-20 w-300"></div>
        <h2 className="text-[#9CA3AF] text-center font-normal text-base leading-6">
          © 2025 Auréne. All rights reserved.
        </h2>
      </div>
    </>
  );
};

export default Footer;
