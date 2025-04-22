import navList from '../assets/nav-icon-list.svg'

export default function Header({sideMenu, setSideMenu, scrollTo, sections}){
    return(
        <>
            <div className='flex px-[20px] py-[15px] justify-between items-center bg-black md:px-[25px]  lg:px-[30px]  xl:px-[40px]  sticky top-0 z-30'>
                <h1 onClick={()=>{scrollTo(sections[0].ref)}} className='cursor-pointer text-[26px] md:text-[32px] lg:text-[45px] xl:text-[50px] text-[#00FF7F] font-bold'>WebByAdeel.</h1>
                <img onClick={()=>{setSideMenu(!sideMenu)}} className='size-[30px] md:hidden' src={navList} alt="" />
                <div className='hidden md:block'>
                    <nav className='flex items-center gap-3 lg:gap-5 [&>*]:list-none'>
                        {sections.map((item,index)=>{
                            return(
                                <li key={index} onClick={()=>{scrollTo(item.ref)}} className='py-[10px] text-[14px]  md:text-[16px] lg:text-[20px] xl:text-[25px] cursor-pointer'>{item.label}</li>
                            )
                        })}
                    </nav> 
                </div>
            </div>
            
        </>
    )
}