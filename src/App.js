import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {
  var d=new Date();
    var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[d.getDay()]
  const [toDos,setTodos]=useState([]);
  const [toDo,setTodo]=useState('');
  return (
     
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {n} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:'false',cancelStatus:'false'}])}   className="fas fa-plus"></i>
      </div>
      <h2>In Progress List</h2>
      { toDos.map( (obj)=>{ if(obj.cancelStatus=='false'){
        return(
      <div className="todos">
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{setTodos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){obj2.status=e.target.checked}
              return obj2
            }
            
            ))}}  value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
            
          </div>
          <div className="right">
            <i value={obj.cancelStatus}onClick={(e)=>{setTodos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){obj2.cancelStatus='true'; console.log(obj2.cancelStatus)}
              return obj2 }
             ))}} className="fas fa-times"> </i>
           
          </div>
        </div>
        
      </div> )}})}
      { 
      <h2>Done List</h2> }
      {toDos.map((obj)=>{
         if(obj.status===true){return(<h3>{obj.text}</h3>)} return null
      })
      }
      <h2>Cancelled List</h2>
      {toDos.map((obj)=>{console.log(obj.cancelStatus+"Here")
         if(obj.cancelStatus=='true'){return(<div><h3><strike>{obj.text}</strike></h3> </div>)} return null
      })
      }
      )
    </div>

  );
}

export default App;