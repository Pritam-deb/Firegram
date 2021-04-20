import React,{useState, useEffect} from "react";
import ProgressBar from "./ProgressBar";
import {auth} from '../firebase/config';
import { toast } from 'react-toastify';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Input, Modal } from '@material-ui/core';

const UploadForm = () => {


    const [file,setFile] = useState(null);
    const types = ['image/png', 'image/jpeg', 'image/webp'];
    const [error,setError] = useState(null);
    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openSignIn, setOpenSignIn] = useState(false);

    useEffect(() => {
        const unSubscribe=  auth.onAuthStateChanged((authUser) => {
        if(authUser){
                setUser(authUser);
            }else{
                setUser(null);
            }
        })
        
        return () => {
            // perform some cleanup action here...
            unSubscribe();
            }
        }, [user, username]
    );



    const signup = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
        return authUser.user.updateProfile({
            displayName: username
        })
        })
        .catch(error => toast.error(error.message, {position: 'top-center'}))

        setOpen(false);
    }


    const signin = (event) => {
        event.preventDefault();
    
        auth.signInWithEmailAndPassword(email, password)
        .catch(error => toast.error(error.message, {position: 'top-center'}))
    
        setOpenSignIn(false);
    }





    const changeHandler = (e) =>{
        // console.log('changeHandler triggered ');
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');//for the error message to go away if the correct file type is given
            //console.log(file);
        }

        //console.log(file);
        else{
            setFile(null);
            setError('Invalid format. Use png or jpeg file.');
        }
        
    }
    
    return(
        
        <form>
            <label>
                <input type='file' onChange={changeHandler}/>
                <span>+</span>
                <Button onClick={() => auth.signOut()}>logout</Button> 
            </label>
            
            <div className = 'output'>
                {error && <div className='error'>{error}</div> }
                {file && <div>{file.name}</div> }
                {file && <ProgressBar file={file} setFile={setFile} />} 

            </div>
        </form>
    )
}

export default UploadForm;