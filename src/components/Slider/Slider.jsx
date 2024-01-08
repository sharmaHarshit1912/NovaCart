// import React from "react";
// import {
//   nextSlide,
//   prevSlide,
//   dotSlide,
// } from "../../features/slices/sliderSlice";
// import { sliderData } from "../../assets/data/dummyData";
// import { useSelector, useDispatch } from "react-redux";
// const Slider = () => {
//   const slideIndex = useSelector((state) => state.slider.value);
//   console.log("slideindex", slideIndex);

//   const dispatch = useDispatch();

//   return (
//     <div>
//       <div className="relative py-4">
//         <div>
//           {/* sliderdata -> Array of Objects */}
//           {sliderData.map((item, index) => {
//             return (
//               <div
//                 key={item.id}
//                 className={
//                   parseInt(item.id) === slideIndex
//                     ? "opacity-100 duration-700 ease-in-out scale-100"
//                     : "opacity-0 duration-700 ease-in-out scale-95"
//                 }
//               >
//                 <>
//                   <div>
//                     <img className="" src={item.img}></img>
//                   </div>

//                   <div>
//                     <p className="text-white text-4xl font-inter font-bold tracking-normal leading-none ">
//                       {parseInt(item.id) === slideIndex && item.text}
//                     </p>
//                   </div>
//                 </>
//               </div>
//             );
//           })}
//         </div>
//         <div className="flex absolute bottom-10 left-[45%]">
//           {sliderData.map((dot, index) => {
//             return (
//               <>
//                 <div className="mr-4" key={index}>
//                   <div
//                     className={
//                       index === slideIndex
//                         ? "bg-green-300 rounded p-4 cursor-pointer"
//                         : "bg-slate-200 rounded p-4 cursor-pointer"
//                     }
//                   ></div>
//                 </div>
//               </>
//             );
//           })}
//         </div>
//         <button onClick={() => dispatch(nextSlide(slideIndex + 1))}>
//           Next
//         </button>
//         <button onClick={() => dispatch(prevSlide(slideIndex - 1))}>
//           Prev
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;

import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/sliderSlice";
import { sliderData } from "../../assets/data/dummyData";
import { useSelector, useDispatch } from "react-redux";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log("slideindex", slideIndex);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="relative py-4">
        <div>
          {/* sliderdata -> Array of Objects */}
          {sliderData.map((item, index) => (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100 transform translate-x-0"
                  : "opacity-0 duration-700 ease-in-out scale-95 transform translate-x-full"
              }
            >
              <>
                <div className="">
                  <img className="" src={item.img} alt={item.text} />
                </div>

                <div className="absolute top-40 opacity-80 mx-auto inset-x-1/4">
                  <p className="text-white text-2xl font-inter font-bold tracking-normal leading-none">
                    {parseInt(item.id) === slideIndex && item.text}
                  </p>
                </div>

                {/* Dots and Buttons */}
                <div className="flex justify-center items-center mt-2">
                  {sliderData.map((dot, dotIndex) => (
                    <div className="mr-4" key={dotIndex}>
                      <div
                        className={
                          dotIndex === slideIndex
                            ? "bg-green-300 rounded p-4 cursor-pointer"
                            : "bg-slate-200 rounded p-4 cursor-pointer"
                        }
                      ></div>
                    </div>
                  ))}

                  {/* Buttons */}

                  <div>
                    <button
                      className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300"
                      onClick={() => dispatch(prevSlide(slideIndex - 1))}
                    >
                      Prev
                    </button>
                    <button
                      className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300"
                      onClick={() => dispatch(nextSlide(slideIndex + 1))}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
