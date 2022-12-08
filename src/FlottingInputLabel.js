import React from "react";

const FlottingInputLabel = () => {
  return (
    <div className=" w-[80%] flex items-center justify-center  mt-[20%]">
      <div className="relative">
        <input
          type="text"
          className="peer px-4 py-3 w-full border-2 border-gray-300 text-gray-900 
          placeholder-transparent focus:outline-none focus:border-red-700 rounded-lg 
           placeholder:text-3xl"
          placeholder="Email"
        />
        <label
          for="email"
          className="absolute left-3 -top-4 text-gray-600 text-sm transition-all 
          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
          peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 
          peer-focus:text-base bg-white "
        >
          Email<span className=" text-red-700 ml-1 text-xl">*</span>
        </label>
      </div>



      {/* <div className="flex justify-center items-center">
        <label className="relative cursor-pointer">
          <input
            type="text"
            placeholder="Input"
            className="h-20  px-6 text-xl  
             border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 
             placeholder-gray-300 placeholder-opacity-0 transition duration-200"
          />
          <span
            className="text-xl  text-opacity-80 
           absolute left-5 top-5 px-1 transition duration-200 input-text"
          >
            Input
          </span>
        </label>
      </div> */}
    </div>
  );
};

export default FlottingInputLabel;
