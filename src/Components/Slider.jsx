// import certificate1 from '../assets/cit.jpeg'
// import certificate2 from '../assets/udemy.jpg'
// export default function Slider(){
//     const certificatesList = [certificate1,certificate2];
    
//     return(
//         <>
//         <div className="flex flex-col flex-wrap justify-center items-center md:flex-row gap-5 md:items-center p-[20px] md:p-[25px] lg:p-[30px] xl:p-[40px]">
//                 {certificatesList.map((item,index)=>{
//                     return(
//                         <>
//                             <div>
//                                 <img className="md:h-[400px]" src={item} alt="" />
//                             </div>
//                         </>
//                     )
//                 })}           
//         </div>
       
//         </>
//     )
// }

import { useState } from "react";
import certificate1 from "../assets/cit.jpeg";
import certificate2 from "../assets/udemy.jpg";
import arrowRight from '../assets/right.svg';
import arrowLeft from '../assets/left.svg';

export default function Slider() {
  const certificatesList = [certificate1, certificate2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificatesList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificatesList.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="relative flex items-center justify-center p-[20px] md:p-[25px] lg:p-[30px] xl:p-[40px]">

        <button
          onClick={handlePrev}
          className="absolute left-5 md:left-10  p-3 rounded-full bg-[#00000075] hover:bg-[#00cc66] shadow-lg"
        >
          <img className="size-[15px] md:size-[20px] lg:size-[25px] xl:size-[30px]" src={arrowLeft} alt="" />
        </button>

        <img
          className="md:h-[350px] shadow-lg"
          src={certificatesList[currentIndex]}
        />

        <button
          onClick={handleNext}
          className="absolute right-5 md:right-10 p-3 rounded-full bg-[#00000075] hover:bg-[#00cc66] shadow-lg"
        >
          <img src={arrowRight} className="size-[15px] md:size-[20px] lg:size-[25px] xl:size-[30px]" alt="" />
        </button>
      </div>
    </>
  );
}