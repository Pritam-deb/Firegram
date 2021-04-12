import React,{useState} from "react";

const UploadForm = () => {


    const [file,setFile] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const [error,setError] = useState(null);

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
            <input type='file' onChange={changeHandler} />
            <div className = 'output'>
                {error && <div className='error'>{error}</div> }
                {file && <div>{file.name}</div> }

            </div>
        </form>
    )
}

export default UploadForm;