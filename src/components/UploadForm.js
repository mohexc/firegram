import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = () => {
    const [file, setFile] = useState()
    const [error, setError] = useState()

    const type = ["image/jpeg", "image/png"]
    const handleChange = (e) => {
        const selected = e.target.files[0]

        if (selected && type.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError('Please select an image file(png or jpeg)')
        }
    }
    return (
        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error} </div>}
                {file && <div>{file.name} </div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm
