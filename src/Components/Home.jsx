import React from "react"
import MainText from "./MainText.jsx"
import Loading from "./Loading.jsx";
import BgVideo from "../assets/Videos/BG_6mb.mp4"

export default function Home(){
    const [loadin,setLoading]=React.useState(true);
    React.useEffect(()=>{
        setTimeout(()=>setLoading(false),4000)
    },[])
    return(
        <div className="home">
        <video autoPlay loop muted className="vid"><source src={BgVideo} type="video/mp4" /> </video>
        {loadin && <Loading loadin={loadin}/>}
        {loadin===false && <MainText/>}
            </div>
    )
}