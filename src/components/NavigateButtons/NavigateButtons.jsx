import React from "react";
import clothes from "../../assets/images/clothes.jpg";
import { useDispatch } from "react-redux";
const NavigateButtons = () => {
  const dispatch = useDispatch();
  const buttons = [
    "Hoodies",
    "Dress",
    "Suits",
    "Shoes",
    "T-Shirt",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  return (
    <>
      <div className="flex items-center justify-center py-8 ">
        {buttons.map((button, index) => {
          return (
            <>
              <div key={index} className="mr-4">
                <button className="bg-black text-white font-inter rounded-lg border-2 border-black px-3 py-1 font-normal shadow-gray-500 shadow-md   hover:underline     ">
                  {button}
                </button>
              </div>
            </>
          );
        })}
      </div>

      <div className="flex flex-row justify-center bg-red-600  border-black border-2  p-2 w-[60%] mx-auto rounded-sm">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-black text-center text-larger font-inter font-bold traching-normal leading-none mt-0.5">
          SALES UPTO 50#
        </h3>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 ml-2 "
          >
            <path
              fillRule="evenodd"
              d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-center items-center py-4">
        <img
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
        ></img>
      </div>
    </>
  );
};

export default NavigateButtons;
