import React,{Component} from "react";
class Digitalclock extends Component{
    constructor(props){
        super(props);
        this.state={
            time:"",
        }
    }
    componentDidMount(){
        this.tick();
    }
    tick=()=>{
        const hours=new Date().getHours();
        const min=new Date().getMinutes();
        const sec=new Date().getSeconds();
        const updateTime= `${hours}:${min}:${sec}`;
        this.setState({time:updateTime});
    }
    componentDidUpdate(prevtime,prevstate){
        if(prevtime!=prevstate.time){
            this.interval=setInterval(()=>{
                this.tick()},1000
            );
        }
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return(
            <div>
                <h1>DigitalClock</h1>
                <h1>{this.state.time}</h1>
            </div>
        )
    }
}
export default Digitalclock;