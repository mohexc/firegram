import React, { useState } from 'react'

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
            <input type="file" onChange={handleChange} />
            <div className="output">
                {/*  eslint-disable-next-line */}
                {error && <div className="error">{error} 💥💥💥💥</div>}
                {/*  eslint-disable-next-line */}
                {file && <div>{file.name}</div> 🚀🚀🚀🚀🚀🚀}
            </div>
        </form>
    )
}

export default UploadForm
