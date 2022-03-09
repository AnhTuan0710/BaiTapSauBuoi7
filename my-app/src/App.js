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
const [tenMoi, setTenMoi] = useState('');
const [tuoiMoi, setTuoiMoi] = useState(0);
const [lopMoi, setLopMoi] = useState('react');
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
const getValueName = async (e) => {
  await setTenMoi(e.target.value);
};
const getValueAge = (e) => {
  setTuoiMoi(e.target.value);
};
const getValueClass = (e) => {
  setLopMoi(e.target.value);
};
const AddMember = function (e) {
  if (lopMoi === 'react') {
    const react = {
      name: tenMoi,
      age: tuoiMoi,
      type: lopMoi,
    };
    setListReact([...listReact, react]);
  }
  if (lopMoi === 'java') {
    const java = {
      name: tenMoi,
      age: tuoiMoi,
      type: lopMoi,
    };
    setListJava([...listJava, java]);
  }
  setTenMoi('');
  setTuoiMoi(0);
  setLopMoi('react');
};
const FillData = function (ten, tuoi, lop) {
  document.getElementById('Add_Update').innerHTML = 'Cập nhật User';
  // document.getElementsByClassName('btn_update').style.display='inline-block';
  // document.getElementsByClassName('btn_edit').style.display='none';
  setTenMoi(ten);
  setTuoiMoi(tuoi);
  setLopMoi(lop);
};
const UpdateData = function (index, lop) {
  document.getElementById('Add_Update').innerHTML = 'Thêm User';
  // document.getElementsByClassName('btn_edit').style.display='inline-block';
  // document.getElementsByClassName('btn_update').style.display='none';
  console.log(index);

  if (lop === 'react') {
    if (lopMoi === 'react') {
      for (let i = 0; i < listReact.length; i++) {
        if (i === index) {
          listReact[i].name = tenMoi;
          listReact[i].age = tuoiMoi;
        }
      }
    } else {
      for (let i = 0; i < listReact.length; i++) {
        if (i === index) {
          listReact.splice(i, 1);
        }
      }
      const java = {
        name: tenMoi,
        age: tuoiMoi,
        type: lopMoi,
      };
      setListJava([...listJava, java]);
    }
  }
  if (lop === 'java') {
    if (lopMoi === 'java') {
      for (let i = 0; i < listJava.length; i++) {
        if (i === index) {
          listJava[i].name = tenMoi;
          listJava[i].age = tuoiMoi;
          console.log(listJava[i]);
        }
      }
    } else {
      for (let i = 0; i < listJava.length; i++) {
        if (i === index) {
          listJava.splice(i, 1);
        }
      }
      const react = {
        name: tenMoi,
        age: tuoiMoi,
        type: lopMoi,
      };
      setListReact([...listReact, react]);
    }
  }
  console.log(lop, tenMoi, tuoiMoi, lopMoi);
  setTenMoi('');
  setTuoiMoi(0);
  setLopMoi('react');
};
  return (
    <div className="root">
      <h2>List member of React class</h2>
      {listReact.length>0 ? <ul>
        {listReact.map((item,index ) => {
          return <li key={index}>
            name: {item.name}, age: {item.age};
            <button onClick={() => {tranferItem(item.name, item.age, item.type)}}>Tranfer</button>
            <button className='btn_edit' onClick={() => {
										FillData(item.name, item.age, item.type);
									}}>Edit</button>
            <button className='btn_update'onClick={() => {
										UpdateData(index, item.type);
									}}>Update</button>
          </li>
        })}
      </ul>
 : "Khong co thanh vien nao"}
      
      <h2>List member of Java class</h2>
      {listJava.length>0 ? <ul>
        {listJava.map((item,index) =>{
          return <li>
            name: {item.name}, age: {item.age};
            <button onClick={() => {tranferItem(item.name, item.age, item.type)}}>Tranfer</button>
            <button  onClick={() => {
										FillData(item.name, item.age, item.type);
									}} >Edit</button>
            <button onClick={() => {
										UpdateData(index, item.type);
									}}>Update</button>
          </li>
        })}
      </ul>: "Khong co thanh vien nao"}
      <form>
        <h2 id="Add_Update">Thêm</h2>
				Tên : <input type='text' value={tenMoi} onChange={getValueName} />
				Tuổi :{' '}
				<input type='number'value={tuoiMoi} onChange={getValueAge} />
				<select value={lopMoi} onChange={getValueClass}>
					<option value='react'>React</option>
					<option value='java'>Java</option>
				</select>
			</form>
      <br/>
			<button className='addMember' onClick={AddMember}>
				Add Member
			</button>
      </div>   
  );
}

export default App;
