import { forwardRef } from "react"
import wa_logo from '../assets/whatsapp.svg';
import linkedIn from '../assets/linkedin.svg';
import fb_logo from '../assets/facebook.svg';
import insta_logo from '../assets/instagram.svg';
import github from '../assets/github.svg';
const Contact = forwardRef((props, ref) => {
return(
    <>
        <div ref={ref} className="flex flex-col  md:flex-row gap-5 md:justify-center md:items-center p-[20px] md:p-[25px] lg:p-[30px] xl:p-[40px]">
            <div className="md:w-1/3 items-center">
                <p>For any queries, please contact<a href="mailto:muhammadadeel7831@gmail.com"  target="_blank"> <span className="text-[#00FF7F] hover:underline">muhammadadeel7831@gmail.com</span></a></p>
            </div>
           
           <div className="md:w-1/3  flex md:justify-center">
                <a href="https://wa.me/03184262006"  target="_blank">
                    <div className="flex gap-1 items-center">
                        <img className="size-[30px]" src={wa_logo} alt="" />
                        <span className="text-[#00FF7F] hover:underline">+923184262006</span>
                    </div>
                </a>
           </div>

           <div className="md:w-1/3 flex gap-3 items-center md:justify-center">
                <a href="https://www.linkedin.com/in/adeel-khalil-ahmed/" target="_blank">
                        <img className="size-[30px]" src={linkedIn} alt="" />
                </a>
                <a href="https://www.facebook.com/WebByAdeel" target="_blank">
                        <img className="size-[30px]" src={fb_logo} alt="" />
                </a>
                <a href="https://www.instagram.com/webbyadeel/" target="_blank">
                        <img className="size-[30px]" src={insta_logo} alt="" />
                </a>
                <a href="https://github.com/webbyadeel" target="_blank">
                        <img className="size-[30px]" src={github} alt="" />
                </a>
           </div>
        </div>
    </>
)
})
export default Contact