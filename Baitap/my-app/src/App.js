import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [listJava, setListJava] = useState([
    {name:"Long", age:22,type:"java"},
    {name:"Quan", age:20,type:"java"},
    {name:"Linh", age:21,type:"java"}
]);
const [listReact, setListReact] = useState([
  {name:"Anh", age:22,type:"react"},
  {name:"Tuan", age:20,type:"react"},
  {name:"Phuc", age:21,type:"react"}
]);
const tranferItem= function(ten, tuoi , lop)
{
  if(lop == "react")
  {
    const javaNew={
      name: ten,
      age: tuoi,
      type: "java"
    }
    setListJava([...listJava, javaNew]);  
      for (let i = 0; i < listReact.length; i++) {
        if(listReact[i].name===ten)
        {
          listReact.splice(i,1);
        }
      }
      if(listReact.length===0)
      {
        alert("Lop React khong con thanh vien nao");
      }
  }
  if(lop=="java")
  {
    const reactNew={
      name: ten,
      age: tuoi,
      type: "react"
    }
    setListReact([...listReact, reactNew]);  
      for (let i = 0; i < listJava.length; i++) {
        if(listJava[i].name===ten)
        {
          listJava.splice(i,1);
        }
      }
      if(listJava.length===0)
      {
        alert("Lop Java khong con thanh vien nao");
      }
  }
} 
  return (
    <div className="root">
      <h2>List member of React class</h2>
      {listReact.length>0 ? <ul>
        {listReact.map((item,index ) => {
          return <li key={index}>
            name: {item.name}, age: {item.age};
            <button onClick={() => {tranferItem(item.name, item.age, item.type)}}>Tranfer</button>
          </li>
        })}
      </ul>
 : "Khong co thanh vien nao"}
      
      <h2>List member of React class</h2>
      {listJava.length>0 ? <ul>
        {listJava.map((item,index) =>{
          return <li>
            name: {item.name}, age: {item.age};
            <button onClick={() => {tranferItem(item.name, item.age, item.type)}}>Tranfer</button>
          </li>
        })}
      </ul>: "Khong co thanh vien nao"}
      
      </div>   
  );
}

export default App;
