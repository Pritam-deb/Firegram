import React,{useState} from 'react'
import { Button, Alert } from 'react-bootstrap';
import {useAuth} from "../contexts/AuthContext"
import {  useHistory } from 'react-router-dom';

export default function Navbar() {
    
    const [error, seterror] = useState("")
    const {currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        seterror('')

        try{
            await logout()
            history.push('/login')
        } catch {
            seterror('Failed to log out')
        }
    }

    return (
        <div>
        <nav className="navigation container">
            <div className="title">
            <h1>FireGram</h1>
            </div>
            <ul className="list-non-bullet nav-pills">                
                <li className="list-item-inline">
                    <Button className="link" onClick={handleLogout}>Log Out</Button>
                </li>
            </ul>
        </nav>
        <div className="w-100 text-center mt-2">
            <strong >Email:</strong> {currentUser.email} 
            
        </div>
        {error && <Alert variant="danger" >{error}</Alert>  }
       
        </div>
    )
}