import closeIcon from '../assets/close-ellipse.svg'
export default function sideMenu({sideMenu, setSideMenu, sections, scrollTo}){
    return(
        <div className={`${sideMenu ? 'block' : 'hidden'} md:hiddenw-[100%] sticky top-0  z-50 backdrop-blur-sm bg-gray-900 `}>
                <div className='flex justify-end p-[20px]'>
                    <img onClick={()=>{setSideMenu(!sideMenu)}} className='size-[30px]' src={closeIcon} alt=""/>
                </div>
                <nav className='flex flex-col [&>*]:list-none [&>*]:text-[14px] [&>*]:p-3 items-stretch text-center'>
                {sections.map((item,index)=>{
                            return(
                                <li key={index} onClick={()=>{scrollTo(item.ref)}} className='border-b-1 border-[#00FF7F]'>{item.label}</li>
                            )
                        })}
                </nav>
            </div>
    )
}