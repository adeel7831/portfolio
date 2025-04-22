import uol_logo from '../assets/uol_logo.png'
import vu_logo from '../assets/vu_logo.png'
import udemy_logo from '../assets/udemy_white.png'
import navttc_logo from '../assets/navttc.svg'
import boolmind_logo from '../assets/boolmind_logo.svg'

const Organizations = ()=>{
    const orgList = [uol_logo, vu_logo, navttc_logo, udemy_logo, boolmind_logo];
    return(
        <>
            <div className=" flex items-center justify-around p-[20px] md:p-[25px] lg:p-[30px] xl:p-[40px]">
                {orgList.map((item,index)=>{
                    return(
                        <>
                            <div className='flex justify-center items-center gap-3'>
                                <img key={index} src={item} className='h-[30px]'/>
                            </div>
                        </>
                        
                    )
                })}
            </div>
        </>
    )
}
export default Organizations;