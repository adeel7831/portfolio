import Header from "./Header"
import SideMenu from "./SideMenu"
import { useState } from "react"

export default function Nav(props){
    const scrollTo = props.scrollFun;
    const sections = props.sections;
    const [sideMenu, setSideMenu] = useState(false)
    
    return(
        <>
        <Header sections={sections} scrollTo={scrollTo} sideMenu={sideMenu} setSideMenu={setSideMenu} />
        <SideMenu sections={sections} scrollTo={scrollTo} sideMenu={sideMenu} setSideMenu={setSideMenu}/>
        </>
    )
}