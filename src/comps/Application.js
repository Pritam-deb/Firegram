import React from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PasswordReset from "./PasswordReset";



import ImageGrid from './ImageGrid';
import Modal from './Modal';
import Title from './Title';
import UploadForm from './UploadForm';
function Application() {
  const user = null;
  const [selectedImg, setSelectedImg] = useState(null);
  return (
        user ?
            <div className="App">
                <Title/>
                <UploadForm/>
                <ImageGrid setSelectedImg={setSelectedImg} />
                {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
            </div>
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>

  );
}
export default Application;