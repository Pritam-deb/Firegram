import {useState, useEffect} from 'react';
import {projectFirestore, projectStorage} from '../firebase/config';

const useStorage = (file) => {
    const [progress, setprogress] = useState(0);
    const [error, setError] =useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        
        const storageRef = projectFirestore.ref(file.name);
        storageRef.put(file)
    }, [input])
}