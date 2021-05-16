import React, { useState } from 'react'
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import Navbar from './comps/Navbar'
import UploadForm from './comps/UploadForm'


export default function Home() {
    const [selectedImg , setSelectedImg] = useState(null)

    return (
        <div className="App">
        <Navbar/>
        <Title/>
        <UploadForm/>
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg && <Modal selectedImg={ selectedImg } setSelectedImg={setSelectedImg} />}
        </div>
    )
}