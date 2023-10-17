import React,{useState , useEffect} from'react'
function UseEffect(){
    const [mytime,setTime]=useState(" ");
    const tick=()=>{
        let d=new Date();
        let hours=d.getHours();
        let min=d.getMinutes();
        let sec=d.getSeconds();
        let Time= `${hours>12?hours-12:hours}:${min}:${sec}`;
        if (hours<12){
            Time=Time+"AM";
        }
        else{
            Time =Time+"PM";
        }
        setTime(Time);
    }
    useEffect(()=>{
        const t= setInterval(tick,1000);
        return ()=>{
            clearTimeout(t);
        }},[mytime])
    return(
        <div>
            <h1>DigitalClock</h1>
            <h2>{mytime}</h2>
        </div>
    );
}
export default UseEffect;