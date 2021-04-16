// import React, { useState } from 'react';
// //import { Container } from 'react-bootstrap';
// import ImageGrid from './comps/ImageGrid';
// import Modal from './comps/Modal';
// import SignIn from './comps/SignIn';
// import Title from './comps/Title';
// import UploadForm from './comps/UploadForm';


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
function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}
export default App;
