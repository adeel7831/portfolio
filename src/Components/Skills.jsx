import SkillBar from "./SkillBar";
import { forwardRef } from "react";

const Skills = forwardRef((props,ref)=>{
    return(
        <>
            <div ref={ref} className="flex flex-col-reverse md:flex-row md:items-center p-[20px] md:p-[25px] lg:p-[30px] xl:p-[40px]">
                <SkillBar/>
                <div className=" md:w-1/2 flex flex-col gap-3">
                    <h1 className="font-bold text-[28px] md:text-[35px] lg:text-[50px] xl:text-[60px]"><span className="text-[#00FF7F]">Skills</span> That Speak for Themselves</h1>
                    <p className="text-[14px] md:text-[16px] lg:text-[20px] xl:text-[25px] border-l-4 border-[#00FF7F] px-[10px]">
                    Proficient in crafting seamless user interfaces with HTML, CSS, JavaScript, Tailwind and React. Dedicated to delivering intuitive designs and top-notch web solutions.
                    </p>
                </div>
            </div>
        </>
    )
})
export default Skills;