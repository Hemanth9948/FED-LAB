import React,{Component} from 'react'
class Factor extends Component{
    constructor(props){
        super(props);
        this.state={
            f:[],
        };
    }
    Add=()=>{
        let a= 10;
        let i=1;
        while(a!==0)
        {
            let c=0;
            while(i!==0){
                if(i%j===0){
                    c=c+1;
                }
                console.log("j="+j);
            }
            if(c===2){
                this.state.f.push(i);
            }
            a=a-1;
            i=i+1;
        } 
        console.log(this.state.f);
    }
    render(){
        return(
        <div>
            <input type="text"  id="text" />
            <button onClick={this.Add}>Factors</button>
            <input type="text"  id="result"/>

        </div>
        )
    }
}
export default Factor;