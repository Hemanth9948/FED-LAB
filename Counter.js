import React,{Component} from 'react'
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }
    Increment=()=>{
        this.state.count<50 && this.setState({count:this.state.count+1});
    }
    Decrement=()=>{
        this.state.count>0 && this.setState({count:this.state.count-1});
    }
    render(){
        return(
            <div>
                <button type="button" onClick={this.Increment}>Increment</button>&nbsp;&nbsp;
                {this.state.count}&nbsp;&nbsp;
                <button type="button" onClick={this.Decrement}>Decrement</button>
            </div>
        );
    }
}
export default Counter;