export default function SkillBar(){
    const skills = [
        {skillName: 'HTML', skillLevel: '80%'},
        {skillName: 'Vanilla CSS', skillLevel: '65%'},
        {skillName: 'JavaScript', skillLevel: '65%'},
        {skillName: 'Tailwind CSS', skillLevel: '60%'},
        {skillName: 'React Js', skillLevel: '60%'},
    ]
    return(
        <>
        <div className="md:w-1/2 flex flex-col justify-center items-center gap-3 mt-[20px] md:mt-0">
            {skills.map(((item,index)=>{
                    return(
                        <div key={index} className="flex w-full  items-center gap-2">
                            <h1 className=" w-[30%] text-[14px] md:text-[16px] lg:text-[20px] xl:text-[25px] hover:border-l-2 hover:border-[#00FF7F] p-[5px]">{item.skillName}</h1>
                            <div className="relative border-2 border-[#00FF7F] h-[10px] w-[50%] flex p-0 rounded-full hover:shadow-lg hover:shadow-[#00ff80]">
                                <div style={{width: item.skillLevel}} className="h-[100%] bg-[#00FF7F]"></div>
                            </div>
                            <h1 className="text-[#00FF7F] text-[14px] md:text-[16px] lg:text-[20px] xl:text-[25px]">{item.skillLevel}</h1>
                        </div>  
                    )
                }))}       
        </div>   
        </>


    )
}