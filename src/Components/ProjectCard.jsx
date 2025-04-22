import asaanQurbani from '../assets/asaan_qurbani_ss.png';
import { useState } from 'react';

const ProjectCard = () => {
    const projectsList = [
        { imgPath: asaanQurbani, projectTitle: 'Asaan Qurbani', projectUrl: 'https://adeel7831.github.io/Slaughtering-Service/' },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap gap-5 p-[20px] md:p-[25px] lg:p-[30px] xl:p-[40px]">
            {projectsList.map((item, index) => (
                <div
                    key={index}
                    style={{ backgroundImage: `url(${item.imgPath})` }}
                    className="relative bg-cover bg-center border-[#00FF7F] h-[350px] md:h-[400px] w-[250px] md:w-[300px] group"
                    onClick={() => handleToggle(index)}
                >
                    <div
                        className={`innerDiv flex flex-col gap-3 justify-center items-center absolute bottom-0 right-0 left-0 ${
                            activeIndex === index ? 'h-full' : 'h-0'
                        } backdrop-blur-[3px] bg-[#00ff80c7] transition-all duration-700 ease-in-out overflow-hidden md:group-hover:h-full`}
                    >
                        <h1 className="text-black">{item.projectTitle}</h1>
                        <a href={item.projectUrl} target="_blank" rel="noopener noreferrer">
                            <button className="border-2 border-black p-[10px] text-black hover:bg-black hover:text-[#00FF7F] cursor-pointer">
                                Visit Project
                            </button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCard;

