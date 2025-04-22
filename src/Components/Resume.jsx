import { forwardRef } from "react"
import resume from '../assets/resume.pdf'
const Resume = forwardRef((props, ref) => {
return(
    <>
        <div ref={ref} className="flex flex-col md:flex-row gap-5 md:items-center p-[20px] md:p-[25px] lg:p-[30px] xl:p-[40px]">
           <div className="md:w-1/2">
                <h1 className="font-bold text-[28px] md:text-[35px] lg:text-[50px] xl:text-[60px]"><span className="text-[#00FF7F]">Professional</span> Snapshot</h1>
                <p className="text-[14px] md:text-[16px] lg:text-[20px] xl:text-[25px] border-l-4 border-[#00FF7F] px-[10px]">
                    Explore my professional journey and accomplishments with just one click. My resume showcases my skills, experiences, and achievements that highlight my commitment to excellence.
                    Download the PDF version to get a comprehensive view of my career milestones and expertise.
                </p>
           </div>
           <div className="md:w-1/2 flex md:justify-center items-center">
            <a href={resume} download="Adeel's_Resume"><button className="cursor-pointer border-2 border-[#00FF7F] p-[10px] md:p-[15px] lg:p-[20px]  hover:bg-[#00FF7F] hover:text-[black] text-[14px] md:text-[16px] lg:text-[20px] xl:text-[25px]">Download Resume</button> </a>
           </div>
        </div>
    </>
)
})
export default Resume