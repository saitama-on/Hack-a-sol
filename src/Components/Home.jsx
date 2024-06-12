import React from "react"
import Navbar from './Navbar.jsx'
import MainText from "./MainText.jsx"
import Loading from "./Loading.jsx";
import BgVideo from "../assets/BG_6mb.mp4"

export default function Home(){
    const [loading,setLoading]=React.useState(true);
    React.useEffect(()=>{
        setTimeout(()=>setLoading(false),4000)
    },[])
    return(
        <div className="home">
        <video autoPlay loop muted className="vid"><source src={BgVideo} type="video/mp4" /> </video>
        {loading && <Loading loading={loading}/>}
        {loading===false && <Navbar/>}
        {loading===false && <MainText/>}
            </div>
    )
}