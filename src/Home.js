import React, { useState } from 'react'
import ImageGrid from './comps/imageGrid';
import Modal from './comps/modal';
import Title from './comps/Title';
import Navbar from './comps/Navbar'
import UploadForm from './comps/uploadForm'


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