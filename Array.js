import React,{Component} from 'react'
class Array extends Component{
    constructor(props){
        super(props);
        this.state={
            fruits:[],
        }
    }
    save=(e)=>{
        this.setState({inputval:e.target.value});
    }
    add=()=>{
        this.state.fruits.push(this.state.inputval);
        this.setState({friuts:this.state.fruits});
        console.log(this.state.fruits);
    }
    render(){
        return(
            <div>
                <input type="text" onChange={this.save}/>
                <button type="button" onClick={this.add}>Add</button>
                <ul>{ this.state.fruits.map((ele)=>{return <li key={ele.index}>{ele}</li>})}</ul>
            </div>
        )
    }
}
export default Array;