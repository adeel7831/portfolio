import profile from '../assets/profileImgSquare.png'
import { forwardRef } from 'react';

const About = forwardRef((props,ref)=>{
    return(
        <>
            <div ref={ref} className=" flex flex-col-reverse md:flex-row md:items-center p-[20px] md:p-[25px] lg:p-[30px] xl:p-[40px]">
                <div className=" md:w-1/2 flex flex-col gap-3">
                    <h1 className="font-bold text-[28px] md:text-[35px] lg:text-[50px] xl:text-[60px]">Crafting Seamless <span className="text-[#00FF7F]"> Web Experiences </span>, One Pixel at a Time.</h1>
                    <p className="text-[14px] md:text-[16px] lg:text-[20px] xl:text-[25px] border-l-4 border-[#00FF7F] px-[10px]">
                        I'm Adeel, a passionate front-end developer dedicated to turning ideas into reality. With expertise in modern design and development, I bring creativity and precision to every project. Explore my portfolio, discover my skills, and let's create something extraordinary together.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center items-center ">
                    <img className=" mb-3 md:mb-auto h-[200px] md:h-auto" src={profile} alt="" />
                </div>
            </div>
        </>
    )
})

export default About;