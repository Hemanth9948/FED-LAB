import React,{Component} from 'react'
class TextColor extends Component{
    constructor(props){
        super(props);
        this.state={
            color:'#ff00ff',
        }
    }
    red=()=>{
        this.setState({color:'#ff0000'});
    }
    green=()=>{
        this.setState({color:'#00ff00'});
    }
    blue=()=>{
        this.setState({color:'#0000ff'});
    }
    render(){
        return(
            <div>
                <h1 style={{color:this.state.color}}>Text Color Demo</h1>
                <button type="button" onClick={this.red}>Red</button>&nbsp;&nbsp;
                <button type="button" onClick={this.green}>Green</button>&nbsp;&nbsp;
                <button type="button" onClick={this.blue}>Blue</button>
            </div>
        );
    }
}
export default TextColor;