import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import orderBy from 'lodash';

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
const [searchName, setSearchName]= useState('');
const [searchName2, setSearchName2]= useState('');
const [sortAge, setSortAge]= useState('');
let [listReactNew, setListReactNew]= useState(listReact);
const timKiemTheoTen= function(list, searchName2){
  setListReactNew(list);
  if(searchName2 === ''){
    listReactNew = list;
  }else{
    const lowercaseFilter = searchName2.toLowerCase();
    listReactNew= list.filter((item) =>{
      return item.name.toLowerCase().includes(lowercaseFilter);
    });
    setListReactNew(listReactNew);
  }

};
let [listJavaNew, setListJavaNew]= useState(listJava);
const timKiemTheoTen2= function(list, searchName2){
  setListJavaNew(list);
  if(searchName2 === ''){
    listJavaNew = list;
  }else{
    const lowercaseFilter = searchName2.toLowerCase();
    listJavaNew= list.filter((item) =>{
      return item.name.toLowerCase().includes(lowercaseFilter);
    });
    setListJavaNew(listJavaNew);
  }
}
// const sapXepTheoTuoi= function(list)
// {
//   listReactNew= list.orderBy();
//   setListReactNew(listReactNew);
// }


const FillData = function (ten, tuoi, lop) {
  document.getElementById('Add_Update').innerHTML = 'Cập nhật User';
  setTenMoi(ten);
  setTuoiMoi(tuoi);
  setLopMoi(lop);
};
const UpdateData = function (index, lop) {
  document.getElementById('Add_Update').innerHTML = 'Thêm User';
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
useEffect(() => {
  if (listJava.length === 0) {
    alert('Lớp Java không còn sinh viên');
  }
  if (listReact.length === 0) {
    alert('Lớp React không còn sinh viên');
  }
  setListJavaNew(listJava);
  setListReactNew(listReact);
  //  saveData();
}, [listJava, listReact]);
  return (
    <div className="root">
      <h2>List member of React class</h2>
      <div className="Tim">
        Tìm kiếm: {' '}
        <input 
        type="text"
        value={searchName}
        id='timKiemTheoTen'
        placeholder='Tìm kiếm theo tên'
        onChange={(e) => setSearchName(e.target.value)}
        />
        <input
        type='button'
        value='Tìm'
        onClick={() =>{
          timKiemTheoTen(listReact,searchName);
        }}
        />
        <br/>
        <input
        type = 'button'
        value='Sắp xếp theo age'
        // onChange={()=>{
        //   sapXepTheoTuoi(listReact);
        // }}
        />
        </div>
        
      {listReactNew.length>0 ? <ul>
        {listReactNew.map((item,index ) => {
          return <li key={index}>
            name: {item.name}, age: {item.age};
            <button onClick={() => {tranferItem(item.name, item.age, item.type)}}>Tranfer</button>
            <button  onClick={() => {
										FillData(item.name, item.age, item.type);
									}}>Edit</button>
            <button onClick={() => {
										UpdateData(index, item.type);
									}}>Update</button>   
                  
          </li>
        })} 
 </ul>: "Khong co thanh vien nao"}
      
      <h2>List member of Java class</h2>
      <div className="Tim">
        Tìm kiếm: {' '}
        <input 
        type="text"
        value={searchName2}
        id='timKiemTheoTen2'
        placeholder='Tìm kiếm theo tên'
        onChange={(e) => setSearchName2(e.target.value)}
        />
        <input
        type='button' 
        value='Tìm'
        onClick={() =>{
          timKiemTheoTen2(listJava,searchName2);
        }}
        />
        </div>
      {listJavaNew.length>0 ? <ul>
        {listJavaNew.map((item,index) =>{
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
