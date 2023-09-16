import React,{Component} from 'react'
class Array1 extends Component{
    constructor(props){
        super(props);
        country:[];
        final:{};
    }
    save1=(e)=>{
        this.setState({inputval1:e.target.value});
    }
    save2=(e)=>{
        this.setState({inputval2:e.target.value});
    }
    add=()=>{
        this.state.final.country=this.state.inputval1;
        this.state.final.language=this.state.inputval2;
        this.state.country.push(final);
        this.setState({country:this.state.country});
        console.log(this.state.country);

    }
    render(){
        return(
            <input type="text" onChange={this.save1}/>,
            <input type="text" onChange={this.save2}/>,
            <button type="button" onClick={this.add}>Add</button>

        );
    }
}
export default Array1;