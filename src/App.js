// import CalculatorApp from './CalculatorApp';
// import { LoginSignup } from './components/LoginSignup/LoginSignup';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <CalculatorApp/>
//       </header>
//     </div>
//   );
// }

// export default App;






// import React, { useEffect, useState } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyCGLRQX1fnVyu30T1NaE1RNN4Z8FJvi6zg",
//   authDomain: "school-directory22.firebaseapp.com",
//   projectId: "school-directory22",
//   storageBucket: "school-directory22.appspot.com",
//   messagingSenderId: "245713791648",
//   appId: "1:245713791648:web:200cc01e95fe29c72477c5",
//   measurementId: "G-KT8EP8YDTJ" 
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);

// function App() {

//   const handleCreateCollection = async () => {
//     const parentPath = 'examplex';

//     const collectionRef = collection(db, parentPath);

//     const newDocumentData = {
//       Field: '2',
//     };

//     try {
//       await addDoc(collectionRef, newDocumentData);
//     } catch (error) {
//       console.error('Error adding document:', error);
//     }
//   }

//   return (
//     <div className="App">
//       <button onClick={handleCreateCollection}>Create Collection</button>
//     </div>
//   );
// }

// export default App;









import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, addDoc, query, getDocs } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGLRQX1fnVyu30T1NaE1RNN4Z8FJvi6zg",
  authDomain: "school-directory22.firebaseapp.com",
  projectId: "school-directory22",
  storageBucket: "school-directory22.appspot.com",
  messagingSenderId: "245713791648",
  appId: "1:245713791648:web:200cc01e95fe29c72477c5",
  measurementId: "G-KT8EP8YDTJ" // Optional if you are using Firebase Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState('');

  const handleAddData = async () => {
    const dataRef = collection(db, 'examplex');
    await addDoc(dataRef, { Field: 'YourValue' }); // Replace 'YourValue' with the desired value
    setNewData('');
  };

  return (
    <div className="App">
      <h1>Firestore Example</h1>
      <input
        type="text"
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
        placeholder="Enter data"
      />
      <button onClick={handleAddData}>Add Data</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.Field}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
