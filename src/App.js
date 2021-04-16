import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';


<<<<<<< HEAD
=======
// function App() {

//   const [selectedImg, setSelectedImg] = useState(null);
//   return (
//     <div className="App">
//       {/* <Container className=" d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}} >
//         <div className="w-100" style={{ maxWidth: "400px" }} >
//           <Signup></Signup>
//         </div>
        
//       </Container> */}
//       <Title/>
//       <UploadForm/>
//       <ImageGrid setSelectedImg={setSelectedImg} />
//       {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
//     </div>
//   );
// }

// export default App;



import React from "react";
import Application from "./comps/Application";
import UserProvider from "./comps/contexts/UserProvider";
>>>>>>> parent of 1033747... recover attempt 1
function App() {

  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
