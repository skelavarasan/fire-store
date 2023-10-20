import { useState, useEffect } from 'react';
import CalculatorApp from './CalculatorApp';
import { LoginSignup } from './components/LoginSignup/LoginSignup';
import { db } from './firebase';
import {collection, getDocFromServer, getDocs, addDoc, updateDoc, doc, deleteDoc} from 'firebase/firestore'

function App() {

  const[newName,setNewName] = useState("")
  const[newAge,setNewAge] = useState(0);
  const[users,setUsers] = useState([]);
  const userCollectionRef = collection(db, "users")

  const createUser = async() =>{
      await addDoc(userCollectionRef, {name: newName, age : Number(newAge)});
  }

  const updateUser = async(id,age)=>{
    const userDoc = doc(db, "users", id)
      const newFields = {age : age + 1}
      await updateDoc(userDoc , newFields)
  }

  const deleteUser = async(id)=>{
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }

  useEffect(()=>{

    const getUsers = async() =>{
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})))  
    }

    getUsers()

  },[])

  return (
    <div className="App">
      <header className="App-header">


        <input placeholder='name' onChange={(event)=>{setNewName(event.target.value)}}/>
        <input placeholder='age' onChange={(event)=>{setNewAge(event.target.value)}}/>
        <button onClick={createUser}>Create User</button>


          {users.map((user)=>{
            return(   
              <div>
                  <h1> Name : {user.name}</h1>
                  <h1> Age : {user.age}</h1>
                  
                  <button onClick={()=>{updateUser(user.id, user.age)}}>Update Age</button>
                  <button onClick={()=>{deleteUser(user.id)}}>Delete User</button>

              </div>
            )
          })}
      </header>
    </div>
  );
}

export default App;



