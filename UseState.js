import React,{useState} from 'react'
function UseState(){
    const [item,setItem]=useState('');
    const [items,setItems]=useState([]);
    const handleAddItem=()=>{
        setItems([...items,item]);
        setItem('');
    }
    const handleDelete=(item)=>{
        const fi=items.filter((it)=>it!=item);
        setItems(fi);
    }
    const tdata=items.map((it,index)=>(<tr key={index}>
        <td Cellpadding="20px">
            <span>{it}</span>
        </td>
        <td><button onClick={()=>handleDelete(it)}>x</button></td>
    </tr>),[])
    return(
        <div align="center">
            <input type="text" size="20" value={item} onChange={(e)=>setItem(e.target.value)}/>
            <button onClick={()=>handleAddItem()}>Add</button>
            <h1>UseState Demo</h1>
            <h1>Add User List</h1>
            <table border="1" align="center">{tdata}</table>
        </div>
    )
}
export default UseState;