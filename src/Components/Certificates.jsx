import { forwardRef } from "react";
import Slider from "./Slider";

const Certificates = forwardRef((props, ref)=>{
    
    return(
        <>
            <div ref={ref} className="flex flex-col md:flex-row gap-5 md:items-center p-[20px] md:p-[25px] lg:p-[30px] xl:p-[40px]">
                <div className="md:w-1/2">
                    <h1 className="font-bold text-[28px] md:text-[35px] lg:text-[50px] xl:text-[60px]"><span className="text-[#00FF7F]">Certificates</span> & Achievements</h1>
                </div>
                <div className="md:w-1/2 flex md:justify-center items-center">
                    <p className="text-[14px] md:text-[16px] lg:text-[20px] xl:text-[25px] border-l-4 border-[#00FF7F] px-[10px]">
                        Discover the certifications and accolades that exemplify my journey of growth and expertise.
                    </p>
                </div>
            </div>
            <Slider/>
        </>
    )
})
export default Certificates;