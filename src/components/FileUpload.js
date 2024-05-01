// FileUpload.js
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

function FileUpload({ onResults }) {
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append("file", file);

        axios.post('http://127.0.0.1:5000/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                const { summary, updated_html, original_html } = response.data;
                onResults({ summary, updated_html, original_html });
            })
            .catch(error => {
                console.error('Error uploading and processing file', error);
            });
    }, [onResults]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here...</p> :
                    <button>Upload Page</button>
            }
        </div>
    );
}

export default FileUpload;
